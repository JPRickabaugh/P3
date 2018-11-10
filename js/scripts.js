$(document).ready(function(){
  console.log ('DOM loaded');


//Initialize variables
var url = './js/slsummary.json';
var data = [];
//You need to use the JSON data to build new arrays to replace the hard-coded ones in HighCharts
var xCat = [];
var popArray= [];
var airportArray = [];
var percentageFree = [];
var percentageFullPrice = [];

var outerArray = [];



/*Note: The HighCharts starter code uses the jQuery ready function to build the chart on page load.
If you move the .ready to the top of your JS file, you must add your own callback function
to build the chart after the AJAX call.
*/

//Load the JSON data
  $.ajax({
    type:'GET',
    dataType:'json',
    data: data,
    url: url,
    async:true,
    success: function(data){
      //console.log(data);
      //Loop through and push the data into the empty arrays for Population and Airports
      for (i = 0; i < data.length; ++i) {

         xCat.push(data[i].timestamp);
         percentageFree.push((data[i].percentFree));
         percentageFullPrice.push((data[i].percentFullPrice));
  //Build an array of arrays for a scatterplot
        // popArray.push(data[i].Population);
         //airportArray.push(data[i].Airports);
         //outerArray.push([data[i].Population, data[i].Airports]);
      }

      //Call the function that builds the chart
      buildChart();
    }
  });//close AJAX call

console.log(xCat);
//console.log(popArray);
function buildChart() {

  var myChart = Highcharts.chart('line-chart', {

      chart: {
          type: 'line'//same thing as bar chart, just vertical
      },
      title: {
          text: 'Frequency of Paid and Free Meals'
      },
      subtitle: {
          text: 'Source: data.gov'
      },
      xAxis: {
          categories: xCat
      },
      yAxis: {
          //min: 0,
          title: {
              text: 'Participation %'
          }
      },
      //ADD TOOLTIP & PLOTOPTIONS AFTER YOU DEMOSTRATE THE BASIC CHART
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
              pointPadding: 0.1,//CHANGE THE WIDTH AND PADDING OF THE BARS
              borderWidth: 0
          }
      },
      series: [{
          name: '% of students receiving free meals',
          data: percentageFree

      }, {
        name: '% of students paying full price',
        data: percentageFullPrice
      }
    ]

  });



 }



});
