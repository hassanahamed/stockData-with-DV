from __future__ import unicode_literals

from django.db import models

# Create your models here.

class StockDb(models.Model):
    currentDate = models.DateField()
    open_st = models.FloatField()
    high = models.FloatField()
    low = models.FloatField()
    close = models.FloatField()
    volume = models.IntegerField()
    adjClose = models.FloatField()
    stock = models.IntegerField()



    class Meta:
        db_table = 'stockdatabase'
