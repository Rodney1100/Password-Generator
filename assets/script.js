// Assignment code here.
var charSet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+<>|'/\.?"
var charNumUpLow = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "0123456789";
var charNumUp = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charUpLow = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charUpNumSpe = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+<>|'/.?";
var charUpSpe = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+<>|'/.?";
var charSpe = "!@#$%^&*()_-+<>|'/.?";
var charSpeNum = "0123456789!@#$%^&*()_-+<>|'/.?";
var charLowNumSpe = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+<>|'/.?";
var charLowNum = "0123456789abcdefghijklmnopqrstuvwxyz";
var charLowSpe = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+<>|'/.?";

// setting the length of the password from user input.
var passwordLength = function() {
        var passwordLengths = window.prompt("Chosse a number from 8 to 128 for the length of your password!");

        while (passwordLengths < 7 || passwordLengths > 129) {
            var passwordLengths = window.prompt("Chosse a number from 8 to 128 for the length of your password!");
        }
        return passwordLengths;
    }
    //functions for the defferent type of chars in the password.
var forLower = function() {
    var forLowers = window.confirm("Would you like to include LowerCase Letters");
    return forLowers;
}
var forUpper = function() {
    var forUppers = window.confirm("Would you like to include UpperCase Letters");
    return forUppers;
}
var forNumeric = function() {
    var forNumerics = window.confirm("Would you like to include Numbers");
    return forNumerics;
}
var forSpecial = function() {
        var forSpecials = window.confirm("Would you like to include special characters");
        return forSpecials;
    }
    // Generating password from defferent permutations.
var generatePassword = function() {
        var passcode = "";
        var passwordSize = passwordLength();
        var useLower = forLower();
        var useUpper = forUpper();
        var useSpecial = forSpecial();
        var useNum = forNumeric();
        if (useLower && useSpecial && useNum && useUpper) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charSet.length);
                passcode += charSet.substring(num, num + 1);
            }
            return passcode;
        } else if (useLower && useUpper && useNum) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charNumUpLow.length);
                passcode += charNumUpLow.substring(num, num + 1);
            }
            return passcode;
        } else if (useLower && useUpper) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charUpLow.length);
                passcode += charUpLow.substring(num, num + 1);
            }
            return passcode;
        } else if (useLower) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * (charUpLow.length - 26));
                passcode += charUpLow.substring(num, num + 1);
            }
            return passcode;
        } else if (useUpper && useNum && useSpecial) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charUpNumSpe.length);
                passcode += charUpNumSpe.substring(num, num + 1);
            }
            return passcode;
        } else if (useUpper && useNum) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * (charUpNumSpe.length - 20));
                passcode += charUpNumSpe.substring(num, num + 1);
            }
            return passcode;
        } else if (useUpper && useSpecial) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charUpSpe.length);
                passcode += charUpSpe.substring(num, num + 1);
            }
            return passcode;
        } else if (useUpper) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor((Math.random() * charNumUp.length + 10) + 10);
                passcode += charNumUp.substring(num, num + 1);
            }
            return passcode;
        } else if (useSpecial) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * (charSpe.length));
                passcode += charSpe.substring(num, num + 1);
            }
            return passcode;
        } else if (useNum) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charNum.length);
                passcode += charNum.substring(num, num + 1);
            }
            return passcode;
        } else if (useLower && useSpecial) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charLowSpe.length);
                passcode += charLowSpe.substring(num, num + 1);
            }
            return passcode;
        } else if (useLower && useNum) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charLowNum.length);
                passcode += charLowNum.substring(num, num + 1);
            }
            return passcode;

        } else if (useLower && useNum && useSpecial) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charLowNumSpe.length);
                passcode += charLowNumSpe.substring(num, num + 1);
            }
            return passcode;
        } else if (useSpecial && useNum) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charSpeNum.length);
                passcode += charSpeNum.substring(num, num + 1);
            }
            return passcode;
        } else if (useLower && useUpper && useSpecial) {
            for (var i = 0; i < passwordSize; i++) {
                var num = Math.floor(Math.random() * charSet.length + 10);
                passcode += charSet.substring(num, num + 1);
            }
            return passcode;
        }
    }
    // Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {

    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);