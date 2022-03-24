const app = firebase.initializeApp(config);
const auth = app.auth();
const signInWithPopup = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider).catch((error) => {
        console.log(error);
    })
};


function saveApplication() {
    const url = 'localhost:8000/addApps';
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
            company: document.getElementById('company'),
            position: document.getElementById('position'),
            description: document.getElementById('description'),
            date: document.getElementById('date')
        })
    };
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

        })
}


const form = document.getElementById('add-app-form');
form.addEventListener('submit', saveApplication);