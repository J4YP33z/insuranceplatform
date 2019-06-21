from django.contrib import admin
from .models import ClientSurvey, ClientChild


# Register your models here.
class ChildrenInline(admin.StackedInline):
    model=ClientChild


class SurveyAdmin(admin.ModelAdmin):
    FIELD_LIST = ['age', 'annual_income', 'annual_expenses', 'assets',
                  'liabilities', 'existing_life_insurance', 'existing_savings',
                  'retirement_age']
    list_display=FIELD_LIST
    list_display_links=FIELD_LIST
    list_per_page=25
    list_filter = [e for e in FIELD_LIST if e not in ['retirement_age', 'existing_savings', 'existing_life_insurance']]
    empty_value_display='N/A'
    inlines=[ChildrenInline]


admin.site.register(ClientSurvey, SurveyAdmin)