<!--

/*
 *
 *	"Count-Up (Form)"
 *
 *
 *	Created by Glub, Un-Inc. [06-02-97]
 *
 *	Copyright (C) 1996-97  Glub, Un-Inc.  All Rights Reserved.
 *	Feel free to reuse or modify this code,
 *	provided this header remains in tact.
 *	[http://www.glub.com/] [http://www.dotdotcom.com/]
 *
*/



/* Initializations */
var timerID;
var timerRunning = false;
var today = new Date();
var startday = new Date();
var secPerDay = 0;
var minPerDay = 0;
var hourPerDay = 0;
var secsLeft = 0;
var secsRound = 0;
var secsRemain = 0;
var minLeft = 0;
var minRound = 0;
var minRemain = 0;
var timeRemain = 0;

/* This function will stop the clock */
function stopclock()
{
	if(timerRunning)
		clearTimeout(timerID);

	timerRunning = false;
}

/* This function will start the clock */
function startclock()
{
	stopclock();
	showtime1();
}

/* This function will display the count-up */
function showtime1()
{
	startday = new Date("August 18, 2000 18:30 EST");
	startday.setYear("2000");
	today = new Date();
	secsPerDay = 1000 ;
	minPerDay = 60 * 1000 ;
	hoursPerDay = 60 * 60 * 1000;
	PerDay = 24 * 60 * 60 * 1000;

	/* Seconds */
	secsLeft = (today.getTime() - startday.getTime()) / minPerDay;
	secsRound = Math.round(secsLeft);
	secsRemain = secsLeft - secsRound;
	secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = (secsLeft - secsRound) * 60;
	secsRemain = Math.round(secsRemain);

	/* Minutes */
	minLeft = ((today.getTime() - startday.getTime()) / hoursPerDay);
	minRound = Math.round(minLeft);
	minRemain = minLeft - minRound;
	minRemain = (minRemain < 0) ? minRemain = 60 - ((minRound - minLeft) * 60) : minRemain = ((minLeft - minRound) * 60);
	minRemain = Math.round(minRemain - 0.495);

	/* Hours */
	hoursLeft = ((today.getTime() - startday.getTime()) / PerDay);
	hoursRound = Math.round(hoursLeft);
	hoursRemain = hoursLeft - hoursRound;
	hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft) * 24)  : hoursRemain = ((hoursLeft - hoursRound) * 24);
	hoursRemain = Math.round(hoursRemain - 0.5);

	/* Days */
	daysLeft = ((today.getTime() - startday.getTime()) / PerDay);
	daysLeft = (daysLeft - 0.5);
	daysRound = Math.round(daysLeft);
	daysRemain = daysRound;

	/* Time */
	if (daysRemain == 1)
	{
		day_rem = " day, "
	}
	else
	{
  		day_rem = " days, "
	}

	if (hoursRemain == 1)
	{
		hour_rem = " hour, "
	}
	else
	{
		hour_rem = " hours, "
	}

	if (minRemain == 1)
	{
		min_rem = " minute, "
	}
	else
	{
		min_rem = " minutes, "
	}

	if (secsRemain == 1)
	{
		sec_rem = " second"
	}
	else
	{
		sec_rem = " seconds"
	}

	timeRemain = daysRemain + day_rem + hoursRemain + hour_rem + minRemain +
	min_rem + secsRemain + sec_rem;
	document.up.face.value = timeRemain;
	timerID = setTimeout("showtime1()",1000);
	timerRunning = true;
}

//-->