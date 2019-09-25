export class PostIt {
    _backgroundColor: string;
    _text: string;
    _textColor: string;

    constructor(_backgroundColor:string, _text:string, _textColor:string){
        this._backgroundColor = _backgroundColor;
        this._text = _text;
        this._textColor = _textColor;
    }
}

let orange = new PostIt("orange", "Idea1", "blue");

console.log(orange);

let pink = new PostIt("pink", "Awesome", "black");

console.log(pink);

let yellow = new PostIt("yellow", "Superb!", "green");

console.log(yellow);