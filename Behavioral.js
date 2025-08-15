// // Chain of Responsibility Pattern/////////////////////////////////////////////////
// class Handler {
//   setNext(handler) {
//     this.next = handler;
//     return handler;
//   }

//   handle(request) {
//     if (this.next) {
//       return this.next.handle(request);
//     }
//     return "No handler found";
//   }
// }

// class AuthHandler extends Handler {
//   handle(request) {
//     if (request === "auth") {
//       return "Auth Success";
//     }
//     return super.handle(request);
//   }
// }

// class LogHandler extends Handler {
//   handle(request) {
//     if (request === "log") {
//       return "Log Saved";
//     }
//     return super.handle(request);
//   }
// }

// // Test
// const auth = new AuthHandler();
// const log = new LogHandler();
// auth.setNext(log);

// console.log(auth.handle("auth")); //  Auth Success
// console.log(auth.handle("log"));  //  Log Saved
// console.log(auth.handle("error")); // No handler found


// ==================== Chain of Responsibility Pattern ====================

// Example 1 - Simple Auth & Log
class Handler1 {
  setNext(handler) {
    this.next = handler;
    return handler;
  }
  handle(req) {
    if (this.next) return this.next.handle(req);
    return "No handler found";
  }
}
class AuthHandler1 extends Handler1 {
  handle(req) {
    if (req === "auth") return "Auth Success";
    return super.handle(req);
  }
}
class LogHandler1 extends Handler1 {
  handle(req) {
    if (req === "log") return "Log Saved";
    return super.handle(req);
  }
}
const auth1 = new AuthHandler1();
const log1 = new LogHandler1();
auth1.setNext(log1);
console.log("Ex1:", auth1.handle("auth"));
console.log("Ex1:", auth1.handle("log"));
console.log("Ex1:", auth1.handle("error"));


// Example 2 - Payment Processing
class Handler2 {
  setNext(h) { this.next = h; return h; }
  handle(r) { return this.next ? this.next.handle(r) : "No payment method"; }
}
class CreditCardHandler extends Handler2 {
  handle(r) { if (r === "credit") return "Paid by Credit Card"; return super.handle(r); }
}
class PayPalHandler extends Handler2 {
  handle(r) { if (r === "paypal") return "Paid by PayPal"; return super.handle(r); }
}
const cch = new CreditCardHandler();
const pph = new PayPalHandler();
cch.setNext(pph);
console.log("Ex2:", cch.handle("paypal"));
console.log("Ex2:", cch.handle("bank"));


// Example 3 - Customer Support Levels
class Handler3 {
  setNext(h){ this.next = h; return h; }
  handle(r){ return this.next ? this.next.handle(r) : "No one can solve"; }
}
class Tier1Support extends Handler3 {
  handle(r){ if(r === "basic") return "Solved by Tier1"; return super.handle(r); }
}
class Tier2Support extends Handler3 {
  handle(r){ if(r === "advanced") return "Solved by Tier2"; return super.handle(r); }
}
const t1 = new Tier1Support();
const t2 = new Tier2Support();
t1.setNext(t2);
console.log("Ex3:", t1.handle("basic"));
console.log("Ex3:", t1.handle("advanced"));
console.log("Ex3:", t1.handle("complex"));


// Example 4 - Discount Rules
class Handler4 {
  setNext(h){ this.next = h; return h; }
  handle(o){ return this.next ? this.next.handle(o) : o; }
}
class StudentDiscount extends Handler4 {
  handle(o){ if(o.student) o.price *= 0.9; return super.handle(o); }
}
class CouponDiscount extends Handler4 {
  handle(o){ if(o.coupon) o.price -= 5; return super.handle(o); }
}
const sd = new StudentDiscount();
const cd = new CouponDiscount();
sd.setNext(cd);
let order4 = { price: 100, student: true, coupon: true };
console.log("Ex4:", sd.handle(order4));


// Example 5 - Document Approval
class Handler5 {
  setNext(h){ this.next = h; return h; }
  handle(doc){ return this.next ? this.next.handle(doc) : "Rejected"; }
}
class ManagerApproval extends Handler5 {
  handle(doc){ if(doc.level <= 1) return "Approved by Manager"; return super.handle(doc); }
}
class DirectorApproval extends Handler5 {
  handle(doc){ if(doc.level <= 2) return "Approved by Director"; return super.handle(doc); }
}
const mgr = new ManagerApproval();
const dir = new DirectorApproval();
mgr.setNext(dir);
console.log("Ex5:", mgr.handle({ level: 1 }));
console.log("Ex5:", mgr.handle({ level: 3 }));


// Example 6 - Spam Filter
class Handler6 {
  setNext(h){ this.next = h; return h; }
  handle(msg){ return this.next ? this.next.handle(msg) : "Delivered to Inbox"; }
}
class BlockedWordsFilter extends Handler6 {
  handle(msg){ if(msg.includes("spam")) return "Blocked as Spam"; return super.handle(msg); }
}
class LinkFilter extends Handler6 {
  handle(msg){ if(msg.includes("http")) return "Blocked - Contains Link"; return super.handle(msg); }
}
const bw = new BlockedWordsFilter();
const lf = new LinkFilter();
bw.setNext(lf);
console.log("Ex6:", bw.handle("buy now spam offer"));
console.log("Ex6:", bw.handle("check this http link"));
console.log("Ex6:", bw.handle("hello friend"));


// Example 7 - Tech Issue Escalation
class Handler7 {
  setNext(h){ this.next = h; return h; }
  handle(issue){ return this.next ? this.next.handle(issue) : "No fix available"; }
}
class SoftwareTeam extends Handler7 {
  handle(issue){ if(issue.type === "software") return "Software team fixed"; return super.handle(issue); }
}
class HardwareTeam extends Handler7 {
  handle(issue){ if(issue.type === "hardware") return "Hardware team fixed"; return super.handle(issue); }
}
const soft = new SoftwareTeam();
const hard = new HardwareTeam();
soft.setNext(hard);
console.log("Ex7:", soft.handle({ type: "software" }));
console.log("Ex7:", soft.handle({ type: "hardware" }));
console.log("Ex7:", soft.handle({ type: "network" }));


// Example 8 - Loan Approval
class Handler8 {
  setNext(h){ this.next = h; return h; }
  handle(app){ return this.next ? this.next.handle(app) : "Loan Rejected"; }
}
class ClerkApproval extends Handler8 {
  handle(app){ if(app.amount <= 5000) return "Approved by Clerk"; return super.handle(app); }
}
class ManagerLoanApproval extends Handler8 {
  handle(app){ if(app.amount <= 20000) return "Approved by Manager"; return super.handle(app); }
}
const clerk = new ClerkApproval();
const mloan = new ManagerLoanApproval();
clerk.setNext(mloan);
console.log("Ex8:", clerk.handle({ amount: 4000 }));
console.log("Ex8:", clerk.handle({ amount: 15000 }));
console.log("Ex8:", clerk.handle({ amount: 30000 }));


