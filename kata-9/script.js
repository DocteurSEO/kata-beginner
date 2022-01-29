const data = [];


var handler = function (e) { 
    data.push(e.key);
    console.log(data);
    localStorage.setItem('spy',data )


}


window.addEventListener("keyup",    handler);