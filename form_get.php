<html>
    <body>
        <h1>Message sent</h1>
        <?php
            // get things from form
            $name = $_POST['userName'];
            $email = $_POST['userEmail'];
            $message = $_POST['userMessage'];
            
            // compose message to programmer
            $to = "shustydaw@gmail.com";
            $subject = "New User Message from Portfolio";
            $headers = "From: $to \r\n";
            $headers .= "Reply-To: $email \r\n";

            $retval = mail ($to,$subject,$message,$headers);

            if ($retval == true) {
                echo "Message send successfully!";
            } else {
                echo "Something went wrong...";
            }
        ?>
    </body>
</html>