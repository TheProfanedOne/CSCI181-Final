"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudmailin_1 = require("cloudmailin");
require("../styles/contact_me.css");
window.onload = setForm;
const form = document.forms[0];
function setForm() {
    form.onsubmit = function () {
        if (form.reportValidity()) {
            const data = new FormData(form);
            const entries = data.entries();
            const result = {};
            for (const [key, value] of entries) {
                result[key] = value;
            }
            sendEmail(result);
            form.reset();
        }
    };
}
async function sendEmail(entries) {
    const outBoundEmail = 'mjm11102001@gmail.com';
    const client = new cloudmailin_1.MessageClient({ username: "1d848c506dea731b", apiKey: "oYKtGkcUpDRHQoP5uegtcXYW" });
    const response = await client.sendMessage({
        to: outBoundEmail,
        from: entries['email'],
        plain: entries['msg'],
        subject: entries['subject'] ?? ''
    });
}
