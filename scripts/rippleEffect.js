/**
 * Created by marcusljx on 31/12/16.
 */

(function(global) {
    [].forEach.call(document.querySelectorAll('.mdc-ripple-surface'), function(surface) {
        mdc.ripple.MDCRipple.attachTo(surface);
    });
})(this);
