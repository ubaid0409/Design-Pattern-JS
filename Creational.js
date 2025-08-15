// // Singleton/////////////////////////////////////////////////
// class Singleton {
//   constructor() {
//     if (Singleton.instance) {
//       return Singleton.instance;
//     }
//     this.value = "I am the only instance";
//     Singleton.instance = this;
//   }
// }

// const s1 = new Singleton();
// const s2 = new Singleton();
// console.log(s1 === s2); // true

// 1. Basic Singleton
class SingleBasic1 {
  constructor() {
    if (SingleBasic1.instance) return SingleBasic1.instance;
    this.name = "Basic Singleton 1";
    SingleBasic1.instance = this;
  }
}
const sb1a = new SingleBasic1();
const sb1b = new SingleBasic1();
console.log(sb1a === sb1b); // true

// 2. Static Method Singleton
class SingleStatic2 {
  constructor() {
    if (SingleStatic2.instance) return SingleStatic2.instance;
    this.name = "Static Singleton 2";
    SingleStatic2.instance = this;
  }
  static getInstance() {
    return new SingleStatic2();
  }
}
const ss2a = SingleStatic2.getInstance();
const ss2b = SingleStatic2.getInstance();
console.log(ss2a === ss2b); // true

// 3. Singleton using function
function SingleFunc3() {
  if (SingleFunc3.instance) return SingleFunc3.instance;
  this.name = "Function Singleton 3";
  SingleFunc3.instance = this;
}
const sf3a = new SingleFunc3();
const sf3b = new SingleFunc3();
console.log(sf3a === sf3b); // true

// 4. Module Pattern
const SingleModule4 = (function () {
  let instance;
  return {
    getInstance: function () {
      if (!instance) instance = { name: "Module Singleton 4" };
      return instance;
    }
  };
})();
const sm4a = SingleModule4.getInstance();
const sm4b = SingleModule4.getInstance();
console.log(sm4a === sm4b); // true

// 5. Object.freeze
const SingleFreeze5 = (function () {
  const obj = { name: "Freeze Singleton 5" };
  Object.freeze(obj);
  return obj;
})();
console.log(SingleFreeze5 === SingleFreeze5); // true

// 6. Singleton with factory method
class SingleFactory6 {
  constructor() {
    if (SingleFactory6.instance) return SingleFactory6.instance;
    this.name = "Factory Singleton 6";
    SingleFactory6.instance = this;
  }
  static create() {
    return new SingleFactory6();
  }
}
const sf6a = SingleFactory6.create();
const sf6b = SingleFactory6.create();
console.log(sf6a === sf6b); // true

// 7. Singleton with private property
class SinglePrivate7 {
  static instance = null;
  constructor() {
    if (SinglePrivate7.instance) return SinglePrivate7.instance;
    this.name = "Private Singleton 7";
    SinglePrivate7.instance = this;
  }
}
const sp7a = new SinglePrivate7();
const sp7b = new SinglePrivate7();
console.log(sp7a === sp7b); // true

// 8. Singleton with closure + class
const SingleClosure8 = (() => {
  let instance;
  return class {
    constructor() {
      if (instance) return instance;
      this.name = "Closure Singleton 8";
      instance = this;
    }
  };
})();
const sc8a = new SingleClosure8();
const sc8b = new SingleClosure8();
console.log(sc8a === sc8b); // true

// 9. Symbol based Singleton
const key9 = Symbol.for("SingleSymbol9");
if (!globalThis[key9]) {
  globalThis[key9] = { name: "Symbol Singleton 9" };
}
const sym9a = globalThis[key9];
const sym9b = globalThis[key9];
console.log(sym9a === sym9b); // true

// 10. Arrow Function Module Singleton
const SingleArrow10 = (() => {
  let instance;
  const create = () => ({ name: "Arrow Function Singleton 10" });
  return {
    getInstance: () => {
      if (!instance) instance = create();
      return instance;
    }
  };
})();
const sa10a = SingleArrow10.getInstance();
const sa10b = SingleArrow10.getInstance();
console.log(sa10a === sa10b); // true



// // Factory method////////////////////////////////////////////////
// class Dog {
//   speak() {
//     return "Woof!";
//   }
// }

// class Cat {
//   speak() {
//     return "Meow!";
//   }
// }

// class AnimalFactory {
//   createAnimal(type) {
//     if (type === "dog") return new Dog();
//     if (type === "cat") return new Cat();
//   }
// }