// Example 9 - Request Processing Pipeline
class Handler9 {
  setNext(h){ this.next = h; return h; }
  handle(req){ return this.next ? this.next.handle(req) : req; }
}
class TrimMiddleware extends Handler9 {
  handle(req){ req = req.trim(); return super.handle(req); }
}
class UppercaseMiddleware extends Handler9 {
  handle(req){ req = req.toUpperCase(); return super.handle(req); }
}
const trim = new TrimMiddleware();
const upper = new UppercaseMiddleware();
trim.setNext(upper);
console.log("Ex9:", trim.handle("  hello world  "));


// Example 10 - Event Handling
class Handler10 {
  setNext(h){ this.next = h; return h; }
  handle(e){ return this.next ? this.next.handle(e) : "No handler"; }
}
class ClickHandler extends Handler10 {
  handle(e){ if(e === "click") return "Click Handled"; return super.handle(e); }
}
class HoverHandler extends Handler10 {
  handle(e){ if(e === "hover") return "Hover Handled"; return super.handle(e); }
}
const click = new ClickHandler();
const hover = new HoverHandler();
click.setNext(hover);
console.log("Ex10:", click.handle("click"));
console.log("Ex10:", click.handle("hover"));
console.log("Ex10:", click.handle("drag"));

// // Command Pattern/////////////////////////////////////////////////////
// class Light {
//   turnOn() {
//     console.log("Light is ON");
//   }
//   turnOff() {
//     console.log("Light is OFF");
//   }
// }

// class LightOnCommand {
//   constructor(light) {
//     this.light = light;
//   }

//   execute() {
//     this.light.turnOn();
//   }
// }

// class RemoteControl {
//   setCommand(command) {
//     this.command = command;
//   }

//   pressButton() {
//     this.command.execute();
//   }
// }

// // Test
// const light = new Light();
// const lightOn = new LightOnCommand(light);
// const remote = new RemoteControl();

// remote.setCommand(lightOn);
// remote.pressButton(); //  Light is ON


// ==================== Command Pattern ====================

// Base Command Interface
class Command {
  execute() {}
  undo() {}
}

// Example 1 - Light On/Off
class Light {
  on() { return "Light is ON"; }
  off() { return "Light is OFF"; }
}
class LightOnCommand extends Command {
  constructor(light) { super(); this.light = light; }
  execute() { return this.light.on(); }
}
class LightOffCommand extends Command {
  constructor(light) { super(); this.light = light; }
  execute() { return this.light.off(); }
}
const light1 = new Light();
console.log("Ex1:", new LightOnCommand(light1).execute());
console.log("Ex1:", new LightOffCommand(light1).execute());


// Example 2 - Fan Control
class Fan {
  start() { return "Fan Started"; }
  stop() { return "Fan Stopped"; }
}
class StartFanCommand extends Command {
  constructor(fan){ super(); this.fan = fan; }
  execute(){ return this.fan.start(); }
}
class StopFanCommand extends Command {
  constructor(fan){ super(); this.fan = fan; }
  execute(){ return this.fan.stop(); }
}
const fan = new Fan();
console.log("Ex2:", new StartFanCommand(fan).execute());
console.log("Ex2:", new StopFanCommand(fan).execute());


// Example 3 - Music Player
class MusicPlayer {
  play(){ return "Playing music"; }
  pause(){ return "Music paused"; }
}
class PlayCommand extends Command {
  constructor(player){ super(); this.player = player; }
  execute(){ return this.player.play(); }
}
class PauseCommand extends Command {
  constructor(player){ super(); this.player = player; }
  execute(){ return this.player.pause(); }
}
const mp = new MusicPlayer();
console.log("Ex3:", new PlayCommand(mp).execute());
console.log("Ex3:", new PauseCommand(mp).execute());


// Example 4 - Calculator Add/Subtract
class Calculator {
  add(a,b){ return a+b; }
  sub(a,b){ return a-b; }
}
class AddCommand extends Command {
  constructor(calc,a,b){ super(); this.calc=calc; this.a=a; this.b=b; }
  execute(){ return this.calc.add(this.a,this.b); }
}
class SubCommand extends Command {
  constructor(calc,a,b){ super(); this.calc=calc; this.a=a; this.b=b; }
  execute(){ return this.calc.sub(this.a,this.b); }
}
const calc = new Calculator();
console.log("Ex4:", new AddCommand(calc,5,3).execute());
console.log("Ex4:", new SubCommand(calc,5,3).execute());


// Example 5 - TV Remote
class TV {
  turnOn(){ return "TV ON"; }
  turnOff(){ return "TV OFF"; }
}
class TVOnCommand extends Command {
  constructor(tv){ super(); this.tv=tv; }
  execute(){ return this.tv.turnOn(); }
}
class TVOffCommand extends Command {
  constructor(tv){ super(); this.tv=tv; }
  execute(){ return this.tv.turnOff(); }
}
const tv = new TV();
console.log("Ex5:", new TVOnCommand(tv).execute());
console.log("Ex5:", new TVOffCommand(tv).execute());


// Example 6 - Door Lock/Unlock
class Door {
  lock(){ return "Door Locked"; }
  unlock(){ return "Door Unlocked"; }
}
class LockCommand extends Command {
  constructor(door){ super(); this.door=door; }
  execute(){ return this.door.lock(); }
}
class UnlockCommand extends Command {
  constructor(door){ super(); this.door=door; }
  execute(){ return this.door.unlock(); }
}
const door = new Door();
console.log("Ex6:", new LockCommand(door).execute());
console.log("Ex6:", new UnlockCommand(door).execute());


// Example 7 - Volume Control
class Volume {
  up(){ return "Volume Up"; }
  down(){ return "Volume Down"; }
}
class VolumeUpCommand extends Command {
  constructor(vol){ super(); this.vol=vol; }
  execute(){ return this.vol.up(); }
}
class VolumeDownCommand extends Command {
  constructor(vol){ super(); this.vol=vol; }
  execute(){ return this.vol.down(); }
}
const vol = new Volume();
console.log("Ex7:", new VolumeUpCommand(vol).execute());
console.log("Ex7:", new VolumeDownCommand(vol).execute());


// Example 8 - Robot Move
class Robot {
  forward(){ return "Robot Forward"; }
  backward(){ return "Robot Backward"; }
}
class ForwardCommand extends Command {
  constructor(robot){ super(); this.robot=robot; }
  execute(){ return this.robot.forward(); }
}
class BackwardCommand extends Command {
  constructor(robot){ super(); this.robot=robot; }
  execute(){ return this.robot.backward(); }
}
const robot = new Robot();
console.log("Ex8:", new ForwardCommand(robot).execute());
console.log("Ex8:", new BackwardCommand(robot).execute());


// Example 9 - Clipboard Copy/Paste
class Clipboard {
  copy(){ return "Text Copied"; }
  paste(){ return "Text Pasted"; }
}
class CopyCommand extends Command {
  constructor(clip){ super(); this.clip=clip; }
  execute(){ return this.clip.copy(); }
}
class PasteCommand extends Command {
  constructor(clip){ super(); this.clip=clip; }
  execute(){ return this.clip.paste(); }
}
const clip = new Clipboard();
console.log("Ex9:", new CopyCommand(clip).execute());
console.log("Ex9:", new PasteCommand(clip).execute());


