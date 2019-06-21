from survey.serializers import ClientSurveySerializer
from survey.models import ClientSurvey
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView


class SurveyFormView(APIView):
    def get(self, request, ref):
        if ref is not None:
            survey = ClientSurvey.objects.get(ref_token=ref)
            if survey is not None:
                return Response(data=ClientSurveySerializer(survey).data, status=status.HTTP_200_OK)
            else:
                return Response(data={}, status=status.HTTP_404_NOT_FOUND)
        return Response(data={}, status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        serializer = ClientSurveySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = Response(data=serializer.data, status=status.HTTP_201_CREATED)
            return response
        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        pass


class ClientInfoView(APIView):
    def post(self, request):
        if "ref_token" in request.data:
            ref_token = request.data["ref_token"]
            survey = ClientSurvey.objects.get(ref_token=ref_token)
            if survey is None:
                return Response(data={"error": "Survey's not found"}, status=status.HTTP_404_NOT_FOUND)
            survey.email = request.data["email"]
            survey.first_name = request.data["firstName"]
            survey.save()
            serializer = ClientSurveySerializer(survey)
            return Response(data= serializer.data, status=status.HTTP_200_OK)
        return Response(data={"error": "Data error"}, status=status.HTTP_400_BAD_REQUEST)