// const animalfactory = new AnimalFactory();
// const animal = animalfactory.createAnimal("dog");
// console.log(animal.speak()); // Woof!

// 1. Simple Factory for Fruits
class AppleF1 { eat() { return "Eating Apple"; } }
class BananaF1 { eat() { return "Eating Banana"; } }
class FruitFactory1 {
  static create(type) {
    if (type === "apple") return new AppleF1();
    if (type === "banana") return new BananaF1();
  }
}
console.log(FruitFactory1.create("apple").eat());

// 2. Factory Method for Cars
class SedanF2 { drive() { return "Driving Sedan"; } }
class SUVF2 { drive() { return "Driving SUV"; } }
class CarFactory2 {
  create(type) {
    if (type === "sedan") return new SedanF2();
    if (type === "suv") return new SUVF2();
  }
}
console.log(new CarFactory2().create("suv").drive());

// 3. Shape Factory
class CircleF3 { draw() { return "Drawing Circle"; } }
class SquareF3 { draw() { return "Drawing Square"; } }
class ShapeFactory3 {
  static make(shape) {
    if (shape === "circle") return new CircleF3();
    if (shape === "square") return new SquareF3();
  }
}
console.log(ShapeFactory3.make("square").draw());

// 4. Toy Factory
class RobotToyF4 { play() { return "Playing with Robot Toy"; } }
class DollToyF4 { play() { return "Playing with Doll Toy"; } }
class ToyFactory4 {
  createToy(type) {
    return type === "robot" ? new RobotToyF4() : new DollToyF4();
  }
}
console.log(new ToyFactory4().createToy("robot").play());

// 5. Animal Factory
class DogF5 { speak() { return "Woof!"; } }
class CatF5 { speak() { return "Meow!"; } }
class AnimalFactory5 {
  static buildAnimal(type) {
    return type === "dog" ? new DogF5() : new CatF5();
  }
}
console.log(AnimalFactory5.buildAnimal("cat").speak());

// 6. Computer Factory
class LaptopF6 { info() { return "Laptop Computer"; } }
class DesktopF6 { info() { return "Desktop Computer"; } }
class ComputerFactory6 {
  createComputer(type) {
    if (type === "laptop") return new LaptopF6();
    if (type === "desktop") return new DesktopF6();
  }
}
console.log(new ComputerFactory6().createComputer("laptop").info());

// 7. Pizza Factory
class VegPizzaF7 { taste() { return "Veg Pizza Taste"; } }
class ChickenPizzaF7 { taste() { return "Chicken Pizza Taste"; } }
class PizzaFactory7 {
  static makePizza(type) {
    return type === "veg" ? new VegPizzaF7() : new ChickenPizzaF7();
  }
}
console.log(PizzaFactory7.makePizza("chicken").taste());

// 8. Furniture Factory
class ChairF8 { sit() { return "Sitting on Chair"; } }
class TableF8 { use() { return "Using Table"; } }
class FurnitureFactory8 {
  createFurniture(type) {
    if (type === "chair") return new ChairF8();
    if (type === "table") return new TableF8();
  }
}
console.log(new FurnitureFactory8().createFurniture("chair").sit());

// 9. Phone Factory
class AndroidF9 { spec() { return "Android Specs"; } }
class IPhoneF9 { spec() { return "iPhone Specs"; } }
class PhoneFactory9 {
  static createPhone(type) {
    if (type === "android") return new AndroidF9();
    if (type === "iphone") return new IPhoneF9();
  }
}
console.log(PhoneFactory9.createPhone("iphone").spec());

// 10. Drink Factory
class TeaF10 { serve() { return "Serving Tea"; } }
class CoffeeF10 { serve() { return "Serving Coffee"; } }
class DrinkFactory10 {
  makeDrink(type) {
    if (type === "tea") return new TeaF10();
    if (type === "coffee") return new CoffeeF10();
  }
}
console.log(new DrinkFactory10().makeDrink("tea").serve());

// // Abstracy factory//////////////////////////////////////////////////////////////
// class MacButton {
//   render() {
//     return "Rendering Mac Button";
//   }
// }

// class WindowsButton {
//   render() {
//     return "Rendering Windows Button";
//   }
// }

// class MacFactory {
//   createButton() {
//     return new MacButton();
//   }
// }

// class WindowsFactory {
//   createButton() {
//     return new WindowsButton();
//   }
// }

// const factory = new WindowsFactory();
// const button = factory.createButton();
// console.log(button.render()); // Rendering Windows Button

