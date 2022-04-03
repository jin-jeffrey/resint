chrome.runtime.onInstalled.addListener(() => {
    console.log("Resint installed");
});

function saveApplication(e) {
	e.preventDefault();
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	chrome.storage.sync.get(['uid'], function(result) {
		const uid = result.uid;
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

function storeUID(e) {
	e.preventDefault();
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	
	var raw = JSON.stringify({
		"key": document.getElementById('key-phrase').value
	});
	
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'manual'
	};
	
	fetch("http://localhost:8000/getUID", requestOptions)
	.then(response => response.json())
	.then(result => chrome.storage.sync.set({uid: result.uid}, function() {
		console.log('UID is set to ' + result.uid);
	}))
	.catch(error => console.log('error', error));
}

const keyform = document.getElementById('key-form');
const form = document.getElementById('add-form');
form.addEventListener('submit', saveApplication);
keyform.addEventListener('submit', storeUID);