let num=19;
let factor=0;
for(let i=1; i<=num; i++){
    if(i%num){
    factor++;
    }
}if(factor=2){
    console.log("Prime");
}else{
    console.log("Not a Prime");
}