// 1. GUI Factory (Windows/Mac)
class WinButtonAF1 { render() { return "Windows Button"; } }
class MacButtonAF1 { render() { return "Mac Button"; } }
class WinFactoryAF1 { createButton() { return new WinButtonAF1(); } }
class MacFactoryAF1 { createButton() { return new MacButtonAF1(); } }
const guiFactory1 = new WinFactoryAF1();
console.log(guiFactory1.createButton().render());

// 2. Car Parts Factory (SUV/Sedan)
class SUVSeatAF2 { type() { return "SUV Seat"; } }
class SedanSeatAF2 { type() { return "Sedan Seat"; } }
class SUVFactoryAF2 { createSeat() { return new SUVSeatAF2(); } }
class SedanFactoryAF2 { createSeat() { return new SedanSeatAF2(); } }
const carParts2 = new SedanFactoryAF2();
console.log(carParts2.createSeat().type());

// 3. Pizza Ingredient Factory (Veg/NonVeg)
class VegSauceAF3 { taste() { return "Veg Sauce"; } }
class NonVegSauceAF3 { taste() { return "Non-Veg Sauce"; } }
class VegFactoryAF3 { createSauce() { return new VegSauceAF3(); } }
class NonVegFactoryAF3 { createSauce() { return new NonVegSauceAF3(); } }
console.log(new VegFactoryAF3().createSauce().taste());

// 4. Phone Component Factory (Android/iPhone)
class AndroidScreenAF4 { spec() { return "Android Screen"; } }
class IPhoneScreenAF4 { spec() { return "iPhone Screen"; } }
class AndroidFactoryAF4 { createScreen() { return new AndroidScreenAF4(); } }
class IPhoneFactoryAF4 { createScreen() { return new IPhoneScreenAF4(); } }
console.log(new AndroidFactoryAF4().createScreen().spec());

// 5. Furniture Factory (Modern/Classic)
class ModernChairAF5 { style() { return "Modern Chair"; } }
class ClassicChairAF5 { style() { return "Classic Chair"; } }
class ModernFactoryAF5 { createChair() { return new ModernChairAF5(); } }
class ClassicFactoryAF5 { createChair() { return new ClassicChairAF5(); } }
console.log(new ClassicFactoryAF5().createChair().style());

// 6. Computer Factory (Gaming/Office)
class GamingMouseAF6 { feature() { return "High DPI Mouse"; } }
class OfficeMouseAF6 { feature() { return "Ergonomic Mouse"; } }
class GamingFactoryAF6 { createMouse() { return new GamingMouseAF6(); } }
class OfficeFactoryAF6 { createMouse() { return new OfficeMouseAF6(); } }
console.log(new GamingFactoryAF6().createMouse().feature());

// 7. Drink Set Factory (Tea/Coffee)
class TeaCupAF7 { serve() { return "Serving Tea"; } }
class CoffeeCupAF7 { serve() { return "Serving Coffee"; } }
class TeaFactoryAF7 { createCup() { return new TeaCupAF7(); } }
class CoffeeFactoryAF7 { createCup() { return new CoffeeCupAF7(); } }
console.log(new CoffeeFactoryAF7().createCup().serve());

// 8. Vehicle Factory (Bike/Car)
class BikeEngineAF8 { power() { return "Bike Engine"; } }
class CarEngineAF8 { power() { return "Car Engine"; } }
class BikeFactoryAF8 { createEngine() { return new BikeEngineAF8(); } }
class CarFactoryAF8 { createEngine() { return new CarEngineAF8(); } }
console.log(new CarFactoryAF8().createEngine().power());

// 9. Animal Food Factory (Dog/Cat)
class DogFoodAF9 { feed() { return "Dog Food"; } }
class CatFoodAF9 { feed() { return "Cat Food"; } }
class DogFactoryAF9 { createFood() { return new DogFoodAF9(); } }
class CatFactoryAF9 { createFood() { return new CatFoodAF9(); } }
console.log(new DogFactoryAF9().createFood().feed());

// 10. Sports Kit Factory (Cricket/Football)
class CricketBatAF10 { use() { return "Cricket Bat"; } }
class FootballAF10 { use() { return "Football"; } }
class CricketFactoryAF10 { createItem() { return new CricketBatAF10(); } }
class FootballFactoryAF10 { createItem() { return new FootballAF10(); } }
console.log(new FootballFactoryAF10().createItem().use());

