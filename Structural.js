// // Adaptor pattern/////////////////////////////////////////////////////////////////
// class OldPrinter {
//   print() {
//     return "Old Printer prints";
//   }
// } 

// class NewPrinter {
//   printNewWay() {
//     return "New Printer prints in a new way";
//   }
// }

// class PrinterAdapter {
//   constructor(newPrinter) {
//     this.newPrinter = newPrinter;
//   }

//   print() {
//     return this.newPrinter.printNewWay();
//   }
// }

// const adaptedPrinter = new PrinterAdapter(new NewPrinter());
// console.log(adaptedPrinter.print()); // New Printer prints in a new way


// ================= ADAPTER PATTERN - 10 EASY EXAMPLES =================

// Example 1
class OldPhone { dial() { return "Dialing number the old way"; } }
class NewPhone { call() { return "Calling with touch screen"; } }
class PhoneAdapter {
    constructor(phone) { this.phone = phone; }
    dial() { return this.phone.call(); }
}
console.log("1:", new PhoneAdapter(new NewPhone()).dial());

// Example 2
class OldCar { start() { return "Starting with key"; } }
class NewCar { pushStart() { return "Starting with button"; } }
class CarAdapter {
    constructor(car) { this.car = car; }
    start() { return this.car.pushStart(); }
}
console.log("2:", new CarAdapter(new NewCar()).start());

// Example 3
class OldTV { turnOn() { return "TV on with dial"; } }
class SmartTV { power() { return "TV on with remote"; } }
class TVAdapter {
    constructor(tv) { this.tv = tv; }
    turnOn() { return this.tv.power(); }
}
console.log("3:", new TVAdapter(new SmartTV()).turnOn());

// Example 4
class OldCamera { click() { return "Captured on film"; } }
class DigitalCamera { snap() { return "Captured digitally"; } }
class CameraAdapter {
    constructor(cam) { this.cam = cam; }
    click() { return this.cam.snap(); }
}
console.log("4:", new CameraAdapter(new DigitalCamera()).click());

// Example 5
class OldFan { rotate() { return "Fan rotates manually"; } }
class ElectricFan { switchOn() { return "Fan rotates electrically"; } }
class FanAdapter {
    constructor(fan) { this.fan = fan; }
    rotate() { return this.fan.switchOn(); }
}
console.log("5:", new FanAdapter(new ElectricFan()).rotate());

// Example 6
class OldPrinter { print() { return "Printing with ribbon"; } }
class LaserPrinter { printFast() { return "Printing with laser"; } }
class PrinterAdapter {
    constructor(p) { this.p = p; }
    print() { return this.p.printFast(); }
}
console.log("6:", new PrinterAdapter(new LaserPrinter()).print());

// Example 7
class OldLight { on() { return "Light with match"; } }
class LEDLight { switchOn() { return "Light with electricity"; } }
class LightAdapter {
    constructor(light) { this.light = light; }
    on() { return this.light.switchOn(); }
}
console.log("7:", new LightAdapter(new LEDLight()).on());

// Example 8
class OldMusicPlayer { playCassette() { return "Playing cassette"; } }
class DigitalMusicPlayer { playMP3() { return "Playing MP3"; } }
class MusicAdapter {
    constructor(player) { this.player = player; }
    playCassette() { return this.player.playMP3(); }
}
console.log("8:", new MusicAdapter(new DigitalMusicPlayer()).playCassette());

// Example 9
class OldWatch { showTime() { return "Analog time"; } }
class SmartWatch { displayTime() { return "Digital time"; } }
class WatchAdapter {
    constructor(w) { this.w = w; }
    showTime() { return this.w.displayTime(); }
}
console.log("9:", new WatchAdapter(new SmartWatch()).showTime());

// Example 10
class OldSpeaker { playVinyl() { return "Playing vinyl record"; } }
class BluetoothSpeaker { playStream() { return "Streaming music"; } }
class SpeakerAdapter {
    constructor(s) { this.s = s; }
    playVinyl() { return this.s.playStream(); }
}
console.log("10:", new SpeakerAdapter(new BluetoothSpeaker()).playVinyl());

// // Bridge pattern///////////////////////////////////////////////////////////
// class TV {
//   turnOn() { console.log("TV is ON"); }
//   turnOff() { console.log("TV is OFF"); }
// }
// // class Radio{
// //   turnOnRadio() { console.log("Radio is ON"); }
// //   turnOffRadio() { console.log("Radio is OFF"); }
// // }

