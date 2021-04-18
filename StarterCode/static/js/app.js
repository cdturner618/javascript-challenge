// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {


    // Prevent the page from refreshing
    form.on('submit', () => {
        d3.event.preventDefault();
    });

    // Select the input element and get the raw HTML node
    var input = d3.select("#datetime");

    var inputValue = input.property("value");

    // console.log(inputValue);
    var filtered_data = tableData.filter(d => d.datetime == inputValue);
    console.log(filtered_data);
};




// var table = d3.select("table");
// table.html("<tbody></tbody>");
// var tableBody = d3.select("tbody");
// filtered_data.forEach(datedata => {
//     var trow = tableBody.append("tr")
//     Object.values(datedata).forEach(value => {
//         trow.append("td").text(value)
//     });
// });