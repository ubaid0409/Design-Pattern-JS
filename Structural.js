// Adaptor pattern/////////////////////////////////////////////////////////////////
class OldPrinter {
  print() {
    return "Old Printer prints";
  }
} 

class NewPrinter {
  printNewWay() {
    return "New Printer prints in a new way";
  }
}

class PrinterAdapter {
  constructor(newPrinter) {
    this.newPrinter = newPrinter;
  }

  print() {
    return this.newPrinter.printNewWay();
  }
}

const adaptedPrinter = new PrinterAdapter(new NewPrinter());
console.log(adaptedPrinter.print()); // New Printer prints in a new way


// Bridge pattern///////////////////////////////////////////////////////////
class TV {
  turnOn() { console.log("TV is ON"); }
  turnOff() { console.log("TV is OFF"); }
}
// class Radio{
//   turnOnRadio() { console.log("Radio is ON"); }
//   turnOffRadio() { console.log("Radio is OFF"); }
// }

class Remote {
  constructor(device) {
    this.device = device;
  }

  pressPower() {
    this.device.turnOn();
  }
  // }
  // pressPowerForRadio(){
  //   this.device.turnOnRadio();
  // }
}

const remote = new Remote(new TV());
// const remoteR = new Remote(new Radio());
remote.pressPower(); // TV is ON
// remoteR.pressPowerForRadio(); // Radio is ON


// Composite pattern/////////////////////////////////////////////////////////////
class File {
  open() {
    return "File opened";
  }
}

class Folder {
  constructor() {
    this.items = [];
  }

  add(item) {
    this.items.push(item);
  }

  open() {
    return this.items.map(item => item.open()).join(" + ");
  }
}

const file1 = new File();
const file2 = new File();
const file3 = new File();
const folder = new Folder();
folder.add(file1);
folder.add(file2);
folder.add(file3);

console.log(folder.open()); // File opened + File opened


// Decorator pattern////////////////////////////////////////////////////
class Coffee {
  cost() {
    return 5;
  }
}

class Milk {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

const basic = new Coffee();
const withMilk = new Milk(basic);

console.log("The price of coffee with milk is $",withMilk.cost()); // 7


// Facade pattern///////////////////////////////////////////////////////////////
class CPU {
  start() { console.log("CPU started"); }
}
class Disk {
  load() { console.log("Disk loaded"); }
}

class Computer {
  constructor() {
    this.cpu = new CPU();
    this.disk = new Disk();
  }

  startComputer() {
    this.cpu.start();
    this.disk.load();
  }
}

const pc = new Computer();
pc.startComputer();
// CPU started
// Disk loaded


// Flyweight pattern///////////////////////////////////////////////////////////
class Shape {
  constructor(color) {
    this.color = color; // shared part
  }

  draw(position) {
    console.log(`Drawing ${this.color} shape at ${position}`);
  }
}

class ShapeFactory {
  constructor() {
    this.shapes = {};
  }

  getShape(color) {
    if (!this.shapes[color]) {
      this.shapes[color] = new Shape(color);
    }
    return this.shapes[color];
  }
}

const factory = new ShapeFactory();
const red1 = factory.getShape("red");
const red2 = factory.getShape("red");

red1.draw("top");   // Drawing red shape at top
red2.draw("bottom"); // Drawing red shape at bottom
console.log(red1===red2);


// Proxy pattern////////////////////////////////////////////////////////////////////
class RealDocument {
  view() {
    return "Viewing document";
  }
}

class ProxyDocument {
  constructor(user) {
    this.user = user;
    this.realDoc = new RealDocument();
  }

  view() {
    if (this.user === "admin") {
      return this.realDoc.view();
    } else {
      return "Access denied";
    }
  }
}

const doc1 = new ProxyDocument("admin");
console.log(doc1.view()); // Viewing document

const doc2 = new ProxyDocument("guest");
console.log(doc2.view()); // Access denied
