; (() => {
    contactDiv.addEventListener("input", () => {
        if (user_email.value.length > 0 &&
            question.value.length > 0) {
            contactBtn.removeAttribute("disabled");
        } else {
            contactBtn.setAttribute("disabled", "disabled");
        }
    });
})()

