<?php

	$connection = mysqli_connect('localhost','root', '','portfolio');
	$error=[];
	$output=[];

	if(isset($_POST))
	{
		if(empty($_POST['name']))
		{
			$error['name']='Please enter in a name';
		}
		if(empty($_POST['email']))
		{
			$error['email']='Please enter in a email';
		} 
		if(empty($_POST['message']))
		{
			$error['message']='Really your sending a blank message';
		}
		

		if(count($error) == 0){

				$fullname = $_POST['name'];
				$email = $_POST['email'];
				$message = $_POST['message'];

			$query = " INSERT INTO email (`name`,`email`,`message`) VALUES ('$fullname','$email', '$message')" ;


			$result = mysqli_query($connection, $query);

			$output['success'] = true; // this will help us pass the conditional on the ajax call
			$output['message'] = 'Message Sent';

		} else {
			$output['success']=false;
        	$output['message']= $error;
		}
	} else {
			$output['success'] = false;
			$output['message'] = "Message Failed to Send";
	}

	
	echo json_encode($output);

?>


