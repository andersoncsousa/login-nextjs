const btnSignin = typeof document !== 'undefined' && document.querySelector("#signin");
const btnSignup = typeof document !== 'undefined' && document.querySelector("#signup");

const body = typeof document !== 'undefined' && document.querySelector("#container");

if (typeof btnSignin === 'object' && btnSignin !== null && 'addEventListener' in btnSignin) {
    btnSignin.addEventListener("click", function () {
        body.className = "sign-in-js"; 
    })
}
if (typeof btnSignup === 'object' && btnSignup !== null && 'addEventListener' in btnSignup) {
    btnSignup.addEventListener("click", function () {
        body.className = "sign-up-js";
    })
}
