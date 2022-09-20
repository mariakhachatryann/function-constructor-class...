"use strict";

// ստեղծում եք function constructor որը պետք ա նկարագրի ձեր սիրած առարկաները / մարդկանց, 
// ու էնպես պետք ա անեք, որ ցանկացած տիպի առարկա / մարդ կարողանաք ստեղծել

// old version
function Employee (gender, name, lastname, age, phone, mail, start, end){
  this.gender = gender;
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.phone = phone;
  this.mail = mail;
  this.start = start;
  this.end = end;

  this.getFullName = function(){
    return `Employee full name : ${name} ${lastname}`;
  };

  this.getContacts = function(){
    return `Employee contacts : tel. ${phone}, mail. ${mail}`;
  };

  this.getWorkingHours = function (){
    return `Employee work start : ${start}, work end : ${end};
    `;
  };

  this.works = function (){
    const s = start.split(":").map(a => +a);
    const e = end.split(":").map(a => +a);

    let [startHour] = s;
    let [endHour] = e;
    if ((endHour - startHour) < 0){
      let res = Math.abs((endHour - startHour));
      return `Employee worked ${res} hours`;
    }
    return `Employee worked ${(endHour - startHour)} hours`;
  };
}

// new version
class Workers {
  constructor(gender, name, lastname, age, phone, mail, start, end){
    this.gender = gender;
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.phone = phone;
    this.mail = mail;
    this.start = start;
    this.end = end;
  }

  getFullName() {
    return `Employee full name : ${this.name} ${this.lastname}`;
  }

  getContacts() {
    return `Employee contacts : tel. ${this.phone}, mail. ${this.mail}`;
  }

  getWorkingHours() {
    return `Employee work start : ${this.start}, work end : ${this.end};`;
  }

  works() {
    const s = this.start.split(":").map(a => +a);
    const e = this.end.split(":").map(a => +a);

    let [startHour] = s;
    let [endHour] = e;
    if ((endHour - startHour) < 0) {
      let res = Math.abs((endHour - startHour));
      return `Employee worked ${res} hours`;
    }
    return `Employee worked ${(endHour - startHour)} hours`;
  }
}

const employee1 = new Workers("male", "Thomas", "Taylor", 28, "+81853543", "thomy55@mail.com", "00:00", "08:00");
const employee2 = new Employee("female", "Alice", "Adams", 24, "+8189654", "alice@mail.com", "08:00", "15:00");
const employee3 = new Workers("male", "Michael", "Brown", 36, "+81814757", "michaelbrown@mail.com", "15:00", "24:00");

console.log(employee1);
console.log(employee1.getFullName());
console.log(employee1.getContacts());
console.log(employee1.getWorkingHours());
console.log(employee1.works());

console.log(employee2);
console.log(employee2.getFullName());
console.log(employee2.getContacts());
console.log(employee2.getWorkingHours());
console.log(employee2.works());

console.log(employee3);
console.log(employee3.getFullName());
console.log(employee3.getContacts());
console.log(employee3.getWorkingHours());
console.log(employee3.works());

class Celeb {
  constructor(celebrity, gender, name, lastname, age, country, favProd, prizes) {
    this.celebrity = celebrity;
    this.gender = gender;
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.country = country;
    this.favProd = favProd;
    this.prizes = prizes;
  }

  getFavProds() {
    let res = "";
    for (let i = 0; i < this.favProd.length; i++) {
      res += this.favProd[i] + ", ";
    }
    return `Here are ${this.name} ${this.lastname}'s favorite products ${res}`;
  }
}

const billie = new Celeb("singer", "female", "Billie", "Eilish", 20, "USA", ["lovely", "bored", "bellyache"], "Grammy");
const tom = new Celeb("actor", "male", "Tom", "Hardy", 44, "USA", ["Venom", "Warrior", "Legend"], "Oscar");

console.log(billie);
console.log(tom);
console.log(billie.getFavProds());
console.log(tom.getFavProds());


// պրակտիկա եք անում setPrototypeOf - ով, getPrototypeOf - ով, Object.assign, Object.create մեթոդերով

const applePhone = {
  mark: "Apple",
  founder: "Steve Jobs",
  madeIn: "LA, California, US",
  softwareUptade: "IOS16"
};

const iphone11 = {
  height: "5.94 inches",
  width: "2.98 inches",
  weight: "6.84 ounces",
  color: "Purple",
  storage: "128gb",
  batteryHealth: 88,
};

Object.setPrototypeOf(iphone11, applePhone);

const iphone12 = Object.create(applePhone);
iphone12.height = "5.78 inches";
iphone12.width = "2.82 inches";
iphone12.weight = "5.73 ounces";
iphone12.color = "Black";
iphone12.storage = "256GB";
iphone12.batteryHealth = 90;

console.log(Object.assign(applePhone, iphone11));

const iphone13 = Object.create(applePhone, {
  height: {
    value: "5.78 inches"
  },
  width: {
    value: "2.82 inches"
  },
  weight: {
    value: "6.14 ounces"
  },
  color: {
    value: "Midnight"
  },
  storage: {
    value: "512GB"
  },
  batteryHealth: {
    value: 97
  }
});

console.log(iphone11);
console.log(iphone12);
console.log(iphone13);

console.log(Object.getPrototypeOf(iphone13) === applePhone); // true