'use strict';

let tableColumns = ['Month', 'Sales'];
let tableData = {
  'January': 50000,
  'February': 10000,
  'March': 85000,
  'April': 56000,
  'May': 98000,
  'June': 12
}
let table = document.getElementById('fancyTable');
let headerRow = document.createElement('tr');
table.appendChild(headerRow);

for (let i = 0; i < tableColumns.length; i++) {
  let headerItem = document.createElement('th');
  headerItem.innerText = tableColumns[i]
  headerRow.appendChild(headerItem);
}

for (let i = 0; i < Object.keys(tableData).length; i++) {
  let row = document.createElement('tr');
  for (let j = 0; j< 2; j++){
    let rowItem = document.createElement('td');
    let element = Object.entries(tableData);
    rowItem.innerText = element[i][j];
    row.appendChild(rowItem);
    if(j = 0 || j % 2 != 0){
      rowItem.className = 'data-currency';
    }
  }
  console.log(Object.entries(tableData));
  table.appendChild(row);
}