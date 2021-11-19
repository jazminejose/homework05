function time() {
  setInterval(() => {

    document.getElementById('currentDay').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a')

  }, 1000);
}
time();