// Example 10 - Shopping Cart
class Cart {
  addItem(){ return "Item Added"; }
  removeItem(){ return "Item Removed"; }
}
class AddItemCommand extends Command {
  constructor(cart){ super(); this.cart=cart; }
  execute(){ return this.cart.addItem(); }
}
class RemoveItemCommand extends Command {
  constructor(cart){ super(); this.cart=cart; }
  execute(){ return this.cart.removeItem(); }
}
const cart = new Cart();
console.log("Ex10:", new AddItemCommand(cart).execute());
console.log("Ex10:", new RemoveItemCommand(cart).execute());

// // Interperator pattern////////////////////////////////////////////////
// class Context {
//   constructor(input) {
//     this.input = input;
//     this.output = 0;
//   }
// }

// class NumberExpression {
//   constructor(number) {
//     this.number = number;
//   }

//   interpret(context) {
//     context.output += this.number;
//   }
// }

// // Test
// const context = new Context("some input");
// const expr = new NumberExpression(10);
// expr.interpret(context);

// console.log("Result:", context.output); // Result: 10


// ==================== Interpreter Pattern ====================

// Example 1 - Add Number
class Context1 { constructor(){ this.value = 0; } }
class NumberExp1 {
  constructor(num){ this.num=num; }
  interpret(ctx){ ctx.value += this.num; }
}
const ctx1 = new Context1();
new NumberExp1(10).interpret(ctx1);
console.log("Ex1:", ctx1.value);

// Example 2 - Subtract Number
class Context2 { constructor(){ this.value = 100; } }
class NumberExp2 {
  constructor(num){ this.num=num; }
  interpret(ctx){ ctx.value -= this.num; }
}
const ctx2 = new Context2();
new NumberExp2(30).interpret(ctx2);
console.log("Ex2:", ctx2.value);

// Example 3 - Multiply Number
class Context3 { constructor(){ this.value = 2; } }
class NumberExp3 {
  constructor(num){ this.num=num; }
  interpret(ctx){ ctx.value *= this.num; }
}
const ctx3 = new Context3();
new NumberExp3(5).interpret(ctx3);
console.log("Ex3:", ctx3.value);

// Example 4 - Divide Number
class Context4 { constructor(){ this.value = 20; } }
class NumberExp4 {
  constructor(num){ this.num=num; }
  interpret(ctx){ ctx.value /= this.num; }
}
const ctx4 = new Context4();
new NumberExp4(4).interpret(ctx4);
console.log("Ex4:", ctx4.value);

// Example 5 - Add & Subtract Sequence
class Context5 { constructor(){ this.value=0; } }
class AddExp5 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value+=this.num; } }
class SubExp5 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value-=this.num; } }
const ctx5 = new Context5();
new AddExp5(50).interpret(ctx5);
new SubExp5(20).interpret(ctx5);
console.log("Ex5:", ctx5.value);

// Example 6 - Multiply & Divide Sequence
class Context6 { constructor(){ this.value=10; } }
class MulExp6 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value*=this.num; } }
class DivExp6 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value/=this.num; } }
const ctx6 = new Context6();
new MulExp6(3).interpret(ctx6);
new DivExp6(5).interpret(ctx6);
console.log("Ex6:", ctx6.value);

// Example 7 - Add Multiple Numbers
class Context7 { constructor(){ this.value=0; } }
class NumberExp7 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value+=this.num; } }
const ctx7 = new Context7();
[5,10,15].forEach(n=>new NumberExp7(n).interpret(ctx7));
console.log("Ex7:", ctx7.value);

// Example 8 - Subtract Multiple Numbers
class Context8 { constructor(){ this.value=100; } }
class NumberExp8 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value-=this.num; } }
const ctx8 = new Context8();
[10,20,5].forEach(n=>new NumberExp8(n).interpret(ctx8));
console.log("Ex8:", ctx8.value);

// Example 9 - Add & Multiply
class Context9 { constructor(){ this.value=2; } }
class AddExp9 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value+=this.num; } }
class MulExp9 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value*=this.num; } }
const ctx9 = new Context9();
new AddExp9(3).interpret(ctx9);
new MulExp9(4).interpret(ctx9);
console.log("Ex9:", ctx9.value);

// Example 10 - Complex Sequence
class Context10 { constructor(){ this.value=1; } }
class AddExp10 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value+=this.num; } }
class MulExp10 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value*=this.num; } }
class SubExp10 { constructor(num){ this.num=num; } interpret(ctx){ ctx.value-=this.num; } }
const ctx10 = new Context10();
new AddExp10(5).interpret(ctx10);
new MulExp10(2).interpret(ctx10);
new SubExp10(4).interpret(ctx10);
console.log("Ex10:", ctx10.value);

// // Iterator Pattern////////////////////////////////////////////////
// class Iterator {
//   constructor(items) {
//     this.items = items;
//     this.index = 0;
//   }

//   hasNext() {
//     return this.index < this.items.length;
//   }

//   next() {
//     return this.items[this.index++];
//   }
// }

// // Test
// const list = ["Apple", "Banana", "Grapes"];
// const iter = new Iterator(list);

// while (iter.hasNext()) {
//   console.log("Item:", iter.next());
// }


// ==================== Iterator Pattern ====================

// Example 1 - Simple Array
class Iterator1 {
  constructor(items){ this.items=items; this.index=0; }
  hasNext(){ return this.index<this.items.length; }
  next(){ return this.items[this.index++]; }
}
const iter1 = new Iterator1(["A","B","C"]);
while(iter1.hasNext()){ console.log("Ex1:", iter1.next()); }


// Example 2 - Numbers
class Iterator2 {
  constructor(items){ this.items=items; this.index=0; }
  hasNext(){ return this.index<this.items.length; }
  next(){ return this.items[this.index++]; }
}
const iter2 = new Iterator2([1,2,3,4]);
while(iter2.hasNext()){ console.log("Ex2:", iter2.next()); }


// Example 3 - Colors
class Iterator3 {
  constructor(items){ this.items=items; this.index=0; }
  hasNext(){ return this.index<this.items.length; }
  next(){ return this.items[this.index++]; }
}
const iter3 = new Iterator3(["Red","Green","Blue"]);
while(iter3.hasNext()){ console.log("Ex3:", iter3.next()); }


// Example 4 - Fruits
class Iterator4 {
  constructor(items){ this.items=items; this.index=0; }
  hasNext(){ return this.index<this.items.length; }
  next(){ return this.items[this.index++]; }
}
const iter4 = new Iterator4(["Apple","Banana"]);
while(iter4.hasNext()){ console.log("Ex4:", iter4.next()); }


// Example 5 - Mixed Types
class Iterator5 {
  constructor(items){ this.items=items; this.index=0; }
  hasNext(){ return this.index<this.items.length; }
  next(){ return this.items[this.index++]; }
}
const iter5 = new Iterator5([10,"X",true]);
while(iter5.hasNext()){ console.log("Ex5:", iter5.next()); }


// Example 6 - Strings
class Iterator6 {
  constructor(items){ this.items=items; this.index=0; }
  hasNext(){ return this.index<this.items.length; }
  next(){ return this.items[this.index++]; }
}
const iter6 = new Iterator6(["Hello","World"]);
while(iter6.hasNext()){ console.log("Ex6:", iter6.next()); }


