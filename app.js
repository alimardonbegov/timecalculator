let total = 0;
let current = 0;

document.querySelector(".btn").addEventListener("click", function () {
  let firstTime = document.querySelector(".a").value;
  let secondTime = document.querySelector(".b").value;

  // First Time in hours

  const firstTimeArr = firstTime.split(":");
  const firstTimeHour = Number(firstTimeArr[0]);
  const firstTimeMinute = Number(firstTimeArr[1]) / 60;

  firstTime = firstTimeHour + firstTimeMinute;

  // Second Time in hours

  const secondTimeArr = secondTime.split(":");
  const secondTimeHour = Number(secondTimeArr[0]);
  const secondTimeMinute = Number(secondTimeArr[1]) / 60;

  secondTime = secondTimeHour + secondTimeMinute;

  // diff
  current = Number((secondTime - firstTime).toFixed(2));
  total = (Number(total) + Number(secondTime - firstTime)).toFixed(2);

  //send inf to page

  document.querySelector(".value-current").innerHTML = current;
  document.querySelector(".value-total").innerHTML = total;

  document.querySelector(".value-current").classList.add("new-value");
  document.querySelector(".value-total").classList.add("new-value");
});
