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
			"company": document.getElementById('company').value,
			"position": document.getElementById('position').value,
			"description": document.getElementById('description').value,
			"date_submitted": document.getElementById('date').value,
			"uid": uid
		});
	
		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'manual'
		};
	
		fetch("http://localhost:8000/addApp", requestOptions)
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

const logout = document.getElementById('logout');
logout.addEventListener("click", signOut);
const form = document.getElementById('add-form');
form.addEventListener('submit', saveApplication);
