

const dropdowns = document.querySelectorAll('.dropdown Select')



for( let select of dropdowns){
    for( let code in countryList){
       let newoption = document.createElement("option")
       newoption.innerText = code;
       newoption.value = code;
       if(select.name === 'from' && code === 'USD'){
          newoption.selected = "selected"
       }else if( select.name === 'to' && code === 'INR'){
          newoption.selected = "selected"  
       }
       select.append(newoption) 
    }

  
   select.addEventListener("change", (e) =>{
      
      updateflags(e.target) 
   })
}
    const updateflags = (element) =>{
        let currcode = element.value
        let countryCode =  countryList[currcode]
        let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`
        let img = element.parentElement.querySelector('img')
        img.src = newsrc;
    }
    