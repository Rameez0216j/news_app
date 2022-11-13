# This is just to check the data

import requests
import json
url="https://newsapi.org/v2/everything?q=tesla&from=2022-10-09&sortBy=publishedAt&apiKey=3c0a8b9c37e94463b9b1b9d041f556fc"
news_string=requests.get(url).text
news_dict=json.loads(news_string)
# print(news_dict)
with open("news.json", "w") as f:
    json.dump(news_dict,f,indent=4)
f.close()