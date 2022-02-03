function abonement_price(){
	let p = document.getElementById("abonement_selector").value;
	let text = document.getElementById("answer_for_abonement_selector_text");
	switch(p) {
  		case '1':
  			text.textContent = "28500р";
			break;
		case '2':
			text.innerHTML = "17900р";
			break;
		case '3':
			text.innerHTML = "15300р";
			break;
		case '4':
			text.innerHTML = "2200р";
			break;
		case '5':
			text.innerHTML = "3100р";
			break;
		case '6':
			text.innerHTML = "2500р";
			break;
		case '7':
			text.innerHTML = "1800р";
			break;
		case '8':
			text.innerHTML = "5000р";
			break;
		case '9':
			text.innerHTML = "10000р";
			break;  
		default:
			text.innerHTML = "Нет такого";
			break;
}
}