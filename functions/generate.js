function generate() {
    var passwordLength = Math.floor(Math.random() * 5) + 8;
    console.log(passwordLength);
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()-_=+';
    var pass = "";
    for (i = 1; i <= passwordLength; i++) {
        var char = Math.floor(Math.random()* characters.length + 1);
        pass += characters.charAt(char)
    }
    document.getElementById("final_password").value = pass;
}
