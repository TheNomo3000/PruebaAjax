<?php
require_once 'Conexion.php';
class Procedimientos extends Conexion
{
    private $conex;
    private $result;
    public function __construct()
    {
        parent::__construct();
        $this->conex = new mysqli(parent::getHost(),parent::getUser(),parent::getPass(),parent::getBd());
        $this->conex->set_charset("UTF8");
    }
    public function consultar($query){
        $this->result = $this->conex->query($query);
    }
    public function filas(){
        return $this->result;
    }
    public function conect(){
        return $this->conex;
    }
}