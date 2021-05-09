const tableData = data;
var tbody = d3.select('tbody');

function buildTable(x) {
    tbody.html("");
    x.forEach((i) => {
      let row = tbody.append("tr");
      Object.values(i).forEach((j) => {
        let cell = row.append("td");
        cell.text(j);
        });
    });
  }

function filterData() {
    let filteredData = tableData;
    let date = d3.select("#datetime").property("value");
    if (date != undefined) {
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", filterData);
buildTable(tableData);