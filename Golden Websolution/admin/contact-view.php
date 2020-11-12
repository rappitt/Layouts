<?php
require("../inc/functions.inc.php");
require("../inc/db.inc.php");

$id = $_GET["id"];

$stmt = $pdo->prepare("SELECT * FROM `demo_messages` WHERE `id`=:id");
$stmt->bindParam(":id", $id);
$stmt->execute();
$message = $stmt->fetch();

// Keine Nachricht gefunden haben
if (empty($message)) {
  header("Location: contact.php");
  die();
}


ob_start();
require("./views/contact-view.view.php");
$content = ob_get_contents();
ob_end_clean();

require("./layouts/layout.php");

?>