window.onload = setForm;

function setForm() {
    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) {
            const data = new FormData(document.forms[0]);
            const pairs = {};

            data.forEach((value, key) => {
                pairs[key] = value;
            });
            console.log(pairs);

            alert("Email sent!");
            document.forms[0].reset();
        }
        return false;
    }
}
