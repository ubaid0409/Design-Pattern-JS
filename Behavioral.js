// Chain of Responsibility Pattern/////////////////////////////////////////////////
class Handler {
  setNext(handler) {
    this.next = handler;
    return handler;
  }

  handle(request) {
    if (this.next) {
      return this.next.handle(request);
    }
    return "No handler found";
  }
}

class AuthHandler extends Handler {
  handle(request) {
    if (request === "auth") {
      return "Auth Success";
    }
    return super.handle(request);
  }
}

class LogHandler extends Handler {
  handle(request) {
    if (request === "log") {
      return "Log Saved";
    }
    return super.handle(request);
  }
}

// Test
const auth = new AuthHandler();
const log = new LogHandler();
auth.setNext(log);

console.log(auth.handle("auth")); //  Auth Success
console.log(auth.handle("log"));  //  Log Saved
console.log(auth.handle("error")); // No handler found


// Command Pattern/////////////////////////////////////////////////////
class Light {
  turnOn() {
    console.log("Light is ON");
  }
  turnOff() {
    console.log("Light is OFF");
  }
}

class LightOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

// Test
const light = new Light();
const lightOn = new LightOnCommand(light);
const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton(); //  Light is ON


// Interperator pattern////////////////////////////////////////////////
class Context {
  constructor(input) {
    this.input = input;
    this.output = 0;
  }
}

class NumberExpression {
  constructor(number) {
    this.number = number;
  }

  interpret(context) {
    context.output += this.number;
  }
}

// Test
const context = new Context("some input");
const expr = new NumberExpression(10);
expr.interpret(context);

console.log("Result:", context.output); // Result: 10


// Iterator Pattern////////////////////////////////////////////////
class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    return this.items[this.index++];
  }
}

// Test
const list = ["Apple", "Banana", "Grapes"];
const iter = new Iterator(list);

while (iter.hasNext()) {
  console.log("Item:", iter.next());
}


// Mediator Pattern////////////////////////////////////////////////
class Mediator {
  setUsers(user1, user2) {
    this.user1 = user1;
    this.user2 = user2;
  }

  send(message, sender) {
    if (sender === this.user1) {
      this.user2.receive(message);
    } else {
      this.user1.receive(message);
    }
  }
}

class User {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  send(message) {
    console.log(`${this.name} sends: ${message}`);
    this.mediator.send(message, this);
  }

  receive(message) {
    console.log(`${this.name} receives: ${message}`);
  }
}

// Test
const mediator = new Mediator();
const alice = new User("Alice", mediator);
const bob = new User("Bob", mediator);

mediator.setUsers(alice, bob);

alice.send("Hi Bob!");
bob.send("Hey Alice!");


// Memento Pattern////////////////////////////////////////////////
class Memento {
  constructor(state) {
    this.state = state;
  }
}

class Editor {
  setState(state) {
    this.state = state;
  }

  save() {
    return new Memento(this.state);
  }

  restore(memento) {
    this.state = memento.state;
  }
}

// Test
const editor = new Editor();
editor.setState("Version 1");
const saved = editor.save();

editor.setState("Version 2");
console.log("Current:", editor.state); // Version 2

editor.restore(saved);
console.log("Restored:", editor.state); // Version 1


// Observer Pattern////////////////////////////////////////////////
class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  notify(message) {
    this.observers.forEach(observer => observer.update(message));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(message) {
    console.log(`${this.name} received: ${message}`);
  }
}

// Test
const subject = new Subject();
const observer1 = new Observer("Phone");
const observer2 = new Observer("Laptop");

subject.attach(observer1);
subject.attach(observer2);

subject.notify("New Notification!");


// State Pattern////////////////////////////////////////////////
class State {
  handle(context) {}
}

class OnlineState extends State {
  handle(context) {
    console.log("Online: switching to Offline...");
    context.setState(new OfflineState());
  }
}

class OfflineState extends State {
  handle(context) {
    console.log("Offline: switching to Online...");
    context.setState(new OnlineState());
  }
}

class DeviceContext {
  setState(state) {
    this.state = state;
  }

  request() {
    this.state.handle(this);
  }
}

// Test
const device = new DeviceContext();
device.setState(new OnlineState());

device.request(); // Online → Offline
device.request(); // Offline → Online


// Strategy Pattern///////////////////////////////////////
class Strategy {
  execute(a, b) {}
}

class AddStrategy extends Strategy {
  execute(a, b) {
    return a + b;
  }
}

class MultiplyStrategy extends Strategy {
  execute(a, b) {
    return a * b;
  }
}

class Calculator {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(a, b) {
    return this.strategy.execute(a, b);
  }
}

// Test
const calculator = new Calculator();
calculator.setStrategy(new AddStrategy());
console.log("Addition:", calculator.calculate(4, 2)); // 6

calculator.setStrategy(new MultiplyStrategy());
console.log("Multiplication:", calculator.calculate(4, 2)); // 8


// Templete Method Pattern////////////////////////////////////////
class Game {
  play() {
    this.initialize();
    this.startPlay();
    this.endPlay();
  }

  initialize() {}
  startPlay() {}
  endPlay() {}
}

class Football extends Game {
  initialize() {
    console.log("Football Initialized");
  }
  startPlay() {
    console.log("Kickoff Started");
  }
  endPlay() {
    console.log("Match Ended");
  }
}

// Test
const football = new Football();
football.play();


// Visitor Pattern////////////////////////////////////////////////
class Element {
  accept(visitor) {}
}

class ConcreteElementA extends Element {
  accept(visitor) {
    visitor.visitElementA(this);
  }

  operationA() {
    return "A's data";
  }
}

class Visitor {
  visitElementA(element) {
    console.log("Visiting:", element.operationA());
  }
}

// Test
const element = new ConcreteElementA();
const visitor = new Visitor();

element.accept(visitor);
