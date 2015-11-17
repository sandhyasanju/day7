var data = [
  {
  "Name" : "sandhya",
  "Id" : "1456",
  "age" : "22",
  "dob" : "20/08/94",
  "salary" : "20000"
  },
  {
  "Name" : "harika",
  "Id" : "1458",
  "age" : "23",
  "dob" : "12/06/94",
  "salary" : "30000"
},
{
  "Name" : "niharika",
  "Id" : "1459",
  "age" : "21",
  "dob" : "12/08/94",
  "salary" : "40000"
},
{
  "Name" : "sainiharika",
  "Id" : "1659",
  "age" : "21",
  "dob" : "22/08/94",
  "salary" : "10000"
}
];
function create()
{
  var table = "<table id ='table1' border = '1' width = 'inherit'>";
  var colnames = Object.keys(data[0]);
  for(var i = 0; i<colnames.length; i++)
  {
  table += "<th id = 'th'>" + colnames[i] + '<p onclick="sortingI(' + i + ')" class = "p">' + "&#x025B4" + '</p>' + '<p onclick = "sortingD(' + i + ')" class = "p">' + "&#x025BE" + "</p>" + "</th>" ;
  }
  table += "<tbody>";
  var l = colnames.length;
  for (var r=0;r<data.length;r++)
  {
    table += "<tr>";
    for (var j = 0 ;j<l;j++ )
    table += "<td>" + data[r][colnames[j]] + "</td>";
  }
  table += "</tr>";
  table += "</tbody>";
  table += "</table>";
  var tab = document.getElementById("division1");
  tab.innerHTML=table;
  tab.id = "table2";
  tab.border = 1;
}
function sortingI(colid)
{
  var i, j, row1, row2, t;
  var table = document.getElementById("table1");
  for(i = 1 ; i < table.rows.length ; i++ )
  {
    for(j = 1 ; j < table.rows.length - 1 ; j++ )
    {
      row1 = table.rows[j].cells[colid].innerHTML;
      row2 = table.rows[j+1].cells[colid].innerHTML;
      if(row1 < row2)
      {
        t = table.rows[j].innerHTML;
        table.rows[j].innerHTML = table.rows[j+1].innerHTML;
        table.rows[j+1].innerHTML = t;
      }
    }
  }
}
function sortingD(colid)
{
  var i, j, row1, row2, t;
  var table = document.getElementById("table1");
  for(i = 1 ; i < table.rows.length ; i++ )
  {
    for(j = 1 ; j < table.rows.length - 1 ; j++ )
    {
      row1 = table.rows[j].cells[colid].innerHTML;
      row2 = table.rows[j+1].cells[colid].innerHTML;
      if(row1 > row2)
      {
        t = table.rows[j].innerHTML;
        table.rows[j].innerHTML = table.rows[j+1].innerHTML;
        table.rows[j+1].innerHTML = t;
      }
    }
  }
}
