function isValidPassword(password) {
    const minLength = 8;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const digitChar = /\d/;
    const fordbiddenPattern = /ipl/i;

    if(password.length < minLength) {
        return false;
    }
    if (!specialChar.test(password)) {
        return false;
    }
    if (!digitChar.test(password)) {
        return false;
    }
    if (!fordbiddenPattern.test(password)) {
        return false;
    }
    return true;

}
module.exports = isValidPassword;