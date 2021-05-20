// // import the data from data.js 
// // (module file provided)
// const tableData = data;

// // Reference the HTML table using d3 
// // (d3=JS library, ("tbody")=HTML tag for JS identification)
// var tbody = d3.select("tbody");

// // Simple JavaScript console.log statement
// function printHello() {
//     console.log("Hello there!");
//   }

// // Functions can call other functions
// function doubleAddition(c, d) {
//     var total = addition(c, d) * 2;
//     return total;
//   }

// // Simple JavaScript log statement
// function printHello() {
//     return "Hello there!";
//   }

// // Fat arrow function
// printHello = () => "Hello there!";

// // Original doubleAddition function
// function doubleAddition(c, d) {
//     var total = addition(c, d) * 2;
//     return total;
//   }

// // Fat arrow function
// doubleAddition = (c, d) => addition(c, d) * 2;

// To iterate through each name in JavaScript, we 
// can create a for loop. First, type the following 
// in your console:

// function listLoop(userList) {
//    for (var i = 0; i < userList.length; i++) {
//      console.log(userList[i]);
//    }
// }

// for (var i = 0; i < vegetables.length; i++) {
// }

// This time we'll loop through numbers without using an array.

// for (var i = 0; i < 5; i++) {
//    console.log("I am " + i);
// }
// -----------------------------------------------------------------------------------------------------
// ABOVE: Module notes
// -----------------------------------------------------------------------------------------------------
// BELOW: Module work
// -----------------------------------------------------------------------------------------------------


// // BELOW BUILT DURING MODULE
// // import the data from data.js 
// const tableData = data;

// // Reference the HTML table using d3 
// var tbody = d3.select("tbody");

// // Create new function
// function buildTable(data) {
//     tbody.html("");
//     data.forEach((dataRow) => {
//         let row = tbody.append("tr");
//         Object.values(dataRow).forEach((val) => {
//             let cell = row.append("td");
//             cell.text(val);
//             }
//         );
//     });
// }

// Module version with comments:

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
  

