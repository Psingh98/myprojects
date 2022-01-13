     
       const body = document.querySelector('body')
       const element = document.querySelector("#changecolor")
       const colors =['red', 'green' , 'pink', 'blue','yellow' , 'purple']
        body.style.backgroundColor = 'violet'
        element.addEventListener("click" ,myfun)
     
     function myfun ()
     {
         const colorIndex =  Math.floor(Math.random()*colors.length)
         body.style.backgroundColor = colors[colorIndex]
     }
    