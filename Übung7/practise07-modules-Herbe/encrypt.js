function encrypt(passwort,plaintext) {
    const crypto = require('crypto');
    const cipher = crypto.createCipher('aes192', passwort);

    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');


    return encrypted;
};

module.exports = encrypt;