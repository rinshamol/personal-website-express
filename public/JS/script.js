function more(){
   
        document.getElementById('hide').style.display="block";
        document.getElementById('tech-btn').style.display="none";
    }
function less(){
    document.getElementById('hide').style.display="none";
    document.getElementById('tech-btn').style.display="block";
}

 function validation(){
    if(document.getElementById('name').value==""){
        document.getElementById('er1').style.display="block";
    }else{
        document.getElementById('er1').style.display="none";
    }
    if(document.getElementById('email').value==""){
        document.getElementById('er2').style.display="block";
    }else{
        document.getElementById('er2').style.display="none";
    }
    if(document.getElementById('msg').value==""){
        document.getElementById('er3').style.display="block";
    }else{
        document.getElementById('er3').style.display="none";
    }
 } 