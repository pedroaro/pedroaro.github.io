google.charts.load('current', {packages: ['corechart','line']});
function drawChart() {
   // Define the chart to be drawn.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Browser');
   data.addColumn('number', 'Percentage');
   data.addRows([
      ['Hours Left', 150],
      ['Hours Spent', 50],
   ]);
      
   // Set chart options
   var options = {
      'title':'Field Hours',
      pieHole: 0.4
   };

   // Instantiate and draw the chart.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
   chart.draw(data, options);
}

function drawChart2() {
   // Define the chart to be drawn.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Browser');
   data.addColumn('number', 'Percentage');
   data.addRows([
      ['Hours Left', 100],
      ['Hours Spent', 90],
   ]);
      
   // Set chart options
   var options = {
      'title':'Office Hours',
      pieHole: 0.4
   };

   // Instantiate and draw the chart.
   var chart = new google.visualization.PieChart(document.getElementById('chart_div2'));
   chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChart2);

$(window).resize(function(){
  drawChart();
  drawChart2();

});