// class Remote {
//   constructor(device) {
//     this.device = device;
//   }

//   pressPower() {
//     this.device.turnOn();
//   }
//   // }
//   // pressPowerForRadio(){
//   //   this.device.turnOnRadio();
//   // }
// }

// const remote = new Remote(new TV());
// // const remoteR = new Remote(new Radio());
// remote.pressPower(); // TV is ON
// // remoteR.pressPowerForRadio(); // Radio is ON


// ================= BRIDGE PATTERN - 10 EASY EXAMPLES =================

// Example 1 - TV & Remote
class TV { on() { return "TV is ON"; } }
class Remote { constructor(device) { this.device = device; } pressPower() { return this.device.on(); } }
console.log("1:", new Remote(new TV()).pressPower());

// Example 2 - Radio & Remote
class Radio { on() { return "Radio is playing"; } }
console.log("2:", new Remote(new Radio()).pressPower());

// Example 3 - Fan & Switch
class Fan { on() { return "Fan is spinning"; } }
class Switch { constructor(device) { this.device = device; } turnOn() { return this.device.on(); } }
console.log("3:", new Switch(new Fan()).turnOn());

// Example 4 - Light & Switch
class Light { on() { return "Light is glowing"; } }
console.log("4:", new Switch(new Light()).turnOn());

// Example 5 - Printer & Button
class Printer { on() { return "Printer is ready"; } }
class Button { constructor(device) { this.device = device; } press() { return this.device.on(); } }
console.log("5:", new Button(new Printer()).press());

// Example 6 - Speaker & App
class Speaker { on() { return "Speaker is playing music"; } }
class MusicApp { constructor(device) { this.device = device; } start() { return this.device.on(); } }
console.log("6:", new MusicApp(new Speaker()).start());

// Example 7 - Projector & Remote
class Projector { on() { return "Projector is displaying"; } }
console.log("7:", new Remote(new Projector()).pressPower());

// Example 8 - AC & Remote
class AC { on() { return "AC is cooling"; } }
console.log("8:", new Remote(new AC()).pressPower());

// Example 9 - CoffeeMachine & Switch
class CoffeeMachine { on() { return "Coffee is brewing"; } }
console.log("9:", new Switch(new CoffeeMachine()).turnOn());

// Example 10 - WashingMachine & App
class WashingMachine { on() { return "Washing clothes"; } }
class MobileApp { constructor(device) { this.device = device; } start() { return this.device.on(); } }
console.log("10:", new MobileApp(new WashingMachine()).start());

// // Composite pattern/////////////////////////////////////////////////////////////
// class File {
//   open() {
//     return "File opened";
//   }
// }

// class Folder {
//   constructor() {
//     this.items = [];
//   }

//   add(item) {
//     this.items.push(item);
//   }

//   open() {
//     return this.items.map(item => item.open()).join(" + ");
//   }
// }

// const file1 = new File();
// const file2 = new File();
// const file3 = new File();
// const folder = new Folder();
// folder.add(file1);
// folder.add(file2);
// folder.add(file3);

// console.log(folder.open()); // File opened + File opened


// ================= COMPOSITE PATTERN - 10 EASY EXAMPLES =================

// Example 1 - Files in Folder
class File { open() { return "File opened"; } }
class Folder {
  constructor() { this.items = []; }
  add(item) { this.items.push(item); }
  open() { return this.items.map(i => i.open()).join(" + "); }
}
let folder1 = new Folder();
folder1.add(new File()); folder1.add(new File());
console.log("1:", folder1.open());

// Example 2 - Books in Library
class Book { open() { return "Reading book"; } }
class Library {
  constructor() { this.books = []; }
  add(book) { this.books.push(book); }
  open() { return this.books.map(b => b.open()).join(", "); }
}
let lib = new Library();
lib.add(new Book()); lib.add(new Book());
console.log("2:", lib.open());

// Example 3 - Songs in Playlist
class Song { play() { return "Playing song"; } }
class Playlist {
  constructor() { this.songs = []; }
  add(song) { this.songs.push(song); }
  play() { return this.songs.map(s => s.play()).join(" | "); }
}
let playlist = new Playlist();
playlist.add(new Song()); playlist.add(new Song());
console.log("3:", playlist.play());

