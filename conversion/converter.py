import sys
import json
from bson import ObjectId
import pymongo
import mariadb


def to_json(array, cursor):
    obj_array = []
    for row in array:
        data = {"_id": str(ObjectId())}
        for i, entry in enumerate(row):
            if cursor.description[i][0] == "BirthDate":
                entry = entry.strftime('%Y-%m-%dT%H:%M:%S')
            if cursor.description[i][0] == "OrderDate":
                data[cursor.description[i][0]] = entry.strftime('%Y-%m-%dT%H:%M:%S')
            data[cursor.description[i][0]] = entry
        obj_array.append(data)
    return obj_array


def fetch_products(conn):
    cursor = conn.cursor()
    cursor.execute("Select ProductID, ProductName, Price, Unit from products")
    product_data = cursor.fetchall()
    return product_data, cursor


def fetch_categories(conn):
    cursor = conn.cursor()
    cursor.execute("Select CategoryID, CategoryName, Description from categories")
    category_data = cursor.fetchall()
    return category_data, cursor


def fetch_customers(conn):
    cursor = conn.cursor()
    cursor.execute("Select CustomerID, ContactName, Address, City, PostalCode, Country from customers")
    customer_data = cursor.fetchall()
    return customer_data, cursor


def fetch_suppliers(conn):
    cursor = conn.cursor()
    cursor.execute("Select SupplierID, SupplierName, Phone from suppliers")
    supplier_data = cursor.fetchall()
    return supplier_data, cursor


# insert converted data into mongodb
def convert_and_insert_to_mongodb(data, db, collection_to_insert):
    collection = db[collection_to_insert]
    for element in data:
        collection.insert_one(element)


# fetch data from mysql db
def prepare_data(conn, mongoDB):
    product_data, product_cursor = fetch_products(conn)
    category_data, category_cursor = fetch_categories(conn)
    customer_data, customer_cursor = fetch_customers(conn)
    supplier_data, supplier_cursor = fetch_suppliers(conn)

    product_json = to_json(product_data, product_cursor)
    category_json = to_json(category_data, category_cursor)
    customer_json = to_json(customer_data, customer_cursor)
    supplier_json = to_json(supplier_data, supplier_cursor)

    convert_and_insert_to_mongodb(product_json, mongoDB, 'products')
    convert_and_insert_to_mongodb(category_json, mongoDB, 'categories')
    convert_and_insert_to_mongodb(customer_json, mongoDB, 'customers')
    convert_and_insert_to_mongodb(supplier_json, mongoDB, 'suppliers')


# Main function
def main():
    # connect to mariadb
    try:
        conn = mariadb.connect(
            user="root",
            password="password",
            host="localhost",
            port=3306,
            database="w3schools"

        )
        # exit if error occurs
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)

    # connect to mongodb instance
    client = pymongo.MongoClient("mongodb://localhost:27017/")
    mongoDB = client.get_database("w3schools")

    prepare_data(conn, mongoDB)

    # close db connections
    conn.close()


if __name__ == "__main__":
    main()
