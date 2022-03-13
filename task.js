console.log('hii')

var string = "";

for (var i=0; i<5;i++){
     for (var j=0; j<=i;j++){
        string += " * ";
         }
     string += "\n";  
 }

 console.log(string);
 document.querySelector('#no').innerHTML = string;


console.log('hii...')

var str = "";

for (var i=0; i<=5;i++){
    for (var j=5; j>=1; j--) {
        if (i>=j){
            str += "* "
        }
        else{
            str += " "
        }      
    }

    str += "\n"
}

console.log(str);

document.querySelector('#no_1').innerHTML = str;




console.log('Hello...')

var stro = "";

for (var i=0; i<=5;i++){
    
   // str += " ";

    for (var j=5; j>i; j--) {
        if (i<=j){
            stro += " * " 
        }
        else{
            stro += ""
        }
        
        
    }

    stro += "\n"
}

console.log(stro);

document.querySelector('#no_2').innerHTML = stro;

var ms = "";

for (var i = 0; i <5; i++) {
    ms += "";
    for (var j = 0; j <= i; j++) {
        if(i == j) {
            ms += " *";
        }
        else{
            ms += "   ";
        }
    }
    ms += "\n";
}

console.log(ms);

document.querySelector('#no_3').innerHTML = ms;