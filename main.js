let checkButton = document.querySelector('.check');
let email = document.querySelector(".password");
let result = document.querySelector(".result");
let regexValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


checkButton.addEventListener('click', ()=>{

    if(email.value == ""){
        result.innerHTML ="Email is Empty";
        result.style.color ="red";
        
    }
    else if(email.value.match(regexValidate)){
        result.innerHTML ="Success";
        result.style.color = "green";
    }
    else{
        result.innerHTML ="Not Valid";
        result.style.color = "red";
    }
   // result.innerHTML = "";
});
  




