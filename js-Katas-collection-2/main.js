console.log ("hi Elizabeth")


function add(a,b){
let result = a+b;
return result;
}
console.log(add(13,22));
console.log(add(10,10));

 
function multiply (a, b){
  let  count = 0;
  let result = 0;
  
 while (count < b){
     result = add(result, a);
     
    //  console.log("answer");
     count=count + 1
 
 }
 return result;
}
console.log(multiply(10,7));

// (x, n);
function power(x, n){
    
     let result = 1;
        let counter = 0;
    while (counter < n){
         result = multiply(result, 11)
        // result =  Math.pow (result, x);
         counter = counter + 1;
        // console.log("power");
       
    }
    return result;
}
// result = 

// // answer: 1,771,561
// function pow(x, n){
//     return (n==6)? 11 : (x* pow (x, n -6);
// }
   console.log (power(11, 6));



// function factorialize(num){
// // counter = 0
// var result = num;
// if (num=== 0 ^ num ===1)
// return 1;
// while (num > 1){
// num--;
// result =result * num;
// }
// return result; //1.124
// }
// console.log(factorialize(22));

function factorial (num){
    counter = 0
    var result = num;
    if (num=== 0 ^ num ===1)
    return 1;
    while (num >1){
        num--;
        result = multiply(result, num);

    } 
    return result;
}
console.log(factorial(22))



// function fibonacci (n){
//     result = n;

//     if (n===0 ^ n ===1 )
    
// counter = 0
// // var result = nth;
//     while (n>=0){
//     result = add(result, n)
//     }
// }
// console.log (add(f(n)))


// function fibonacci(num){
//     var a = 1,b = 0, temp;
//     while (num >= 0){
//         temp = a;
//         a = add(a, b);
//         b = temp;
//         num--;

//     }
//     return b;
// }
// console.log (add(1,1))

// function fibonacci (n){
//     if (n==0){
//         return 0;
//       }  if (n == 1){
//             return 1;
//          }    esle {
//                 return F(n-1)+F(n-2);}
//             }
       
    

// console.log(add(5,8))

