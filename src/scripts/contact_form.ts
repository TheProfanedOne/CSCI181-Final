import { MessageClient } from "cloudmailin";
import '../styles/contact_me.css';

window.onload = setForm;

const form: HTMLFormElement = document.forms[0];

function setForm() {
    form.onsubmit = function() {
        if (form.reportValidity()) {
            const data = new FormData(form);
            const entries = data.entries();
            const result = {} as {[param: string]: string};
            for (const [key, value] of entries) {
                result[key] = value as string;
            }
            sendEmail(result);
            form.reset();
        }
    }
}

async function sendEmail(entries: {[param: string]: string}) {
    const outBoundEmail = 'mjm11102001@gmail.com';

    const client = new MessageClient({ username: "1d848c506dea731b", apiKey: "oYKtGkcUpDRHQoP5uegtcXYW"});
    const response = await client.sendMessage({
        to: outBoundEmail,
        from: entries['email'],
        plain: entries['msg'],
        subject: entries['subject'] ?? ''
    });
}