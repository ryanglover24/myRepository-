//calculate the tip owed depending on whats input to the document.

const calculateTip = () => {
    let billAmount = document.getElementById('billAmount').value;
    let serviceQuality = document.getElementById('serviceQuality').value;
    let numOfPeople = document.getElementById('numOfPeople').value;

//if no value input for bill or service quality gives alert and stops/return code.
    if (billAmount === "" || serviceQuality === 0 ) {
        alert('Please enter all values')
        return;
    };
//removes per person text if only one person.
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
    document.getElementById('perPerson').style.display = "none";
    } else {
        document.getElementById('perPerson').style.display = "block";
    };

    //calculate the total tip.
    let totalTip = (billAmount * serviceQuality) / numOfPeople;
    //rounds to two decimal places.
    totalTip = Math.round(totalTip * 100) /100;
    //makes it so always two decimal points are shown.
    totalTip = totalTip.toFixed(2);

    //makes tip visible and shows the value calculated.
    document.getElementById('totalTip').style.display = "block";
   document.getElementById('tip').innerText = totalTip;

};

//hide the tip amount on loading the page

document.getElementById('totalTip').style.display = "none";
document.getElementById('perPerson').style.display = "none";

//click to call function on button
document.getElementById('calculate').onclick = function() {
    calculateTip();
};


