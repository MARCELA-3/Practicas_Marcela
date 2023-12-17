<?php

$dataFront = file_get_contents('php://input');




if($dataFront){
    
    $miarray = ["a","1", "b" =>"2", "c" =>"3"];
    $jsonOject = json_encode($dataFront);
    echo $jsonObject;
}

?>