console.log("Start");

setTimeout(() => {
    console.log("Timeout Callback");
}, 2000);

console.log("End");


// setTimeout(() => {
//     console.log("Timeout Callback");
// }, 2000);

// const start = Date.now();
// while (Date.now() - start < 5000) {}

// console.log("End");