// Example 7 - Boolean Values
class Iterator7 {
  constructor(items){ this.items=items; this.index=0; }
  hasNext(){ return this.index<this.items.length; }
  next(){ return this.items[this.index++]; }
}
const iter7 = new Iterator7([true,false,true]);
while(iter7.hasNext()){ console.log("Ex7:", iter7.next()); }


// Example 8 - Empty Array
class Iterator8 {
  constructor(items){ this.items=items; this.index=0; }
  hasNext(){ return this.index<this.items.length; }
  next(){ return this.items[this.index++]; }
}
const iter8 = new Iterator8([]);
while(iter8.hasNext()){ console.log("Ex8:", iter8.next()); }
console.log("Ex8: Done");


// Example 9 - Nested Arrays
class Iterator9 {
  constructor(items){ this.items=items; this.index=0; }
  hasNext(){ return this.index<this.items.length; }
  next(){ return this.items[this.index++]; }
}
const iter9 = new Iterator9([[1,2],[3,4]]);
while(iter9.hasNext()){ console.log("Ex9:", iter9.next()); }


// Example 10 - Objects
class Iterator10 {
  constructor(items){ this.items=items; this.index=0; }
  hasNext(){ return this.index<this.items.length; }
  next(){ return this.items[this.index++]; }
}
const iter10 = new Iterator10([{name:"Alice"},{name:"Bob"}]);
while(iter10.hasNext()){ console.log("Ex10:", iter10.next()); }

// // Mediator Pattern////////////////////////////////////////////////
// class Mediator {
//   setUsers(user1, user2) {
//     this.user1 = user1;
//     this.user2 = user2;
//   }

//   send(message, sender) {
//     if (sender === this.user1) {
//       this.user2.receive(message);
//     } else {
//       this.user1.receive(message);
//     }
//   }
// }

// class User {
//   constructor(name, mediator) {
//     this.name = name;
//     this.mediator = mediator;
//   }

//   send(message) {
//     console.log(`${this.name} sends: ${message}`);
//     this.mediator.send(message, this);
//   }

//   receive(message) {
//     console.log(`${this.name} receives: ${message}`);
//   }
// }

// // Test
// const mediator = new Mediator();
// const alice = new User("Alice", mediator);
// const bob = new User("Bob", mediator);

// mediator.setUsers(alice, bob);

// alice.send("Hi Bob!");
// bob.send("Hey Alice!");


// ==================== Mediator Pattern ====================

// Example 1 - Simple Chat
class Mediator1 {
  send(msg, sender, receiver){ receiver.receive(msg, sender); }
}
class User1 {
  constructor(name){ this.name=name; }
  send(msg, mediator, receiver){ mediator.send(msg, this, receiver); }
  receive(msg, sender){ console.log("Ex1:", this.name,"received:", msg,"from", sender.name); }
}
const mediator1 = new Mediator1();
const u1a = new User1("Alice");
const u1b = new User1("Bob");
u1a.send("Hello Bob!", mediator1, u1b);


// Example 2 - Simple Chat 2
class Mediator2 {
  send(msg,sender,receiver){ receiver.receive(msg,sender); }
}
class User2 {
  constructor(name){ this.name=name; }
  send(msg,mediator,receiver){ mediator.send(msg,this,receiver); }
  receive(msg,sender){ console.log("Ex2:", this.name,"got:", msg,"from", sender.name); }
}
const mediator2 = new Mediator2();
const u2a = new User2("Tom");
const u2b = new User2("Jerry");
u2b.send("Hi Tom!", mediator2, u2a);


// Example 3 - Alarm System
class Mediator3 {
  notify(event, sender){ console.log("Ex3: Event", event,"from",sender.name); }
}
class Sensor3 { constructor(name){ this.name=name; } trigger(mediator,event){ mediator.notify(event,this); } }
const mediator3 = new Mediator3();
const sensor3 = new Sensor3("DoorSensor");
sensor3.trigger(mediator3,"Door Opened");


// Example 4 - Traffic Light
class Mediator4 {
  change(light,color){ console.log("Ex4:", light.name,"turned",color); }
}
class TrafficLight { constructor(name){ this.name=name; } }
const mediator4 = new Mediator4();
const light4 = new TrafficLight("MainStreet");
mediator4.change(light4,"Green");


// Example 5 - Button Click
class Mediator5 {
  click(button){ console.log("Ex5: Button",button.name,"clicked"); }
}
class Button5 { constructor(name){ this.name=name; } }
const mediator5 = new Mediator5();
const btn5 = new Button5("Submit");
mediator5.click(btn5);


// Example 6 - Airplane Control
class Mediator6 {
  notify(plane,msg){ console.log("Ex6: Plane", plane.name, msg); }
}
class Plane6 { constructor(name){ this.name=name; } send(mediator,msg){ mediator.notify(this,msg); } }
const mediator6 = new Mediator6();
const plane6 = new Plane6("Flight101");
plane6.send(mediator6,"Ready for takeoff");


// Example 7 - Stock Exchange
class Mediator7 {
  notify(broker,msg){ console.log("Ex7: Broker",broker.name,msg); }
}
class Broker7 { constructor(name){ this.name=name; } action(mediator,msg){ mediator.notify(this,msg); } }
const mediator7 = new Mediator7();
const broker7 = new Broker7("BrokerA");
broker7.action(mediator7,"Buy 100 shares");


// Example 8 - Chat Room
class Mediator8 {
  send(msg,sender,receiver){ receiver.receive(msg,sender); }
}
class Member8 {
  constructor(name){ this.name=name; }
  send(msg,mediator,receiver){ mediator.send(msg,this,receiver); }
  receive(msg,sender){ console.log("Ex8:", this.name,"got message:",msg,"from",sender.name); }
}
const mediator8 = new Mediator8();
const m8a = new Member8("User1");
const m8b = new Member8("User2");
m8a.send("Ping!", mediator8, m8b);


// Example 9 - Notification System
class Mediator9 {
  notify(sender,msg){ console.log("Ex9: Notification from",sender.name,":",msg); }
}
class Component9 { constructor(name){ this.name=name; } send(mediator,msg){ mediator.notify(this,msg); } }
const mediator9 = new Mediator9();
const comp9 = new Component9("SensorX");
comp9.send(mediator9,"Battery Low");


// Example 10 - Chat Group
class Mediator10 {
  send(msg,sender,receivers){ receivers.forEach(r=>r.receive(msg,sender)); }
}
class User10 { constructor(name){ this.name=name; } send(msg,mediator,receivers){ mediator.send(msg,this,receivers); } receive(msg,sender){ console.log("Ex10:", this.name,"received:",msg,"from",sender.name); } }
const mediator10 = new Mediator10();
const u10a = new User10("Anna");
const u10b = new User10("Elsa");
const u10c = new User10("Olaf");
u10a.send("Hello team!", mediator10, [u10b,u10c]);

// // Memento Pattern////////////////////////////////////////////////
// class Memento {
//   constructor(state) {
//     this.state = state;
//   }
// }

// class Editor {
//   setState(state) {
//     this.state = state;
//   }

//   save() {
//     return new Memento(this.state);
//   }

//   restore(memento) {
//     this.state = memento.state;
//   }
// }

