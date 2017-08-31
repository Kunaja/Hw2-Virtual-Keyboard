function add(input) {
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + input;
}

function bac(input) {
	var last_txt=document.getElementById('message').innerHTML;
	last_txt = last_txt.substring(0, last_txt.length - 1);
    document.getElementById("message").innerHTML = last_txt;
}

