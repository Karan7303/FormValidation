function formValidation()
{
	var uid = document.getElementById('uid').value;
	var passid = document.getElementById('passid').value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (uid.length == 0) 
	{
		document.getElementById('uiderror').innerHTML = "Enter UserId".fontcolor("red").fontsize("2");
		document.getElementById("uid").focus();
	}
	else if (uid.match(mailformat))
	{
		 document.getElementById('uiderror').innerHTML = "";
		document.getElementById("uid").focus();
	}
	else
	{
		
		document.getElementById('uiderror').innerHTML = "Invalid UserId".fontcolor("red").fontsize("2");
		document.getElementById("uid").focus();		
	}

	if (passid.length == 0)
	{
		//alert("Password should not be empty");
		document.getElementById('passerror').innerHTML = "Enter Password".fontcolor("red").fontsize("2");
		document.getElementById("passid").focus();
	}
	else
	{
		document.getElementById('passerror').innerHTML = "";
		document.getElementById("passid").focus();
	}
}