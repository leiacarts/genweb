function getTimex(){

	//get data on time
	var timex = new Date();
	
	//set up variables
	var datex = timex.getDate();
	var monthx = timex.getMonth();
	var dayx = timex.getDay();
	var yearx = timex.getFullYear();
	var hoursx = timex.getHours();
	var minutesx = timex.getMinutes();
	var secondsx = timex.getSeconds();
	
	var weekArray = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
	
	var monthArray = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
	
	var militaryTimeArray = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]
	
	//referenced https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
	var ampm = hoursx >= 12 ? 'pm' : 'am';
	hoursx = hoursx % 12;
	hoursx = hoursx ? hoursx : 12;
	
	//interact with html
	var clockx = document.querySelector('#clock');
	clockx.innerHTML = weekArray[dayx] + " " + monthArray[monthx] + " " + datex + ", " + yearx + 
	"<br>" + militaryTimeArray[hoursx] + ":" + minutesx + ":" + secondsx + " " + ampm;
	
	clockDiv.innerHTML += clock;
	}
	
	//updates time
	setInterval(function(){
		getTimex()
	}, 1000)
	
	getTimex()
	
	