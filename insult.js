<!--

var O=0
var S=0
var G=0
var P=0
var I=0
var W=0
var L=0
var Insult=""
var resolution=""

function OldEnough()
	{
	if (!confirm("Do you solemnly swear you're over the age of 18? Click OK if you do."))
	history.go(-1)
	return "<HR>"
	}

document.writeln(OldEnough())

function process()
{

BuildInsult()
alert(Insult)
}

function BuildInsult(){
currentdate = new Date ()
seconds = currentdate.getSeconds()

if (S==1)
Insult = "You "  + Political() + Intelligence() + Weight() + Looks() + Gender() + "!!!!"
else if (S==2)
Insult = "You " + Political() + Intelligence() + Weight() + Looks() + Ending() + Gender() + "!!!!"
else if(S==3)
Insult = "You " + RandomEnd() + Political() + Intelligence() + Weight() + Looks() + Ending() + Gender() + "!!!!"
else if (S==0)
Insult = "You "  + Political() + Intelligence() + Weight() + Looks() + Gender() + "!!!!"
}



// Insult Code //



function RandomMale(){
	
	if (seconds <6)
		return "dick "
	else if (seconds <11)
		return "bastard"
	else if (seconds <16)
		return "sperm-bank "
	else if (seconds <21)
		return "dickwad "
	else if (seconds <26)
		return "dickhead "
	else if (seconds <31)
		return "penis "
	else if (seconds <36)
		return "ape "
	else if (seconds <41)
		return "weiner "
	else if (seconds <46)
		return "pecker "
	else if (seconds <51)
		return "prick "
	else if (seconds <56)
		return "jerk-off "
	else if (seconds <61)
		return "schmuck "
}

function RandomFemale(){

	
	if (seconds <6)
		return "hag "
	else if (seconds <11)
		return "wench "
	else if (seconds <16)
		return "bitchwad "
	else if (seconds <21)
		return "shrew "
	else if (seconds <26)
		return "tramp "
	else if (seconds <31)
		return "slut "
	else if (seconds <36)
		return "bitch "
	else if (seconds <41)
		return "bimbo "
	else if (seconds <46)
		return "tart "
	else if (seconds <51)
		return "scuz-bag "
	else if (seconds <56)
		return "floozy "
	else if (seconds <61)
		return "douche bag "
	


}

function RandomNeutral(){

	
	if (seconds <6)
		return "pukebreath "
	else if (seconds <11)
		return "frotterist "
	else if (seconds <16)
		return "asswipe "
	else if (seconds <21)
		return "rectum-head "
	else if (seconds <26)
		return "asshole "
	else if (seconds <31)
		return "assface "
	else if (seconds <36)
		return "vomit-face "
	else if (seconds <41)
		return "coprophagiac "
	else if (seconds <46)
		return "fuckstick "
	else if (seconds <51)
		return "twit "
	else if (seconds <56)
		return "loser "
	else if (seconds <61)
		return "pisshead "
	


}

function RandomDemocrat(){

	
	if (seconds <15)
		return "Clinton-lovin' "
	else if (seconds <25)
		return "Hillary-lovin' "
	else if (seconds <37)
		return "card-carrying liberal "
	else if (seconds <45)
		return "draft-dodgin' "
	else if (seconds <53)
		return "pinko-commie-sympathizin' "
	else if (seconds <60)
		return "no-inhalin' "
}

function RandomRepublican(){


	if (seconds <7)
		return "Pat-Buchanan-lovin' "
	else if (seconds <15)
		return "Bush-lovin' "
	else if (seconds <24)
		return "fascist "
	else if (seconds <38)
		return "war-mongering "
	else if (seconds <50)
		return "corporate-lovin' "
	else if (seconds <60)
		return "money-grubbing "
}


function RandomIndependent(){

	if (seconds <12)
		return "Ross-Perot-lovin' "
	else if (seconds <20)
		return "anarchistic "
	else if (seconds <30)
		return "indecisive "
	else if (seconds <44)
		return "politically ambiguous "
	else if (seconds <57)
		return "vacillating "
	else if (seconds <60)
		return "politically neutured "
}

function RandomSmart(){


	if (seconds <7)
		return "book-wormish "
	else if (seconds <13)
		return "four-eyed "
	else if (seconds <19)
		return "armchair-philosphizing "
	else if (seconds <25)
		return "Einstein-impersonating "
	else if (seconds <31)
		return "cerebral "
	else if (seconds <37)
		return "pseudo-genius "
	else if (seconds <43)
		return "bombastic "
	else if (seconds <49)
		return "arrogant "
	else if (seconds <55)
		return "grandiose "
	else if (seconds <61)
		return "psuedo-intellectual "
	
}

