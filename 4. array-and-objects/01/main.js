var myPenguin ={
    name: "Whiteblack",
    origin: "Whiteblack the Penguin sees the world",
    author: "H.A. Rey and Margaret Rey",
    favoriteFoods: ["eggs","apples","oranges"],
}
console.log(myPenguin.favoriteFoods[1]);
var firstFavFood = myPenguin.favoriteFoods[0];
myPenguin.favoriteFoods.push("chocolate");
console.log(myPenguin.favoriteFoods.length);
myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1] = "pineapples";
var lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1];
for(var i=0;i<myPenguin.favoriteFoods.length;i++) {
    console.log(myPenguin.favoriteFoods[i]);
}