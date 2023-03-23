<html>
    <body>
        <!-- Thanks for submitting,  <?php echo $_GET["name"]; ?>!<br> -->

        <?php
            $to = "shustydaw@gmail.com";
            $subject = "Portfolio Message";

            $header = "From: ";

            $retval = mail ($to,$subject,$message,$header);

            if ($retval == true) {
                echo "Message send successfully!";
            } else {
                echo "Something went wrong...";
            }
        ?>
    </body>
</html>