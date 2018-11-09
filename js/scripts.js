$(document).ready(function(){
  console.log('jQ loaded');

  var dataPoints = [];
    var chart = new CanvasJS.Chart("chartContainer",{
      title:{
        text:"Rendering Chart with dataPoints from External JSON"
      },
      data: [{
        type: "line",
        dataPoints : dataPoints,
      }]
    });
$.getJSON("slsummary.json", function(data) {
    $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
    });
    chart.render();
});


  /*
  $.getJSON("../js/slsummary.json", function (json) {
    var labels = json.map(function(item) {
      return item.timestamp;
    });

    var data = {
      labels: labels,
      datasets: [
      {
        label: "My First dataset",
        fillColor: "rgba(220,220,200,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [14.95, 20.54, 24.07, 29.92, 32.79, 34.96, 37.75, 39.84, 40.08, 38.58, 37.04, 37.59, 41.09, 42.79, 44.78, 44.02, 41.95, 42.19, 41.84, 40.50, 40.08, 40.66, 42.56, 45.53, 46.99, 48.22, 48.25, 48.65, 49.05, 48.87, 48.15, 47.62, 46.91, 47.50, 48.24, 48.62, 49.32, 49.17, 49.02, 49.68, 52.08, 55.35, 57.86, 58.99, 61.56, 62.95, 64.92, 66.12, 66.67]
      },
      {
        label: "My Second dataset",
        fillColor: "rgba(120,120,100,0.5)",
        strokeColor: "rgba(120,120,120,0.8)",
        highlightFill: "rgba(120,120,120,0.75)",
        highlightStroke: "rgba(120,120,120,1)",
        data: [85.05, 79.46, 73.86, 68.03, 65.18, 63.01, 59.84, 57.03, 55.34, 55.81, 56.67, 55.26, 51.55, 50.22, 48.70, 49.15, 51.27, 51.48, 51.88, 52.89, 53.31, 52.28, 50.41, 47.56, 45.78, 44.66, 44.36, 43.63, 42.97, 42.86, 42.96, 43.59, 43.64, 42.86, 41.90, 41.38, 41.22, 41.20, 41.18, 40.32, 38.02, 34.91, 33.96, 32.18, 29.97, 28.85, 27.87, 26.97, 26.67]
      }
      ]
    };

    var ctx = document.getElementById("lineChart").getContext("2d");
    ctx.canvas.width = 400;
    ctx.canvas.height = 400;

    var lineChart = new Chart(ctx).Bar(data);
  });

  *\



/*  const CHART = document.getElementById("lineChart");
  console.log(CHART);
  let lineChart = new Chart(CHART, {
    type: 'line',
    data:
  }) */




/* var url = 'js/slsummary.json';
var slsummary = '';

  $.ajax({
    type:'GET',
    url: url,
    data: slsummary,
    async: true,
    dataType: 'json',
    success:function(slsummary){
      console.log(slsummary);



    }
  })
*/

});
