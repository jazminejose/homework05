//create function for current day and time
function time() {
  setInterval(() => {

    document.getElementById('currentDay').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a')

  }, 1000);

  // if (parseInt())

}

//change color of timeblocks
function timeblocks() {
  let currentTime = parseInt(moment().format('HH'))
  let hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
  // console.log(typeof currentTime)
  for (let i = 0; i < hours.length; i++) {

    if (parseInt(hours[i]) < currentTime) {
      document.getElementById(hours[i]).classList.add("past")
    }
    else if
      (parseInt(hours[i]) === currentTime) {
      document.getElementById(hours[i]).classList.add("present")
    }
    else if
      (parseInt(hours[i]) > currentTime) {
      document.getElementById(hours[i]).classList.add("future")
    }
  }
}



// function save() {
// document.getElementById("button").addEventListener("click", function () {
//   let inputTime = document.getElementById("9", "10", "11", "12", "13", "14", "15", "16", "17").value;
//   let input = document.getElementById("9","10","11","12","13","14","15","16","17").value;
//   alert("Saved.");
//   console.log(inputTime + input)
// }, false);
// }


// function save() {
//   document.getElementById("button").addEventListener("click", function () {
  // get the id of our parent
  let hour = document.getElementById("9", "10", "11", "12", "13", "14", "15", "16", "17").value;
  // save data in textarea in local storage
  // localStorage.setItem(moment().format("DDDYYYY") + hour, $("#" + hour + "textarea").val());
  // console.log(hour);
  // document.getElementById("button").addEventListener("click", function () {
  //   let input = 
  //   alert("Saved.");
  //   console.log(input)
  // }, false);
//   )}
// }





time();

timeblocks();

// save();
