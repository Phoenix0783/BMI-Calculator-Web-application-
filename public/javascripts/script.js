function cal(){
    var height,weigth;
    height = parseFloat(document.getElementById("val1").value) ;
    weigth = parseFloat(document.getElementById("val2").value);
    
    height_in_meter = height /100;
    height_squared = height_in_meter * height_in_meter;
    
    bmi = weigth / height_squared;
    if (bmi < 18) {
        mainValue = 'Underweight';
      } else if (bmi > 18 && bmi < 24) {
        mainValue = 'Normal';
      } else if (bmi > 25 && bmi < 29) {
        mainValue = 'Over Weight';
      } else if (bmi > 30 && bmi < 40) {
        mainValue = 'Obesity';
      } else {
        mainValue = 'Extreme Obesity';
      }
    document.getElementById("val3").innerHTML = bmi.toFixed(2);
    document.getElementById("val4").innerHTML = mainValue;
}