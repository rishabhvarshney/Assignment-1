function setTimeoutSync (callback,n){
    var d= new Date();
    while((new Date-d)<n){}

    callback();
}
function print(){
    console.log("Callback called")
}
setTimeoutSync(print,10000);