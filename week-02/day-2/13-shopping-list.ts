let shopList: string[] = ["eggs", "milk", "fish", "apples", "bread", "chicken"];

let foundit:boolean = false;

function doWeHave(item:string){

    item = item.toLowerCase()
    
    shopList.forEach(function(element){

        if(element === item){
            foundit = true
        };
    });
    if(foundit == true){
        console.log("Yes we have " + item + " on the list!")
    }else(console.log("We seem to have forgotten to add " + item + " to the list!"))
    

};

//console.log("Yes we have " + item + " on the list!")


doWeHave("Eggs");