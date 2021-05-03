
let leftValue = "";
let rightValue = "";
let operator = "";

function display(val) {
    if(operator === "") {
      leftValue += val;
      document.getElementById("result").value = leftValue;
      console.log(leftValue);
    } else {
      rightValue += val;
      document.getElementById("result").value = rightValue;
      console.log(rightValue);
    }
}

function setOperator(val) {
  operator = val;
}

function solve() {
  let result;
  if(operator === "+") {
    result = +leftValue + +rightValue;
  }else if(operator === "-") {
    result = +leftValue - +rightValue;
  }else if(operator === "/") {
    result = +leftValue / +rightValue;
  }else{
    result = +leftValue * +rightValue;
  }
  document.getElementById("result").value = result;
  console.log(result);
}

function clear() {
    leftValue = "";
    rightValue = "";
    operator = "";
    document.getElementById("result").value = "";
}