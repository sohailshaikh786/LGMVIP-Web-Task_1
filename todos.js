// Tick to completed task
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

// delete completed task
$("ul").on("click", "span", function (event) {
	$(this).parent().fadeOut(400, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

// input through plus sign
$(".fa-plus").click(function () {
	$("input[type='text']").fadeToggle();
});

// Press enter to add task
$("input[type='text']").keypress(function (event) {
	if (event.which === 13) {
		//grabbing new todo text from the input 
		var toDoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>")
	}
})
