<?php
if ($_GET['randomId'] != "5tr7SsAQGICTqVf1Ijt6u6drNvcCFmdiTSJMkPPktd2yrRWbBwjMXNmtKuOKRT07") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
