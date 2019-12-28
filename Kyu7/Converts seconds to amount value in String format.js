// ---------------Converts seconds to amount value in String format--------------------

function toTime(num) {
    let hour = Math.floor(num / 3600);
    let minutes = Math.floor(((num / 3600 - hour) * 3600) / 60);
    // let minutes = Math.floor((num % 3600) / 60) This another solution to the mintus
    // let check = hour - Math.floor(hour) !== 0;
    // if (check) return `${hour} hour(s) and 0 minute(s)`;
    return `${hour} hour(s) and ${minutes} minute(s)`;
}

console.log(toTime(3600)); // 1 hour(s) and 0 minute(s)
console.log(toTime(0)); // 0 hours ...
console.log(toTime(323500)); // 89 hours and 51 minutes
