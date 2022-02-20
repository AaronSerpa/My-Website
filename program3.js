const btn = document.getElementById('btn');
const rbtns = document.querySelectorAll('input[name="option"]');
const bill = document.getElementById('totalBill');
const per = document.getElementById('percentage');
var endText = document.getElementById('result');

    
function switchSelected()
{
    var sel0 = document.getElementById('excellentService');
    var sel1 = document.getElementById('goodService');
    var sel2 = document.getElementById('averageService');
    var sel3 = document.getElementById('badService');
    var sel4 = document.getElementById('enterOwn');
    if(sel0.checked == true)
    {
        per.value = "25";
        per.disabled = true;
    }
    else if(sel1.checked == true)
    {
        per.value = "20";
        per.disabled = true;
    }
    else if(sel2.checked == true)
    {
        per.value = "15";
        per.disabled = true;
    }
    else if(sel3.checked == true)
    {
        per.value = "10";
        per.disabled = true;
    }
    else if(sel4.checked == true)
    {
        per.value = "0";
        per.disabled = false;
    }
}

function btnClicked()
{
    var truePer = per.value / 100;
    var tip = truePer * bill.value;
    var fullBill = parseFloat(bill.value) + parseFloat(tip);
    endText.innerHTML = "Tip = $" + tip.toFixed(2) + ", bill plus tip = $" + fullBill.toFixed(2);
}