// Example 4 - Tasks in Project
class Task { execute() { return "Task done"; } }
class Project {
  constructor() { this.tasks = []; }
  add(task) { this.tasks.push(task); }
  execute() { return this.tasks.map(t => t.execute()).join(" & "); }
}
let proj = new Project();
proj.add(new Task()); proj.add(new Task());
console.log("4:", proj.execute());

// Example 5 - Photos in Album
class Photo { view() { return "Photo viewed"; } }
class Album {
  constructor() { this.photos = []; }
  add(photo) { this.photos.push(photo); }
  view() { return this.photos.map(p => p.view()).join(" + "); }
}
let album = new Album();
album.add(new Photo()); album.add(new Photo());
console.log("5:", album.view());

// Example 6 - Items in ShoppingCart
class Item { buy() { return "Item bought"; } }
class Cart {
  constructor() { this.items = []; }
  add(item) { this.items.push(item); }
  buy() { return this.items.map(i => i.buy()).join(", "); }
}
let cart = new Cart();
cart.add(new Item()); cart.add(new Item());
console.log("6:", cart.buy());

// Example 7 - Messages in Inbox
class Message { read() { return "Message read"; } }
class Inbox {
  constructor() { this.msgs = []; }
  add(msg) { this.msgs.push(msg); }
  read() { return this.msgs.map(m => m.read()).join(" | "); }
}
let inbox = new Inbox();
inbox.add(new Message()); inbox.add(new Message());
console.log("7:", inbox.read());

// Example 8 - Students in Class
class Student { attend() { return "Student present"; } }
class Classroom {
  constructor() { this.students = []; }
  add(student) { this.students.push(student); }
  attend() { return this.students.map(s => s.attend()).join(" , "); }
}
let classRoom = new Classroom();
classRoom.add(new Student()); classRoom.add(new Student());
console.log("8:", classRoom.attend());

// Example 9 - Cars in Garage
class Car { start() { return "Car started"; } }
class Garage {
  constructor() { this.cars = []; }
  add(car) { this.cars.push(car); }
  start() { return this.cars.map(c => c.start()).join(" & "); }
}
let garage = new Garage();
garage.add(new Car()); garage.add(new Car());
console.log("9:", garage.start());

// Example 10 - Tools in Toolbox
class Tool { use() { return "Tool used"; } }
class Toolbox {
  constructor() { this.tools = []; }
  add(tool) { this.tools.push(tool); }
  use() { return this.tools.map(t => t.use()).join(" - "); }
}
let toolbox = new Toolbox();
toolbox.add(new Tool()); toolbox.add(new Tool());
console.log("10:", toolbox.use());

// // Decorator pattern////////////////////////////////////////////////////
// class Coffee {
//   cost() {
//     return 5;
//   }
// }

// class Milk {
//   constructor(coffee) {
//     this.coffee = coffee;
//   }

//   cost() {
//     return this.coffee.cost() + 2;
//   }
// }

// const basic = new Coffee();
// const withMilk = new Milk(basic);

// console.log("The price of coffee with milk is $",withMilk.cost()); // 7


// ================= DECORATOR PATTERN - 10 EASY EXAMPLES =================

// Example 1 - Coffee with Milk
class Coffee1 { cost() { return 5; } }
class Milk1 {
  constructor(c) { this.c = c; }
  cost() { return this.c.cost() + 2; }
}
console.log("1:", new Milk1(new Coffee1()).cost());

// Example 2 - Pizza with Cheese
class Pizza2 { price() { return 8; } }
class Cheese2 {
  constructor(p) { this.p = p; }
  price() { return this.p.price() + 3; }
}
console.log("2:", new Cheese2(new Pizza2()).price());

// Example 3 - Car with Sunroof
class Car3 { features() { return "Basic Car"; } }
class Sunroof3 {
  constructor(c) { this.c = c; }
  features() { return this.c.features() + ", Sunroof"; }
}
console.log("3:", new Sunroof3(new Car3()).features());

// Example 4 - Burger with Extra Patty
class Burger4 { price() { return 5; } }
class ExtraPatty4 {
  constructor(b) { this.b = b; }
  price() { return this.b.price() + 4; }
}
console.log("4:", new ExtraPatty4(new Burger4()).price());

