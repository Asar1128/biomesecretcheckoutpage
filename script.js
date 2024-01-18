const Checkedbox = document.getElementById("checkbox");
const BillingDetails = document.getElementById('billing_details')
const AccordationPayment = document.getElementById('Ac-payment')
const Email = document.querySelectorAll('.email ,.input-text')
const checkEmail = document.getElementById('check-email')
const errorMessageElement = document.getElementById('email-error')
const Error = document.getElementById('error')
const Accordationtwo = document.getElementById('checkedtwo')
const Accordionone = document.getElementById('checked-1')



function checkfun() {
    if (Checkedbox.checked) {
        BillingDetails.style.display = "block";
        AccordationPayment.style.height = "595px" 
      
    } 
    else {
        BillingDetails.style.display = "none";  
        AccordationPayment.style.height = "350px"       
    }
}
Accordationtwo.addEventListener("click" , ()=>{
    if (Accordationtwo.click) {
        AccordationPayment.style.display = "none";
    } 

})

Accordionone.addEventListener('click' , ()=>{
    AccordationPayment.style.display = "block";
})
   
    



// text up
Email.forEach(function (Email) {
    var Totop = Email.previousElementSibling;
    var Error = Email.nextElementSibling;

  
    function textup() {
        if (Email.value) {
            Email.style.paddingTop = "15px";
            Totop.style.opacity = "1";
            Error.style.display = "none";
            Email.style.outlineColor = "#216E42";

        }
          else if(Email.value === ""){
              Email.style.paddingTop = "5px";
           Totop.style.opacity = "0"
           Error.style.display = "block"
           Email.style.outlineColor = "red"
        }
        document.addEventListener('DOMContentLoaded', textup);
        }
        Email.addEventListener('input', textup);
    });
 
Checkedbox.addEventListener('change', checkfun);


checkEmail.addEventListener('input', function() {
   var emailValue = checkEmail.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if (!emailRegex.test(emailValue) && emailValue !== '') {
        errorMessageElement.style.display = "block";  
    } else {
         errorMessageElement.style.display = "none";
    }
});