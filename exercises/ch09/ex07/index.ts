class Eater {
  eat() {
    console.log("Eating");
  }
}

class SoundMaker {
  private cry: string;

  constructor(cry: string) {
    this.cry = cry;
  }

  makeSound() {
    console.log(this.cry);
  }
}

class Dog {
  eater: Eater = new Eater();
  soundMaker: SoundMaker = new SoundMaker("ワンワン");
  bite() {
    console.log("Eiting...");
  }
}

class Husky extends Dog {}

class Cat {
  eater: Eater = new Eater();
  soundMaker: SoundMaker = new SoundMaker("ニャー");
  scratch() {
    console.log("Scratching...");
  }
}

class Bird {
  eater: Eater = new Eater();
  soundMaker: SoundMaker = new SoundMaker("ピー");
  fly() {
    console.log("frying...");
  }
}

class Fish {
  eater: Eater = new Eater();
  swim() {
    console.log("swimming...");
  }
}
