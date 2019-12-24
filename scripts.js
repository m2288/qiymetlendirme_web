function balVeQiymetHesabla(){
	
	
		bal = yarimillikBal()
		qiymet = balaGoreQiymet()
		
		document.getElementById("bal_netice").innerHTML = `Yarımillik bal: ${bal}`
		document.getElementById("qiymet_netice").innerHTML = `Yarımillik qiymət: ${qiymet} `

		document.getElementById("bal_netice").style.color="#0033CC"
		document.getElementById("qiymet_netice").style.color="#0033CC"


		balYuzdenBoyukdurmu()
		bosXanaVarmi()
	 
	
}

function yarimillikBal(){
	ksq1 = +document.getElementById('ksq1_input').value;
	ksq2 = +document.getElementById('ksq2_input').value;
	ksq3 = +document.getElementById('ksq3_input').value;
	
	bal_ve_qiymet_netice = document.getElementById("bal_ve_qiymet_netice");

	yarimillik_bal = (parseInt((ksq1 + ksq2 + ksq3)/3 * 1000)) / 1000;

	return yarimillik_bal;
}

function sifirla(){
	document.getElementById('ksq1_input').value = "";
	document.getElementById('ksq2_input').value = "";
	document.getElementById('ksq3_input').value = "";

	document.getElementById("bal_netice").innerHTML = "Sıfırlandı";
	document.getElementById("qiymet_netice").innerHTML = "Balları daxil edib yenidən Hesablayın.";
	document.getElementById("bal_netice").style.color="#9E9E9E"
	document.getElementById("qiymet_netice").style.color="#9E9E9E"
}

function balaGoreQiymet(){
	bal = yarimillikBal()
	qiymet = 0
	if (bal <= 30) {
		qiymet = 2;
	} else if (bal > 30 && bal <= 60) {
		qiymet = 3;
	} else if (bal > 60 && bal <= 80) {
		qiymet = 4;
	} else if (bal > 80) {
		qiymet = 5;
	}
	return qiymet;
}

function bosXanaVarmi(){
	let ksq_1 = document.getElementById('ksq1_input').value;
	let ksq_2 = document.getElementById('ksq2_input').value;
	let ksq_3 = document.getElementById('ksq3_input').value;

	if(isEmpty(ksq_1) || isEmpty(ksq_2) ||isEmpty(ksq_3) ){

		//console.log(isEmpty(ksq_1), isEmpty(ksq_2), isEmpty(ksq_3) )
		
		document.getElementById("bal_netice").innerHTML = "Diqqət!";
		document.getElementById("qiymet_netice").innerHTML = "Bütün xanaları doldurun!";
		document.getElementById("bal_netice").style.color="#CC0000"
		document.getElementById("qiymet_netice").style.color="#CC0000"
		return true;	}

}

function isEmpty(param) {
	if (param.length > 0) {
		return false
	} else {
		return true
	}
}

function balYuzdenBoyukdurmu() {
	let ksq_1 = +document.getElementById('ksq1_input').value;
	let ksq_2 = +document.getElementById('ksq2_input').value;
	let ksq_3 = +document.getElementById('ksq3_input').value;

	if (ksq1 > 100 || ksq1 < 0 || ksq2 > 100 || ksq2 < 0 || ksq3 > 100 || ksq3 < 0) {
		document.getElementById("bal_netice").innerHTML = "Diqqət!";
		document.getElementById("qiymet_netice").innerHTML = "Bal 100-dən yüksək ola bilməz!";
		document.getElementById("bal_netice").style.color="#CC0000"
		document.getElementById("qiymet_netice").style.color="#CC0000"
		return;
	}
}