// // Builder pattern//////////////////////////////////////////////////////////////
// class Burger {
//   constructor() {
//     this.parts = [];
//   }

//   add(part) {
//     this.parts.push(part);
//   }

//   show() {
//     return this.parts.join(", ");
//   }
// }

// class BurgerBuilder {
//   constructor() {
//     this.burger = new Burger();
//   }

//   addBun() {
//     this.burger.add("Bun");
//     return this;
//   }

//   addPatty() {
//     this.burger.add("Patty");
//     return this;
//   }

//   addCheese() {
//     this.burger.add("Cheese");
//     return this;
//   }

//   build() {
//     return this.burger;
//   }
// }

// const builder = new BurgerBuilder();
// const myBurger = builder.addBun().addPatty().addCheese().build();
// console.log(myBurger.show()); // Bun, Patty, Cheese


// 1. Burger Builder
class BurgerB1 {
  constructor() { this.parts = []; }
  add(part) { this.parts.push(part); }
  show() { return this.parts.join(", "); }
}
class BurgerBuilderB1 {
  constructor() { this.burger = new BurgerB1(); }
  addBun() { this.burger.add("Bun"); return this; }
  addPatty() { this.burger.add("Patty"); return this; }
  build() { return this.burger; }
}
console.log(new BurgerBuilderB1().addBun().addPatty().build().show());

// 2. Pizza Builder
class PizzaB2 {
  constructor() { this.toppings = []; }
  addTopping(t) { this.toppings.push(t); }
  show() { return this.toppings.join(", "); }
}
class PizzaBuilderB2 {
  constructor() { this.pizza = new PizzaB2(); }
  addCheese() { this.pizza.addTopping("Cheese"); return this; }
  addOlives() { this.pizza.addTopping("Olives"); return this; }
  build() { return this.pizza; }
}
console.log(new PizzaBuilderB2().addCheese().addOlives().build().show());

// 3. Car Builder
class CarB3 {
  constructor() { this.parts = []; }
  addPart(p) { this.parts.push(p); }
  describe() { return this.parts.join(", "); }
}
class CarBuilderB3 {
  constructor() { this.car = new CarB3(); }
  addEngine() { this.car.addPart("Engine"); return this; }
  addWheels() { this.car.addPart("Wheels"); return this; }
  build() { return this.car; }
}
console.log(new CarBuilderB3().addEngine().addWheels().build().describe());

// 4. Computer Builder
class ComputerB4 {
  constructor() { this.specs = []; }
  addSpec(s) { this.specs.push(s); }
  showSpecs() { return this.specs.join(", "); }
}
class ComputerBuilderB4 {
  constructor() { this.pc = new ComputerB4(); }
  addCPU() { this.pc.addSpec("CPU"); return this; }
  addRAM() { this.pc.addSpec("RAM"); return this; }
  build() { return this.pc; }
}
console.log(new ComputerBuilderB4().addCPU().addRAM().build().showSpecs());

// 5. Sandwich Builder
class SandwichB5 {
  constructor() { this.items = []; }
  addItem(i) { this.items.push(i); }
  serve() { return this.items.join(", "); }
}
class SandwichBuilderB5 {
  constructor() { this.sandwich = new SandwichB5(); }
  addBread() { this.sandwich.addItem("Bread"); return this; }
  addCheese() { this.sandwich.addItem("Cheese"); return this; }
  build() { return this.sandwich; }
}
console.log(new SandwichBuilderB5().addBread().addCheese().build().serve());

// 6. House Builder
class HouseB6 {
  constructor() { this.parts = []; }
  addPart(p) { this.parts.push(p); }
  details() { return this.parts.join(", "); }
}
class HouseBuilderB6 {
  constructor() { this.house = new HouseB6(); }
  addWalls() { this.house.addPart("Walls"); return this; }
  addRoof() { this.house.addPart("Roof"); return this; }
  build() { return this.house; }
}
console.log(new HouseBuilderB6().addWalls().addRoof().build().details());

// 7. Robot Builder
class RobotB7 {
  constructor() { this.features = []; }
  addFeature(f) { this.features.push(f); }
  show() { return this.features.join(", "); }
}
class RobotBuilderB7 {
  constructor() { this.robot = new RobotB7(); }
  addArms() { this.robot.addFeature("Arms"); return this; }
  addLegs() { this.robot.addFeature("Legs"); return this; }
  build() { return this.robot; }
}
console.log(new RobotBuilderB7().addArms().addLegs().build().show());

