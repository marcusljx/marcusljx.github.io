/**
 * Created by marcusljx on 31/12/16.
 */

var rCards = document.getElementsByClassName("resume-card");

for (i = 0; i< rCards.length; i++) {
    rCards[i].className += " mdc-card mdc-elevation--z5 mdc-ripple-surface mdc-ripple-upgraded";
}

var iCards = document.getElementsByClassName("item-card");

for (i = 0; i< iCards.length; i++) {
    iCards[i].className += " mdc-card mdc-elevation--z5 mdc-ripple-surface mdc-ripple-upgraded";
}
