
console.log("start................");
        var cel = document.getElementById('num1');
        var feh = document.getElementById('num2');

        // Change celsius to fehrenheit 
        cel.addEventListener('input' , function(){
        //console.log("Celsius input changed:", cel.value);
        let c = this.value;
        let f =  (c * 9/5) + 32;
// this is we used for round of
            if(!Number.isInteger(f)){
                f =f.toFixed(3);
            }

        feh.value = f;  
           
        });

        // Change fehrenheit to celsius 
        feh.addEventListener('input', function(){
      //  console.log("Fahrenheit input changed:", feh.value);
        let f = this.value;
        let c = (f - 32) * 5/9;

        if(!Number.isInteger(c)){
            c =c.toFixed(3);
        }

        cel.value = c;
       });