// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the alien report data from data.js
// console.log(data);

//Loop Through `data` and console.log each alien report object so you can access it later
data.forEach(function (alienReportData) {
    // console.log(alienReportData);
});
//Put the alien data into a table
data.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});
//select submit button
var submit = d3.select("#filter-btn");
//create function that filters by date when someone enters one
submit.on("click", function () {
  
    // Prevent the page from refreshing
    d3.event.preventDefault();
  console.log("button clicked");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");



    // clear the input value
    d3.select("#datetime").node().value = "";

    var filteredData = data
    var filteredData = data.filter(datum => datum.datetime === inputValue);
    tbody.text("")
    // console.log(filteredData)
    // loop through to create new table
    filteredData.forEach((dateData) => {
        var row = tbody.append("tr");
        Object.entries(dateData).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });

    })
});
