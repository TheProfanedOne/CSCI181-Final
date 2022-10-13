
window.onload = setForm;

const form = document.forms[0];

function setForm() {
    form.onsubmit = function() {
        if (this.checkValidity()) {
            alert("Does this work?");
        }
        return false;
    }
}
