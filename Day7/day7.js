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
  }
];
function create()
{
  var table = "<table id ='table1' border = '1' width = 'inherit'>";
  var colnames = Object.keys(data[0]);
  for(var i = 0; i<colnames.length; i++)
  {
  table += "<th>" + colnames[i] + "</th>" ;
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
