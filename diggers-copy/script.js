$(document).ready(function(){
	$('.animsition').animsition({
		outClass: 'fade-out-right',
		inClass: 'fade-in-left',
		linkElement: '.animsition-link'
	});
});


function date(){
	var today = new Date();
	var week_arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	var weekDay = document.getElementsByClassName('today');

	for(var i = 0; i < week_arr.length; i++){
		weekDay.innerHTML = week_arr[i];
		console.log(week_arr[i]);
	}
}
//date();
