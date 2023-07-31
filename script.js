function temprature(){
    let input = document.getElementById("inputvalue").value;
    let convert1 = document.getElementById("sel").value; 
    let  select = document.getElementById("sel1").value;
    let result = document.getElementById("res");
    
    if(input===""){
        res.innerHTML=alert("Enter any Number Please...");
        location.reload();
    }
    let conclusion;
    if(convert1==="C"){
     if(select==="F"){
         conclusion = Number.parseFloat((input*9/5)+32);
     }
     else if(select==="K"){
         conclusion= Number.parseFloat(input+273.15); 
    }
     else if(select==="C"){
         conclusion= Number.parseFloat(input*1);  
    }
   }
    else if(convert1==="F"){
         if(select==="C"){
             conclusion=Number.parseFloat((input-32)*5/9);
             
         }
         else if(select==="K"){
         conclusion=Number.parseFloat((input-32)*5/9+273.15);
         }
         else if(select==="F"){
         conclusion= Number.parseFloat(input*1); 
    } 
 }
    else if(convert1==="K"){
         if(select==="C"){
             conclusion=Number.parseFloat(input-273.15);
         }
         else if(select==="F"){
         conclusion=Number.parseFloat((input-273.15)*9/5+32);
         }
         else if(select==="K"){
         conclusion= Number.parseFloat(input*1); 
    }
    
 }
 result.innerHTML= +conclusion.toFixed(3)+" &deg;"+select.toUpperCase();

}
document.getElementById('reset').onclick=Reset;
 

 
function Reset(){
    document.getElementById("inputvalue").value=" ";  
    document.getElementById("res").innerHTML="";
}



