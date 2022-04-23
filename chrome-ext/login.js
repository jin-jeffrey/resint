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
	
	fetch("https://resint.herokuapp.com/getUID", requestOptions)
	.then(response => response.json())
	.then(result => chrome.storage.sync.set({uid: result.Uid}, function() {
		console.log('UID is set to ' + result.Uid);
        chrome.action.setPopup({popup: 'index.html'});
	}))
	.catch(error => console.log('error', error));
}

const keyform = document.getElementById('key-form');
keyform.addEventListener('submit', storeUID);
