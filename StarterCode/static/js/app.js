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
    // tableData = data;

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Deep copy 
    var filtered_data = JSON.parse(JSON.stringify(data));
    // filtered_data = data;

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime").property('value');
    var inputCity = d3.select("#city").property('value');
    var inputState = d3.select("#state").property('value');
    var inputCountry = d3.select("#country").property('value');
    var inputShape = d3.select("#shape").property('value');

    // console.log(inputValue);
    if (inputDate)
        filtered_data = filtered_data.filter(d => d.datetime == inputDate);
    if (inputCity)
        filtered_data = filtered_data.filter(d => d.city == inputCity);
    if (inputState)
        filtered_data = filtered_data.filter(d => d.state == inputState);
    if (inputCountry)
        filtered_data = filtered_data.filter(d => d.country == inputCountry);
    if (inputShape)
        filtered_data = filtered_data.filter(d => d.shape == inputShape);

    console.log(filtered_data);
    // console.log(tableData);


    var table = d3.select("table");
    table.html("<tbody></tbody>");
    var tableBody = d3.select("tbody");
    filtered_data.forEach(datedata => {
        var trow = tableBody.append("tr")
        Object.values(datedata).forEach(value => {
            trow.append("td").text(value)
        });
    });



};