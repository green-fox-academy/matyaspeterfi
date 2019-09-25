'use strict'

class Counter {

    constructor(_counter?, _initialValue?) {
        this._counter = _counter
    }
    private _counter: number = 0;
    private _initialValue: number = 0;

    add(input?: number) {

        if (input == undefined) {
            this._counter += 1
        } else (this._counter += input);
    }

    getCounter() {
        console.log(this._counter);
    }

    resetCounter() {
        this._counter = this._initialValue;
    }

}

let counter = new Counter(5);

counter.getCounter();

counter.add(5);

counter.getCounter();

counter.resetCounter();

counter.getCounter();