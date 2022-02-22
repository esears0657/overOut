function sPlus() {
    var a = document.getElementById('square');

    var div_width = a.offsetWidth + (0.1 * a.offsetWidth)+"px";
    //gets height and width and increases by 10 percent

    var div_height = a.offsetHeight + (0.1 * a.offsetHeight)+"px";
    
    a.style.width = div_width;
   
    a.style.height = div_height;
    //sets the width and height to their new values
}