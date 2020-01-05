let clock = document.getElementById('clock');
let color = document.getElementById('color');
let date = document.getElementById('dat');

function hexoclock() {
    let time = new Date();
    let h = (time.getHours() % 12).toString();
    let m = (time.getMinutes()).toString();
    let s = (time.getSeconds()).toString();
    
    
    

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }
    

    let clockString = h + ':' + m + ':' + s;
    let colorString = '#' + h + m + s;
    

    clock.textContent = clockString;
    color.textContent = colorString;
    
    


}





hexoclock();
setInterval(hexoclock, 1000);