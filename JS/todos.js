//Striking off the done TODOS
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function(event){
	//Fade out the li, which contains the span, and the callback removes it
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});       
	//Stop the propagation of the event listener, as it may cause unwanted result in the upper elements              											
	event.stopPropagation();															
});

//add functionality to the text box, so that new todos can be added
$("input[type='text']").keypress(function(event){
	var newTodo;
	//value typed stored in the variable newTodo is taken after enter is pressed
	if(event.which === 13){
		newTodo = $(this).val();
		//empty the text box after the addition of the previous Todo														
		$(this).val("");	
		//create a new entry to the todo list															
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
	}
});

//adding functionality to the plus icon
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(500);
});