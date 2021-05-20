; (() => {
    registForm.addEventListener("input", () => {
        if (
          phone.validity.valid &&
          username.validity.valid &&
          email.validity.valid
        ) {
          registBtn.removeAttribute('disabled');
        } else {
          registBtn.setAttribute('disabled', 'disabled');
        }
    });
})()

    ; (() => {
        contactDiv.addEventListener("input", () => {
            if (user_email.validity.valid > 0 && question.validity.valid > 0) {
              contactBtn.removeAttribute('disabled');
            } else {
              contactBtn.setAttribute('disabled', 'disabled');
            }
        });
    })()