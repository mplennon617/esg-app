FROM python:3.8

WORKDIR /app
COPY . .

RUN pip install finnhub-python
RUN pip install -r requirements.txt


ENTRYPOINT ["python"]
CMD ["run.py"]