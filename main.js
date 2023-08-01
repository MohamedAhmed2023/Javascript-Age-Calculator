let userinput = document.getElementById("data");
userinput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

let btn = document.getElementById("btn");

function calcAge() {
  let Birthday = new Date(userinput.value);

  let d1 = Birthday.getDate();
  let m1 = Birthday.getMonth() + 1;
  let y1 = Birthday.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  result.style.cssText =
    "width=600px; background: rgb(255, 255, 255, 0.3);padding:20px;border-radius: 5px;";
  result.innerHTML = `You are ${y3} years ${m3} months and ${d3} days`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
