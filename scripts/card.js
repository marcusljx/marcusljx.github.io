/**
 * Created by marcusljx on 31/12/16.
 */
function createResumeCard(title, subtitle, imgAlt, imgSrc, imgSize) {
    /* Inserts template as such:

     <div class="resume-card">
         <div class="mdc-card__horizontal-block">
             <img class="mdc-card__media-item mdc-card__media-item--{imgSize}x" alt="{imgAlt}" src="{imgSrc}"/>
             <section class="mdc-card__primary">
                 <h1 class="mdc-card__title mdc-card__title--large">{title}</h1>
                 <h2 class="mdc-card__subtitle">{subtitle}</h2>
             </section>
         </div>
     </div>
     */

    var card = document.createElement("div");
    card.className = "resume-card";

    var cardHorizontalBlock = document.createElement("div");
    cardHorizontalBlock.className = "mdc-card__horizontal-block";
    card.appendChild(cardHorizontalBlock);

    switch (imgSize) {
        case 2:
            media_class = "mdc-card__media-item--2x";
            break;
        case 3:
            media_class = "mdc-card__media-item--3x";
            break;
        default:
            media_class = "mdc-card__media-item";
    }
    var img = document.createElement("img");
    img.className = "mdc-card__media-item " + media_class;
    img.alt = imgAlt;
    img.src = imgSrc;
    cardHorizontalBlock.appendChild(img);

    var cardPrimary = document.createElement("section");
    cardPrimary.className = "mdc-card__primary";
    cardHorizontalBlock.appendChild(cardPrimary);

    var cardTitle = document.createElement("h1");
    cardTitle.className = "mdc-card__title mdc-card__title--large";
    cardTitle.appendChild(document.createTextNode(title));
    cardPrimary.appendChild(cardTitle);

    var cardSubtitle = document.createElement("h1");
    cardSubtitle.className = "mdc-card__subtitle";
    cardSubtitle.appendChild(document.createTextNode(subtitle));
    cardPrimary.appendChild(cardSubtitle);

    // add whole DOM subtree to script tag
    var scripts = document.getElementsByTagName('script'),
        this_script = scripts[scripts.length - 1];
    this_script.parentNode.appendChild(card);
}

function createItemCard(title, imgSrc) {
    var card = document.createElement("div");
    card.className = "item-card";

    var cardMedia = document.createElement("section");
    cardMedia.className = "mdc-card__media";
    cardMedia.style.backgroundImage = "url(\"" + imgSrc + "\")";
    cardMedia.style.backgroundSize = "100% 100%";
    cardMedia.style.backgroundRepeat = "no-repeat";
    card.appendChild(cardMedia);

    var cardTitle = document.createElement("h1");
    cardTitle.className = "mdc-card__title mdc-card__title--large";
    cardTitle.style.fontWeight = "bold";
    cardTitle.appendChild(document.createTextNode(title));
    cardMedia.appendChild(cardTitle);

    // add whole DOM subtree to script tag
    var scripts = document.getElementsByTagName('script'),
        this_script = scripts[scripts.length - 1];
    this_script.parentNode.appendChild(card);
}