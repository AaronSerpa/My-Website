const flip = document.getElementById("flip");
var endText = document.getElementById("result");
function coinFlip()
{
    flip.disabled=true;
    endText.innerHTML = "Waiting";
    var result = Math.floor(Math.random() * 2);
    switch(result){
        case 0://not working, need to change img source
            
            setTimeout(()=>{document.getElementById("coin").src = "half.jpeg";}, 250);
            setTimeout(()=>{document.getElementById("coin").src = "Side.jpeg";}, 500);
            setTimeout(()=>{document.getElementById("coin").src = "half.jpeg";}, 750);
            setTimeout(()=>{document.getElementById("coin").src = "blank.jpeg";}, 1000);
            setTimeout(()=>{document.getElementById("coin").src = "half.jpeg";}, 1250);
            setTimeout(()=>{document.getElementById("coin").src = "Side.jpeg";}, 1500);
            setTimeout(()=>{document.getElementById("coin").src = "half.jpeg";}, 1750);
            setTimeout(()=>{
                document.getElementById("coin").src = "Heads.jpeg";
                endText.innerHTML = "Heads!";
                flip.disabled = false;
            }, 2000);
            
            
            break;
        case 1:
            setTimeout(()=>{document.getElementById("coin").src = "half.jpeg";}, 250);
            setTimeout(()=>{document.getElementById("coin").src = "Side.jpeg";}, 500);
            setTimeout(()=>{document.getElementById("coin").src = "half.jpeg";}, 750);
            setTimeout(()=>{document.getElementById("coin").src = "blank.jpeg";}, 1000);
            setTimeout(()=>{document.getElementById("coin").src = "half.jpeg";}, 1250);
            setTimeout(()=>{document.getElementById("coin").src = "Side.jpeg";}, 1500);
            setTimeout(()=>{document.getElementById("coin").src = "half.jpeg";}, 1750);
            setTimeout(()=>{
                document.getElementById("coin").src = "Tails.jpeg";
                endText.innerHTML = "Tails!";
                flip.disabled = false;
            }, 2000);
            
            break;
        default:
            console.log('CHEATER!');
    }
    
}