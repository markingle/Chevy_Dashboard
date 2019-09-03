// Your code goes here
// You can require definitions from other JavaScript and JSON files.
// Your code will be bundled together using WebPack during DFF compilation.


// This will do for now....need to refactor and condense code
function showCoolantTemp(data) {
       
        var speed = data.engine_coolant_temp;
           
        g1.refresh(speed);
        console.log('coolant', speed);
}

function showOilTemp(data) {
        var oilTemp = data;
        var oilTemp = data.engine_oil_temp;
           
        g2.refresh(oilTemp);
        console.log('oilTemp', oilTemp);
}

function showOilPressure(data) {
        var oilPressure = data;
        var oilPressure = data.engine_oil_pressure;
           
        g3.refresh(oilPressure);
        console.log('oilPressure', oilPressure);
}
function direction(data){
	var compass_gauge = document.gauges.get('A0');
    compass_gauge.value = data.compass_heading;
    //console.log('A0 Reading',data);
    compass_gauge.update();
}

var vinElem = document.getElementById('vin');
gm.info.getVehicleConfiguration(function(data) {
  vinElem.innerHTML = gm.info.getVIN();
});
