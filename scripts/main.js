document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("user-post");
    const counter = document.getElementById("char-counter");
    const postButton = document.querySelector(".post-button");
    const maxLength = 140;

    textarea.addEventListener("input", function () {
        let length = textarea.value.length;
        let remaining = maxLength - length;

        if (length === 0) {
            counter.classList.add("hidden");
        } else {
            counter.classList.remove("hidden");
            counter.textContent = remaining;
        }

        counter.classList.remove("warning", "error");
        if (remaining < 40 && remaining >= 0) {
            counter.classList.add("warning");
        } else if (remaining < 0) {
            counter.classList.add("error");
        }

        postButton.disabled = length === 0 || remaining < 0;
    });
});
