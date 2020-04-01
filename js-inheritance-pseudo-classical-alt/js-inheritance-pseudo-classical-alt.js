// We've provided `makeHorse` and `makeFlyingHorse` for you, written using the
// functional pattern. Your task is to rewrite these classes to use the
// pseudoclassical pattern. They should have all the same methods as the
// objects returned from the maker functions except in pseudo classical style.
// You must be able to use your new functions to create new horse instances,
// just like this:
//
// var myHorse = new Horse();
// var myFlyingHorse = new FlyingHorse();
//

// DO NOT MODIFY FUNCTIONS 'makeHorse' AND 'makeFlyingHorse'
// USE THE CONSTRUCTOR FUNCTIONS LOCATED AT THE END OF THIS FILE

var makeHorse = function(name) {
  var result = {};
  result.name = name;
  result.goSomewhere = function(destination) {
    return name.bind(this) + " is galloping to " + destination + "!";
  };
  return result;
};

var makeFlyingHorse = function(name, color) {
  var result = makeHorse(name);
  result.color = color;
  var oldGoSomewhere = result.goSomewhere;
  result.goSomewhere = function(destination, milesToDestination) {
    if (milesToDestination < 10) {
      return oldGoSomewhere.bind(this)(destination);
    } else {
      return name + " is flying to " + destination + "!";
    }
  };
  return result;
};

// YOUR WORK GOES BELOW
// Here's some starter code to get you going!

var Horse = function(name) {
  //TODO:
  this.name = name;
};

Horse.prototype.goSomewhere = function(destination) {
  // this.destination = destination;
  return this.name + " is galloping to " + destination + "!";
};

var FlyingHorse = function(name, color) {
  //TODO:
  Horse.apply(this, arguments);
  // Horse.call(this, name);
  this.color = color;

  // this.goSomewhere = function(destination, milesToDestination) {
  //   if (milesToDestination < 10) {
  //     return Horse.prototype.goSomewhere(milesToDestination);
  //   } else {
  //     return this.name + " is flying to " + destination + "!";
  //   }
  // };
};

FlyingHorse.prototype = Object.create(Horse.prototype);

FlyingHorse.prototype.constructor = FlyingHorse;

FlyingHorse.prototype.goSomewhere = function(destination, milesToDestination) {
  var oldGoSomewhere = Horse.prototype.goSomewhere.bind(this);
  if (milesToDestination < 10) {
    return oldGoSomewhere(destination); // 왜 이걸 miles라고 생각했지?..
  } else {
    return this.name + " is flying to " + destination + "!";
  }
};

// TODO:

var myHorse = new Horse();

var myFlyingHorse = new FlyingHorse();

module.exports = {
  Horse,
  FlyingHorse
};
