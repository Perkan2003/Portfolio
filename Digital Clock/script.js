function startTime() {
  const date = new Date();
  let hours = `${date.getHours()}`.padStart(2, 0);
  let minutes = `${date.getMinutes()}`.padStart(2, 0);
  let seconds = `${date.getSeconds()}`.padStart(2, 0);
  let clock = `${hours}:${minutes}:${seconds}`;
  document.querySelector('.clock').innerHTML = clock;
  setTimeout(startTime, 1000);
}
startTime();
