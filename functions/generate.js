function generate() {
    var notstrong = 1;
    while (notstrong === 1) {
    var passwordLength = Math.floor(Math.random() * 5) + 8;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()-_=+';
    var pass = "";
    for (i = 1; i <= passwordLength; i++) {
        var char = Math.floor(Math.random()* characters.length + 1);
        pass += characters.charAt(char)
    }
    document.getElementById("final_password").value = pass;
    
    var matchesregex = /^[a-zA-Z0-9!$%^&*()-_=+]+$/.test(document.getElementById("final_password").value);
    if (25>document.getElementById("final_password").value.length) { if (document.getElementById("final_password").value.length>7) { var correctlength = true; } else { var correctlength = false; } } else { var correctlength = false; }
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

    if (matchesregex&correctlength&ucl&lcl&digit&allowedsymbols == 1) {
        var extraifall = true;
    } else {
        var extraifall = false;
    }

    if (!(correctlength)) {
        document.getElementById("points").innerHTML = "Your password must be between 8 and 24 characters."
    } else if (!(matchesregex)) {
        document.getElementById("points").innerHTML = "Your password may only contain the following symbols: ! $ % ^ & * ( ) - _ = +"
    } else {
        var points = document.getElementById("final_password").value.length;
        if (ucl) { points += 5 }
        if (lcl) { points += 5 }
        if (digit) { points += 5 }
        if (allowedsymbols) { points += 5 }
        if (extraifall) { points += 10 }
        if (onlyLetters) { points += -5 }
        if (onlyDigits) { points += -5 }
        if (onlySymbols) { points += -5 }


        for (i = 0, len = qwerty1.length, text = ""; i < len; i++) {
            var stringCheck = qwerty1[i];
            if(document.getElementById("final_password").value.toLowerCase().includes(stringCheck)) {
               points += -5
            }
        }
        for (i = 0, len = qwerty2.length, text = ""; i < len; i++) {
            var stringCheck = qwerty2[i];
            if(document.getElementById("final_password").value.toLowerCase().includes(stringCheck)) {
               points += -5
            }
        }
        for (i = 0, len = qwerty3.length, text = ""; i < len; i++) {
            var stringCheck = qwerty3[i];
            if(document.getElementById("final_password").value.toLowerCase().includes(stringCheck)) {
               points += -5
            }
        }

        if (points > 20) {
            var strength = "Strong";
            notstrong = 0;
        } else if (points < 1) {
            var strength = "Weak";
        } else {
            var strength = "Medium";
        }
       

        document.getElementById("points").innerHTML = "<b>Password strength:</b> " + strength + " (" + Math.round((points+66)/120*100) + "%)";
    }
    console.log("Matches character regex? " + matchesregex);
    console.log("Good length? " + correctlength);
    console.log("Upper case letter? " + ucl);
    console.log("Lower case letter? " + lcl);
    console.log("Digit? " + digit);
    console.log("Allowed symbols? " + allowedsymbols);
    console.log("All true? " + extraifall);
    console.log("Only letters? " + onlyLetters);
    console.log("Only digits? " + onlyDigits);
    console.log("Only symbols? " + onlySymbols);
    console.log("Total points: " + points)
    }
}
