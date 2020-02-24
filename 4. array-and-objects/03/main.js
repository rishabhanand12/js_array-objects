var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  gunter.outfit = {
      hat: "baseball cap",
      shirt: "HAwaiian shirt",
      pants: "cargo shorts",
      shoes: "flip-flops" 
  }
   var penguinHatType = gunter.outfit.hat;
   console.log(penguinHatType);
   gunter.outfit.accessory = "Pocket watch";
   gunter.outfit.hat = "top hat";
   delete gunter.outfit.pants;
   var i;
   for(i in gunter) {
       console.log(gunter.outfit[i]);
   }