//global variables

const getTime = () => {
   let clockJS = document.getElementById('clock');
   let currentTime = new Date();

   let hours = currentTime.getHours();
   let minutes = currentTime.getMinutes();
   let seconds = currentTime.getSeconds();
   let meridan = 'AM';

   //set values to display correctly.

   if (hours >= 12) {
       meridan = "PM";
   }

   if (hours > 12) {
       hours -= 12;
   }
   if (minutes < 10) {
       minutes = "0" + minutes;
   }
   if (seconds < 10) {
       seconds = "0" + seconds;
   }

   let totalTime = `${hours}:${minutes}:${seconds} ${meridan}`;

   clockJS.innerText = totalTime;

   console.log(totalTime);
};

const updateTime = () => {
    let time = new Date().getHours();
    let message;
    let goodMorning = document.getElementById('goodMorning');

    if (time <= 12) {
        message = "Good Morning!";
    }
    else {
        message = "Good Afternoon!";
    }

    goodMorning.innerText = message;

    getTime();
};

updateTime();
setInterval(updateTime, 1000);


const backgroundChangeColor = () => {
   let color;
   const array = ["red", "green", "blue", "yellow", "pink"];
   let randomInteger = Math.floor(Math.random() * array.length);

   switch (randomInteger) {
       case 1:
           color = array[0];
          break;
       case 2:
           color = array[1];
           break;
       case 3:
           color = array[2];
           break;
       case 4:
           color = array[3];
           break;
       case 5:
           color = array[4];
           break;

   }
    document.getElementById('body').style.backgroundColor = color;
};

