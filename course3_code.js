/* 
$(document).ready(function(){
  $("h1").click(function() {
	  $(this).css("background-color", "red");  
  });
});  
 */
 
/* 
 $(document).ready(function(){
	 $("h1").mousedown(function() {
		 $(this).css("background-color", "red");
	 });
		 
	 $("h1").mouseup(function() {
		 $(this).css("background-color", "yellow");  
     });
}); 
 */

/* 
 $(document).ready(function(){
	 $("h1").mouseenter(function() {
		 $(this).css("background-color", "red");
	 });
		 
	 $("h1").mouseleave(function() {
		 $(this).css("background-color", "yellow");  
     });
}); 
*/ 
  
/* 
 $(document).ready(function(){
	 $("h1").mouseenter(function() {
		 $(this).css("background-color", "red");
	 });
		 
	 $("h1").mouseleave(function() {
		 $(this).css("background-color", "yellow");  
		 $(this).unbind();
     });
}); 
*/

/*   
 $(document).ready(function(){
	 $("h1").mouseenter(function() {
		 $(this).css("background-color", "red");
	 });
		 
	 $("h1").mouseleave(function() {
		 $(this).css("background-color", "yellow");  
		 $("*").unbind();
     });
}); 
*/

 $(document).ready(function(){
	 $("h1").mouseenter(function() {
		 $(this).css("background-color", "red");
	 });
		 
	 $("h1").mouseleave(function() {
		 $(this).css("background-color", "yellow");  
		 $("*").unbind("mouseleave");
     });
}); 
  




		  
		  
		  
		  
		  
  