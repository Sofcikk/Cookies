'use strict'

export class Cookies {
    constructor() {
        this.checkCookieEnabled();
    }
 
    checkCookieEnabled() {
        // console.log(navigator.cookieEnabled);
        if(!navigator.cookieEnabled ) {
            alert('Masz wylaczona obsuge ciasteczek')
            return;
        }
    }
    setCookie(options) {

    }
    getCookie(name) {

    }
    removeCookie() {
        
    }
}