// Example 5 - Phone with Case
class Phone5 { desc() { return "Phone"; } }
class Case5 {
  constructor(p) { this.p = p; }
  desc() { return this.p.desc() + " + Case"; }
}
console.log("5:", new Case5(new Phone5()).desc());

// Example 6 - Camera with Tripod
class Camera6 { equip() { return "Camera"; } }
class Tripod6 {
  constructor(c) { this.c = c; }
  equip() { return this.c.equip() + " + Tripod"; }
}
console.log("6:", new Tripod6(new Camera6()).equip());

// Example 7 - Room with AC
class Room7 { setup() { return "Room"; } }
class AC7 {
  constructor(r) { this.r = r; }
  setup() { return this.r.setup() + " + AC"; }
}
console.log("7:", new AC7(new Room7()).setup());

// Example 8 - Salad with Dressing
class Salad8 { make() { return "Salad"; } }
class Dressing8 {
  constructor(s) { this.s = s; }
  make() { return this.s.make() + " + Dressing"; }
}
console.log("8:", new Dressing8(new Salad8()).make());

// Example 9 - Shirt with Logo
class Shirt9 { design() { return "Plain Shirt"; } }
class Logo9 {
  constructor(s) { this.s = s; }
  design() { return this.s.design() + " + Logo"; }
}
console.log("9:", new Logo9(new Shirt9()).design());

// Example 10 - Laptop with SSD Upgrade
class Laptop10 { spec() { return "Laptop with HDD"; } }
class SSDUpgrade10 {
  constructor(l) { this.l = l; }
  spec() { return this.l.spec() + " + SSD"; }
}
console.log("10:", new SSDUpgrade10(new Laptop10()).spec());

// // Facade pattern///////////////////////////////////////////////////////////////
// class CPU {
//   start() { console.log("CPU started"); }
// }
// class Disk {
//   load() { console.log("Disk loaded"); }
// }

// class Computer {
//   constructor() {
//     this.cpu = new CPU();
//     this.disk = new Disk();
//   }

//   startComputer() {
//     this.cpu.start();
//     this.disk.load();
//   }
// }

// const pc = new Computer();
// pc.startComputer();
// // CPU started
// // Disk loaded


// ================= FACADE PATTERN - 10 EASY EXAMPLES =================

// Example 1 - Computer Startup
class CPU1 { start() { console.log("CPU started"); } }
class Disk1 { load() { console.log("Disk loaded"); } }
class Computer1 {
  constructor() { this.cpu = new CPU1(); this.disk = new Disk1(); }
  startComputer() { this.cpu.start(); this.disk.load(); }
}
new Computer1().startComputer();

// Example 2 - Car Ignition
class Engine2 { start() { console.log("Engine started"); } }
class Lights2 { on() { console.log("Lights on"); } }
class CarStarter2 {
  constructor() { this.engine = new Engine2(); this.lights = new Lights2(); }
  startCar() { this.engine.start(); this.lights.on(); }
}
new CarStarter2().startCar();

// Example 3 - Home Theater
class DVD3 { on() { console.log("DVD Player On"); } }
class Screen3 { down() { console.log("Screen Down"); } }
class HomeTheater3 {
  constructor() { this.dvd = new DVD3(); this.screen = new Screen3(); }
  startMovie() { this.dvd.on(); this.screen.down(); }
}
new HomeTheater3().startMovie();

// Example 4 - Smart Home Morning Routine
class Lights4 { on() { console.log("Lights On"); } }
class CoffeeMachine4 { brew() { console.log("Coffee brewing"); } }
class MorningRoutine4 {
  constructor() { this.lights = new Lights4(); this.coffee = new CoffeeMachine4(); }
  startDay() { this.lights.on(); this.coffee.brew(); }
}
new MorningRoutine4().startDay();

// Example 5 - Gaming Console
class GameDisk5 { insert() { console.log("Game disk inserted"); } }
class TV5 { on() { console.log("TV On"); } }
class GameConsole5 {
  constructor() { this.disk = new GameDisk5(); this.tv = new TV5(); }
  startGame() { this.disk.insert(); this.tv.on(); }
}
new GameConsole5().startGame();

// Example 6 - Restaurant Order
class Kitchen6 { cook() { console.log("Cooking food"); } }
class Waiter6 { serve() { console.log("Serving food"); } }
class Restaurant6 {
  constructor() { this.kitchen = new Kitchen6(); this.waiter = new Waiter6(); }
  completeOrder() { this.kitchen.cook(); this.waiter.serve(); }
}
new Restaurant6().completeOrder();

