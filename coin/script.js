
let coin = {
    state: 0,
    flip: function (Math) {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.round (Math.random());

           return 
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
          
          if (this.state===0){
            return "heads"
}

           else {
            return "tails"
}


          
    },
    toHTML: function() {
        let image = document.createElement('img');
        if (this.state === 0){
            image.src = './images/Head.jpeg'
        }else{
            image.src ='./images/tail.jpeg'
        }
        
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};



// console.log(Math.floor(Math.random()));
// console.log(coin.toString());

// let container = document.createElement('div');
// container.append(coin.toHTML());
// document.body.append(container);

function display20Flips(){
for(let i =1; 1<=20; i++){
    coin.flip();
    let li = document.createElement('li')
    li.innerHTML =coin.toString();
    document.body.append("li")
    console.log(coin.toString())
}
}
function display20Images(){
    for(let i = 1; i <= 20;i++){
    coin.flip();
document.body.append(coin.toHTML())
    }
}
display20Flips()
display20Images()