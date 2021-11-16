let cosa = ["background","ab1","scroll","s1","s2"];
for(let i = 0 ; i < cosa.length ; i++){
    let selector = "." + cosa[i];
    document.querySelectorAll(selector)[0].addEventListener("click",()=>{console.log(cosa[i])});
}

