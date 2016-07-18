from rest_framework import serializers
from .models import StockDb


class StockSerializer(serializers.ModelSerializer):

    class Meta:
        model = StockDb
        fields = '__all__'
