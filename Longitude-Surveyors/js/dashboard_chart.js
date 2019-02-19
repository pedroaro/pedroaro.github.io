google.charts.load('current', {packages: ['corechart','line']});
function drawChart() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Month');
  data.addColumn('number', 'Budget');
  data.addColumn('number', 'Spent');
  data.addRows([
     ['Jan',  80000, 60000],
     ['Feb',  55000, 45000],
     ['Mar',  55000, 55000],
     ['Apr',  65000, 66000],
     ['May',  65000, 65000],
     ['Jun',  45000, 32000],
     
     ['Jul',  25000, 21000],
     ['Aug',  65000, 56000],
     ['Sep',  35000, 23000],
     ['Oct',  75000, 67000],
     ['Nov',  15000, 21000],
     ['Dec',  65000, 35000]
  ]);
     
  // Set chart options
  var options = {
     hAxis: {
        title: 'Month',
     },
     vAxis: {
        title: 'Money (USD)',
     }
  };

  // Instantiate and draw the chart.
  var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart);

$(window).resize(function(){
  drawChart();
});