// Example 7 - Music System
class Amplifier7 { on() { console.log("Amplifier On"); } }
class Speakers7 { play() { console.log("Music playing"); } }
class MusicSystem7 {
  constructor() { this.amp = new Amplifier7(); this.speakers = new Speakers7(); }
  playMusic() { this.amp.on(); this.speakers.play(); }
}
new MusicSystem7().playMusic();

// Example 8 - Online Shopping
class Cart8 { addItem() { console.log("Item added to cart"); } }
class Payment8 { pay() { console.log("Payment processed"); } }
class OnlineStore8 {
  constructor() { this.cart = new Cart8(); this.payment = new Payment8(); }
  checkout() { this.cart.addItem(); this.payment.pay(); }
}
new OnlineStore8().checkout();

// Example 9 - Airplane Takeoff
class Engine9 { start() { console.log("Engines ready"); } }
class Pilot9 { fly() { console.log("Takeoff successful"); } }
class Airplane9 {
  constructor() { this.engine = new Engine9(); this.pilot = new Pilot9(); }
  takeoff() { this.engine.start(); this.pilot.fly(); }
}
new Airplane9().takeoff();

// Example 10 - Mobile Phone Boot
class OS10 { load() { console.log("OS Loaded"); } }
class Screen10 { display() { console.log("Welcome Screen"); } }
class MobilePhone10 {
  constructor() { this.os = new OS10(); this.screen = new Screen10(); }
  powerOn() { this.os.load(); this.screen.display(); }
}
new MobilePhone10().powerOn();

// // Flyweight pattern///////////////////////////////////////////////////////////
// class Shape {
//   constructor(color) {
//     this.color = color; // shared part
//   }

//   draw(position) {
//     console.log(`Drawing ${this.color} shape at ${position}`);
//   }
// }

// class ShapeFactory {
//   constructor() {
//     this.shapes = {};
//   }

//   getShape(color) {
//     if (!this.shapes[color]) {
//       this.shapes[color] = new Shape(color);
//     }
//     return this.shapes[color];
//   }
// }

// const factory = new ShapeFactory();
// const red1 = factory.getShape("red");
// const red2 = factory.getShape("red");

// red1.draw("top");   // Drawing red shape at top
// red2.draw("bottom"); // Drawing red shape at bottom
// console.log(red1===red2);


// ================= FLYWEIGHT PATTERN - 10 EASY EXAMPLES =================

// Example 1 - Shape Factory
class Shape1 {
  constructor(color) { this.color = color; }
  draw() { console.log(`Drawing ${this.color} circle`); }
}
class ShapeFactory1 {
  constructor() { this.shapes = {}; }
  getShape(color) {
    if (!this.shapes[color]) this.shapes[color] = new Shape1(color);
    return this.shapes[color];
  }
}
let sf1 = new ShapeFactory1();
sf1.getShape("Red").draw();
sf1.getShape("Red").draw();

// Example 2 - Car Model Factory
class CarModel2 {
  constructor(model) { this.model = model; }
  info() { console.log(`Car model: ${this.model}`); }
}
class CarFactory2 {
  constructor() { this.models = {}; }
  getCar(model) {
    if (!this.models[model]) this.models[model] = new CarModel2(model);
    return this.models[model];
  }
}
let cf2 = new CarFactory2();
cf2.getCar("Sedan").info();
cf2.getCar("Sedan").info();

// Example 3 - Character Factory
class Character3 {
  constructor(letter) { this.letter = letter; }
  display(size) { console.log(`Character ${this.letter}, Size ${size}`); }
}
class CharacterFactory3 {
  constructor() { this.pool = {}; }
  getChar(letter) {
    if (!this.pool[letter]) this.pool[letter] = new Character3(letter);
    return this.pool[letter];
  }
}
let chf3 = new CharacterFactory3();
chf3.getChar("A").display(12);
chf3.getChar("A").display(14);

// Example 4 - Tree Factory
class Tree4 {
  constructor(type) { this.type = type; }
  plant(location) { console.log(`Planted ${this.type} at ${location}`); }
}
class TreeFactory4 {
  constructor() { this.types = {}; }
  getTree(type) {
    if (!this.types[type]) this.types[type] = new Tree4(type);
    return this.types[type];
  }
}
let tf4 = new TreeFactory4();
tf4.getTree("Oak").plant("Park");
tf4.getTree("Oak").plant("Garden");

