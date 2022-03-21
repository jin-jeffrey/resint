chrome.runtime.onInstalled.addListener(() => {
    console.log("Resint installed");
});

function saveApplication() {
    const url = 'http://localhost:8000/addApps';
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
            date: document.getElementById('date'),
            user_id: 'djsaodoa'
        })
    };
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
        console.log("TEST");
        console.log(data);
    })
}

const form = document.getElementById('add-form');
form.addEventListener('submit', saveApplication);
