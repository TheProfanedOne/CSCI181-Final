window.onload = setForm;

function setForm() {
    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) {
            const data = new FormData(document.forms[0]);
            const msgInfo = data.entries();
            for (const [key, value] of msgInfo) {
                console.log(key, value);
            }
            alert("Email sent!");
        }
        return false;
    }
}
