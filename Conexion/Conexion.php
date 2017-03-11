<?php

class Conexion
{
    private $bd,$user,$host,$pass;

    public function __construct()
    {
        $this->bd = "videoclub";
        $this->user = "root";
        $this->host = "localhost";
        $this->pass = "";
    }

    public function getBd()
    {
        return $this->bd;
    }


    public function getUser()
    {
        return $this->user;
    }

    public function getHost()
    {
        return $this->host;
    }

    public function getPass()
    {
        return $this->pass;
    }

}