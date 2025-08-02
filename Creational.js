// Singleton/////////////////////////////////////////////////
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.value = "I am the only instance";
    Singleton.instance = this;
  }
}

const s1 = new Singleton();
const s2 = new Singleton();
console.log(s1 === s2); // true


// Factory method////////////////////////////////////////////////
class Dog {
  speak() {
    return "Woof!";
  }
}

class Cat {
  speak() {
    return "Meow!";
  }
}

class AnimalFactory {
  createAnimal(type) {
    if (type === "dog") return new Dog();
    if (type === "cat") return new Cat();
  }
}

const animalfactory = new AnimalFactory();
const animal = animalfactory.createAnimal("dog");
console.log(animal.speak()); // Woof!


// Abstracy factory//////////////////////////////////////////////////////////////
class MacButton {
  render() {
    return "Rendering Mac Button";
  }
}

class WindowsButton {
  render() {
    return "Rendering Windows Button";
  }
}

class MacFactory {
  createButton() {
    return new MacButton();
  }
}

class WindowsFactory {
  createButton() {
    return new WindowsButton();
  }
}

const factory = new WindowsFactory();
const button = factory.createButton();
console.log(button.render()); // Rendering Windows Button


// Builder pattern//////////////////////////////////////////////////////////////
class Burger {
  constructor() {
    this.parts = [];
  }

  add(part) {
    this.parts.push(part);
  }

  show() {
    return this.parts.join(", ");
  }
}

class BurgerBuilder {
  constructor() {
    this.burger = new Burger();
  }

  addBun() {
    this.burger.add("Bun");
    return this;
  }

  addPatty() {
    this.burger.add("Patty");
    return this;
  }

  addCheese() {
    this.burger.add("Cheese");
    return this;
  }

  build() {
    return this.burger;
  }
}

const builder = new BurgerBuilder();
const myBurger = builder.addBun().addPatty().addCheese().build();
console.log(myBurger.show()); // Bun, Patty, Cheese

// Prototype pattern///////////////////////////////////////////////////////////
class Sheep {
  constructor(name) {
    this.name = name;
  }

  clone() {
    return new Sheep(this.name);
  }
}

const sheep1 = new Sheep("Dolly");
const sheep2 = sheep1.clone();

console.log(sheep1.name); // Dolly
console.log(sheep2.name); // Dolly
