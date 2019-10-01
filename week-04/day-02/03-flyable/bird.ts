'use strict'

'use strict'

import { Flyable } from "./flyable";
import { Vehicle } from "./vehicle";

export class Bird extends Vehicle implements Flyable{

  constructor(name){
    super(name)
  }
}
let bird = new Bird("Bob")

bird.takeOff();
bird.fly();
bird.land();