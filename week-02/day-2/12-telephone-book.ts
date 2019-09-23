let phoneBook = {

    "William A. Lathan" : "405-709-1865",
    "John K. Miller" : "402-247-8568",
    "Hortensia E. Foster" : "606-481-6467",
    "Amanda D. Newland" : "319-243-5613",
    "Brooke P. Askew" :	"307-687-2982",
    
};

function phoneNumber(input:string){
    return console.log("The requested number is " + phoneBook[input] + ".");
};

phoneNumber("John K. Miller");


function findByNumber(num:string){
    for(let f in phoneBook){
        if (phoneBook[f] === (num)){
            console.log("The requested number belongs to " + f);
        };
    };
};

findByNumber("307-687-2982");


let nope:boolean = false;

function doWeKnow(name){
    for(let f in phoneBook){
        if (name === f){
            console.log(phoneBook[f]);
        }else{ nope = true}
    };
    if(nope === true){
        console.log("can't find this person, sorry!")
    };
    
};

doWeKnow("John K. Miller");