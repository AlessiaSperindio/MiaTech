
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + '=' + value + '; ' + expires + '; path=/';
    console.log(` Cookie salvato :  ${name}=${value}`);
}


function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            console.log(`Cookie recuperato: ${name}=${c.substring(nameEQ.length, c.length)}`);
            return c.substring(nameEQ.length, c.length);
        }
    }
    console.log(`Cookie ${name} non trovato.`);
    return null;
}


function deleteCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
    console.log(`Cookie rimosso: ${name}`);
}


setCookie('testCookie', 'HelloWorld', 7);
getCookie('testCookie');
deleteCookie('testCookie');