// // Test
// const editor = new Editor();
// editor.setState("Version 1");
// const saved = editor.save();

// editor.setState("Version 2");
// console.log("Current:", editor.state); // Version 2

// editor.restore(saved);
// console.log("Restored:", editor.state); // Version 1


// ==================== Memento Pattern ====================

// Example 1 - Save & Restore
class Editor1 { setState(s){ this.state=s; } save(){ return {state:this.state}; } restore(m){ this.state=m.state; } }
const ed1 = new Editor1();
ed1.setState("V1");
const m1 = ed1.save();
ed1.setState("V2");
ed1.restore(m1);
console.log("Ex1:", ed1.state);

// Example 2 - Text Editor
class Editor2 { setState(s){ this.state=s; } save(){ return {state:this.state}; } restore(m){ this.state=m.state; } }
const ed2 = new Editor2();
ed2.setState("Hello");
const m2 = ed2.save();
ed2.setState("Hello World");
ed2.restore(m2);
console.log("Ex2:", ed2.state);

// Example 3 - Document Version
class Editor3 { setState(s){ this.state=s; } save(){ return {state:this.state}; } restore(m){ this.state=m.state; } }
const ed3 = new Editor3();
ed3.setState("Draft");
const m3 = ed3.save();
ed3.setState("Final");
ed3.restore(m3);
console.log("Ex3:", ed3.state);

// Example 4 - Game Level
class Game4 { setLevel(l){ this.level=l; } save(){ return {level:this.level}; } restore(m){ this.level=m.level; } }
const g4 = new Game4();
g4.setLevel(1);
const m4 = g4.save();
g4.setLevel(5);
g4.restore(m4);
console.log("Ex4:", g4.level);

// Example 5 - Settings
class Settings5 { set(s){ this.setting=s; } save(){ return {setting:this.setting}; } restore(m){ this.setting=m.setting; } }
const s5 = new Settings5();
s5.set("Low");
const m5 = s5.save();
s5.set("High");
s5.restore(m5);
console.log("Ex5:", s5.setting);

// Example 6 - Counter
class Counter6 { set(v){ this.value=v; } save(){ return {value:this.value}; } restore(m){ this.value=m.value; } }
const c6 = new Counter6();
c6.set(100);
const m6 = c6.save();
c6.set(200);
c6.restore(m6);
console.log("Ex6:", c6.value);

// Example 7 - Score
class Score7 { set(v){ this.value=v; } save(){ return {value:this.value}; } restore(m){ this.value=m.value; } }
const sc7 = new Score7();
sc7.set(50);
const m7 = sc7.save();
sc7.set(90);
sc7.restore(m7);
console.log("Ex7:", sc7.value);

// Example 8 - Volume
class Volume8 { set(v){ this.level=v; } save(){ return {level:this.level}; } restore(m){ this.level=m.level; } }
const v8 = new Volume8();
v8.set(10);
const m8 = v8.save();
v8.set(20);
v8.restore(m8);
console.log("Ex8:", v8.level);

// Example 9 - Light Intensity
class Light9 { set(v){ this.intensity=v; } save(){ return {intensity:this.intensity}; } restore(m){ this.intensity=m.intensity; } }
const l9 = new Light9();
l9.set(5);
const m9 = l9.save();
l9.set(15);
l9.restore(m9);
console.log("Ex9:", l9.intensity);

// Example 10 - Speed
class Car10 { set(v){ this.speed=v; } save(){ return {speed:this.speed}; } restore(m){ this.speed=m.speed; } }
const car10 = new Car10();
car10.set(60);
const m10 = car10.save();
car10.set(120);
car10.restore(m10);
console.log("Ex10:", car10.speed);

// // Observer Pattern////////////////////////////////////////////////
// class Subject {
//   constructor() {
//     this.observers = [];
//   }

//   attach(observer) {
//     this.observers.push(observer);
//   }

//   notify(message) {
//     this.observers.forEach(observer => observer.update(message));
//   }
// }

// class Observer {
//   constructor(name) {
//     this.name = name;
//   }

//   update(message) {
//     console.log(`${this.name} received: ${message}`);
//   }
// }

// // Test
// const subject = new Subject();
// const observer1 = new Observer("Phone");
// const observer2 = new Observer("Laptop");

// subject.attach(observer1);
// subject.attach(observer2);

// subject.notify("New Notification!");


// ==================== Observer Pattern ====================

// Example 1 - Simple Notification
class Subject1 { constructor(){ this.observers=[]; } attach(o){ this.observers.push(o); } notify(msg){ this.observers.forEach(o=>o.update(msg)); } }
class Observer1 { constructor(name){ this.name=name; } update(msg){ console.log("Ex1:", this.name,"received:",msg); } }
const subj1 = new Subject1();
const obs1a = new Observer1("Phone");
const obs1b = new Observer1("Laptop");
subj1.attach(obs1a);
subj1.attach(obs1b);
subj1.notify("Hello World!");

// Example 2 - Stock Update
class Subject2 { constructor(){ this.observers=[]; } attach(o){ this.observers.push(o); } notify(msg){ this.observers.forEach(o=>o.update(msg)); } }
class Observer2 { constructor(name){ this.name=name; } update(msg){ console.log("Ex2:", this.name,"got:",msg); } }
const subj2 = new Subject2();
const obs2a = new Observer2("Broker1");
const obs2b = new Observer2("Broker2");
subj2.attach(obs2a);
subj2.attach(obs2b);
subj2.notify("Stock Up!");

// Example 3 - Weather
class Subject3 { constructor(){ this.observers=[]; } attach(o){ this.observers.push(o); } notify(msg){ this.observers.forEach(o=>o.update(msg)); } }
class Observer3 { constructor(name){ this.name=name; } update(msg){ console.log("Ex3:", this.name,"sees:",msg); } }
const subj3 = new Subject3();
const obs3a = new Observer3("Alice");
subj3.attach(obs3a);
subj3.notify("Rainy");

// Example 4 - Chat
class Subject4 { constructor(){ this.observers=[]; } attach(o){ this.observers.push(o); } notify(msg){ this.observers.forEach(o=>o.update(msg)); } }
class Observer4 { constructor(name){ this.name=name; } update(msg){ console.log("Ex4:", this.name,"received message:",msg); } }
const subj4 = new Subject4();
const obs4a = new Observer4("User1");
const obs4b = new Observer4("User2");
subj4.attach(obs4a);
subj4.attach(obs4b);
subj4.notify("Ping!");

// Example 5 - Email Alerts
class Subject5 { constructor(){ this.observers=[]; } attach(o){ this.observers.push(o); } notify(msg){ this.observers.forEach(o=>o.update(msg)); } }
class Observer5 { constructor(name){ this.name=name; } update(msg){ console.log("Ex5:", this.name,"alert:",msg); } }
const subj5 = new Subject5();
const obs5a = new Observer5("Inbox1");
subj5.attach(obs5a);
subj5.notify("New Email!");

