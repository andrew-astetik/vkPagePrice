<?php
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: image/jpg");

	$img = imagecreatefromjpeg('stories.jpg');
	$white = imagecolorallocate($img, 255, 255, 255);
	$font = "NotoSans-Bold.ttf";
	imagettftext($img, 140, 0, 225 + (105/2 * (6 - strlen($_GET['sum']))), 500, $white, $font, $_GET['sum']);

	$l = ['ЕЙ','Ь','Я','Я','Я','ЕЙ','ЕЙ','ЕЙ','ЕЙ','ЕЙ'];
	$l = 'РУБЛ'.(substr($_GET['sum'],-2)[0] == 1 ? 'ЕЙ' : $l[substr($_GET['sum'],-1)]);
	imagettftext($img, 120, 0, 500 + (88/2 * (5 - strlen($l))), 660, $white, $font, $l);

	imagejpeg($img, null, 100);