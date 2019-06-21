from django.db import models
from decimal import Decimal, ROUND_HALF_UP


class AgeFactor(models.Model):
    age = models.IntegerField(default=0)
    max_factor = models.DecimalField(decimal_places=2, max_digits=5)


class ClientSurvey(models.Model):
    ref_token = models.UUIDField(null=True)
    age = models.PositiveSmallIntegerField(default=0)
    first_name = models.CharField(max_length=75, null=True)
    email = models.CharField(max_length=255, null=True)
    annual_income = models.DecimalField(decimal_places=2, max_digits=20)
    annual_expenses = models.DecimalField(max_digits=20, decimal_places=2)
    assets = models.DecimalField(max_digits=20, decimal_places=2)
    liabilities = models.DecimalField(max_digits=20, decimal_places=2)
    existing_life_insurance = models.DecimalField(max_digits=20, decimal_places=2)
    existing_savings = models.DecimalField(max_digits=20, decimal_places=2)
    existing_critical_illness_cover = models.DecimalField(max_digits=20, decimal_places=2)
    existing_medical_insurance = models.DecimalField(max_digits=20, decimal_places=2)
    inflation = models.IntegerField()
    retirement_age = models.PositiveSmallIntegerField()
    fees_as_per_today = models.DecimalField(max_digits=20, decimal_places=2)

    @property
    def life_cover_required(self):
        return self.annual_income * self.max_factor

    @property
    def max_factor(self):
        age_object = AgeFactor.objects.get(age=self.age)
        if age_object is not None:
            return age_object.max_factor
        return Decimal(0)

    @property
    def ci_cover_required(self):
        return self.annual_income * 2

    @property
    def pa_cover_required(self):
        return self.life_cover_required

    @property
    def long_term_care_required(self):
        return self.life_cover_required / 2

    @property
    def family_income_benefit_required(self):
        return self.annual_expenses

    @property
    def family_income_benefit_term(self):
        return min(40, self.retirement_age - self.age)

    @property
    def number_of_years_to_retirement(self):
        return self.retirement_age - self.age

    @property
    def client(self):
        return Client(self)

    @property
    def spouse(self):
        return Spouse(self)

    @property
    def retirement(self):
        return self.annual_income * Decimal(pow(1 + self.inflation / 100, self.number_of_years_to_retirement - 1)) / 2

    def rounding(self, value, exp):
        return value.quantize(Decimal(exp), rounding=ROUND_HALF_UP)


class ClientChild(models.Model):
    age = models.PositiveSmallIntegerField()
    undergrad_start_age = models.PositiveSmallIntegerField(default=0)
    postgrad_start_age = models.PositiveSmallIntegerField()
    survey = models.ForeignKey(ClientSurvey, models.CASCADE, related_name="children", null=True)

    @property
    def undergrad_end_age(self):
        return self.undergrad_start_age + 3

    @property
    def postgrad_end_age(self):
        return self.postgrad_start_age + 1

    @property
    def number_of_years_to_start(self):
        return self.undergrad_start_age - self.age

    @property
    def education_fees(self):
        return EducationFee(self, self.survey)


class Client:

    def __init__(self, survey: ClientSurvey):
        self.__survey = survey

    @property
    def life_insurance(self):
        s = self.__survey
        return (s.annual_income * s.max_factor) - s.existing_life_insurance \
               - (s.annual_expenses * s.family_income_benefit_term * Decimal(0.3)) + s.liabilities

    @property
    def critical_illness(self):
        s = self.__survey
        return s.annual_income * 2 - s.existing_critical_illness_cover

    @property
    def accidental_death_benefit(self):
        return self.life_insurance

    @property
    def wavier_of_premium(self):
        return True if self.__survey.age < 60 else False

    @property
    def long_term_care(self):
        s = self.__survey
        return min(self.life_insurance, s.annual_income * s.max_factor / 2)

    @property
    def family_income_benefit(self):
        return self.__survey.annual_expenses

    @property
    def family_income_benefit_term(self):
        return self.__survey.family_income_benefit_term


class Spouse:

    def __init__(self, survey: ClientSurvey):
        self.__survey = survey

    @property
    def life_insurance(self):
        s = self.__survey
        return min(Decimal(300000), s.client.life_insurance / 2)

    @property
    def critical_illness(self):
        s = self.__survey
        return min(Decimal(150000), s.client.critical_illness / 2)

    @property
    def accidental_death_benefit(self):
        return self.life_insurance

    @property
    def wavier_of_premium(self):
        return False

    @property
    def long_term_care(self):
        return self.life_insurance / 2

    @property
    def family_income_benefit(self):
        return None

    @property
    def family_income_benefit_term(self):
        return None


class EducationFee:

    def __init__(self, child: ClientChild, survey):
        self.__survey = survey
        self.__child = child

    @property
    def undergrad_year_1(self):
        s = self.__survey
        c = self.__child
        return s.fees_as_per_today * pow(1 + s.inflation / 100, c.number_of_years_to_start)

    @property
    def undergrad_year_2(self):
        s = self.__survey
        c = self.__child
        return s.fees_as_per_today * pow(1 + s.inflation / 100, c.number_of_years_to_start + 1)

    @property
    def undergrad_year_3(self):
        s = self.__survey
        c = self.__child
        return s.fees_as_per_today * pow(1 + s.inflation / 100, c.number_of_years_to_start + 2)

    @property
    def undergrad_year_4(self):
        s = self.__survey
        c = self.__child
        return s.fees_as_per_today * pow(1 + s.inflation / 100, c.number_of_years_to_start + 3)

    @property
    def total_undergrad_fees(self):
        return sum([self.undergrad_year_1, self.undergrad_year_2, self.undergrad_year_3, self.undergrad_year_4])

    @property
    def postgrad_year_1(self):
        s = self.__survey
        c = self.__child
        return s.fees_as_per_today * pow(1 + s.inflation / 100, c.postgrad_start_age - c.age)

    @property
    def postgrad_year_2(self):
        s = self.__survey
        c = self.__child
        return s.fees_as_per_today * pow(1 + s.inflation / 100, s.postgrad_start_age - c.age + 1)

    @property
    def total_postgrad_fees(self):
        return sum([self.postgrad_year_1, self.postgrad_year_2])

    @property
    def total_fees(self):
        return self.total_postgrad_fees + self.total_undergrad_fees
