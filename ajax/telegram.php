<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "5605003659:AAEdwPp1qjmjbC15SMqY6FF1vA8cDZH6GNs";
$chat_id = "-771340122";
$arr = array(
  'Имя пользователя: ' => $name,
  'User email: ' => $email,
  'User message: ' => $message,

);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."";
};

$website="https://api.telegram.org/bot".$token;
  $params=[
      'chat_id'=>$chat_id, 
      'text'=> $txt,
  ];
  $ch = curl_init($website . '/sendMessage');
  curl_setopt($ch, CURLOPT_HEADER, false);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  $result = curl_exec($ch);
  curl_close($ch);
  echo $result;

?>