// Example 5 - Soldier Factory
class Soldier5 {
  constructor(rank) { this.rank = rank; }
  assignWeapon(weapon) { console.log(`${this.rank} with ${weapon}`); }
}
class SoldierFactory5 {
  constructor() { this.ranks = {}; }
  getSoldier(rank) {
    if (!this.ranks[rank]) this.ranks[rank] = new Soldier5(rank);
    return this.ranks[rank];
  }
}
let sf5 = new SoldierFactory5();
sf5.getSoldier("Sniper").assignWeapon("Rifle");
sf5.getSoldier("Sniper").assignWeapon("Pistol");

// Example 6 - Icon Factory
class Icon6 {
  constructor(name) { this.name = name; }
  render(position) { console.log(`Icon ${this.name} at ${position}`); }
}
class IconFactory6 {
  constructor() { this.icons = {}; }
  getIcon(name) {
    if (!this.icons[name]) this.icons[name] = new Icon6(name);
    return this.icons[name];
  }
}
let icf6 = new IconFactory6();
icf6.getIcon("Folder").render("Top-left");
icf6.getIcon("Folder").render("Bottom-right");

// Example 7 - Book Factory
class Book7 {
  constructor(title) { this.title = title; }
  print(location) { console.log(`Book: ${this.title} stored at ${location}`); }
}
class BookFactory7 {
  constructor() { this.books = {}; }
  getBook(title) {
    if (!this.books[title]) this.books[title] = new Book7(title);
    return this.books[title];
  }
}
let bf7 = new BookFactory7();
bf7.getBook("Design Patterns").print("Shelf A");
bf7.getBook("Design Patterns").print("Shelf B");

// Example 8 - Bullet Factory
class Bullet8 {
  constructor(type) { this.type = type; }
  fire(speed) { console.log(`Firing ${this.type} bullet at ${speed} m/s`); }
}
class BulletFactory8 {
  constructor() { this.bullets = {}; }
  getBullet(type) {
    if (!this.bullets[type]) this.bullets[type] = new Bullet8(type);
    return this.bullets[type];
  }
}
let bf8 = new BulletFactory8();
bf8.getBullet("9mm").fire(300);
bf8.getBullet("9mm").fire(350);

// Example 9 - Emoji Factory
class Emoji9 {
  constructor(symbol) { this.symbol = symbol; }
  show(count) { console.log(`${this.symbol} shown ${count} times`); }
}
class EmojiFactory9 {
  constructor() { this.emojis = {}; }
  getEmoji(symbol) {
    if (!this.emojis[symbol]) this.emojis[symbol] = new Emoji9(symbol);
    return this.emojis[symbol];
  }
}
let ef9 = new EmojiFactory9();
ef9.getEmoji("😊").show(3);
ef9.getEmoji("😊").show(5);

// Example 10 - Particle Factory
class Particle10 {
  constructor(kind) { this.kind = kind; }
  move(x, y) { console.log(`${this.kind} moved to (${x},${y})`); }
}
class ParticleFactory10 {
  constructor() { this.particles = {}; }
  getParticle(kind) {
    if (!this.particles[kind]) this.particles[kind] = new Particle10(kind);
    return this.particles[kind];
  }
}
let pf10 = new ParticleFactory10();
pf10.getParticle("Smoke").move(5, 10);
pf10.getParticle("Smoke").move(7, 12);

// // Proxy pattern////////////////////////////////////////////////////////////////////
// class RealDocument {
//   view() {
//     return "Viewing document";
//   }
// }

// class ProxyDocument {
//   constructor(user) {
//     this.user = user;
//     this.realDoc = new RealDocument();
//   }

//   view() {
//     if (this.user === "admin") {
//       return this.realDoc.view();
//     } else {
//       return "Access denied";
//     }
//   }
// }

// const doc1 = new ProxyDocument("admin");
// console.log(doc1.view()); // Viewing document

// const doc2 = new ProxyDocument("guest");
// console.log(doc2.view()); // Access denied

// ================= PROXY PATTERN - 10 EASY EXAMPLES =================

