function styl0(){
    document.getElementById("sary").style.visibility="visible";
    document.getElementById("captures").style.visibility="visible";
    document.getElementById("captures").style.display="inline";
    document.getElementById("images").style.visibility="hidden";
    document.getElementById("images").style.display="none";
    document.getElementById("tout").style.display="none";
    document.getElementById("tout").style.visibility="hidden";
    }
    function styl1(){
        document.getElementById("sary").style.visibility="visible";
        document.getElementById("images").style.visibility="visible";
        document.getElementById("images").style.display="inline";
        document.getElementById("captures").style.visibility="hidden";
        document.getElementById("captures").style.display="none";
        document.getElementById("tout").style.display="none";
        document.getElementById("tout").style.visibility="hidden";
  
        
    }
    function styl(){
        document.getElementById("sary").style.visibility="visible";
        document.getElementById("sary").style.display="inline";
        document.getElementById("tout").style.display="inline";
        document.getElementById("tout").style.visibility="visible";
     
  }
  
//  Color
function setColor(e, btn, color) {
    var target = e.target,
        count = +target.dataset.count;
    
     target.style.backgroundColor = count === 1 ? "#EB5956" : '#FFFFFF';
     target.dataset.count = count === 1 ? 0 : 1;
  }





