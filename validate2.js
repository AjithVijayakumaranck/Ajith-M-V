var nameError= document.getElementById('name-Error')
var emailError= document.getElementById('mail-Error')
var messageError= document.getElementById('message-Error')
var submiterror= document.getElementById('submit-Error')


function validateName(){
  var name = document.getElementById('username').value;

  if(name.trim().length==0){
      nameError.innerHTML="Name cannot is empty";
      return false;
  }
  if(name.length<=3 || name.length>=15){
      nameError.innerHTML="Name must be between 3 and 15 characters"
      return false;
  }
  if(!name.match(/^[A-Za-z]*\s{0,1}[A-Za-z]*\s{0,1}?[A-Za-z]*$/)){
      nameError.innerHTML="Write Proper name"
      return false;

  }
  nameError.innerHTML='<i class="icolor fas fa-check-circle"></i>'
  return true;
}
function validatemail(){
     var email= document.getElementById('email').value;

     if(email.length==0){
         emailError.innerHTML="Email ID required";
         return false;
     }
     if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        emailError.innerHTML="Enter valid Email ID";
        return false;
    }
    emailError.innerHTML='<i class="icolor fas fa-check-circle"></i>'
    return true;
     
}
function validatemessage(){
    var message = document.getElementById('message').value;
  
    if(message.trim().length==0 ){
        messageError.innerHTML="Text area cannot is empty";
        return false;
    }
    if(message.trim().length<=20 || message.trim().length>=50){
        messageError.innerHTML="Message must be between 20 and 50 characters"
        return false;
    }

    
    messageError.innerHTML='<i class="icolor fas fa-check-circle"></i>'
    return true;
  }
  function validateform(){
      if(!validateName() || !validatemail() || !validatemessage){
          submiterror.style.display='block'
          submiterror.style.marginTop='10px'
          submiterror.innerHTML="Enter the proper details"
          setTimeout(function(){submiterror.style.display='none'},3000)
          return false;
      }
  }
