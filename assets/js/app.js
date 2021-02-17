

const title = document.querySelector('.title');
    title.textContent = title.textContent.toUpperCase();

const labels = document.querySelectorAll('.label');

    labels.forEach(text => {
       text.textContent = text.textContent.toUpperCase();
    });



// set counting days
const setDays = 14;
// ******************

const tday = new Date();
tday.setDate(tday.getDate() + setDays);

function countDown() {

        const currentDate = new Date();

        // get remaining seconds from current date until timer ends
        const totalRemainingSeconds = (tday - currentDate)/1000;

        const remainingDays = Math.floor(totalRemainingSeconds / 3600 / 24);
        const remainingHours = Math.floor(totalRemainingSeconds / 3600) % 24;
        const remainingMinutes = Math.floor(totalRemainingSeconds / 60) % 60;
        const remainingSeconds = Math.floor(totalRemainingSeconds) % 60;

        //    insert values into html elements
        const rDays = document.querySelector('#remainingDays');
        const rHours = document.querySelector('#remainingHours');
        const rMinutes = document.querySelector('#remainingMinutes');
        const rSeconds = document.querySelector('#remainingSeconds');


        if (remainingDays > 9){
            rDays.innerHTML = remainingDays;
        }else {
            rDays.innerHTML = '0' + remainingDays;
        }

        if (remainingHours > 9){
            rHours.innerHTML = remainingHours;
        }else{
            rHours.innerHTML = '0' + remainingHours;
        }

        if (remainingMinutes > 9){
            rMinutes.innerHTML = remainingMinutes;
        }else{
            rMinutes.innerHTML = '0' + remainingMinutes;
        }

        if (remainingSeconds > 9){
            rSeconds.innerHTML = remainingSeconds;
        }else {
            rSeconds.innerHTML = '0' + remainingSeconds;
        }
}

countDown();

setInterval(countDown, 1000);




