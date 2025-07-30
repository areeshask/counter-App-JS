let num= 0;


function increment(){
num +=1 ;
box ();
}
function decrement (){
    num -=1 ;
    box ();
}
function reset (){
   num= 0;
    box ();

}
function box (){
document.getElementById("display").innerHTML= num;
}