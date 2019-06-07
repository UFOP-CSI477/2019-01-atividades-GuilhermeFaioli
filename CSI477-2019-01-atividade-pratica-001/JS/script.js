/*const rankingsBody = document.querySelector("#rankings-table > tbody");

function loadRankings(){
	const request = new  XMLHttpRequest();

	request.open("get", "Data/rankings.json");

	request.onload = () => {
		try{
			const json = JSON.parse(request.responseText);
			populateRankings(json);
		} catch(e){
			console.warn("Não carregou o JSON");
		}
		
	};

	request.send();
}

function populateRankings(json){
	console.log(json);
}*/
var count = 6;

function addRow(){
	var comp = document.getElementById('comp').value;
	var temp = document.getElementById('temp').value;
	count++;
    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(1);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);

    cel1.innerHTML = count;
    cel2.innerHTML = comp;
    cel3.innerHTML = temp;
    /* Referência de: https://www.youtube.com/watch?v=FVSfp8yT8lA */
}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("rankings-table");
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[2];
      y = rows[i + 1].getElementsByTagName("TD")[2];
      // Check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        // If so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
    /* Referência de: https://www.w3schools.com/howto/howto_js_sort_table.asp */
  }
}

function calcularIMC(){
	var alt = document.getElementById('alt').value;
	var peso = document.getElementById('peso').value;

	var imc;

	imc = ((peso/(alt*alt))*10000);
	var arredondado = parseFloat(imc.toFixed(1));

	var msg = document.getElementsByTagName('h4')[0];
	var msg2 = document.getElementById('classeficacao');
	msg.innerHTML="o IMC é de "+arredondado;
	if(arredondado<18.5){
		msg2.innerHTML="Subnutrição";
	} else if(arredondado>=18.5 && arredondado<=24.9){
		msg2.innerHTML="Peso Saudável";
	} else if(arredondado>=25 && arredondado<=29.9){
		msg2.innerHTML="Sobrepeso";
	} else if(arredondado>=30 && arredondado<=34.9){
		msg2.innerHTML="Obesidade grau 1";
	} else if(arredondado>=35 && arredondado<=39.9){
		msg2.innerHTML="Obesidade grau 2";
	} else if(arredondado>=40){
		msg2.innerHTML="Obesidade grau 3";
	}
}

function magnitude(){
	var amp = document.getElementById('amp').value;
	var temp = document.getElementById('temp').value;

	var mag;

	mag = parseFloat(parseFloat(getBaseLog(10, amp).toFixed(2)) + 3 * parseFloat(getBaseLog(10, (8 * temp)).toFixed(2)) - 2.92).toFixed(2);

	var msg = document.getElementsByTagName('h4')[0];
	msg.innerHTML="magnitude: "+mag;
	var msg2 = document.getElementById('consequencias');
	if(mag<3.5){
		msg2.innerHTML="Geralmente não sentido, apenas detectado/registado por sismógrafos.";
	} else if(mag>=3.5 && mag<=5.4){
		msg2.innerHTML="Frequentemente sentido, mas raramente causa danos.";
	} else if(mag>=5.5 && mag<=6){
		msg2.innerHTML="Pode causar danos importantes em edifícios mal concebidos e em zonas restritas. Provoca apenas danos ligeiros em edifícios bem construídos.";
	} else if(mag>=6.1 && mag<=6.9){
		msg2.innerHTML="Pode ser destruidor em áreas habitadas num raio de até 160 quilómetros em torno do epicentro.";
	} else if(mag>=7 && mag<=7.9){
		msg2.innerHTML="Pode provocar danos graves em zonas vastas.";
	} else if(mag>=8){
		msg2.innerHTML="Pode causar danos sérios num raio de várias centenas de quilómetros em torno do epicentro.";
	}
}

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
  /* Referência de: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/log#Par%C3%A2metros */
}

function graficoScale(){
	var amp = document.getElementById('amp').value;
	var temp = document.getElementById('temp').value;
	var dataset = [temp];
	var mag;
	for (var i = 1; i<=temp ; i++) {
		mag = parseFloat(parseFloat(getBaseLog(10, amp).toFixed(2)) + 3 * parseFloat(getBaseLog(10, (8 * i)).toFixed(2)) - 2.92).toFixed(2);
		dataset[i]=mag;
	}

	var svgWidth = 500, svgHeight = 300, barPadding = 5;
	var barWidth = (svgWidth / dataset.length);


	var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
	var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d 
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

    
    /* Referência de: https://scrimba.com/p/pb4WsX/c4WLes8 */
}