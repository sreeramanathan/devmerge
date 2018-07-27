$(document).ready(function(){
		  $.get('./Data.txt', function(data) { alert(data); }, 'text');
          $("#nof1").attr("data-to", "1000");
          $("#nof2").attr("data-to", "1500");
          $("#nof3").attr("data-to", "2000");
      });