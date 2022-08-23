function generate() {
    let strength;
    let stringCheck;
    let points;
    let extraifall;
    let notstrong = 1;
    let min;
    let max;

    while (notstrong === 1) {
        min = Math.ceil(8);
        max = Math.floor(12);

        const passwordLength = Math.floor(Math.random() * (max - min + 1) + min);
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()-_=+';
        let pass = "";

        for (i = 1; i <= passwordLength; i++) {
            var char = Math.floor(Math.random() * characters.length + 1);
            pass += characters.charAt(char)
        }
        document.getElementById("final_password").value = pass;

        var matchesregex = /^[a-zA-Z0-9!$%^&*()-_=+]+$/.test(document.getElementById("final_password").value);
        var ucl = /^(?=.*[A-Z])/.test(document.getElementById("final_password").value);
        var lcl = /^(?=.*[a-z])/.test(document.getElementById("final_password").value);
        var digit = /^(?=.*[0-9])/.test(document.getElementById("final_password").value);
        var allowedsymbols = /^(?=.*[!$%^&*()_=+-])/.test(document.getElementById("final_password").value);
        var onlyLetters = /^[a-zA-Z]+$/.test(document.getElementById("final_password").value);
        var onlyDigits = /^[0-9]+$/.test(document.getElementById("final_password").value);
        var onlySymbols = /^[!$%^&*()_=+-]+$/.test(document.getElementById("final_password").value);

        const qwerty1 = ["qwe", "wer", "ert", "rty", "tyu", "yui", "uio", "iop"];
        const qwerty2 = ["asd", "sdf", "dfg", "fgh", "ghj", "hjk", "jkl"];
        const qwerty3 = ["zxc", "xcv", "cvb", "vbn", "bnm"];
        console.clear();

        extraifall = matchesregex && ucl && lcl && digit && allowedsymbols;

        points = document.getElementById("final_password").value.length;

        if (ucl) {
            points += 5
        }
        if (lcl) {
            points += 5
        }
        if (digit) {
            points += 5
        }
        if (allowedsymbols) {
            points += 5
        }
        if (extraifall) {
            points += 10
        }
        if (onlyLetters) {
            points += -5
        }
        if (onlyDigits) {
            points += -5
        }
        if (onlySymbols) {
            points += -5
        }

        for (i = 0, len = qwerty1.length, text = ""; i < len; i++) {
            stringCheck = qwerty1[i];
            if (document.getElementById("final_password").value.toLowerCase().includes(stringCheck)) {
                points += -5
            }
        }

        for (i = 0, len = qwerty2.length, text = ""; i < len; i++) {
            stringCheck = qwerty2[i];
            if (document.getElementById("final_password").value.toLowerCase().includes(stringCheck)) {
                points += -5
            }
        }

        for (i = 0, len = qwerty3.length, text = ""; i < len; i++) {
            stringCheck = qwerty3[i];
            if (document.getElementById("final_password").value.toLowerCase().includes(stringCheck)) {
                points += -5
            }
        }

        if (points > 20) {
            strength = "Strong";
            notstrong = 0;
        } else if (points < 1) {
            strength = "Weak";
        } else {
            strength = "Medium";
        }

        document.getElementById("points").innerHTML = "<b>Password strength:</b> " + strength + " (" + points + ")";
    }
}

function showShortToast() {
    Toastify({
        text: "Password copied to clipboard!",
        duration: 2000,
        newWindow: true,
        close: false,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
}