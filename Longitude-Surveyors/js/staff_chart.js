google.charts.load('current', {packages: ['corechart','line']});
function drawChart() {
  // Define the chart to be drawn.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Month');
  data.addColumn('number', 'Avila Burger');
  data.addColumn('number', 'Cinemall');
  data.addColumn('number', 'Wallmart Miami');
  data.addColumn('number', 'Total Time Percentage');
  data.addRows([
     ['Jan',  35, null, 40, 75],
     ['Feb',  35, null, 40, 75],
     ['Mar',  35, 20, 40, 95],
     ['Apr',  35, 20, 40, 95],
     ['May',  null, 20, 40, 60],
     ['Jun',  null, 20, 40, 60],
     
     ['Jul',  null, 20, 40, 60],
     ['Aug',  null, 20, 40, 60],
     ['Sep',  null, 20, 40, 60],
     ['Oct',  null, null, 40, 40],
     ['Nov',  null,  null, 40, 40],
     ['Dec',  null,  null,  null, 0]
  ]);
     
  // Set chart options
  var options = {'title' : 'Average Duty Time of Pedro Rodríguez',
     hAxis: {
        title: 'Month',
     },
     vAxis: {
        title: 'Duty Time Percent',
     }
  };

  // Instantiate and draw the chart.
  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart);

$(window).resize(function(){
  drawChart();
});