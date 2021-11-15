//External website for contact webpage which give an alert message.
function  validation()
{
    var fname = document.forms["messageForm"]["fname"].//declaration variable fname.
    value;
    var email =document.forms["messageForm"]["email"].//declaration variable email.
    value;
    var date = document.forms["messageForm"]["date"].//declaration variable date.
    value;
    var star =document.forms["messageForm"]["star"].//declaration variable star.
    value;
    var message =document.forms["messageForm"]["message"].//declaration variable message.
    value;
  if (fname== "" || email== ""|| date== ""|| star== "" || message== "")//if all varaible is empty/
  {
      alert("Looks like you forgot to fill up all.");//alert this.
  }
  else{
      alert("Thank you for your contact information.");//else this.
  }
}
//External javascript for profolio webpage which change the image.

function change()
        {
            var p1 = document.getElementById("n1");//declaration of p1 elemnet.
            var p2 = document.getElementById("n2");//declaration of p2 element.
        
         if(p1.style.display == "none")
          {
            p1.style.display = "block";//block shows the image
            p2.style.display = "none"; //none does not the image
          }
          else
          {
            p1.style.display = "none";
            p2.style.display = "block";
          }
        }
        document.getElementById("n1").style.display ="block";//it will get the id element declared on image.
        

