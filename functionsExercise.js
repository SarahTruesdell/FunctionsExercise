function fozzieBear(){
    console.log(`Wocka Wocka`);
}
fozzieBear();

function beaker(speak){
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}
beaker(`Meep`);

//or 

function beaker(speak){
    console.log(speak.repeat(4));
}
beaker(`Meep`);

//#3
//function muppetShow(a, b){
//    if (a ===`Muppet` && b ===`Show`){
  //      
   // }

function kermit(){
    console.log(`Kermit the Frog`);
}
kermit();

//or 
function kermit(quote = `Kermit the Frog`){
    console.log(quote);
}
kermit();



function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    } else {
    return false;
    }
}

console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(3));



const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet()



rainbowConnection = () => console.log( "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me");

rainbowConnection()



//no



//yes




