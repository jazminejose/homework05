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


document.getElementById('button').addEventListener('click', event => {
  let save = document.getElementById("9").value;
  localStorage.setItem("input", JSON.stringify(save))
  console.log(save)
})


function getDuties() {
  let output = localStorage.getItem("input")
  document.getElementById("9").innerHTML = output
}


time();

timeblocks();

getDuties();