function RandomStupid(){

	
	if (seconds <8)
		return "dumbshit "
	else if (seconds <16)
		return "cerebrally-challenged "
	else if (seconds <27)
		return "brain-dead "
	else if (seconds <36)
		return "vacuous "
	else if (seconds <45)
		return "witless "
	else if (seconds <56)
		return "airheaded "
	else if (seconds <60)
		return "moronic "
	else if (seconds <60)
		return "pea-brained "
	else if (seconds <60)
		return "nit-witted "
	else if (seconds <60)
		return "chicken-brained "
	else if (seconds <60)
		return "obtuse "
	else if (seconds <60)
		return "idiotic "
	else if (seconds <60)
		return "dense "
}

function RandomFat(){


	if (seconds <5)
		return "fat-ass "
	else if (seconds <11)
		return "chubby "
	else if (seconds <17)
		return "pork-bellied "
	else if (seconds <23)
		return "portly "
	else if (seconds <29)
		return "corpulent "
	else if (seconds <35)
		return "obese "
	else if (seconds <42)
		return "bovine "
	else if (seconds <48)
		return "cow-like "
	else if (seconds <53)
		return "fat "
	else if (seconds <58)
		return "rotund "
	else if (seconds <61)
		return "pudgy "


}

function RandomSkinny(){

	if (seconds <12)
		return "pencil-necked "
	else if (seconds <22)
		return "emaciated "
	else if (seconds <30)
		return "anorexic "
	else if (seconds <43)
		return "puny "
	else if (seconds <52)
		return "bony "
	else if (seconds <60)
		return "scrawny-assed "
}

function RandomHot(){

	if (seconds <13)
		return "conceited "
	else if (seconds <24)
		return "self-absorbed "
	else if (seconds <35)
		return "vain "
	else if (seconds <46)
		return "egotistical "
	else if (seconds <51)
		return "full o'yourself "
	else if (seconds <60)
		return "mirror-obsessed "
	
		
}

function RandomDog(){

	if (seconds <8)
		return "butt-ugly "
	else if (seconds <15)
		return "puke-inducing "
	else if (seconds <23)
		return "barforific "
	else if (seconds <31)
		return "ugolicious "
	else if (seconds <41)
		return "vomitrocious "
	else if (seconds <49)
		return "up-chuck-inspiring "
  	else if (seconds <55)
		return "zit-faced "
 	else if (seconds <60)
		return "pus-lipped "	
}

function RandomIntenseEnd(){

	if (seconds <15)
		return "smelly-crotched "
	else if (seconds <23)
		return "hog-humping "
	else if (seconds <29)
		return "rectum-sniffing "
	else if (seconds <41)
		return "motherfucking "
	else if (seconds <52)
		return "butt-licking "
	else if (seconds <60)
		return "anus-licking "
}

function RandomEnd(){

	if (seconds <15)
		return "turd-like "
	else if (seconds <23)
		return "crud-infested "
	else if (seconds <29)
		return "lame "
	else if (seconds <41)
		return "vermin-ridden "
	else if (seconds <52)
		return "pus-sucking "
	else if (seconds <60)
		return "fart-sniffing "	
}

function General(){
	if (S==1)
	return ""
	else if (S==2)
	return "damn "
	else if(S==3)
	return RandomEnd()
	else if (S==0)
	return ""}

function Gender(){
	if (G==1)
	return RandomMale()
	else if (G==2)
	return RandomFemale()
	else if (G==3)
	return RandomNeutral()
	else if (G==0)
	return RandomNeutral()}

function Political(){
	if (P==1)
	return RandomDemocrat()
	else if (P==2)
	return RandomRepublican()
	else if (P==3)
	return RandomIndependent()
	else if (P==0)
	return ""}

function Intelligence(){
	if (I==1)
	return RandomSmart()
	else if (I==2)
	return ""
	else if (I==3)
	return RandomStupid()
	else if (I==0)
	return ""}

function Weight(){
	if (W==1)
	return RandomFat()
	else if (W==2)
	return ""
	else if (W==3)
	return RandomSkinny()
	else if (W==0)
	return ""}

function Looks(){
	if (L==1)
	return RandomHot()
	else if (L==2)
	return ""
	else if (L==3)
	return RandomDog()
	else if (L==0)
	return ""}

function Ending(){
	return RandomIntenseEnd()
	}

<!--End-->