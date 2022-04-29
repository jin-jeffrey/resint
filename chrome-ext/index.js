chrome.runtime.onInstalled.addListener(() => {
    console.log("Resint installed");
});

function saveApplication(e) {
	e.preventDefault();
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	chrome.storage.sync.get(['uid'], function(data) {
		const uid = data.uid;
		var raw = JSON.stringify({
			"CompanyName": document.getElementById('CompanyName').value,
			"JobTitle": document.getElementById('JobTitle').value,
			"CompanyDescription": document.getElementById('CompanyDescription').value,
			"Date": document.getElementById('Date').value,
			"Uid": uid,
			"Status": document.getElementById('Status').value,
			"JobLocation": document.getElementById('JobLocation').value,
			"Notes": document.getElementById('Notes').value,
			"Link": document.getElementById('Link').value
		});
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'manual'
		};
	
		fetch("https://resint.herokuapp.com/addApp", requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));
	});
}

function getLinkedInData() {
	const data = {
		"company": document.getElementsByClassName("ember-view t-black t-normal")[0].innerHTML.trim(),
		"position": document.getElementsByClassName("t-24 t-bold")[0].innerHTML.trim(),
		"location": document.getElementsByClassName("jobs-unified-top-card__bullet")[0].innerHTML.trim(),
		"description": document.getElementsByClassName("jobs-description-content__text--stretch")[0].innerText.trim(),
	}
	console.log(data);
	return data;
}

function scrapeLinkedInPage(e) {
	e.preventDefault();
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
		let url = tabs[0].url;
		// use `url` here inside the callback because it's asynchronous!
		if (url.includes('https://www.linkedin.com/jobs/')) {
			chrome.scripting.executeScript(
				{
					target: {tabId: tabs[0].id, allFrames: true},
					func: getLinkedInData,
				}, (result) => {
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					chrome.storage.sync.get(['uid'], function(data) {
						const uid = data.uid;
						var raw = JSON.stringify({
							"CompanyName": result[0].result.company,
							"JobTitle": result[0].result.position,
							"CompanyDescription": result[0].result.description,
							"Date": new Date(),
							"Uid": uid,
							"Status": "Applied",
							"JobLocation": result[0].result.location,
							"Notes": "",
							"Link": ""
						});
						var requestOptions = {
							method: 'POST',
							headers: myHeaders,
							body: raw,
							redirect: 'manual'
						};
					
						fetch("https://resint.herokuapp.com/addApp", requestOptions)
						.then(response => response.text())
						.then((result) => {
							console.log(result);
							if (document.getElementById('text').classList.contains('fail')) {
								document.getElementById('text').classList.remove('fail');
							}
							if (!document.getElementById('text').classList.contains('success')) {
								document.getElementById('text').classList.add("success");
							}
							document.getElementById('text').innerText = "Document added!";
						})
						.catch(error => console.log('error', error));
					});				}
			);
		} else {
			if (document.getElementById('text').classList.contains('success')) {
				document.getElementById('text').classList.remove('success');
			}
			if (!document.getElementById('text').classList.contains('fail')) {
				document.getElementById('text').classList.add("fail");
			}
			document.getElementById('text').innerText = "Make sure you are on the LinkedIn Jobs tab"
		}
	});
}

function signOut(e) {
	e.preventDefault()
	chrome.storage.sync.clear();
	chrome.action.setPopup({popup: 'login.html'});
}


chrome.storage.sync.get(['uid'], (data) => {
	if (!data.uid) {
	  chrome.action.setPopup({popup: 'login.html'});
	}
});

// document.getElementById('Date').valueAsDate = new Date();
// const form = document.getElementById('add-form');
// form.addEventListener('submit', saveApplication);
const logout = document.getElementById('logout');
logout.addEventListener("click", signOut);
const scrape = document.getElementById('scrape');
scrape.addEventListener('click', scrapeLinkedInPage);