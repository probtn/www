/*------------------------------------------------- 
JAVASCRIPTS + AJAX
-------------------------------------------------*/

function sendContact() {
	var valid;	
	valid = validateContact();
	if(valid) {
		jQuery.ajax({
		url: "../pb/send_mail.php",
		data:'userName='+$("#name").val()+'&userEmail='+$("#email").val()+'&content='+$("#message").val(),
		type: "POST",
		success:function(data){
			$("#mail-status").html(data);
			$("#name").val('');
			$("#email").val('');
			$("#message").val('');
		},
		error:function (){}
		});
	}
}

function validateContact() {
	var valid = true;	
	$(".demoInputBox").css('background-color','');
	$(".info").html('');
	
	if(!$("#name").val()) {
		$("#userName-info").html("Please enter your name");
		$("#name").css('background-color','#FFFFDF');
		valid = false;
	}
	if(!$("#email").val()) {
		$("#userEmail-info").html("Please specify a valid email address");
		$("#email").css('background-color','#FFFFDF');
		valid = false;
	}
	if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
		$("#userEmail-info").html("Please specify a valid email address");
		$("#email").css('background-color','#FFFFDF');
		valid = false;
	}
	if(!$("#message").val()) {
        $("#content-info").html("Please enter a message.");
        $("#message").css('background-color','#FFFFDF');
        valid = false;
    }
	
	return valid;
}