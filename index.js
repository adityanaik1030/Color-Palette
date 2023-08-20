    

colorGenerator();

function colorGenerator(){
    for(var i=0; i<32; i++){
        let j=i;
        const hexValue = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
        var colorholder = document.querySelectorAll(".colorholder");
        colorholder[i].style.backgroundColor = hexValue;

        colorCode = document.querySelectorAll("p");
        colorCode[i].innerHTML= hexValue;


        var colorContainer = document.querySelectorAll(".palette");
        colorContainer[i].addEventListener("click",function(){

            navigator.clipboard.writeText(hexValue);
            document.querySelectorAll("p")[j].innerHTML = "copied!";
            setTimeout(function(){
                document.querySelectorAll("p")[j].innerHTML = hexValue;
            },800)
            
        });    
    }
}

document.querySelector("button").addEventListener("click",colorGenerator);



     


