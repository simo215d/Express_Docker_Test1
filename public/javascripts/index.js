function changeColor(){
    if(document.body.style.background == 'linear-gradient(to right top, green, yellow) fixed'){
        document.body.style.background = 'linear-gradient(to right bottom, blue, red) fixed';
        return;
    }
    document.body.style.background = 'linear-gradient(to right top, green, yellow) fixed';
}