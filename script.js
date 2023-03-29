let button = document.querySelector("button");
let pizza=document.querySelector(".pizza");
let burgers=document.querySelector(".burgers");
let age=document.querySelector(".age");
let result=document.querySelector(".result");
button.onclick= function(){
	let userpizza=pizza.value;
    let userburgers=burgers.value;
    let userage=age.value;
    if (userage <=20 && userpizza === "pizza") {
    result.innerHTML="You are young"+userpizza+"You Love Pizza"+ userage+"You are Pizza Hut";
    }
    else if (userage <=20 && userburgers === "burgers") {result.innerHTML="You are young"+userburgers+"You Love Burgers"+ userage+"You are McDonlds";
    
    }
        else if (userage >=20 && userpizza === "pizza") {result.innerHTML="You are old"+userpizza+"You Love Pizza"+ userage+"You are Papa Johns";
        
        }
 else if (userage >=20 && userburgers=== "burgers")
        {result.innerHTML="You are older"+userburgers+"You Love Pizza"+ userage+"You are Wendys";
   }
    
};