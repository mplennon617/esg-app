import finnhub
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Flask Dockerized'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

#API ket for finnhub.io
finnhub_client = finnhub.Client(api_key="cdo24g2ad3i5o5oksvlgcdo24g2ad3i5o5oksvm0")
print("Recommendation Trends:\n")
print(finnhub_client.recommendation_trends('AAPL'))
print("Quote:\n")
print(finnhub_client.quote('AAPL'))
print("Financials as Reported:\n")
print(finnhub_client.financials_reported(symbol='AAPL', freq='annual'))