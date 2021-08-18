<?php
	header("Access-Control-Allow-Origin: *");

	include('cfg.php');
	if ($_GET['id']) {
		$data = file_get_contents('https://vk.com/foaf.php?id='.$_GET['id']);
		preg_match('/(?<=<ya:created dc:date=").+?(?="\/>)/',$data,$match);
		echo json_encode([
			'rdate' => $match[0],
			'now' => time(),
			'sub' => $cfg['sub'],
			'msg' => $cfg['msg']
		]);
	}