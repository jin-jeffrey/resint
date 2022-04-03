chrome.runtime.onInstalled.addListener(() => {
    console.log("Resint installed");
});

function saveApplication(e) {
	e.preventDefault();
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	// CompanyName: req.body.CompanyName,
	// JobTitle: req.body.JobTitle,
	// CompanyDescription: req.body.CompanyDescription,
	// Date: req.body.Date,
	// Uid: req.body.Uid,
	// JobLocation: req.body.JobLocation,
	// Notes: req.body.Notes,
	// Link: req.body.Link,
	// Status: req.body.Status
	chrome.storage.sync.get(['uid'], function(data) {
		const uid = data.uid;
		var raw = JSON.stringify({
			"CompanyName": document.getElementById('CompanyName').value,
			"JobTitle": document.getElementById('JobTitle').value,
			"CompanyDescription": document.getElementById('CompanyDescription').value,
			"Date": document.getElementById('Date').value,
			"Uid": uid,
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


document.getElementById('Date').valueAsDate = new Date();
const logout = document.getElementById('logout');
logout.addEventListener("click", signOut);
const form = document.getElementById('add-form');
form.addEventListener('submit', saveApplication);