// Example 1 - Image Loader
class RealImage1 {
  constructor(file) { this.file = file; this.loadFromDisk(); }
  loadFromDisk() { console.log(`Loading ${this.file}`); }
  display() { console.log(`Displaying ${this.file}`); }
}
class ProxyImage1 {
  constructor(file) { this.file = file; this.realImage = null; }
  display() {
    if (!this.realImage) this.realImage = new RealImage1(this.file);
    this.realImage.display();
  }
}
let img1 = new ProxyImage1("photo1.png");
img1.display();
img1.display();

// Example 2 - Video Stream
class RealVideo2 {
  constructor(url) { this.url = url; this.connect(); }
  connect() { console.log(`Connecting to ${this.url}`); }
  play() { console.log(`Playing ${this.url}`); }
}
class ProxyVideo2 {
  constructor(url) { this.url = url; this.realVideo = null; }
  play() {
    if (!this.realVideo) this.realVideo = new RealVideo2(this.url);
    this.realVideo.play();
  }
}
let vid2 = new ProxyVideo2("video.mp4");
vid2.play();
vid2.play();

// Example 3 - Bank Account
class RealAccount3 {
  withdraw(amount) { console.log(`Withdrew ${amount}`); }
}
class ProxyAccount3 {
  constructor(pin) { this.realAccount = new RealAccount3(); this.pin = pin; }
  withdraw(amount, pin) {
    if (pin === this.pin) this.realAccount.withdraw(amount);
    else console.log("Access Denied!");
  }
}
let acc3 = new ProxyAccount3(1234);
acc3.withdraw(100, 1234);
acc3.withdraw(50, 1111);

// Example 4 - File Reader
class RealFile4 {
  read() { console.log("Reading file content..."); }
}
class ProxyFile4 {
  constructor(hasAccess) { this.realFile = new RealFile4(); this.hasAccess = hasAccess; }
  read() {
    if (this.hasAccess) this.realFile.read();
    else console.log("Permission Denied");
  }
}
let file4 = new ProxyFile4(true);
file4.read();

// Example 5 - API Access
class RealAPI5 {
  request() { console.log("Fetching API data..."); }
}
class ProxyAPI5 {
  constructor(token) { this.api = new RealAPI5(); this.token = token; }
  request() {
    if (this.token) this.api.request();
    else console.log("Invalid Token");
  }
}
let api5 = new ProxyAPI5(true);
api5.request();

// Example 6 - Document Printer
class RealPrinter6 {
  print(doc) { console.log(`Printing ${doc}`); }
}
class ProxyPrinter6 {
  constructor(allowed) { this.printer = new RealPrinter6(); this.allowed = allowed; }
  print(doc) {
    if (this.allowed) this.printer.print(doc);
    else console.log("No Print Access");
  }
}
let pr6 = new ProxyPrinter6(true);
pr6.print("Report.pdf");

// Example 7 - Secure Door
class RealDoor7 {
  open() { console.log("Door Opened"); }
}
class ProxyDoor7 {
  constructor(password) { this.door = new RealDoor7(); this.password = password; }
  open(pass) {
    if (pass === this.password) this.door.open();
    else console.log("Wrong Password");
  }
}
let door7 = new ProxyDoor7("123");
door7.open("123");
door7.open("000");

// Example 8 - Payment Gateway
class RealPayment8 {
  pay(amount) { console.log(`Paid $${amount}`); }
}
class ProxyPayment8 {
  constructor(balance) { this.payment = new RealPayment8(); this.balance = balance; }
  pay(amount) {
    if (this.balance >= amount) { 
      this.payment.pay(amount); 
      this.balance -= amount; 
    } else console.log("Insufficient Funds");
  }
}
let pay8 = new ProxyPayment8(100);
pay8.pay(50);
pay8.pay(70);

// Example 9 - Chat Room
class RealChat9 {
  send(msg) { console.log(`Message: ${msg}`); }
}
class ProxyChat9 {
  constructor(muted) { this.chat = new RealChat9(); this.muted = muted; }
  send(msg) {
    if (!this.muted) this.chat.send(msg);
    else console.log("User is muted");
  }
}
let chat9 = new ProxyChat9(false);
chat9.send("Hello!");

// Example 10 - Library Book
class RealBook10 {
  read() { console.log("Reading the book..."); }
}
class ProxyBook10 {
  constructor(available) { this.book = new RealBook10(); this.available = available; }
  read() {
    if (this.available) this.book.read();
    else console.log("Book not available");
  }
}
let book10 = new ProxyBook10(true);
book10.read();
