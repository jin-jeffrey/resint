import requests
from bs4 import BeautifulSoup
from datetime import date

def getCompanyName(soup):
    class_name = "topcard__org-name-link topcard__flavor--black-link"
    return soup.find("a", class_=class_name).text.strip()

def getJobTitle(soup):
    class_name="top-card-layout__title topcard__title"
    return soup.find("h1", class_=class_name).text.strip()

def getLocation(soup):
    search = soup.find_all('span')
    return search[-1].text.strip()

def main():
    all_url = ["https://www.linkedin.com/jobs/view/3004295975/?alternateChannel=search&refId=KkR88ziDVuOz%2Fb%2BjwiTlDQ%3D%3D&trackingId=eU9SXWkdjVVznayfx%2F4Epw%3D%3D",
    "https://www.linkedin.com/jobs/view/3009127843/?alternateChannel=search&refId=KkR88ziDVuOz%2Fb%2BjwiTlDQ%3D%3D&trackingId=nbFUVJd6A3UOCm0%2F55MzNA%3D%3D&trk=d_flagship3_jobs_discovery_jymbii",
    "https://www.linkedin.com/jobs/view/3014150460/?eBP=JYMBII_JOBS_HOME_ORGANIC&recommendedFlavor=COMPANY_RECRUIT&refId=KkR88ziDVuOz%2Fb%2BjwiTlDQ%3D%3D&trackingId=7QzG9Wwe1B3ce30sT1xQXQ%3D%3D&trk=flagship3_jobs_discovery_jymbii",
    "https://www.linkedin.com/jobs/view/3010374029/?eBP=CwEAAAGABkVL9eqH2-iRpU_kbb2tht4MtOxqT1eAszd7yhNjJ_jjk-c3gfJ6_dUt3_k_1ACQtKQgatEQZOWsFf0wtKJ77T2PUG27pgyOLRLrZ2SQcqfhZzY7dcLJzeeqy1r8PQEJHjP1T4Bo_18Tyw6KPBg5m779sIPPmlbsPLjKOEpQwjIKlbrvr6w7tiYyY1bHbWtYA3zEYLp8asHyzpt6m9u9hqw_DRW4kaEANXNL-ACawNaXXpRHQCYMA0OEeNkKdNJVtYerPTPUcclTkwRpFVcFIyUMBGnzAVctx1aFxFHm7nykQDsk4tzsWjW7KvU5hGAULfoFlofZlx-k-eF9oF2yNEmGDYmrVIBWfpuG&recommendedFlavor=COMPANY_RECRUIT&refId=KkR88ziDVuOz%2Fb%2BjwiTlDQ%3D%3D&trackingId=rC2ZC6CK1ZkY%2F135bIKRSA%3D%3D&trk=flagship3_jobs_discovery_jymbii",
    "https://www.linkedin.com/jobs/view/3014077018/?eBP=JYMBII_JOBS_HOME_ORGANIC&recommendedFlavor=COMPANY_RECRUIT&refId=KkR88ziDVuOz%2Fb%2BjwiTlDQ%3D%3D&trackingId=J4bABKyyNn6gCGBSFPIGvQ%3D%3D&trk=flagship3_jobs_discovery_jymbii",
    "https://www.linkedin.com/jobs/view/3012721707/?alternateChannel=search&refId=KkR88ziDVuOz%2Fb%2BjwiTlDQ%3D%3D&trackingId=FclIpIF4KVI1QrzRIS2e5w%3D%3D&trk=d_flagship3_jobs_discovery_jymbii"
    ]
    id = 1
    for url in all_url:
        r = requests.get(url)
        soup = BeautifulSoup(r.text, "html.parser")
        collection = {}
        data = {}

        # get Company Name
        company_name_class_name = "topcard__org-name-link topcard__flavor--black-link"
        data["company_name"] = soup.find("a", class_=company_name_class_name).text.strip()

        # get Job Title
        job_title_class_name="top-card-layout__title topcard__title"
        data["job_title"] = soup.find("h1", class_=job_title_class_name).text.strip()
        
        # get Job Location
        search_location = soup.find_all('span')
        data["job_location"] = search_location[-1].text.strip()
        
        # get Applied Date
        today = date.today()
        data['date'] = today.strftime("%m/%d/%Y")

        print(data)
        collection[id] = data
        id += 1
    
    return data

main()