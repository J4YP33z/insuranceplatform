from .models import ClientSurvey, Client, Spouse, EducationFee, ClientChild
from rest_framework import serializers
from uuid import uuid4


class ClientSerializer(serializers.Serializer):
    life_insurance=serializers.ReadOnlyField()
    critical_illness=serializers.ReadOnlyField()
    accidental_death_benefit=serializers.ReadOnlyField()
    wavier_of_premium=serializers.ReadOnlyField()
    long_term_care=serializers.ReadOnlyField()
    family_income_benefit=serializers.ReadOnlyField()
    family_income_benefit_term=serializers.ReadOnlyField()

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    class Meta:
        model = Client


class SpouseSerializer(serializers.Serializer):
    life_insurance=serializers.ReadOnlyField()
    critical_illness=serializers.ReadOnlyField()
    accidental_death_benefit=serializers.ReadOnlyField()
    wavier_of_premium=serializers.ReadOnlyField()
    long_term_care=serializers.ReadOnlyField()
    family_income_benefit=serializers.ReadOnlyField()
    family_income_benefit_term=serializers.ReadOnlyField()

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    class Meta:
        model = Spouse


class EducationFeeSerializer(serializers.Serializer):
    # undergrad_year_1=serializers.ReadOnlyField()
    # undergrad_year_2=serializers.ReadOnlyField()
    # undergrad_year_3=serializers.ReadOnlyField()
    # undergrad_year_4=serializers.ReadOnlyField()
    # total_undergrad_fees=serializers.ReadOnlyField()
    postgrad_year_1=serializers.ReadOnlyField()
    postgrad_year_2=serializers.ReadOnlyField()
    total_postgrad_fees=serializers.ReadOnlyField()
    # total_fees=serializers.ReadOnlyField()

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    class Meta:
        fields = '__all__'


class ClientChildSerializer(serializers.ModelSerializer):
    # undergrad_end_age = serializers.ReadOnlyField()
    postgrad_end_age = serializers.ReadOnlyField()
    education_fees = EducationFeeSerializer(required=False)

    class Meta:
        model = ClientChild
        exclude = ('survey', 'undergrad_start_age')


class ClientSurveySerializer(serializers.ModelSerializer):
    life_cover_required = serializers.ReadOnlyField()
    max_factor = serializers.ReadOnlyField()
    ci_cover_required = serializers.ReadOnlyField()
    pa_cover_required = serializers.ReadOnlyField()
    long_term_care_required = serializers.ReadOnlyField()
    family_income_benefit_required = serializers.ReadOnlyField()
    family_income_benefit_term = serializers.ReadOnlyField()
    number_of_years_to_start = serializers.ReadOnlyField()
    number_of_years_to_retirement = serializers.ReadOnlyField()
    children = ClientChildSerializer(many=True)
    client = ClientSerializer(required=False)
    spouse = SpouseSerializer(required=False)

    retirement = serializers.ReadOnlyField()

    def create(self, validated_data):
        children = validated_data.pop('children')
        validated_data["ref_token"] = uuid4()
        survey = ClientSurvey.objects.create(**validated_data)
        for child in children:
            ClientChild.objects.create(survey=survey, **child)
        return survey

    class Meta:
        model = ClientSurvey
        fields = '__all__'
