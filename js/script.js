console.log('Hello, front end');

var onClick = function(e){
  e.preventDefault();
  var cRadio = document.getElementById("cRadioButton");
  var tempElement = document.getElementById("temp-input");
  var inputTemp = tempElement.value;
  if (cRadio.checked){
    var tempOutput = ((inputTemp - 32)*5)/9;
    changeColor(tempOutput);
  }else{
    var tempOutput = (inputTemp *9/5 +32);
    changeColor(inputTemp);
  }
  var result = "" +tempOutput;
  document.getElementById("temp-output").innerText = result;
};

var changeColor = function(tempCelsius){
  if (tempCelsius > 40){
    document.getElementById("temp-output").style.backgroundColor = "red";
  }else if(tempCelsius < 0){
    document.getElementById("temp-output").style.backgroundColor = "blue";
  }else{
    document.getElementById("temp-output").style.backgroundColor = "";
  }
}

var init = function(){
  var submitButtonElement = document.getElementById("submitButton");
  submitButtonElement.addEventListener("click", onClick);

  var resetButtonElement = document.getElementById("resetButton");
  resetButtonElement.addEventListener("click", function(){
    document.getElementById("temp-output").innerText = "";
    changeColor(20);
  });
}


init();







