function clickButton(button) {
  let result = document.getElementById("result");
  let sign = result.innerHTML.slice(-1);
  if (sign === "+" || sign === "-" || sign === "*" || sign === "/") {
// 末尾が記号の場合、resultの先頭から末尾２番目と上記記号を連結する（記号の重複防止）
    result.innerHTML = result.innerHTML.slice(0, -1) + button.innerHTML;
  } else if (sign === ".") {
    return;
  } else {
    result.innerHTML += button.innerHTML;
  }
}

function clickDot(dot) {
  let result = document.getElementById("result");
  let sign = result.innerHTML.slice(-1);

  // 末尾が以下の場合何もしない
  if (
    sign === "." ||
    sign === "+" ||
    sign === "-" ||
    sign === "*" ||
    sign === "/"
  ) {
    return;
  } else if (result.innerHTML.includes(".")) {
    return;
  } else {
    result.innerHTML +=  dot.innerHTML;
  }
}

function clickNumber(key) {
  let result = document.getElementById("result");
  let number = key.innerHTML;
  if (result.innerHTML === "0") {
    result.innerHTML = number;
  } else result.innerHTML += number;
}

function clickZero(text) {
  let result = document.getElementById("result");
  let sign = result.innerHTML.slice(-1);
  let signSub = result.innerHTML.slice(0);
  if (
    sign === "+" ||
    sign === "-" ||
    sign === "*" ||
    sign === "/" ||
    signSub === "0"
  ) {
    return;
  } else {
    let zero = text.innerHTML;
    result.innerHTML += zero;
  }
}

function clickDubleZero(duble) {
  let result = document.getElementById("result");
  let sign = result.innerHTML.slice(-1);
  let signSub = result.innerHTML.slice(0);
  if (
    sign === "+" ||
    sign === "-" ||
    sign === "*" ||
    sign === "/" ||
    signSub === "0"
  ) {
    return;
  } else {
    let dubleZero = duble.innerHTML;
    result.innerHTML += dubleZero;
  }
}

function clickEqual() {
  let result = document.getElementById("result");
  let total = eval(result.innerHTML);
  result.innerHTML = total;
}

function clickAC() {
  let result = document.getElementById("result");
  result.innerHTML = 0;
}
