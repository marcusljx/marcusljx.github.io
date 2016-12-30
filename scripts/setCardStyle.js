/**
 * Created by marcusljx on 31/12/16.
 */

var cards = document.getElementsByClassName("resume-card");

for (i = 0; i< cards.length; i++) {
    cards[i].className += " mdc-card mdc-elevation--z5 mdc-ripple-surface mdc-ripple-upgraded";
}
