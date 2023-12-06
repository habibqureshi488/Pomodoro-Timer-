var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');

  let input = prompt("Choose a time for your work in minutes:");
  let min = input;
  let sec = 0;
  let time;

  console.log('timer', timer);

  start.addEventListener('click', () => {
      time = setInterval(() => {
          if (sec === 0) {
              sec = 59;
              if (min !== 0) {
                  min--;
              }
          } else {
              sec--;
          }
          console.log(min);
          console.log(sec);
          timer.innerHTML = `${min}:${sec < 10 ? '0' : ''}${sec}`;
      }, 1000);
  });

  stop.addEventListener('click', () => {
      clearInterval(time);
  });

  reset.addEventListener('click', () => {
      min = input;
      sec = 0;
      timer.innerHTML = `${min}:0${sec}`;
  });

 