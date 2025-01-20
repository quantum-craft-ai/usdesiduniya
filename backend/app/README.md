# venv
python -m venv .venv

# start
uvicorn main:app --reload
or
fastapi dev main.py


# 1. gen requirements file
pip freeze > requirements.txt

# 2. gen dependencies
pip3 install -t dependencies -r requirements.txt
#  docker
    docker run --rm -v "$(pwd):/app" -w /app amazonlinux:2 bash -c "yum install -y python3-pip python3-devel gcc && pip3 install -t dependencies -r requirements.txt"

# 3. zip dependencies
(cd dependencies; zip ../aws_lambda_artifact.zip -r .)

# 4. add update main.py file to aws lambda artifact
zip aws_lambda_artifact.zip -u main.py

