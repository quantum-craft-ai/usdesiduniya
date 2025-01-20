from fastapi import FastAPI, HTTPException
import boto3
from mangum import Mangum
from typing import Any, Optional, Dict, Union
from pydantic import BaseModel, Field
from datetime import datetime
from decimal import Decimal
from fastapi.middleware.cors import CORSMiddleware
import os

# Initialize FastAPI app
app = FastAPI()
handler = Mangum(app)
#load_dotenv()

app.add_middleware (
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],
)

# Initialize DynamoDB client
dynamodb = boto3.resource(
    "dynamodb",
    region_name="us-east-1",
    aws_access_key_id=os.getenv("AWS_ACCESS_KEY_ID"),
    aws_secret_access_key=os.getenv("AWS_SECRET_ACCESS_KEY"),
)

# Table reference (replace with your table name)
TABLE_NAME = "us_desi_duniya"
table = dynamodb.Table(TABLE_NAME)

class CommonFields(BaseModel):
    actual_price: int
    description: str
    offer_price: int
    title: str

class SectionFields(BaseModel):
    accommodation_type: str

class AddPost(BaseModel):
    section_PK: str
    city_subsection_SK: str
    city: str
    common_fields: CommonFields
    created_at: datetime
    item_id: str
    section_fields: SectionFields
    sub_section: str
    type: str
    updated_at: Optional[str] = ""
    user_name: str

# Pydantic models for request/response validation
# class Post(BaseModel):
#     section: str
#     city: str
#     subsection: str
#     item_id: str
#     username: Optional[str] = "guest"
#     common_fields: dict
#     attributes: Optional[dict]

# Health check
@app.get("/")
def read_root():
    return {"message": "DynamoDB FastAPI is running!"}

# Query all posts in a section
@app.get("/posts/{section}")
def get_posts_by_section(section: str):
    
    try:
        # key_condition = {"PK": f"SECTION#{section}"}
        # filter_expression = None
        # print(key_condition)
        # if city:
        #     filter_expression = f"begins_with(SK, 'CITY#{city}')"

        # response = table.query(
        #     "SELECT AlbumTitle, Year, Pric FROM Music"
        # )
        client = boto3.client('dynamodb', region_name='us-east-1',aws_access_key_id=os.getenv('AWS_ACCESS_KEY_ID'),aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY'),)
        response = client.execute_statement(
            Statement = "SELECT * FROM us_desi_duniya"
        )
        print('*******************',response)
        for item in response.get("Items", []):
            return item
    except KeyError as e:
        print(f"Error: {e.response['Error']['Message']}")


@app.post("/create-add")
def create_add(post: AddPost):
    print('******', post)
    try:
        item = {
            "section_PK": post.section_PK,
            "city_subsection_SK": post.city_subsection_SK,
            "city": post.city,
            "common_fields": {
                "actual_price": post.common_fields.actual_price,
                "description": post.common_fields.description,
                "offer_price": post.common_fields.offer_price,
                "title": post.common_fields.title,
            },
            "created_at": post.created_at.isoformat(),
            "item_id": post.item_id,
            "section_fields": {
                "accommodation_type": post.section_fields.accommodation_type,
            },
            "sub_section": post.sub_section,
            "type": post.type,
            "updated_at": post.updated_at,
            "user_name": post.user_name,
        }
        table.put_item(Item=item)
        return {"message": "item created successfully", "item": item}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Create or update a post
# @app.post("/posts/")
# def create_post(post: Post):
#     try:
#         item = {
#             "PK": f"SECTION#{post.section}",
#             "SK": f"CITY#{post.city}#{post.subsection}#{post.item_id}#{post.username}",
#             "Type": "item",
#             "City": post.city,
#             "Subsection": post.subsection,
#             "ItemID": post.item_id,
#             "Username": post.username,
#             "CommonFields": post.common_fields,
#             "Attributes": post.attributes,
#         }
#         table.put_item(Item=item)
#         return {"message": "Post created successfully", "item": item}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# Get a specific post
# @app.get("/posts/{section}/{city}/{subsection}/{item_id}/{username}")
# def get_post(section: str, city: str, subsection: str, item_id: str, username: str):
#     try:
#         response = table.get_item(
#             Key={
#                 "PK": f"SECTION#{section}",
#                 "SK": f"CITY#{city}#{subsection}#{item_id}#{username}",
#             }
#         )
#         if "Item" not in response:
#             raise HTTPException(status_code=404, detail="Post not found")
#         return response["Item"]
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))

# Delete a post
# @app.delete("/posts/{section}/{city}/{subsection}/{item_id}/{username}")
# def delete_post(section: str, city: str, subsection: str, item_id: str, username: str):
#     try:
#         table.delete_item(
#             Key={
#                 "PK": f"SECTION#{section}",
#                 "SK": f"CITY#{city}#{subsection}#{item_id}#{username}",
#             }
#         )
#         return {"message": "Post deleted successfully"}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
