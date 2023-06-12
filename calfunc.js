function display(value){
    document.getElementById("outcome").value += value;
    }
  
  function calculate(){
    var p = document.getElementById("outcome").value;
    var q = eval(p);
    document.getElementById("outcome").value = q;
    }
  
  function clearScreen() {
  document.getElementById("outcome").value = "";
    }