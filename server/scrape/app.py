import requests
from bs4 import BeautifulSoup
from datetime import date
from flask import Flask, request

app = Flask(__name__)

# run this python code and
# paste the link below into your browser 
# http://127.0.0.1:5000/applied?url=https://www.linkedin.com/jobs/view/3009127843/?alternateChannel=search&refId=KkR88ziDVuOz%2Fb%2BjwiTlDQ%3D%3D&trackingId=nbFUVJd6A3UOCm0%2F55MzNA%3D%3D&trk=d_flagship3_jobs_discovery_jymbii&uid=f4vwSMeNe1b0T2nrp3jHkIpYoEO2

@app.route('/applied', methods=["GET"])
def main():
    try:
        data = {}
        url = request.args.get('url')
        uid = request.args.get('uid')
        data['Uid'] = str(uid)
        data["Link"] = str(url)
        data["Status"] = "Applied"
        
        r = requests.get(url)
        soup = BeautifulSoup(r.text, "html.parser")
        

        # get Company Name
        company_name_class_name = "topcard__org-name-link topcard__flavor--black-link"
        data["CompanyName"] = soup.find("a", class_=company_name_class_name).text.strip()

        # get Job Title
        job_title_class_name="top-card-layout__title topcard__title"
        data["JobTitle"] = soup.find("h1", class_=job_title_class_name).text.strip()
        
        # get Job Location
        search_location = soup.find_all('span')
        data["JobLocation"] = search_location[-1].text.strip()
        
        # get Applied Date
        today = date.today()
        data['Date'] = today.strftime("%Y-%m-%d")
        
        return dict(data)
    
    except Exception as e:
        print(e, '404')

    
if __name__ == '__main__':
    app.run(debug=True)