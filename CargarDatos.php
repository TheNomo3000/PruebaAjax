<?php
require_once 'Conexion/procedimientos.php';

$obj = new Procedimientos();
$query = "Select * from peliculas";
$obj->consultar($query);

echo '<table>';
echo '<tr>
        <td>Pelicula</td>
        <td>Titulo</td>
        <td>Director</td>
        <td>Precio</td>
      </tr>';

foreach ($obj->filas() as $key => $value){
    echo '<tr>
            <td>'.$value['titulo'].'</td>
            <td>'.$value['director'].'</td>
            <td>'.$value['precio'].'</td>
         </tr>';
}

echo '</table>';