// Example 6 - Social Media
class Subject6 { constructor(){ this.observers=[]; } attach(o){ this.observers.push(o); } notify(msg){ this.observers.forEach(o=>o.update(msg)); } }
class Observer6 { constructor(name){ this.name=name; } update(msg){ console.log("Ex6:", this.name,"got update:",msg); } }
const subj6 = new Subject6();
const obs6a = new Observer6("Follower1");
const obs6b = new Observer6("Follower2");
subj6.attach(obs6a);
subj6.attach(obs6b);
subj6.notify("New Post!");

// Example 7 - Temperature
class Subject7 { constructor(){ this.observers=[]; } attach(o){ this.observers.push(o); } notify(msg){ this.observers.forEach(o=>o.update(msg)); } }
class Observer7 { constructor(name){ this.name=name; } update(msg){ console.log("Ex7:", this.name,"temperature is:",msg); } }
const subj7 = new Subject7();
const obs7a = new Observer7("Sensor1");
subj7.attach(obs7a);
subj7.notify("30°C");

// Example 8 - Traffic Update
class Subject8 { constructor(){ this.observers=[]; } attach(o){ this.observers.push(o); } notify(msg){ this.observers.forEach(o=>o.update(msg)); } }
class Observer8 { constructor(name){ this.name=name; } update(msg){ console.log("Ex8:", this.name,"alert:",msg); } }
const subj8 = new Subject8();
const obs8a = new Observer8("Driver1");
const obs8b = new Observer8("Driver2");
subj8.attach(obs8a);
subj8.attach(obs8b);
subj8.notify("Accident Ahead");

// Example 9 - Server Status
class Subject9 { constructor(){ this.observers=[]; } attach(o){ this.observers.push(o); } notify(msg){ this.observers.forEach(o=>o.update(msg)); } }
class Observer9 { constructor(name){ this.name=name; } update(msg){ console.log("Ex9:", this.name,"status:",msg); } }
const subj9 = new Subject9();
const obs9a = new Observer9("Server1");
subj9.attach(obs9a);
subj9.notify("Online");

// Example 10 - News Update
class Subject10 { constructor(){ this.observers=[]; } attach(o){ this.observers.push(o); } notify(msg){ this.observers.forEach(o=>o.update(msg)); } }
class Observer10 { constructor(name){ this.name=name; } update(msg){ console.log("Ex10:", this.name,"news:",msg); } }
const subj10 = new Subject10();
const obs10a = new Observer10("Reader1");
const obs10b = new Observer10("Reader2");
subj10.attach(obs10a);
subj10.attach(obs10b);
subj10.notify("Breaking News!");

// // State Pattern////////////////////////////////////////////////
// class State {
//   handle(context) {}
// }

// class OnlineState extends State {
//   handle(context) {
//     console.log("Online: switching to Offline...");
//     context.setState(new OfflineState());
//   }
// }

// class OfflineState extends State {
//   handle(context) {
//     console.log("Offline: switching to Online...");
//     context.setState(new OnlineState());
//   }
// }

// class DeviceContext {
//   setState(state) {
//     this.state = state;
//   }

//   request() {
//     this.state.handle(this);
//   }
// }

// // Test
// const device = new DeviceContext();
// device.setState(new OnlineState());

// device.request(); // Online → Offline
// device.request(); // Offline → Online


// ==================== State Pattern ====================

// Example 1 - Online/Offline
class Online1 { handle(context){ console.log("Ex1: Online → Offline"); context.setState(new Offline1()); } }
class Offline1 { handle(context){ console.log("Ex1: Offline → Online"); context.setState(new Online1()); } }
class Device1 { setState(s){ this.state=s; } request(){ this.state.handle(this); } }
const device1 = new Device1();
device1.setState(new Online1());
device1.request();
device1.request();

// Example 2 - Light On/Off
class On2 { handle(ctx){ console.log("Ex2: Light On → Off"); ctx.setState(new Off2()); } }
class Off2 { handle(ctx){ console.log("Ex2: Light Off → On"); ctx.setState(new On2()); } }
class Light2 { setState(s){ this.state=s; } request(){ this.state.handle(this); } }
const light2 = new Light2();
light2.setState(new On2());
light2.request();
light2.request();

// Example 3 - Door Open/Close
class Open3 { handle(ctx){ console.log("Ex3: Door Open → Closed"); ctx.setState(new Closed3()); } }
class Closed3 { handle(ctx){ console.log("Ex3: Door Closed → Open"); ctx.setState(new Open3()); } }
class Door3 { setState(s){ this.state=s; } request(){ this.state.handle(this); } }
const door3 = new Door3();
door3.setState(new Open3());
door3.request();
door3.request();

// Example 4 - Fan High/Low
class High4 { handle(ctx){ console.log("Ex4: Fan High → Low"); ctx.setState(new Low4()); } }
class Low4 { handle(ctx){ console.log("Ex4: Fan Low → High"); ctx.setState(new High4()); } }
class Fan4 { setState(s){ this.state=s; } request(){ this.state.handle(this); } }
const fan4 = new Fan4();
fan4.setState(new High4());
fan4.request();
fan4.request();

// Example 5 - AC On/Off
class On5 { handle(ctx){ console.log("Ex5: AC On → Off"); ctx.setState(new Off5()); } }
class Off5 { handle(ctx){ console.log("Ex5: AC Off → On"); ctx.setState(new On5()); } }
class AC5 { setState(s){ this.state=s; } request(){ this.state.handle(this); } }
const ac5 = new AC5();
ac5.setState(new On5());
ac5.request();
ac5.request();

// Example 6 - Music Play/Pause
class Play6 { handle(ctx){ console.log("Ex6: Music Play → Pause"); ctx.setState(new Pause6()); } }
class Pause6 { handle(ctx){ console.log("Ex6: Music Pause → Play"); ctx.setState(new Play6()); } }
class Music6 { setState(s){ this.state=s; } request(){ this.state.handle(this); } }
const music6 = new Music6();
music6.setState(new Play6());
music6.request();
music6.request();

// Example 7 - Car Start/Stop
class Start7 { handle(ctx){ console.log("Ex7: Car Start → Stop"); ctx.setState(new Stop7()); } }
class Stop7 { handle(ctx){ console.log("Ex7: Car Stop → Start"); ctx.setState(new Start7()); } }
class Car7 { setState(s){ this.state=s; } request(){ this.state.handle(this); } }
const car7 = new Car7();
car7.setState(new Start7());
car7.request();
car7.request();

// Example 8 - Printer Ready/Busy
class Ready8 { handle(ctx){ console.log("Ex8: Printer Ready → Busy"); ctx.setState(new Busy8()); } }
class Busy8 { handle(ctx){ console.log("Ex8: Printer Busy → Ready"); ctx.setState(new Ready8()); } }
class Printer8 { setState(s){ this.state=s; } request(){ this.state.handle(this); } }
const printer8 = new Printer8();
printer8.setState(new Ready8());
printer8.request();
printer8.request();

// Example 9 - Server Up/Down
class Up9 { handle(ctx){ console.log("Ex9: Server Up → Down"); ctx.setState(new Down9()); } }
class Down9 { handle(ctx){ console.log("Ex9: Server Down → Up"); ctx.setState(new Up9()); } }
class Server9 { setState(s){ this.state=s; } request(){ this.state.handle(this); } }
const server9 = new Server9();
server9.setState(new Up9());
server9.request();
server9.request();

