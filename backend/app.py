import finnhub
import json
import csv
from flask import Flask
app = Flask(__name__)

finnhub_client = finnhub.Client(api_key="cdo24g2ad3i5o5oksvlgcdo24g2ad3i5o5oksvm0")

@app.route('/')
def hello_world():
    return 'Flask Dockerized'

@app.route('/profiles/<company>')
def CompanyProfile(company):
    ticker = finnhub_client.symbol_lookup(company) #get company ticker
    profile = "{"+str(RecommendationTrends(ticker))+","+str(FinancialsReported(ticker))+","+str(Quote(ticker))+"}"
    return profile
    
def Quote(tick):
    #parse quotes for current stock price
    quo = str(finnhub_client.quote(tick))
    quo = quo.replace("'","\"")
    pythonObj = json.loads(quo)
    currentPrice = pythonObj['c']
    return "\"CurrentPrice\":"+str(currentPrice)

def FinancialsReported(tick):
    #parse financials as reported to get assets and gross profits
    finRep = str(finnhub_client.financials_reported(symbol=tick, freq='annual', _from="2020-01-01", _to="2021-01-01"))
    finRep = finRep.replace("'","\"")
    pythonObj = json.loads(finRep)
    n=0
    assets = []
    liability=[]
    revenue=[]
    grossProfits=[]
    earningsPerShare =[]
    for item in pythonObj['data']:
        n = n+1
        assets.append(item['report']['bs']['Assets'])
        liability.append(item['report']['bs']['Liabilities'])
        grossProfits.append(item['report']['ic']['GrossProfit'])
        earningsPerShare.append(item['report']['ic']['EarningsPerShareBasic'])
    
    #assets = pythonObj['report']['bs']['Assets']
    #liability = pythonObj['report']['bs']['Liabilities']
    #revenue = pythonObj['report']['bs']['Revenues']
    #grossProfits = pythonObj['report']['ic']['GrossProfit']
    #earningPerShare = pythonObj['report']['ic']['EarningsPerShareBasic']
    #console.log(pythonObj)
    #date = pythonObj['year']
    return "\"Assets\":"+str(assets)+",\"Revenues\":"+str(revenue)+",\"Liabilities\":"+str(liability)+",\"GrossProfit\":"+str(grossProfits)

def RecommendationTrends(tick):
    #parse exert recomendation trends for recent periods
    recTrends = str(finnhub_client.recommendation_trends(tick))
    recTrends = recTrends.replace("'","\"")
    pythonObj = json.loads(recTrends)
    return "\"Recommendations\":"+str(pythonObj)

def EnvironmentalFactors(Company):
    subIndustry = ""
    industry = ""
    #environmental intensities
    intensitySales = []
    intensityOpInc = []
    totalEnvironmentalCost =[]
    workingCapacity = []
    fishProducts = []   

    pythonObj = json.loads(open('/artifacts/EnvironmentalData.json').read()) 
    

                
            
        




if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

#API ket for finnhub.io

#print("Recommendation Trends:\n")
#print(finnhub_client.recommendation_trends('AAPL'))
#print("Quote:\n")
#print(finnhub_client.quote('AAPL'))
#print("Financials as Reported:\n")
#print(finnhub_client.financials_reported(symbol='AAPL', freq='annual'))