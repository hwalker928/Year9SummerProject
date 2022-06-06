function generate3() {
    var passwordLength = 11;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!$%^&*()-_=+';

    var pass = [];
	var tempPass = "";
    
    for (n = 0; n <= 2; n++) {
	    var numPosition = Math.floor(Math.random() * 3 + 1) - 1;
        for (i = 0; i <= 2; i++) {
            if(i === numPosition) {
                var char = Math.floor(Math.random()* numbers.length + 1);
                tempPass += numbers.charAt(char).valueOf();
            } else {
                var char = Math.floor(Math.random()* characters.length + 1);
                tempPass += characters.charAt(char);
            }
        }
        var char = Math.floor(Math.random()* symbols.length + 1);
        tempPass += symbols.charAt(char);
	    pass[n] = tempPass;
    }

    document.getElementById("final_password").value = pass[2].substring(0, pass[2].length - 1);;
}