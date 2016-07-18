from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import StockDb
from .serializers import StockSerializer
import datetime
from datetime import date

# Create your views here.

class StockList(APIView):

    def get(self,request,year,month):
        if(int(month)==2):
            day = 28
        else:
            day = 30
        startDate = date(int(year),int(month),01)
        endDate = date(int(year),int(month),day)
        a = datetime.datetime.now()
        stocks = StockDb.objects.filter(currentDate__range = [startDate,endDate])
        serializer = StockSerializer(stocks, many=True)
        b =  datetime.datetime.now()
        print b - a
        return Response(serializer.data)
