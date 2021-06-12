function generate() {
    var passwordLength = Math.floor(Math.random() * 12) + 8;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^&*()-_=+';
    var pass = "";
    for (i = 1; i <= passwordLength; i++) {
        var char = Math.floor(Math.random()* characters.length + 1);
        pass += str.charAt(char)
    }
    document.getElementById("final_pass").value = pass;
}