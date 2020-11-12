<?php

require("../inc/functions.inc.php");
require("../inc/db.inc.php");

$stmt = $pdo->prepare("SELECT * FROM `demo_messages`");
$stmt->execute();
$messages = $stmt->fetchAll();

ob_start();
require("./views/contact.view.php");
$content = ob_get_contents();
ob_end_clean();

require("./layouts/layout.php");

?>