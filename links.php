<?php

if ($_SERVER['REQUEST_METHOD'] === 'GET'){
   //GET
   $json = file_get_contents('./assets/json/data.json');
   $data = json_decode($json, true);
   header('Content-Type: application/json');
   echo json_encode($data);
} else {
   //POST
}

