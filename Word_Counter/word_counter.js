let textbox = document.getElementById('textarea1')

// Charcter counter 
textbox.addEventListener('input' , function(){
    var text = this.value; 
    let char =  text.length;
    document.getElementById('t1').innerHTML = char;

    text =text.trim();  // that removed the space

// Word counter 
   let words = text.split(" ")  // that break the words when found space

   let clinlist = words.filter(function (elm){   // clinelist etle use kryu jyare spce apta ta ene counts ganta hta
    return elm != "" ;  // removes empty element from array so , get proper count reduce spaced during count words
   
   })

   document.getElementById('w1').innerHTML = clinlist.length;
})


