let counterElement = document.getElementById("counterValue");
function onIncrement()
{
    let previousCounterValue = counterElement.textContent
    let updatedCounterValue = parseInt(previousCounterValue)+1
    counterElement.textContent = updatedCounterValue
}

function onDecrement()
{   
    let previousCounterValue = counterElement.textContent
    let updatedCounterValue = parseInt(previousCounterValue) - 1
    counterElement.textContent = updatedCounterValue
    
}

function onReset()
{
    let updatedCounterValue = 0
    counterElement.textContent = updatedCounterValue
}