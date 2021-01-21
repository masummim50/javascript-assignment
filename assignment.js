// https://github.com/masummim50/javascript-assignment

// First problem
function kilometerToMeter(km){
  if (km < 0){
    console.log("distance can't be a negetive value");
  }
  else{
    return km*1000;
  }
};

// second problem
function budgetCalculator(watch, mobile, laptop){
  if(watch<0 || mobile<0 || laptop<0){
    return "can't buy negetive amount of excessories, try 0 amount instead";
  }
  else{
    var watchPrice = watch * 50;
    var mobilePrice = mobile * 100;
    var laptopPrice = laptop * 500;
  }
  var totalPrice = watchPrice + mobilePrice + laptopPrice;
  return totalPrice;
};

// third problem
function hotelCost(days){
  if(days < 0){
    return "stay in a hotel first"
  }
  else if(days<=10){
    var totalCost = days * 100;
  }
  else if(days<=20){
    var daysWithDiscount = days - 10;
    var discountCost = daysWithDiscount * 80;
    var totalCost = 1000+ discountCost;
  }
  else{
    var daysWithDiscount = days - 20;
    var discountCost = daysWithDiscount * 50;
    var totalCost = 1800 + discountCost;
  }
  return totalCost;
};

// fourth problem
function megaFriend(friends){
  var largestLength = 0;
  for (var i = 0; i<friends.length; i++){
    var nameLength = friends[i].length;
    if(nameLength>largestLength){
      largestLength = nameLength;
      var longerName = friends[i];
    }
  }
  return longerName;
}