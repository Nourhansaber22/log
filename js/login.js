var nameInput=document.getElementById("nameInput");
var emailInput=document.getElementById("emailInput");
var passInput=document.getElementById("passInput");
var mesSucess=document.getElementById("mesSuccess");
var mesName=document.getElementById("mesName");
var mesEmail=document.getElementById("mesEmail");
var mesPass=document.getElementById("mesPass");
var mesFalid=document.getElementById("mesFalid");
var home=document.getElementById("home")
var mesEmailexest=document.getElementById("mesEmailexest");
// console.log(mesFalid)
// console.log(emailInput)
// console.log(passInput)

var allUser=[];
if(localStorage.getItem("user")!=null)
{
 allUser=JSON.parse(localStorage.getItem("user"));
}
function singup()
{
    submit();

    if(submit()==true)
    {
        addUser()
    }
}

function submit()
{
      if(validationName()==true&&
    validationEmail()==true&&
    validationPass()==true)
    {
        mesSucess.classList.replace("d-none","d-block");
        mesFalid.classList.replace("d-block","d-none");
        return true;
    }else{
        mesFalid.classList.replace("d-none","d-block");
        mesSucess.classList.replace("d-block","d-none");
        return false;
    }

}

function login()
{
    if(validationEmail()==true&&validationPass()==true){
         mesSucess.classList.replace("d-none","d-block");
        mesFalid.classList.replace("d-block","d-none");
        setTimeout(function(){
        window.location.href="../home.html";
        },3000)
        return true;
    }else{

        mesFalid.classList.replace("d-none","d-block");
        mesSucess.classList.replace("d-block","d-none");
        return false;
    }
    
}

function validationName()
{
    var regex=/^[A-Za-z]{3,}$/
    var term=nameInput.value;
    if(regex.test(term)==true)
    {
       nameInput.classList.add("is-valid")
       nameInput.classList.remove("is-invalid")
       mesName.classList.replace("d-block","d-none")
       return true;
    }
    else{
        mesName.classList.replace("d-none","d-block")
          nameInput.classList.add("is-invalid")
          nameInput.classList.remove("is-valid")
          return false;
    }
}

function validationEmail()
{
    var regex=/^[A-Za-z]{3,}[0-9]{0,}@gmail.com$/
    var term=emailInput.value;
    if(regex.test(term)==true)
    {
       emailInput.classList.add("is-valid")
       emailInput.classList.remove("is-invalid")
       mesEmail.classList.replace("d-block","d-none")
       return true;
    }
    else{
        mesEmail.classList.replace("d-none","d-block")
          emailInput.classList.add("is-invalid")
          emailInput.classList.remove("is-valid")
          return false;
    }
}
    function validationPass()
    {
        var regex=/^[0-9]{3,}[A-Za-z]{2,}$/
        var term=passInput.value;
        if(regex.test(term)==true)
        {
          passInput.classList.add("is-valid")
          passInput.classList.remove("is-invalid")
          mesPass.classList.replace("d-block","d-none")
          return true;
        }
        else{
            mesPass.classList.replace("d-none","d-block")
              passInput.classList.add("is-invalid")
              passInput.classList.remove("is-valid")
              return false;
        }
    }

function addUser()
{
  var newUser={
    name:nameInput.value,
    email:emailInput.value,
    pass:passInput.value
  }
  if(aready(newUser)==true)
  {
    console.log("user is exiest")
  }else{
      allUser.push(newUser);
    localStorage.setItem("user",JSON.stringify(allUser))
  }
  
}

function aready(newUser)
{
  for(let i=0;i<allUser.length;i++)
  {
    if(allUser[i].email.toLowerCase()==newUser.email.toLowerCase())
    {
     mesEmailexest.classList.replace("d-none","d-block");
     mesSucess.classList.replace("d-block","d-none");
     return true;
    } 
    else{
           mesEmailexest.classList.replace("d-block","d-none");
           mesSucess.classList.replace("d-none","d-block");
          setTimeout(function(){
         window.location.href="../singup.html";
        },3000)
        return false
    }
  }
}


function logOut()
{
    window.location.href="../login.html";
}