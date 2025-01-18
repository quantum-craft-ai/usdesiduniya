from fastapi import FastAPI, HTTPException
import boto3
from pydantic import BaseModel
from typing import Optional
import os

# Initialize FastAPI app
app = FastAPI()

# Initialize DynamoDB client
dynamodb = boto3.resource(
    "dynamodb",
    region_name="us-east-1",
)

# Table reference (replace with your table name)
TABLE_NAME = "us_desi_duniya"
table = dynamodb.Table(TABLE_NAME)

# Pydantic models for request/response validation
class Post(BaseModel):
    section: str
    city: str
    subsection: str
    item_id: str
    username: Optional[str] = "guest"
    common_fields: dict
    attributes: Optional[dict]

# Health check
@app.get("/")
def read_root():
    return {"message": "DynamoDB FastAPI is running!"}

# Create or update a post
@app.post("/posts/")
def create_post(post: Post):
    try:
        item = {
            "PK": f"SECTION#{post.section}",
            "SK": f"CITY#{post.city}#{post.subsection}#{post.item_id}#{post.username}",
            "Type": "item",
            "City": post.city,
            "Subsection": post.subsection,
            "ItemID": post.item_id,
            "Username": post.username,
            "CommonFields": post.common_fields,
            "Attributes": post.attributes,
        }
        table.put_item(Item=item)
        return {"message": "Post created successfully", "item": item}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Get a specific post
@app.get("/posts/{section}/{city}/{subsection}/{item_id}/{username}")
def get_post(section: str, city: str, subsection: str, item_id: str, username: str):
    try:
        response = table.get_item(
            Key={
                "PK": f"SECTION#{section}",
                "SK": f"CITY#{city}#{subsection}#{item_id}#{username}",
            }
        )
        if "Item" not in response:
            raise HTTPException(status_code=404, detail="Post not found")
        return response["Item"]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Query all posts in a section
@app.get("/posts/{section}")
def get_posts_by_section(section: str, city: Optional[str] = None):
    
    try:
        # key_condition = {"PK": f"SECTION#{section}"}
        # filter_expression = None
        # print(key_condition)
        # if city:
        #     filter_expression = f"begins_with(SK, 'CITY#{city}')"

        # response = table.query(
        #     "SELECT AlbumTitle, Year, Pric FROM Music"
        # )
        client = boto3.client('dynamodb', region_name='us-east-1',aws_access_key_id='',aws_secret_access_key='',)
        response = client.execute_statement(
            Statement = "SELECT * FROM us_desi_duniya"
        )
        print('*******************',response)
        for item in response.get("Items", []):
            return item
    except KeyError as e:
        print(f"Error: {e.response['Error']['Message']}")

# Delete a post
@app.delete("/posts/{section}/{city}/{subsection}/{item_id}/{username}")
def delete_post(section: str, city: str, subsection: str, item_id: str, username: str):
    try:
        table.delete_item(
            Key={
                "PK": f"SECTION#{section}",
                "SK": f"CITY#{city}#{subsection}#{item_id}#{username}",
            }
        )
        return {"message": "Post deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
