function red(details) {                                     // function, function name, (`parameter`)
    if (Cookies.set(`selection`, `red`)) {                  // creates cookie w/ (`name`, `value`) of selection and red
        location.href = `selection.html`                    //bring you to selection.js when code is ran
    }
}

let red_button = document.getElementById(`button_one`);     //gets button_one id and stores it as red_button
red_button.addEventListener(`click`, red)                   //will activate when red_button is clicked and run the function



function blue(details) {                                    // function, function name, (`parameter`)
    if (Cookies.set(`selection`, `blue`)) {                 // creates cookie w/ (`name`, `value`) of selection and blue
        location.href = `selection.html`                    //bring you to selection.js when code is ran
    }

}

let blue_button = document.getElementById(`button_two`);    //gets button_two id and stores it as red_button
blue_button.addEventListener(`click`, blue)                 //will activate when blue_button is clicked and run the function






function orange(details) {                                  // function, function name, (`parameter`) 
    if (Cookies.set(`selection`, `orange`)) {               // creates cookie w/ (`name`, `value`) of selection and blue
        location.href = `selection.html`                    //bring you to selection.js when code is ran
    }

}

let orange_button = document.getElementById(`button_three`);//gets button_three id and stores it as red_button
orange_button.addEventListener(`click`, orange)             //will activate when orange_button is clicked and run the function