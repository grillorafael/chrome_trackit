var trackingurl = "http://websro.correios.com.br/sro_bin/txect01$.QueryList?P_LINGUA=001&P_TIPO=001&P_COD_UNI=";

var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

createMenu();

function createMenu()
{
	var context = "selection";
	var title = "Track it!(Test)";
	var id = chrome.contextMenus.create({
		"title": title,
		"contexts":[context],
		"onclick": selectionOnClick
	});
}

function selectionOnClick(info, tab) 
{
	var code = info.selectionText;
	if(isTracking(code))
		chrome.tabs.create({"url":trackingurl+code});
}

function isTracking(code)
{
	if(code.length==13)
	{
		code = code.toUpperCase();
		var Bletters = isLetter(code.charAt(0)) && isLetter(code.charAt(1)) && isLetter(code.charAt(code.lengh-1)) && isLetter(code.charAt(code.length-2));
		var Bnumbers = true;
		for(var i = 2 ; i < code.length-2 ; i++)
		{
			Bnumbers = Bnumbers && isNumber(code.charAt(i));
		}

		return (Bletters && Bnumbers);
	}
	else
		return false;
}

function isLetter(str)
{
	var confirm = false;
	for(var i = 0 ; i < letters.length ; i++)
	{
		if(str==letters[i])
			confirm =  true;
	}
	return confirm;
}

function isNumber(str)
{
	var confirm = false;
	for(var i = 0; i<numbers.length;i++)
	{
		if(str == numbers[i])
			confirm = true;
	}
	return confirm;
}