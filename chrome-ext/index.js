<<<<<<< HEAD
const app = firebase.initializeApp(config);
const auth = app.auth();
const signInWithPopup = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider).catch((error) => {
        console.log(error);
    })
};

=======
chrome.runtime.onInstalled.addListener(() => {
    console.log("Resint installed");
});
>>>>>>> 1603f43f8143622344f2ba819120993abc5bd66d

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
<<<<<<< HEAD
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

        })
}


const form = document.getElementById('add-app-form');
form.addEventListener('submit', saveApplication);
=======
    
    fetch("http://localhost:8000/addApp", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

const form = document.getElementById('add-form');
form.addEventListener('submit', saveApplication);
>>>>>>> 1603f43f8143622344f2ba819120993abc5bd66d
