function generate3() {
    var passwordLength = 11;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!$%^&*()-_=+';

    var pass = "";

    var numPosition = Math.floor(Math.random() * 3 + 1);
    
    for (i = 1; i <= 3; i++) {
        for (i = 1; i <= numPosition; i++) {
            if(i === numPosition) {
                var char = Math.floor(Math.random()* numbers.length + 1);
            }
            pass += numbers.charAt(char);
        }
        var char = Math.floor(Math.random()* symbols.length + 1);
        pass += symbols.charAt(char);
        var char = Math.floor(Math.random()* characters.length + 1);
        pass += characters.charAt(char);
    }

    document.getElementById("final_password").value = pass;
}

