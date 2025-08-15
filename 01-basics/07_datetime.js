let myDate = new Date();

console.log(myDate); // Current date and time
console.log(myDate.toString()); // String representation of the date

console.log(myDate.toLocaleDateString('en-US')); // Locale-specific date format
console.log(myDate.toLocaleTimeString('en-IN')); // Locale-specific time format
console.log(typeof myDate); // "object", because Date is a non-primitive type

let myCreateDate = new Date("2025-07-18T10:20:30Z"); // ISO 8601 format
console.log(myCreateDate.toDateString()); // "Sun Jan 12 2025"\

let myTimestamp = Date.now();

console.log(myCreateDate.getTime()); // Current timestamp in milliseconds since January 1, 1970

console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds

let newDate = new Date();

console.log(newDate.getFullYear()); // 2025
console.log(newDate.getMonth()); // 0-11 (January is 0)
console.log(newDate.getDate()); // 1-31 (day of the month)
console.log(newDate.getDay()); // 0-6 (Sunday is 0)
console.log(newDate.getHours()); // 0-23 (24-hour format)
console.log(newDate.getMinutes()); // 0-59
console.log(newDate.getSeconds()); // 0-59
console.log(newDate.getMilliseconds()); // 0-999

console.log(`${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()}`); // "2025-1-12"

newDate.toLocaleString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
})
