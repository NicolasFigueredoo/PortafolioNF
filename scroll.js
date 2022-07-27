window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {

    if(document.body.scrollTop > 0  || document.documentElement.scrollTop > 0 ){
      document.getElementById("logo").style.color = "white";
      document.getElementById("sobremi").style.color = "darkgray";
      document.getElementById("proyectos").style.color = "darkgray";
      document.getElementById("contacto").style.color = "darkgray";

    }

    if(document.body.scrollTop > 500  || document.documentElement.scrollTop > 500 ){
      document.getElementById("sobremi").style.color = "white";
      document.getElementById("proyectos").style.color = "darkgray";
      document.getElementById("contacto").style.color = "darkgray";
      document.getElementById("logo").style.color = "darkgray";


    }

    if (document.body.scrollTop  > 1200 || document.documentElement.scrollTop > 1200 ) {
        document.getElementById("proyectos").style.color = "white";
        document.getElementById("sobremi").style.color = "darkgray";
        document.getElementById("contacto").style.color = "darkgray";
        document.getElementById("logo").style.color = "darkgray";



      } 


      if (document.body.scrollTop  > 1500 || document.documentElement.scrollTop > 1500 ) {
        document.getElementById("proyectos").style.color = "darkgray";
        document.getElementById("sobremi").style.color = "darkgray";
        document.getElementById("contacto").style.color = "white";
        document.getElementById("logo").style.color = "darkgray";



      } 
  }