// 8. Phone Builder
class PhoneB8 {
  constructor() { this.parts = []; }
  addPart(p) { this.parts.push(p); }
  specs() { return this.parts.join(", "); }
}
class PhoneBuilderB8 {
  constructor() { this.phone = new PhoneB8(); }
  addScreen() { this.phone.addPart("Screen"); return this; }
  addBattery() { this.phone.addPart("Battery"); return this; }
  build() { return this.phone; }
}
console.log(new PhoneBuilderB8().addScreen().addBattery().build().specs());

// 9. Salad Builder
class SaladB9 {
  constructor() { this.ingredients = []; }
  addIngredient(i) { this.ingredients.push(i); }
  mix() { return this.ingredients.join(", "); }
}
class SaladBuilderB9 {
  constructor() { this.salad = new SaladB9(); }
  addLettuce() { this.salad.addIngredient("Lettuce"); return this; }
  addTomato() { this.salad.addIngredient("Tomato"); return this; }
  build() { return this.salad; }
}
console.log(new SaladBuilderB9().addLettuce().addTomato().build().mix());

// 10. Game Character Builder
class CharacterB10 {
  constructor() { this.traits = []; }
  addTrait(t) { this.traits.push(t); }
  showTraits() { return this.traits.join(", "); }
}
class CharacterBuilderB10 {
  constructor() { this.character = new CharacterB10(); }
  addStrength() { this.character.addTrait("Strength"); return this; }
  addSpeed() { this.character.addTrait("Speed"); return this; }
  build() { return this.character; }
}
console.log(new CharacterBuilderB10().addStrength().addSpeed().build().showTraits());

// // Prototype pattern///////////////////////////////////////////////////////////
// class Sheep {
//   constructor(name) {
//     this.name = name;
//   }

//   clone() {
//     return new Sheep(this.name);
//   }
// }

// const sheep1 = new Sheep("Dolly");
// const sheep2 = sheep1.clone();

// console.log(sheep1.name); // Dolly
// console.log(sheep2.name); // Dolly


// 1. Sheep Prototype
class SheepP1 {
  constructor(name) { this.name = name; }
  clone() { return new SheepP1(this.name); }
}
const sheepP1 = new SheepP1("Dolly");
console.log(sheepP1.clone().name);

// 2. Car Prototype
class CarP2 {
  constructor(model) { this.model = model; }
  clone() { return new CarP2(this.model); }
}
const carP2 = new CarP2("Toyota");
console.log(carP2.clone().model);

// 3. Book Prototype
class BookP3 {
  constructor(title) { this.title = title; }
  clone() { return new BookP3(this.title); }
}
const bookP3 = new BookP3("JavaScript Basics");
console.log(bookP3.clone().title);

// 4. Person Prototype
class PersonP4 {
  constructor(name) { this.name = name; }
  clone() { return new PersonP4(this.name); }
}
const personP4 = new PersonP4("Ali");
console.log(personP4.clone().name);

// 5. House Prototype
class HouseP5 {
  constructor(type) { this.type = type; }
  clone() { return new HouseP5(this.type); }
}
const houseP5 = new HouseP5("Villa");
console.log(houseP5.clone().type);

// 6. Phone Prototype
class PhoneP6 {
  constructor(brand) { this.brand = brand; }
  clone() { return new PhoneP6(this.brand); }
}
const phoneP6 = new PhoneP6("Samsung");
console.log(phoneP6.clone().brand);

// 7. Robot Prototype
class RobotP7 {
  constructor(model) { this.model = model; }
  clone() { return new RobotP7(this.model); }
}
const robotP7 = new RobotP7("RX-78");
console.log(robotP7.clone().model);

// 8. Chair Prototype
class ChairP8 {
  constructor(color) { this.color = color; }
  clone() { return new ChairP8(this.color); }
}
const chairP8 = new ChairP8("Red");
console.log(chairP8.clone().color);

// 9. Animal Prototype
class AnimalP9 {
  constructor(species) { this.species = species; }
  clone() { return new AnimalP9(this.species); }
}
const animalP9 = new AnimalP9("Tiger");
console.log(animalP9.clone().species);

// 10. GameCharacter Prototype
class GameCharacterP10 {
  constructor(role) { this.role = role; }
  clone() { return new GameCharacterP10(this.role); }
}
const characterP10 = new GameCharacterP10("Warrior");
console.log(characterP10.clone().role);
