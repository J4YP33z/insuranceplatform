from django.urls import path
from .views.survey import SurveyFormView, ClientInfoView

urlpatterns = [
    path('survey', SurveyFormView.as_view()),
    path('survey/<str:ref>', SurveyFormView.as_view()),
    path('info', ClientInfoView.as_view())
]
