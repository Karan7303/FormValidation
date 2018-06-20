function formValidation() 
{
	var uname = document.getElementById('uname').value;
	var uemail = document.getElementById('email').value;
	var passid = document.getElementById('passid').value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var uname_len = uname.length;
	var passid_len = passid.length;
	


	if (uname.length == 0) 
	{
		document.getElementById('nameerror').innerHTML = "Enter Name".fontcolor("red").fontsize("2");
		document.getElementById("uname").focus();
	}
	else if(uname_len < 1 || uname_len > 20)
	{
		document.getElementById('nameerror').innerHTML = "Name should be less than 20".fontcolor("red").fontsize("2");
		document.getElementById("uname").focus();
	}
	else
	{
		document.getElementById('nameerror').innerHTML = " ".fontcolor("red").fontsize("2");
		document.getElementById("uname").focus();
	}
	
	if (uemail.match(mailformat))
	{
		 document.getElementById('emailerror').innerHTML = " ".fontcolor("red").fontsize("2");
		document.getElementById("email").focus();
	}
	else
	{
		
		document.getElementById('emailerror').innerHTML = "Enter Valid email".fontcolor("red").fontsize("2");
		document.getElementById("email").focus();
	}

	if (passid.length == 0)
	{
		//alert("Password should not be empty");
		document.getElementById('passerror').innerHTML = "Enter Password".fontcolor("red").fontsize("2");
		document.getElementById("passid").focus();
	}
	else if (passid.length < 6 || passid.length > 15)
	{
		//alert("Password length should be between "+min+" to "+max);
		document.getElementById('passerror').innerHTML = "Password should be between 6 to 15".fontcolor("red").fontsize("2");
		document.getElementById("passid").focus();
	}
	else
	{
		document.getElementById('passerror').innerHTML = "";
		document.getElementById("passid").focus();
	}
	

}