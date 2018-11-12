$('#results').DataTable( {
     "ajax": "js/slsummarytext.txt", //txt version of the json data with the necessary changes
     "columns": [
         { "data": "timestamp"}, 
         { "data": "Free" },
         { "data": "ReducedPrice" },
         { "data": "FullPrice" },
         { "data": "Total" },
         { "data": "percentFree"},
         { "data": "percentFullPrice"} //columns for all the data
       ],
       lengthChange: false, //gets rid of length changing menu - caused issues when table would outgrow grid areas
       pageLength: 7 //sets length to 7 entries
});
// for some reason the only way i could get data tables to work was to put its code in its own scripts file