// Example 10 - App Active/Inactive
class Active10 { handle(ctx){ console.log("Ex10: App Active → Inactive"); ctx.setState(new Inactive10()); } }
class Inactive10 { handle(ctx){ console.log("Ex10: App Inactive → Active"); ctx.setState(new Active10()); } }
class App10 { setState(s){ this.state=s; } request(){ this.state.handle(this); } }
const app10 = new App10();
app10.setState(new Active10());
app10.request();
app10.request();

// // Strategy Pattern///////////////////////////////////////
// class Strategy {
//   execute(a, b) {}
// }

// class AddStrategy extends Strategy {
//   execute(a, b) {
//     return a + b;
//   }
// }

// class MultiplyStrategy extends Strategy {
//   execute(a, b) {
//     return a * b;
//   }
// }

// class Calculator {
//   setStrategy(strategy) {
//     this.strategy = strategy;
//   }

//   calculate(a, b) {
//     return this.strategy.execute(a, b);
//   }
// }

// // Test
// const calculator = new Calculator();
// calculator.setStrategy(new AddStrategy());
// console.log("Addition:", calculator.calculate(4, 2)); // 6

// calculator.setStrategy(new MultiplyStrategy());
// console.log("Multiplication:", calculator.calculate(4, 2)); // 8


// ==================== Strategy Pattern ====================

// Example 1 - Add/Multiply
class Add1 { execute(a,b){ return a+b; } }
class Mul1 { execute(a,b){ return a*b; } }
class Calc1 { setStrategy(s){ this.strategy=s; } calc(a,b){ return this.strategy.execute(a,b); } }
const c1 = new Calc1();
c1.setStrategy(new Add1());
console.log("Ex1 Add:", c1.calc(2,3));
c1.setStrategy(new Mul1());
console.log("Ex1 Mul:", c1.calc(2,3));

// Example 2 - Discount
class Discount2 { apply(price){ return price*0.9; } }
class NoDiscount2 { apply(price){ return price; } }
class Bill2 { setStrategy(s){ this.strategy=s; } total(price){ return this.strategy.apply(price); } }
const b2 = new Bill2();
b2.setStrategy(new Discount2());
console.log("Ex2 Total:", b2.total(100));
b2.setStrategy(new NoDiscount2());
console.log("Ex2 Total:", b2.total(100));

// Example 3 - Tax
class Tax3 { apply(amount){ return amount*1.2; } }
class NoTax3 { apply(amount){ return amount; } }
class Payment3 { setStrategy(s){ this.strategy=s; } calc(amount){ return this.strategy.apply(amount); } }
const p3 = new Payment3();
p3.setStrategy(new Tax3());
console.log("Ex3 Amount:", p3.calc(50));
p3.setStrategy(new NoTax3());
console.log("Ex3 Amount:", p3.calc(50));

// Example 4 - Shipping
class Fast4 { cost(){ return 20; } }
class Slow4 { cost(){ return 5; } }
class Order4 { setStrategy(s){ this.strategy=s; } getCost(){ return this.strategy.cost(); } }
const o4 = new Order4();
o4.setStrategy(new Fast4());
console.log("Ex4 Cost:", o4.getCost());
o4.setStrategy(new Slow4());
console.log("Ex4 Cost:", o4.getCost());

// Example 5 - Sorting
class Asc5 { sort(arr){ return arr.sort((a,b)=>a-b); } }
class Desc5 { sort(arr){ return arr.sort((a,b)=>b-a); } }
class List5 { setStrategy(s){ this.strategy=s; } doSort(arr){ return this.strategy.sort(arr); } }
const l5 = new List5();
l5.setStrategy(new Asc5());
console.log("Ex5 Sorted:", l5.doSort([3,1,2]));
l5.setStrategy(new Desc5());
console.log("Ex5 Sorted:", l5.doSort([3,1,2]));

// Example 6 - Logging
class Console6 { log(msg){ console.log("Ex6 Console:",msg); } }
class File6 { log(msg){ console.log("Ex6 File:",msg); } }
class Logger6 { setStrategy(s){ this.strategy=s; } write(msg){ this.strategy.log(msg); } }
const lg6 = new Logger6();
lg6.setStrategy(new Console6());
lg6.write("Hello");
lg6.setStrategy(new File6());
lg6.write("Hello");

// Example 7 - Payment Method
class PayPal7 { pay(amount){ console.log("Ex7 PayPal paid",amount); } }
class Card7 { pay(amount){ console.log("Ex7 Card paid",amount); } }
class Checkout7 { setStrategy(s){ this.strategy=s; } pay(amount){ this.strategy.pay(amount); } }
const chk7 = new Checkout7();
chk7.setStrategy(new PayPal7());
chk7.pay(50);
chk7.setStrategy(new Card7());
chk7.pay(50);

// Example 8 - Compression
class Zip8 { compress(data){ return "Ex8 Zip:"+data; } }
class Rar8 { compress(data){ return "Ex8 Rar:"+data; } }
class File8 { setStrategy(s){ this.strategy=s; } compress(data){ return this.strategy.compress(data); } }
const f8 = new File8();
f8.setStrategy(new Zip8());
console.log(f8.compress("file"));
f8.setStrategy(new Rar8());
console.log(f8.compress("file"));

// Example 9 - Notification
class Email9 { send(msg){ console.log("Ex9 Email:",msg); } }
class SMS9 { send(msg){ console.log("Ex9 SMS:",msg); } }
class Notify9 { setStrategy(s){ this.strategy=s; } send(msg){ this.strategy.send(msg); } }
const n9 = new Notify9();
n9.setStrategy(new Email9());
n9.send("Hello");
n9.setStrategy(new SMS9());
n9.send("Hello");

// Example 10 - Authentication
class Google10 { auth(user){ console.log("Ex10 Google auth for",user); } }
class Facebook10 { auth(user){ console.log("Ex10 Facebook auth for",user); } }
class Login10 { setStrategy(s){ this.strategy=s; } authenticate(user){ this.strategy.auth(user); } }
const log10 = new Login10();
log10.setStrategy(new Google10());
log10.authenticate("Alice");
log10.setStrategy(new Facebook10());
log10.authenticate("Bob");

// // Templete Method Pattern////////////////////////////////////////
// class Game {
//   play() {
//     this.initialize();
//     this.startPlay();
//     this.endPlay();
//   }

//   initialize() {}
//   startPlay() {}
//   endPlay() {}
// }

// class Football extends Game {
//   initialize() {
//     console.log("Football Initialized");
//   }
//   startPlay() {
//     console.log("Kickoff Started");
//   }
//   endPlay() {
//     console.log("Match Ended");
//   }
// }

// // Test
// const football = new Football();
// football.play();

// ==================== Template Method Pattern ====================

// Example 1 - Football Game
class Game1 { play(){ this.initialize(); this.startPlay(); this.endPlay(); } initialize(){} startPlay(){} endPlay(){} }
class Football1 extends Game1 {
  initialize(){ console.log("Ex1: Football Initialized"); }
  startPlay(){ console.log("Ex1: Kickoff Started"); }
  endPlay(){ console.log("Ex1: Match Ended"); }
}
new Football1().play();

