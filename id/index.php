<?php
// IF YOU HAVE NOT DONE SO, PLEASE READ THE README FILE FOR DIRECTIONS!!!

/**
 * phpMyID - A standalone, single user, OpenID Identity Provider
 *
 * @package phpMyID
 * @author CJ Niemira <siege (at) siege (dot) org>
 * @copyright 2006-2008
 * @license http://www.gnu.org/licenses/gpl.html GNU Public License
 * @url http://siege.org/projects/phpMyID
 * @version 2
 */


/**
 * User profile
 * @name $profile
 * @global array $GLOBALS['profile']
 */
$GLOBALS['profile'] = array(
	# Basic Config - Required
	'auth_username'	=> 	'bill',
	'auth_password' =>	'326a17b16404240155d1761080ffb22d',

	# Optional Config - Please see README before setting these
#	'microid'	=>	array('user@site.com', 'http://delegator.url'),
#	'pavatar'	=>	'http://your.site.com/path/pavatar.img',

	# Advanced Config - Please see README before setting these
#	'allow_gmp'	=>	false,
#	'allow_test'	=> 	false,
#	'auth_realm'	=>	'phpMyID',
#	'force_bigmath'	=>	false,
#	'idp_url'	=>	'http://perrin3.com/id/',
#	'lifetime'	=>	1440,
#	'paranoid'	=>	false, # EXPERIMENTAL

	# Debug Config - Please see README before setting these
#	'debug'		=>	false,
#	'logfile'	=>	'/tmp/phpMyID.debug.log',
);
/**
 * Simple Registration Extension
 * @name $sreg
 * @global array $GLOBALS['sreg']
 */
$GLOBALS['sreg'] = array (
	'nickname'		=> 'Bill',
	'email'			=> 'bill@perrin3.com',
	'fullname'		=> 'Bill Perrin',
#	'dob'			=> '1967-02-07',
	'gender'		=> 'M',
#	'postcode'		=> '577',
	'country'		=> 'JP',
	'language'		=> 'en',
	'timezone'		=> 'Asia/Tokyo'
);

require('MyID.php');
?>
