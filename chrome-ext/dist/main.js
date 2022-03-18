import axios from "axios";
const form = document.querySelector(".application-form")
const saveApplication = async e => {
    e.preventDefault()
    try {
        const company = document.getElementById("company");
        const position = document.getElementById("position");
        const description = document.getElementById("description");
        const date = document.getElementById("date");
        const response = await axios.post('localhost:8000/addApp', {
            company: company,
            position: position,
            description: description,
            date: date,
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    } catch (e) {
        console.log(e);
    }
}

form.addEventListener("submit", e => saveApplication(e));