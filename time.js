const day = document.querySelector(".daily");
const week = document.querySelector(".weekly");
const currentHours = document.querySelectorAll(".current_time");
const prevHours = document.querySelectorAll(".prev_time");
const month = document.querySelector(".monthly");
const contain = document.querySelector(".small");
const head = document.querySelector(".first");


day.addEventListener('click', () => {
    day.classList.add('active')
    week.classList.remove("active")
    month.classList.remove("active")

    currentHours.forEach((hour,i )=> {
        if (i == 0) {
            hour.textContent = "5hrs";
        }
        else if (i == 1) {
            hour.textContent = "1hrs";
        }
        else if (i == 2) {
            hour.textContent = "0hrs";
        }
        else if (i == 3) {
            hour.textContent = "1hrs";
        }
        else if (i == 4) {
            hour.textContent = "1hrs";
        }
        else if (i == 5) {
            hour.textContent = "0hrs";
        }
    })
    prevHours.forEach((hour,i ) => {
        if (i == 0) {
            hour.textContent = "Last Week - 5hrs";
        }
        else if (i == 1) {
            hour.textContent = "Last Week - 1hrs";
        }
        else if (i == 2) {
            hour.textContent = "Last Week - 0hrs";
        }
        else if (i == 3) {
            hour.textContent = "Last Week - 1hrs";
        }
        else if (i == 4) {
            hour.textContent = "Last Week - 1hrs";
        }
        else if (i == 5) {
            hour.textContent = "Last Week - 0hrs";
        }
    })
})



week.addEventListener('click', () => {
    day.classList.remove('active')
    week.classList.add("active")
    month.classList.remove("active")
    currentHours.forEach((hour,i) => {
        if (i == 0) {
            hour.textContent = "32hrs";
        }else if (i == 1) {
            hour.textContent = "10hrs";
        }else if (i == 2) {
            hour.textContent = "4hrs";
        }else if (i == 3) {
            hour.textContent = "4hrs";
        }else if (i == 4) {
            hour.textContent = "5hrs";
        }else if (i == 5) {
            hour.textContent = "2hrs";
        }
    })
    prevHours.forEach((hour,i) => {
        if (i == 0) {
            hour.textContent = "Last Week - 36hrs";
        }else  if (i == 1) {
            hour.textContent = "Last Week - 8hrs";
        }else  if (i == 2) {
            hour.textContent = "Last Week - 7hrs";
        }else  if (i == 3) {
            hour.textContent = "Last Week - 5hrs";
        }else  if (i == 4) {
            hour.textContent = "Last Week - 10hrs";
        }else  if (i == 5) {
            hour.textContent = "Last Week - 2hrs";
        }

    })
})

month.addEventListener('click', () => {
    day.classList.remove('active')
    week.classList.remove("active")
    month.classList.add("active")
    currentHours.forEach((hour,i) => {
        if (i == 0) {
            hour.textContent = "103hrs";
        }
        else if(i == 1) {
            hour.textContent = "23hrs";
        }
        else if(i == 2) {
            hour.textContent = "13hrs";
        }
        else if(i == 3) {
            hour.textContent = "11hrs";
        }
        else if(i == 4) {
            hour.textContent = "21hrs";
        }
        else if(i == 5) {
            hour.textContent = "7hrs";
        }
    })
    prevHours.forEach((hour,i ) => {
        if (i == 0) {
            hour.textContent = "Last Week - 128hrs";
        }
        else if (i == 1) {
            hour.textContent = "Last Week - 29hrs";
        }
        else if (i == 2) {
            hour.textContent = "Last Week - 19hrs";
        }
        else if (i == 3) {
            hour.textContent = "Last Week - 18hrs";
        }
        else if (i == 4) {
            hour.textContent = "Last Week - 23hrs";
        }
        else if (i == 5) {
            hour.textContent = "Last Week - 11hrs";
        }
    })
})