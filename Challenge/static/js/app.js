const tableData = data;
var tbody = d3.select('tbody');
let filters = {};

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

function updateFilters() {
    let tempFilter = d3.select(this);
    let tempFilterID = tempFilter.property('id');
    let tempFilterValue = tempFilter.property('value');
    if(tempFilterValue) {
      filters[tempFilterID] = tempFilterValue;
    } else {
      delete filters[tempFilterID];
    }
    filterTable();
}

function filterTable() {
  let filteredData = tableData;
  Object.entries(filters).forEach(criteria => {
    filteredData = filteredData.filter(row => row[criteria[0]] === criteria[1]);
  });
  filteredData = new Set(filteredData);
  buildTable(filteredData);
}

d3.selectAll("input").on("change", updateFilters);
buildTable(tableData);