






		//    DIGITAL CLOCK

//////////////////////////////////////////////////////////////////////////////////////////////////////

	function runDigitalClock(){
	    var today_d = new Date();
	    var hour_d = today_d.getHours();
	    var minute_d = today_d.getMinutes();
	    var period_d = getPeriod_d(hour_d);
	    hour_d = formatHour_d(hour_d);
	    minute_d = formatMinute_d(minute_d);
	    document.getElementById('digitalClock').innerHTML = hour_d + ":" + minute_d + " " + period_d;
	    setTimeout(runDigitalClock, 500);
	}


	function getPeriod_d(hour_d){        	
    	var timePeriod;

        if(hour_d < 12)
        {
            timePeriod = " AM";
        }
        else
        {
            timePeriod = " PM"
        }
        return timePeriod;
    }

    
    function formatHour_d(hour_d){
        var formattedHour;
        
        if(hour_d < 1)
        {
        	formattedHour = 12;
        }
        else if(hour_d > 12)
        {
            formattedHour = hour_d - 12;
        }
        else
        {
            formattedHour = hour_d;
        }
        return formattedHour;
    }


    function formatMinute_d(minute_d){
        if (minute_d < 10)
        {
        	minute_d = "0" + minute_d;
    	}
        return minute_d;
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////




		//    AUDIO GREETING

//////////////////////////////////////////////////////////////////////////////////////////////////////

	function playMorning(){ 
	    var x = document.getElementById("morning"); 
	    x.play(); 
	} 


	function playAfternoon() { 
	    var x = document.getElementById("afternoon"); 
	    x.play(); 
	} 


	function playEvening() { 
	    var x = document.getElementById("evening"); 
	    x.play(); 
	} 


	function playNight() { 
	    var x = document.getElementById("night"); 
	    x.play(); 
	} 

//////////////////////////////////////////////////////////////////////////////////////////////////////




		//    AUDIO CLOCK

//////////////////////////////////////////////////////////////////////////////////////////////////////

	var active = false;
	var hour_a = 0;
	var minute_a = 0;
	var period_a = " ";
	var hourGroup = " ";
	var timeString = " ";


	function runAudioClock(){
        if(active == false)
        {
            formatTime();
            speakGreeting();
            speakTime();
        }
    }


	function formatTime(){	
        active = true;
        var today_a = new Date();
        setHour(today_a);
        a_GetPeriod();
        setHourGroup();
        setMinute(today_a);
        a_FormatHour();
        a_FormatMinute();
        formatTimeText();
        setTimeout(makeInactive, 8000);
    }


	function setHour(today_a){
        hour_a = today_a.getHours();
    }


	function a_GetPeriod(){
    	if(hour_a < 12)
        {
        	period_a = "AM";
        }
        else
        {
        	period_a = "PM"
        }
    }


	function setHourGroup(){
    	switch (true) 
        {
	        case (hour_a >= 0 && hour_a <= 5):
			case (hour_a >= 20 && hour_a <= 23):
	            hourGroup = "night";
	            break;
			case (hour_a >= 6 && hour_a <= 11):
	            hourGroup = "morning";
	            break;
		    case (hour_a >= 12 && hour_a <= 16):
	            hourGroup = "afternoon";
	            break;
		    case (hour_a >= 17 && hour_a <= 19):
	            hourGroup = "evening";
	            break;
	        default: hourGroup = "night"; 
    	}
    }


	function speakGreeting (){
        switch(hourGroup)
        {
            case "morning":
                    playMorning();
                    break;
            case "afternoon":
                    playAfternoon();
                    break;
            case "evening":
                    playEvening();
                    break;
            case "night":
                    playNight();
                    break;
            default:
                    playNight();
        }
    }


	function setMinute(dateTime){
        minute_a = dateTime.getMinutes().toString(); 
    }


	function a_FormatHour(){ 
        if(hour_a < 1)
        {
        	hour_a = 12;
        }
        else if(hour_a > 12)
        {
            hour_a = hour_a - 12;
        }
    }
	  
	  
	function a_FormatMinute(){
    	if(minute_a < 10)
	    {
	        minute_a = "0" + minute_a;
	    }
    }
	    
	       
	function formatTimeText(){
    	timeString = "The time is, " + hour_a + ". " + minute_a + ". " + period_a;
    }
	    
	    
	function speakTime(){
	    responsiveVoice.speak("" + timeString, "US English Female", {rate: 1.0});
	}


	function makeInactive(){
        active = false;
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////
