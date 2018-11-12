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
     pageLength: 7, //sets length to 7 entries
     responsive: true,
     //.responsive.rebuild(); these two functions were supposed to aid in responsiveness, but they wouldn't work for me
     //.responsive.recalc(); i also tried data priority for removing columns, but that wouldn't work either. will keep tinkering.
});

// for some reason the only way i could get data tables to work was to put its code in its own scripts file
