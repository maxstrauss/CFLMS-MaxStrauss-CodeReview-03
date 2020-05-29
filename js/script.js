function Insurance() {
	var varName = document.getElementById("name").value;
	var varAge = document.getElementById("age").value;
	var varHp = document.getElementById("hp").value;
	var varCountry = document.getElementById("country").value;
	var cost = "";


	if (
		varName == "" ||
		varAge == "" ||
		varHp == ""
	) {
		document.getElementById("result").innerHTML = "Error: Please fill in all fields!";;
	} else {

		switch (varCountry) {
			case 'Austria':
				cost = Number(varHp) * 100 / Number(varAge) + 50;
				break;
			case 'Hungary':
				cost = Number(varHp) * 120 / Number(varAge) + 100;
				break;
			case 'Greece':
				cost = Number(varHp) * 150 / (Number(varAge) + 3) + 50;
				break;
			default:
				document.getElementById("result").innerHTML = "Error: Please choose a country!";
				break;
		}
	}

	document.getElementById("result").innerHTML = varName + ", your insurance costs " + cost.toFixed(2) + "€";

}

function showResult() {
	document.getElementById('container2').style.display = "block";
}

document.getElementById("submitbutton").addEventListener("click", Insurance, );
document.getElementById("submitbutton").addEventListener("click", showResult, );