; (() => {
    registForm.addEventListener("input", () => {
        if (phone.value.length > 0 &&
            username.value.length > 0 &&
            email.value.length > 0) {
            registBtn.removeAttribute("disabled");
        } else {
            registBtn.setAttribute("disabled", "disabled");
        }
    });
})()


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