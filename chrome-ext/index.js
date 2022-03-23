chrome.runtime.onInstalled.addListener(() => {
    console.log("Resint installed");
});

function saveApplication() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "company": document.getElementById('company').value,
      "position": document.getElementById('position').value,
      "description": document.getElementById('description').value,
      "date_submitted": document.getElementById('date').value,
      "user_id": "OSjGSxSa"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8000/addApp", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

const form = document.getElementById('add-form');
form.addEventListener('submit', saveApplication);