// Example 2 - Cricket Game
class Game2 { play(){ this.initialize(); this.startPlay(); this.endPlay(); } initialize(){} startPlay(){} endPlay(){} }
class Cricket2 extends Game2 {
  initialize(){ console.log("Ex2: Cricket Initialized"); }
  startPlay(){ console.log("Ex2: Innings Started"); }
  endPlay(){ console.log("Ex2: Match Ended"); }
}
new Cricket2().play();

// Example 3 - Cooking Recipe
class Recipe3 { cook(){ this.prepare(); this.cookFood(); this.serve(); } prepare(){} cookFood(){} serve(){} }
class Pasta3 extends Recipe3 {
  prepare(){ console.log("Ex3: Prepare Pasta"); }
  cookFood(){ console.log("Ex3: Boil Pasta"); }
  serve(){ console.log("Ex3: Serve Pasta"); }
}
new Pasta3().cook();

// Example 4 - Morning Routine
class Routine4 { start(){ this.wakeUp(); this.exercise(); this.breakfast(); } wakeUp(){} exercise(){} breakfast(){} }
class MyRoutine4 extends Routine4 {
  wakeUp(){ console.log("Ex4: Wake Up"); }
  exercise(){ console.log("Ex4: Do Exercise"); }
  breakfast(){ console.log("Ex4: Eat Breakfast"); }
}
new MyRoutine4().start();

// Example 5 - Study Routine
class Routine5 { start(){ this.prepare(); this.study(); this.rest(); } prepare(){} study(){} rest(){} }
class MyStudy5 extends Routine5 {
  prepare(){ console.log("Ex5: Gather Books"); }
  study(){ console.log("Ex5: Study Hard"); }
  rest(){ console.log("Ex5: Take Rest"); }
}
new MyStudy5().start();

// Example 6 - Car Wash
class Wash6 { doWash(){ this.washBody(); this.washTyres(); this.dry(); } washBody(){} washTyres(){} dry(){} }
class CarWash6 extends Wash6 {
  washBody(){ console.log("Ex6: Body Washed"); }
  washTyres(){ console.log("Ex6: Tyres Washed"); }
  dry(){ console.log("Ex6: Car Dried"); }
}
new CarWash6().doWash();

// Example 7 - Coffee Making
class Coffee7 { make(){ this.boilWater(); this.brewCoffee(); this.serveCoffee(); } boilWater(){} brewCoffee(){} serveCoffee(){} }
class MyCoffee7 extends Coffee7 {
  boilWater(){ console.log("Ex7: Boil Water"); }
  brewCoffee(){ console.log("Ex7: Brew Coffee"); }
  serveCoffee(){ console.log("Ex7: Serve Coffee"); }
}
new MyCoffee7().make();

// Example 8 - Tea Making
class Tea8 { make(){ this.boilWater(); this.steepTea(); this.serveTea(); } boilWater(){} steepTea(){} serveTea(){} }
class MyTea8 extends Tea8 {
  boilWater(){ console.log("Ex8: Boil Water"); }
  steepTea(){ console.log("Ex8: Steep Tea"); }
  serveTea(){ console.log("Ex8: Serve Tea"); }
}
new MyTea8().make();

// Example 9 - Online Class
class Class9 { start(){ this.login(); this.teach(); this.logout(); } login(){} teach(){} logout(){} }
class MyClass9 extends Class9 {
  login(){ console.log("Ex9: Login to Platform"); }
  teach(){ console.log("Ex9: Teach Lesson"); }
  logout(){ console.log("Ex9: Logout"); }
}
new MyClass9().start();

// Example 10 - Workout
class Workout10 { start(){ this.warmup(); this.exercise(); this.cooldown(); } warmup(){} exercise(){} cooldown(){} }
class MyWorkout10 extends Workout10 {
  warmup(){ console.log("Ex10: Warmup Done"); }
  exercise(){ console.log("Ex10: Exercise Done"); }
  cooldown(){ console.log("Ex10: Cooldown Done"); }
}
new MyWorkout10().start();

// // Visitor Pattern////////////////////////////////////////////////
// class Element {
//   accept(visitor) {}
// }

// class ConcreteElementA extends Element {
//   accept(visitor) {
//     visitor.visitElementA(this);
//   }

//   operationA() {
//     return "A's data";
//   }
// }

// class Visitor {
//   visitElementA(element) {
//     console.log("Visiting:", element.operationA());
//   }
// }


// // Test
// const element = new ConcreteElementA();
// const visitor = new Visitor();
// element.accept(visitor);


// ==================== Visitor Pattern ====================

// Example 1
class ElementA1 { accept(visitor){ visitor.visitA(this); } operation(){ return "Ex1 DataA"; } }
class Visitor1 { visitA(el){ console.log("Ex1 Visiting:", el.operation()); } }
new ElementA1().accept(new Visitor1());

// Example 2
class ElementA2 { accept(visitor){ visitor.visitA(this); } operation(){ return "Ex2 DataA"; } }
class Visitor2 { visitA(el){ console.log("Ex2 Visiting:", el.operation()); } }
new ElementA2().accept(new Visitor2());

// Example 3
class ElementA3 { accept(visitor){ visitor.visitA(this); } operation(){ return "Ex3 DataA"; } }
class Visitor3 { visitA(el){ console.log("Ex3 Visiting:", el.operation()); } }
new ElementA3().accept(new Visitor3());

// Example 4
class ElementA4 { accept(visitor){ visitor.visitA(this); } operation(){ return "Ex4 DataA"; } }
class Visitor4 { visitA(el){ console.log("Ex4 Visiting:", el.operation()); } }
new ElementA4().accept(new Visitor4());

// Example 5
class ElementA5 { accept(visitor){ visitor.visitA(this); } operation(){ return "Ex5 DataA"; } }
class Visitor5 { visitA(el){ console.log("Ex5 Visiting:", el.operation()); } }
new ElementA5().accept(new Visitor5());

// Example 6
class ElementA6 { accept(visitor){ visitor.visitA(this); } operation(){ return "Ex6 DataA"; } }
class Visitor6 { visitA(el){ console.log("Ex6 Visiting:", el.operation()); } }
new ElementA6().accept(new Visitor6());

// Example 7
class ElementA7 { accept(visitor){ visitor.visitA(this); } operation(){ return "Ex7 DataA"; } }
class Visitor7 { visitA(el){ console.log("Ex7 Visiting:", el.operation()); } }
new ElementA7().accept(new Visitor7());

// Example 8
class ElementA8 { accept(visitor){ visitor.visitA(this); } operation(){ return "Ex8 DataA"; } }
class Visitor8 { visitA(el){ console.log("Ex8 Visiting:", el.operation()); } }
new ElementA8().accept(new Visitor8());

// Example 9
class ElementA9 { accept(visitor){ visitor.visitA(this); } operation(){ return "Ex9 DataA"; } }
class Visitor9 { visitA(el){ console.log("Ex9 Visiting:", el.operation()); } }
new ElementA9().accept(new Visitor9());

// Example 10
class ElementA10 { accept(visitor){ visitor.visitA(this); } operation(){ return "Ex10 DataA"; } }
class Visitor10 { visitA(el){ console.log("Ex10 Visiting:", el.operation()); } }
new ElementA10().accept(new Visitor10());
