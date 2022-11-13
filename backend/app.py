import finnhub
import json
from flask import Flask
app = Flask(__name__)

finnhub_client = finnhub.Client(api_key="cdo24g2ad3i5o5oksvlgcdo24g2ad3i5o5oksvm0")

@app.route('/')
def hello_world():
    return 'Flask Dockerized'

@app.route('/profiles/<company>')
def CompanyProfile(company):
    profile = "{"+str(RecommendationTrends(company))+","+str(Quote(company))+","+str(FinancialsReported(company))+"}"
    return profile
    
def Quote(company):
    #parse quotes for current stock price
    pythonObj = json.loads(finnhub_client.quote(company))
    currentPrice = pythonObj['c']
    return "\"CurrentPrice\":"+currentPrice

def FinancialsReported(company):
    #parse financials as reported to get assets and gross profits
    pythonObj = json.loads(finnhub_client.financials_reported(symbol=company, freq='annual'))
    assets = pythonObj['report']['bs']['Assets']
    grossProfits = pythonObj['report']['ic']['GrossProfit']
    date = pythonObj['year']
    return "\"Assets\":"+assets+",\"GrossProfit\":"+grossProfits

def RecommendationTrends(company):
    #parse exert recomendation trends for recent periods
    pythonObj = json.loads(finnhub_client.recommendation_trends(company))
    return "\"Recommendations\":"+pythonObj



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

#API ket for finnhub.io

#print("Recommendation Trends:\n")
#print(finnhub_client.recommendation_trends('AAPL'))
#print("Quote:\n")
#print(finnhub_client.quote('AAPL'))
#print("Financials as Reported:\n")
#print(finnhub_client.financials_reported(symbol='AAPL', freq='annual'))