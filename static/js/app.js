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

// Data-Driven Documents (D3 for short) is a JavaScript 
// library that adds interactive functionality, such as 
// when users click a button to filter a table. It works 
// by "listening" for events, such as a button click, 
// then reacts according to the code we've created.

// // if-statement syntax
// if ( condition ) { code to execute }

// // pseudocode practice
// if (a date is entered) {
//     Filter the default data to show only the date entered
// };

// if (date) {
//     filteredData = filteredData.filter(row => row.datetime === date);
// };

// -----------------------------------------------------------------------------------------------------
// ABOVE: Module notes
// -----------------------------------------------------------------------------------------------------
// BELOW: Module work
// -----------------------------------------------------------------------------------------------------

// import the data from data.js 
const tableData = data;

// Reference the HTML table using d3 
var tbody = d3.select("tbody");

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

// // Filtering function
// // Named 'handle click' because it will be handling what to do after
// // an input is given, such as filtering the table by date

// function handleClick() {
//     let date = d3.select("#datetime").property("value");
//     let filteredData = tableData;

// // Check for a date filter using an if statement

//     if (date) {
//         filteredData = filteredData.filter(row => row.datetime === date);
//     };

//     buildTable(filteredData);
// };

// Module version with comments:

function handleClick() {
  // Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  }

   // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
  
