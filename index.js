alert("I made this website with HTML, JavaScript, and CSS!");
var today = document.getElementById('date');
var buttons = Array.from(document.getElementsByClassName('button'));


var opener = today.innerHTML;
var now = new Date();
var curDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear()+' ';
var curTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
var cur =opener.concat(curDate.concat(curTime));
today.innerHTML = cur;

setInterval(function(){
    var now = new Date();
    var curDate = (now.getMonth()+1)+'-'+now.getDate()+'-'+now.getFullYear()+' ';
    var curTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    var cur =opener.concat(curDate.concat(curTime));
    today.innerHTML = cur;
}, 1000);


buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'Red':
                document.body.style.backgroundColor = 'crimson';
                document.body.style.color = 'green';
                for(var i = 0; i<document.getElementsByClassName('button').length; i++){
                    document.getElementsByClassName('button')[i].style.color = 'black';
                }
                
                break;
            case 'Blue':
                document.body.style.backgroundColor = 'royalblue';
                document.body.style.color = 'darkorange';
                for(var i = 0; i<document.getElementsByClassName('button').length; i++){
                    document.getElementsByClassName('button')[i].style.color = 'black';
                }
                break;
            case 'Yellow':
                document.body.style.backgroundColor = 'gold';
                document.body.style.color = 'purple';
                for(var i = 0; i<document.getElementsByClassName('button').length; i++){
                    document.getElementsByClassName('button')[i].style.color = 'black';
                }
                break;
            case 'Green':
                document.body.style.backgroundColor = 'green';
                document.body.style.color = 'crimson';
                for(var i = 0; i<document.getElementsByClassName('button').length; i++){
                    document.getElementsByClassName('button')[i].style.color = 'black';
                }
                break;
            case 'Purple':
                document.body.style.backgroundColor = 'purple';
                document.body.style.color = 'gold';
                for(var i = 0; i<document.getElementsByClassName('button').length; i++){
                    document.getElementsByClassName('button')[i].style.color = 'black';
                }
                break;
            case 'Orange':
                document.body.style.backgroundColor = 'darkorange';
                document.body.style.color = 'royalblue';
                for(var i = 0; i<document.getElementsByClassName('button').length; i++){
                    document.getElementsByClassName('button')[i].style.color = 'black';
                }
                break;
            default:
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';


        }
    });
});