const firstName = (string) => string.toUpperCase();
    

const lastName = (string) => {
    return string.toLowerCase();
    }

exports.firstName = firstName;
exports.lastName = lastName;
console.log(firstName("alma"));
console.log(lastName("MAZALOVIC"));
