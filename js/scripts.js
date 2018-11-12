$(document).ready(function(){
  console.log ('DOM loaded');

var url = './js/slsummary.json';
var data = [];
var xCat = [];
var percentageFree = [];
var percentageFullPrice = [];
var millionFree = [];
var millionReduced = [];
var millionFullPrice = [];
var outerArray = []; //declare variables

  $.ajax({ //load JSON data
    type:'GET',
    dataType:'json',
    data: data,
    url: url,
    async:true,
    success: function(data){
      //log data
      //Loop through and push the data into the empty arrays
      for (i = 0; i < data.length; ++i) {

         xCat.push(data[i].timestamp); //push relevant data into array for use - in this case, the timestamp
         percentageFree.push((data[i].percentFree));
         percentageFullPrice.push((data[i].percentFullPrice));
         millionFree.push((data[i].Free));
         millionReduced.push((data[i].ReducedPrice));
         millionFullPrice.push((data[i].FullPrice));

      }

      buildChart(); //build the chart
    }
  }); //close AJAX
function buildChart() {

  var myChart = Highcharts.chart('line-chart', { //first chart is a standard line chart

      chart: {
          type: 'line'
      },
      title: {
          text: 'Frequency of Paid and Free Meals'
      },
      subtitle: {
          text: 'Source: National School Lunch Assistance Program Participation and Meals Served Data'
      },
      xAxis: {
          categories: xCat //xcat is the timestamp in this case
      },
      yAxis: {
          min: 0, //starts at 0
          title: {
              text: 'Participation %'
          }
      },
      tooltip: { //tooltip
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      series: [{
          name: '% of students receiving free meals',
          data: percentageFree
      }, {
          name: '% of students paying full price',
          data: percentageFullPrice
      }]
  });

   var myChart = Highcharts.chart('stacked-column-chart', { //2nd chart is a stacked column chart

       chart: {
           type: 'column'
       },
       title: {
           text: 'Total Meals Served'
       },
       subtitle: {
           text: 'Source: National School Lunch Assistance Program Participation and Meals Served Data'
       },
       xAxis: {
           categories: xCat
       },
       yAxis: {
           min: 0,
           title: {
               text: 'Quantity of Meals (Millions)'
           }
       },
       tooltip: {
           headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
           pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
               '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
           footerFormat: '</table>',
           shared: true,
           useHTML: true
       },
       plotOptions: {
           column: {
               stacking: 'normal', //makes series stack instead of setting them side by side
               pointPadding: .1, //bar size
           }
       },
       series: [{
         name: 'Amount of students paying full price',
         data: millionFullPrice
       }, {
         name: 'Amount of students paying reduced price',
         data: millionReduced
       }, {
         name: 'Amount of students receiving free meals',
         data: millionFree
       }]
   });
  }
});
