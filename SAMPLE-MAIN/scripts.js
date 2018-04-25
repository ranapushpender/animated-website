function inMenu()
{
	menu.style.left="0px";
	document.getElementById("menu").style.marginLeft = "0px";
	document.getElementById("header").style.visibility="visible";
	document.getElementById("header").style.opacity="1";	
	document.getElementById("navi").style.visibility="visible";
	document.getElementById("navi").style.opacity="1";
	document.getElementById("page").style.backgroundPosition="right 0px top";
	document.getElementById("start1").style.marginTop="66px";
	document.getElementById("start1").style.transform="rotate(90deg)";
	document.getElementById("page").style.boxShadow="10px 10px 14px -5px rgba(0,0,0,0.75)";
	document.getElementById("welc").style.visibility="visible";
	document.getElementById("welc").style.opacity="1";
}
function inserin()
{	
	document.getElementById("welc").style.visibility="hidden";
	document.getElementById("welc").style.opacity="0";
	
	document.getElementById("dele").style.visibility="hidden";
	document.getElementById("dele").style.opacity="0";
	
	document.getElementById("mod").style.visibility="hidden";
	document.getElementById("mod").style.opacity="0";
	
	document.getElementById("disp").style.visibility="hidden";
	document.getElementById("disp").style.opacity="0";
	
	document.getElementById("inser").style.visibility="visible";
	document.getElementById("inser").style.opacity="1";
	
}
function delein()
{	
	document.getElementById("welc").style.visibility="hidden";
	document.getElementById("welc").style.opacity="0";
	
	document.getElementById("inser").style.visibility="hidden";
	document.getElementById("inser").style.opacity="0";
	
	document.getElementById("mod").style.visibility="hidden";
	document.getElementById("mod").style.opacity="0";
	
	document.getElementById("disp").style.visibility="hidden";
	document.getElementById("disp").style.opacity="0";
	
	document.getElementById("dele").style.visibility="visible";
	document.getElementById("dele").style.opacity="1";
}
function modin()
{	
	document.getElementById("welc").style.visibility="hidden";
	document.getElementById("welc").style.opacity="0";
	
	document.getElementById("dele").style.visibility="hidden";
	document.getElementById("dele").style.opacity="0";
	
	document.getElementById("inser").style.visibility="hidden";
	document.getElementById("inser").style.opacity="0";
	
	document.getElementById("disp").style.visibility="hidden";
	document.getElementById("disp").style.opacity="0";
	
	document.getElementById("mod").style.visibility="visible";
	document.getElementById("mod").style.opacity="1";
	
}
function dispin()
{	
	document.getElementById("welc").style.visibility="hidden";
	document.getElementById("welc").style.opacity="0";
	
	document.getElementById("dele").style.visibility="hidden";
	document.getElementById("dele").style.opacity="0";
	
	document.getElementById("mod").style.visibility="hidden";
	document.getElementById("mod").style.opacity="0";
	
	document.getElementById("inser").style.visibility="hidden";
	document.getElementById("inser").style.opacity="0";
	
	document.getElementById("disp").style.visibility="visible";
	document.getElementById("disp").style.opacity="1";
	
}