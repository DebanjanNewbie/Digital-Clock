function showTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    // Add leading zero for single-digit values
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    const time = `${hours}:${minutes}:${seconds}`;
  
    document.getElementById("clock").innerText = time;
  
    setTimeout(showTime, 1000); // Update time every second
  }
  
  showTime();
  