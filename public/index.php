<?php
  include("cfg.php");

  //check sign
  $base_url = ( isset($_SERVER['HTTPS']) && $_SERVER['HTTPS']=='on' ? 'https' : 'http' ) . '://' .  $_SERVER['HTTP_HOST'];
  $url = $base_url . $_SERVER["REQUEST_URI"];
  $client_secret = $cfg['app_secret'];

  $query_params = []; 
  parse_str(parse_url($url, PHP_URL_QUERY), $query_params);
  $sign_params = []; 
  foreach ($query_params as $name => $value) { 
    if (strpos($name, 'vk_') !== 0) {
      continue;
    }
    $sign_params[$name] = $value;
  } 

  ksort($sign_params);
  $sign_params_query = http_build_query($sign_params);
  $sign = rtrim(strtr(base64_encode(hash_hmac('sha256', $sign_params_query, $client_secret, true)), '+/', '-_'), '=');
  $status = $sign === $query_params['sign'];
  if (!$status) {
    exit("Authentification Error");
  }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <title>Page Price</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root" class="d-flex"></div>
  </body>
</html>
