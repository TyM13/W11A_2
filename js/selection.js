let selection = Cookies.get(`selection`);                           //returns the value of the cookie (`selection`)
let background_color = document.getElementById(`body_color`)        //gets body_color's id and stores it as background_color
if (selection === `red`) {                                          //if value of the cookie is equal to red it will run the code or go to next else if
 background_color[`style`][`backgroundColor`] = `red`               //changed background color of page to red if above is true
} else if (selection === `blue`) {                                  //if value of the cookie is equal to blue it will run the code or go to next else if
    background_color[`style`][`backgroundColor`] = `blue`           //changed background color of page to blue if above is true
} else if (selection === `orange`) {                                //if value of the cookie is equal to orange it will run the code or go to next else if
    background_color[`style`][`backgroundColor`] = `orange`         //changed background color of page to orange if above is true
}