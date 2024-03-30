from fastapi import FastAPI
from pymongo import MongoClient
from typing import List

app = FastAPI()

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["w3schools"]

# Define MongoDB collections
products_collection = db["products"]
categories_collection = db["categories"]
customers_collection = db["customers"]
suppliers_collection = db["suppliers"]


@app.get("/products/", response_model=List[dict])
async def get_products():
    products = []
    for product in products_collection.find():
        products.append(product)
    return products


@app.get("/categories/", response_model=List[dict])
async def get_categories():
    categories = []
    for category in categories_collection.find():
        categories.append(category)
    return categories


@app.get("/customers/", response_model=List[dict])
async def get_customers():
    customers = []
    for customer in customers_collection.find():
        customers.append(customer)
    return customers


@app.get("/suppliers/", response_model=List[dict])
async def get_suppliers():
    suppliers = []
    for supplier in suppliers_collection.find():
        suppliers.append(supplier)
    return suppliers


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="localhost", port=8000)
