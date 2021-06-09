function check() {
    var matchesregex = /^[a-zA-Z0-9!$%^&*()-_=+]+$/.test(document.getElementById("pswd_to_check").value);
    if (25>document.getElementById("pswd_to_check").value.length) { if (document.getElementById("pswd_to_check").value.length>7) { var correctlength = true; } else { var correctlength = false; } } else { var correctlength = false; }
    var ucl = /^(?=.*[A-Z])/.test(document.getElementById("pswd_to_check").value);
    var lcl = /^(?=.*[a-z])/.test(document.getElementById("pswd_to_check").value);
    var digit = /^(?=.*[0-9])/.test(document.getElementById("pswd_to_check").value);
    var allowedsymbols = /^(?=.*[!$%^&*()_=+-])/.test(document.getElementById("pswd_to_check").value);

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
        var points = document.getElementById("pswd_to_check").value.length;
        if (ucl) { points += 5 }
        if (lcl) { points += 5 }
        if (digit) { points += 5 }
        if (allowedsymbols) { points += 5 }
        if (extraifall) { points += 10 }

        document.getElementById("points").innerHTML = "<b>Password strength:</b> " + points;
    }

    console.clear();
    console.log("Matches character regex? " + matchesregex);
    console.log("Good length? " + correctlength);
    console.log("Upper case letter? " + ucl);
    console.log("Lower case letter? " + lcl);
    console.log("Digit? " + digit);
    console.log("Allowed symbols? " + allowedsymbols);
    console.log("All true? " + extraifall);
}