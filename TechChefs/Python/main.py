import json
from firebase import firebase
import StringIO as io
import time
import datetime
import sys
import pandas as pd
from MovingAvg import *
import math
# from google.cloud import firestore

import firebase_admin
from firebase_admin import credentials, firestore

import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "./restaurant-automation-79d80-firebase-adminsdk-putmj-5a4298a342.json"
cred = credentials.Certificate("./restaurant-automation-79d80-firebase-adminsdk-putmj-5a4298a342.json")
firebase_admin.initialize_app(cred)

# Project ID is determined by the GCLOUD_PROJECT environment variable
db = firestore.Client()
#
#
# Firestore works!
users_ref = db.collection(u'Inventory')


docs = users_ref.get()
dict =  {}
inventoryList = {}
for doc in docs:
    #print('{}'.format( doc.to_dict()))
    dict.update(doc.to_dict())
    inventoryList.update({dict["Name"]:dict["min"]})





fb = firebase.FirebaseApplication('https://restaurant-automation-79d80.firebaseio.com', None)
#Get recipe
menu = fb.get('/menu', None)
foodName = {}

for item in menu:
    Menu = menu[item]
    for Ingredients in Menu:
        ingList = Menu[Ingredients]
        if Ingredients =="Ingredients":
            foodName.update({item:ingList})


# print foodName
#Get Orders
orders= fb.get('/Orders', None)
orderList = {}
for id in orders:
    idVal = orders[id]
    orderList.update({idVal["timestamp"]:idVal["items"]})



updateInv = {}
for time in orderList:
    updateItem = {}
    quantity = []

    item = orderList[time]

    for x in item:
        prod = 0
        for name in x:
            for foods in foodName:
                 food = foodName[foods]
                 if x["name"] == foods:
                     for ingredient in food:

                         prod = x["quantity"] * food[ingredient]
                         if ingredient in updateItem:
                             updateItem[ingredient] += prod
                         elif ingredient not in updateItem:
                             updateItem[ingredient] = prod




    updateInv.update({time:updateItem})

                # for y in food:
                #     for Ingredient in y:
                #         print "hi"



# sys.stdout = open('file.txt', 'w')
# print updateInv
#Update database
sys.stdout = open('file.txt', 'w')
for ingredient in inventoryList:
    toMean = {}
    for time in updateInv:
        quantity = updateInv[time]
        for item in updateInv[time]:
            if(item == ingredient):

                toMean.update({time:(quantity[item]/2)})


    print ingredient
    print toMean
    series = pd.Series(toMean)
    num = Avg(series)
    print math.ceil(num)
    uf =  db.collection(u'Inventory').document(ingredient)
    uf.update({
        u'min': math.ceil(num)
    }, firestore.CreateIfMissingOption(True))






    # print series






# print series






print("DONE")
