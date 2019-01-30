const crypto = require('crypto');

function decrypt(passwort, ciphertext) {


    const decipher = crypto.createDecipher('aes192', passwort);

    let decrypted = decipher.update(ciphertext, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;


};

module.exports = decrypt;