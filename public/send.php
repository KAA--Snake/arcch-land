<?php
$fName = 'Имя: '.$_POST['name'].' <br />';
$fMail =  'Почта: '.$_POST['email'].' <br />';
$fTel =  'Почта: '.$_POST['tel'].' <br />';
$fMessage =  'Сообщение: '.$_POST['comment'].' <br />';
$AllInOne =  $fName.$fMail.$fTel.$fMessage;
$to = 'viggo20@mail.ru';
$headers="From: nvdesign69.ru\nReply-to:viggo20@mail.ru\nContent-Type: text/html; charset=\"utf-8\"\n";
mail($to, 'Свяжитесь с нами', $AllInOne, $headers);

?>
