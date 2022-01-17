     
      
     
     
      const body =  document.querySelector("body")
      const element = document.querySelector("#changecolor")
       const element2 = document.querySelector("#hex-values")
       const hexvalues =[1,2,3,4,5,6,7,8,9,'A', 'B' , 'C', 'D','E' , 'F']
        element.addEventListener("click" ,myfun)
     
     function myfun ()  
     {   
              let hex = '#'; 
        for (let i = 0 ; i<6; i++){
         const index =  parseInt(Math.random()*hexvalues.length);
           hex += hexvalues[index]
        }
           element2.textContent= hex;
         body.style.backgroundColor = hex;

      }
    