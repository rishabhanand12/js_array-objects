var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

var penguins = [gunter, ramon, fred];

console.log(penguins[0]);
var secondPenguin = penguins[1];
console.log(penguins[penguins.length-1].name);
penguins.push(myPenguin ={
  name: "Whiteblack",
  origin: "Whiteblack the Penguin sees the world",
  author: "H.A. Rey and Margaret Rey",
});
console.log(penguins.length);
penguins[0].canFly = true;
penguins[0].sayHello();
for(var i = 0;i<penguins.length;i++) {
  console.log(penguins[i].name);
}
for(var i = 0;i<penguins.length;i++) {
  penguins[i].sayHello();
}
for(var i = 0;i<penguins.length;i++) {
  penguins[i].numberOfFeet = 2;
}
for(var i = 0;i<penguins.length;i++) {
  if(penguins[i].canFly == true) {
    console.log(penguins[i].name + " can fly!");
  }
}
