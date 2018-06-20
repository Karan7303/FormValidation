function formValidation() 
{
	var uname = document.getElementById('uname').value;
	var uemail = document.getElementById('email').value;
	var phn = document.getElementById('phn').value;
	var question = document.getElementById('question').value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var phoneno = /^\d{10}$/;
	var uname_len = uname.length;
	//var passid_len = passid.length;
	var flag =0;

	if (uname.length == 0) 
	{
		document.getElementById('nameerror').innerHTML = "Enter Name".fontcolor("red").fontsize("2");
		document.getElementById("uname").focus();	
		flag = 1;
	}
	else if(uname_len < 3 || uname_len > 20)
	{
		document.getElementById('nameerror').innerHTML = "Name should be less than 20".fontcolor("red").fontsize("2");
		document.getElementById("uname").focus();
		flag = 1;	
	}
	else
	{
		document.getElementById('nameerror').innerHTML = "";
		document.getElementById("uname").focus();
	}
	
	if (uemail.match(mailformat))
	{
		document.getElementById('emailerror').innerHTML = " ";
		document.getElementById("email").focus(); 
	}
	else
	{
		document.getElementById('emailerror').innerHTML = "Invalid email".fontcolor("red").fontsize("2");
		document.getElementById("email").focus();
		flag = 1;
		
	}

	if (phn.match(phoneno)) 
	{
		document.getElementById('phnerror').innerHTML = "".fontcolor("red").fontsize("2");
		document.getElementById("phn").focus();
	}
	else
	{
		document.getElementById('phnerror').innerHTML = "Invalid phoneno".fontcolor("red").fontsize("2");
		document.getElementById("phn").focus();
		flag = 1;

	}

	if (question.trim() == '')
	{
		document.getElementById('qerror').innerHTML = "Enter query".fontcolor("red").fontsize("2");
		document.getElementById("question").focus();
		flag = 1;

	}
	else
	{
		document.getElementById('qerror').innerHTML = "".fontcolor("red").fontsize("2");
		document.getElementById("question").focus();
		
	}

	if (flag == 0) 
	{
		sendApi(uname,email,phn,question);
	}
}

const sendApi = (name,email,phone,question)=>{
    const params = {
        name:name,
        email:email,
        phone:phone,
        question:question
    }
    const http = new XMLHttpRequest()
    http.open('POST','http://demo6835492.mockable.io/sendEmail')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params))
    http.onload = function() {
        
     alert(http.responseText);
    }
}