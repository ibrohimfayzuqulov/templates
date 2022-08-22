
  Array.prototype.forEach.call(document.querySelector('.theme-switcher').children, btn=>{
    btn.onclick= (e)=>{
      let elementStyle = e.target.style;
  
        document.querySelector("h1").setAttribute("style", elementStyle["cssText"]);
      
        document.querySelector(".mic").setAttribute("style", elementStyle["cssText"]);
  
  
    }
    
  });