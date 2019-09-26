import { Thing } from './07-thing';
import { Fleet } from './07-fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 

let GetMilk = new Thing("Get Milk");
let RemoveThe = new Thing("Remove the obstacles");
let StandUp = new Thing("Stand Up");
let EatLunch = new Thing("Eat Lunch")


StandUp.complete();
EatLunch.complete();

let newFleet = new Fleet();

newFleet.add(GetMilk);
newFleet.add(RemoveThe);
newFleet.add(StandUp);
newFleet.add(EatLunch);

//console.log(newFleet.getThings());

// newFleet.getThings().forEach(function(thing){
    
//     if(thing.getCompleted() == true){
//         console.log(thing._itemNumber + ". [X] " + thing.getName())
//     }else(console.log(thing._itemNumber +  ". [ ] " + thing.getName())
//     );
// });

newFleet.print();

console.log(newFleet)






