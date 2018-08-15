const cat1 = document.getElementById('cat1');
const cat1ClicksDisplay = document.getElementById('cat1ClicksDisplay');
let cat1Clicks = 0;

const cat2 = document.getElementById('cat2');
const cat2ClicksDisplay = document.getElementById('cat2ClicksDisplay');
let cat2Clicks = 0;

cat1.addEventListener('click', function() {
    cat1Clicks++;    console.log(cat1Clicks);
    cat1ClicksDisplay.innerHTML = parseInt(cat1Clicks);
})

cat2.addEventListener('click', function() {
    cat2Clicks++;
    cat2ClicksDisplay.innerHTML = parseInt(cat2Clicks);
})