<?php
$mysqli = new mysqli("localhost", "bloguser", "bloguser", "Blog");

if ($mysqli->connect_errno) {
	echo "Failed to connect to MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
# echo $mysqli->host_info . "<br>";

$mysqli->set_charset('utf8');

if(isset($_GET['id']) && !empty($_GET['id'])){
	$id = $_GET['id'];
} else {
	$id = "";
}

if(isset($_GET['nome']) && !empty($_GET['nome'])){
	$nome = $_GET['nome'];
} else {
	$nome = "";
}

$query = "";
$select = "SELECT * FROM bg_item ";
$orderby = "ORDER BY id_item ASC";

if ($id == NULL) {
	$query = $select . $orderby;
	
	if (!($stmt = $mysqli->prepare($query))) {
		echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
	}
} else {
	if ($nome == NULL) {
		$query = $select . "where id_item = ? " . $orderby;
		if (!($stmt = $mysqli->prepare($query))) {
			echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
		}
		
		if (!$stmt->bind_param("i", $id)) {
			echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
		}
	} else {
		$query = $select . "where id_item = ? and nome = ? " . $orderby;
		if (!($stmt = $mysqli->prepare($query))) {
			echo "Prepare failed: (" . $mysqli->errno . ") " . $mysqli->error;
		}
		
		if (!$stmt->bind_param("is", $id, $nome)) {
			echo "Binding parameters failed: (" . $stmt->errno . ") " . $stmt->error;
		}
	}
}

if (!$stmt->execute()) {
	echo "Execute failed: (" . $stmt->errno . ") " . $stmt->error;
}

$res = $stmt->get_result();

$res->data_seek(0);
$out = array();
while ($row = $res->fetch_assoc()) {
	$riga = array('id_item' => $row['id_item'], 'testo' => $row['testo'], 'titolo' => $row['titolo'], 'nome' => $row['nome'], 'riassunto' => $row['riassunto'], 'autore' => $row['autore'], 'dataPubblicazione' => $row['data_pubblicazione'], 'dataModifica' => $row['data_modifica'], 'dataInserimento' => $row['data_inserimento'], 'dataHidden' => $row['data_hidden'], 'dataScadenza' => $row['data_scadenza'], 'quantita' => $row['quantita']);
	$out[] = $riga;
}
$stmt->close();

# echo "<br><br>";
echo json_encode($out);
?>