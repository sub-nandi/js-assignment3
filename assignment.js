// https://github.com/sub-nandi/js-assignment3

//problem-1:kilometer to meter conversion
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Distance can not be Negative";
    }
    // 1 kilometer = 1000 meter


    var meter = 1000 * kilometer;

    return meter;

}


//promblem-2: Budget Calculation of Watch,Mobile,Laptop
function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {

    //when the quantity is negative
    if (numberOfWatch < 0) {
        return "Number of watch is invalid";
    }

    if (numberOfMobile < 0) {
        return "Number of mobile is invalid";
    }
    if (numberOfLaptop < 0) {
        return "Number of laptop is invalid";
    }



    var singleWatchPrice = 50;//price of a watch is given 50 tk
    var singleMobilePrice = 100;// price of a mobile is given 100tk
    var singleLaptopPrice = 500;// price of a laptop is given 500 tk



    var totalPriceOfWatch = singleWatchPrice * numberOfWatch;//total price of watch


    var totalPriceOfMobile = singleMobilePrice * numberOfMobile;//total price of mobile

    var totalPriceOfLaptop = singleLaptopPrice * numberOfLaptop;//total price of laptop

    //Total cost calculation
    var totalCost = totalPriceOfWatch + totalPriceOfMobile + totalPriceOfLaptop;


    return (totalCost);


}

// problem-3:Hotel cost

function hotelCost(days) {
    if (days < 0) {
        return "Days can not be Negative";
    }
    var cost = 0;


    // 1-10 days of staying cost
    if (days <= 10) {
        cost = days * 100;//per day 100 tk;
    }
    // 11-20 days of staying cost
    else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remainingDays = days - 10;
        var secondTenDays = remainingDays * 80;//per day 80 taka
        cost = firstTenDays + secondTenDays;
    }
    // More than 20 days of staying cost
    else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = days - 20;
        var lastRemainingDays = remainingDays * 50;//per day 50 taka
        cost = firstTenDays + secondTenDays + lastRemainingDays;

    }




    return (cost);
}


//problem-4:Finding out the largest name

function megaFriend(names) {


    var maxLength = names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];

        //if length of the element is greater than the length of maxLength
        if (element.length > maxLength.length) {
            maxLength = element;
        }
    }
    return maxLength;
}
