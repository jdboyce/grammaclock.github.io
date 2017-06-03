




	///////////////////////////////   DIGITAL CLOCK   ///////////////////////////////


	function runClock() {
	    var today = new Date();
	    var hour = today.getHours();
	    var minute = today.getMinutes();
	    var period = getTimePeriod(hour);
	    hour = formHour(hour);
	    minute = formMinute(minute);
	    document.getElementById('clock').innerHTML = hour + ":" + minute + " " + period;
	    setTimeout(runClock, 500);
	}

	function getTimePeriod(hour) {
        	
        	var timePeriod;

            if(hour<12)
            {
                timePeriod = " AM";
            }
            else
            {
                timePeriod = " PM"
            }

            return timePeriod;
    }

    function formHour(hour) {

        var newHour;
        
        if(hour < 1)
        {
        	newHour = 12;
        }
        else if(hour > 12)
        {
            newHour = hour - 12;
        }
        else
        {
            newHour = hour;
        }

        return newHour;
    }

    function formMinute(minute) {

        if (minute < 10)
        {
        	minute = "0" + minute;
    	}

        return minute;
    }


    ///////////////////////////////////////////////////////////////////////////////////




















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











var active = false;
var hour = 0;
var minute = 0;
var timePeriod = " ";
var hourGroup = " ";
var timeText = " ";


function checkIfActive()
    {
        if(active == false)
        {
            getTime();
        }
    }


function getTime()
    {	
        active = true;
        var d = new Date();
        setHour(d);
        settimePeriod();
        setHourGroup();
        greeting();
        setMinute(d);
        formatHour();
        formatMinute();
        formatTimeText();
        setTimeout(makeInactive, 8000);
        speakTime();

       
    }


function setHour(dateTime)
    {
        hour = dateTime.getHours();
    }


function settimePeriod()
	{
    	if(hour<12)
        {
        	timePeriod = "AM";
        }
        else
        {
        	timePeriod = "PM"
        }
    }


function setHourGroup()
    {
        switch (hour) 
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


function greeting ()
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
        minute = dateTime.getMinutes().toString(); 
    }


function formatHour()
    { 
      if(hour < 1)
        {
          hour = 12;
        }

       else if(hour > 12)
        {
            hour = hour - 12;
        }
    }
  
  
function formatMinute()
	{
      if(minute<10)
      {
          minute = "0" + minute;
      }
    }
    
       
function formatTimeText()
	{
    	timeText = "The time is, " + hour + ". " + minute + ". " + timePeriod;
    }
    
    
function speakTime()
	{
    responsiveVoice.speak("" + timeText, "US English Female", {rate: 1.0});
    
    }


function makeInactive()
    {
        active = false;
    }

