




	////////////////////////////////////   DIGITAL CLOCK   ////////////////////////////////////


	function runDigitalClock() {
	    var today_d = new Date();
	    var hour_d = today_d.getHours();
	    var minute_d = today_d.getMinutes();
	    var d_period = d_GetPeriod(hour_d);
	    hour_d = d_FormatHour(hour_d);
	    minute_d = d_FormatMinute(minute_d);
	    document.getElementById('digitalClock').innerHTML = hour_d + ":" + minute_d + " " + d_period;
	    setTimeout(runDigitalClock, 500);
	}

	function d_GetPeriod(hour_d) {
        	
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

    function d_FormatHour(hour_d) {

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

    function d_FormatMinute(minute_d) {

        if (minute_d < 10)
        {
        	minute_d = "0" + minute_d;
    	}

        return minute_d;
    }


    ///////////////////////////////////////////////////////////////////////////////////////////




	///////////////////////////////////   AUDIO GREETING   ////////////////////////////////////


	function playMorning() { 
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


    ///////////////////////////////////////////////////////////////////////////////////////////




	/////////////////////////////////////   AUDIO CLOCK   /////////////////////////////////////



	var active = false;
	var a_hour = 0;
	var a_minute = 0;
	var a_period = " ";
	var hourGroup = " ";
	var timeString = " ";


	function runAudioClock() {
        
        if(active == false)
        {
            formatTime();
            speakGreeting();
            speakTime();
        }
    }



	function formatTime()
	    {	
	        active = true;
	        var a_today = new Date();
	        setHour(a_today);
	        a_GetPeriod();
	        setHourGroup();
	        setMinute(a_today);
	        a_FormatHour();
	        a_FormatMinute();
	        formatTimeText();
	        setTimeout(makeInactive, 8000);
	        

	       
	    }


	function setHour(a_today)
	    {
	        a_hour = a_today.getHours();
	    }


	function a_GetPeriod()
		{
	    	if(a_hour < 12)
	        {
	        	a_period = "AM";
	        }
	        else
	        {
	        	a_period = "PM"
	        }
	    }


	function setHourGroup()
	    {
	        switch (a_hour) 
	        {
	         case 0:
	         case 1:
	         case 2:
	         case 3:
	         case 4:
	         case 5:
	         case 20:
	         case 21:
	         case 22:
	         case 23:
	            hourGroup = "night";
	            break;

	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	            hourGroup = "morning";
	            break;

	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	            hourGroup = "afternoon";
	            break;

	        case 17:
	        case 18:
	        case 19:
	            hourGroup = "evening";
	            break;

	        default: hourGroup = "night";

	      }
	    }


	function speakGreeting ()
	    {
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


	function setMinute(dateTime)
	    {
	        a_minute = dateTime.getMinutes().toString(); 
	    }


	function a_FormatHour()
	    { 
	      if(a_hour < 1)
	        {
	          a_hour = 12;
	        }

	       else if(a_hour > 12)
	        {
	            a_hour = a_hour - 12;
	        }
	    }
	  
	  
	function a_FormatMinute()
		{
	      if(a_minute<10)
	      {
	          a_minute = "0" + a_minute;
	      }
	    }
	    
	       
	function formatTimeText()
		{
	    	timeString = "The time is, " + a_hour + ". " + a_minute + ". " + a_period;
	    }
	    
	    
	function speakTime()
		{
	    responsiveVoice.speak("" + timeString, "US English Female", {rate: 1.0});
	    
	    }


	function makeInactive()
	    {
	        active = false;
	    }

