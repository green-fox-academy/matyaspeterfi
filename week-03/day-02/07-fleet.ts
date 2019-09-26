import { Thing } from './07-thing';

class Fleet {
    private things: Thing[];
    private _counter: number = 0;

    constructor() {
        this.things = [];
    }

    add(thing: Thing): void {
        this.things.push(thing);
        this._counter += 1;
        thing._itemNumber = this._counter;
    }

    getThings(): Thing[] {
        return this.things;
    }


    print(){
        this.things.forEach(function(thing){
    
            if(thing.getCompleted() == true){
                console.log(thing._itemNumber + ". [X] " + thing.getName())
            }else(console.log(thing._itemNumber +  ". [ ] " + thing.getName())
            );
        });
    };
}

export { Fleet };