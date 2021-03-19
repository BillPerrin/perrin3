<?

/*

Site: perrin3.com

Author: billp

Purpose: to find bugs and reports them to me.

Creation Date: May 31, 2003

Change Log (date:change:coder)

------------

05/31/2003: inital generation : billp

*/
// a user found an error; now let's tell someone about it.



// collect some data about the error

$query_string = $_SERVER["QUERY_STRING"]; // This in case they grabbed a dynamic page

$http_referer = $_SERVER["HTTP_REFERER"]; // where did they come from

$http_user_agent = $_SERVER["HTTP_USER_AGENT"]; // what browser were they using

$request_uri = $_SERVER["REQUEST_URI"]; //what were they trying for

$remote_addr = $_SERVER["REMOTE_ADDR"]; //what's their IP

$site = "perrin3.com"



/* recipients 

this is who the email is going to

*/

$to = "Bill <bill@perrin3.com>";



/* subject */

$subject = "404 Error on perrin3.com";



/* additional headers 

Right now, this comes from a bogus e-mail

In other sites I've tied this to a user DB and cookie system to report

The user that found the error so I could contact them if I needed to

*/

$reported_by = "Anonymous User";

$reported_by_email = "no_reply@perrin3.com";



$headers .= "From: $reported_by <$reported_by_email>\r\n";



/* message */

$message = $reported_by . " has encountered a 404 error on

" . $site . ". Here is what we know:

Query String Reported - " . $query_string . "

The Refering Page - " . $http_referer . "

$reported_by was using this browser - " . $http_user_agent . "

$reported_by was trying to access this URL - " . $request_uri . "

$reported_by IP is $remote_addr



Please look into this and take any necessary steps to prevent this 404 Error in the future.

";



* and now mail it */

mail($to, $subject, $message, $headers);



?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
<title>404</title>
<meta http-equiv="content-type" content="text/html; charset=iso-8859-1" />
<meta http-equiv="content-language" content="en" />
<meta name="author" content="William G. Perrin III" />
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
<style type="text/css" media="all">@import "../bill_style.css";</style>
<script type="text/javascript" src="../nn4.js"></script>
</head>

<body>

<!--top banner -->
<div id="top-section">
<a name="top"></a>
<!--webbot bot="Include" U-Include="../_private/top_banner_1.html" TAG="BODY" startspan -->

<div class="banner">
<h1 class="title1">perrin3.com</h1>
</div>

<!--webbot bot="Include" endspan i-checksum="49999" -->
</div>
<!--begin mid-section container-->
<div id="mid-section">
<!--begin mid-col-1 container-->
<div id="mid-col-1">
<!--begin CONTENT container-->
<div class="content">
<!--begin breadcrumb navigation -->
<div id="breadcrumb-nav">
<ul>
<li class="first"><a href="../index.html">Home</a>
<ul>
<li>� 404 Error </li>
</ul>
</li>
</ul>
<!--end breadcrumb navigation -->
</div>
<h1>404 Error</h1>
<p>You have encountered a 404 error. This means that the page you are trying to 
access either does not exist or is missing.</p>
<p>An e-mail has been dispatched to our System Administrator, who will look into 
the problem and remedy the situation.</p>
<p>We have included the following information in this e-mail report:</p>
<ul>
<li>Query String Reported - <b>
<? if (!$query_string){echo "Nothing Reported";}else{ echo $query_string;}?></b>
</li>
<li>The Referring Page - <b>
<? if (!$http_referer){echo "Nothing Reported";}else{ echo $http_referer;}?></b>
</li>
<li>You are using this browser - <b>
<? if (!$http_user_agent){echo "Nothing Reported";}else{ echo $http_user_agent;}?>
</b></li>
<li>You are trying to access this URL - <b>
<? if (!$request_uri){echo "Nothing Reported";}else{ echo $request_uri;}?></b>
</li>
</ul>
<!--end CONTENT container-->
</div>
<!--end mid-col-1 container-->
</div>
<!--begin mid-col-2 container-->
<div id="mid-col-2">
<!--webbot bot="Include" U-Include="../_private/right_nav.html" TAG="BODY" startspan -->

<!--begin rightnav container-->
<div id="rightnav">
<!--begin rightlogo-->
<div id="rightlogo">
<!--end rightlogo-->
</div>
<!--begin Buttons -->

<p class="rightbuttontitle">stuff </p>
<p class="rightbutton"><a title="Billz home page" href="../index.html">Home</a> </p>
<p class="rightbutton"><a title="Links to info about Japan" href="../links/index.html">Japan Info</a> </p>
<p class="rightbutton"><a title="Like the link says, Stupid Stuff" href="../stupid/index.html">Stupid Stuff</a> </p>
<p class="rightbutton"><a title="Your connection to the cheeze of the 80s" href="../music/index.html">Music</a> </p>
<p class="rightbutton"><a title="How did Bill make this awesome site?" href="../thepage.htm">The Site</a> </p>
<p class="rightbutton"><a title="Who the heck is this Bill guy anyway" href="../whoisbil.htm">Who's Bill?!?</a> </p>
<p class="rightbuttontitle">private </p>
<p class="rightbutton"><a title="Perrin family photos are here" href="../familyphotos/index.html">Photos</a> </p>
<p class="rightbutton"><a title="Home videos for those of you who truly want to waste your time" href="../video/index.html">Home Videos</a> </p>
<p class="rightbutton"><a title="Send a message to Bill" href="../contact/index.html">Contact</a> </p>


<!--end Buttons -->
<!--begin optional text -->
<div>
<p class="centertext"><a href="http://validator.w3.org/check/referer"><img src="../images/valid-xhtml10grey.gif" alt="Valid XHTML 1.0!" width="88" height="31" /></a></p>
<p class="centertext"><a class="right" href="http://jigsaw.w3.org/css-validator"><img alt="Valid CSS!" src="../images/vcssgrey.gif" width="88" height="31" /></a></p>
<!--end optional text -->
</div>
<!--begin Copyright -->

<p id="copyright">� 1996-2003 by<br />
Bill Perrin<br />
WARNING: Do not operate heavy machinery within six hours of viewing these pages.</p>


<!--end Copyright -->
<!--end rightnav container-->
</div>

<!--webbot bot="Include" endspan i-checksum="8641" -->
<!--end mid-col-2 container-->
</div>
<!--end mid-section container-->
</div>
<!--begin bottom-section container-->
<div id="bottom-section">
<!--webbot bot="Include" U-Include="../_private/footer.html" TAG="BODY" startspan -->

<!--begin bottom banner container-->
<div style="height:60px;">

<div style="height:1em;">
</div>

<!--begin bottom-col-1 container-->
<div id="bottom-col-1">
  <span class="topbutton"><a href="#top">page top</a></span>
<!--end bottom-col-1 container-->
</div>

<!--end banner container-->
</div>
<!--webbot bot="Include" endspan i-checksum="5024" -->
<!--end bottom-section container-->
</div>

</body>

</html>