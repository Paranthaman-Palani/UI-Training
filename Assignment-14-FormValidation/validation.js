//--------------------------------------------------------START :: FormValidation - Object --------------------------------------------------->
const formValidation={
    'first-name':{
        'regexPattern':/^[a-z/A-Z]{1,30}$/,
        'errorMessage': 'First Name is Required',
        'invalidMessage':'First Name is not valid'
    },
    'last-name':{
        'regexPattern':/^[a-z/A-Z]{1,30}$/,
        'errorMessage': 'Last Name is Required',
        'invalidMessage':'Last Name is not valid'
    },
    'email':{
        'regexPattern':/^\S+@\S+\.\S+$/,
        'errorMessage': 'Email is Required',
        'invalidMessage':'Email is not valid'
    },
    'phone':{
        'regexPattern':/^[6-9]\d{9}$/,
        'errorMessage': 'Contact Number is Required',
        'invalidMessage':'Contact Number is not valid'
    },
    'pin-code':{
        'regexPattern':/^\d{6}$/,
        'errorMessage': 'Pin Code is Required',
        'invalidMessage':'Pin Code is not valid'
    },
    'card-number':{
        'regexPattern':/^\d{16}$/,
        'errorMessage': 'Card Number is Required',
        'invalidMessage':'Card Number is not valid'
    },
    'expiry':{
        'regexPattern':/^(?:20(?:2[3-9]|[3-9][0-9])|2[1-9][0-9][0-9]|[3-9][0-9][0-9][0-9])$/,
        'errorMessage': 'Card Expiry is Required',
        'invalidMessage':'Card Expiry is not valid'
    },

    'cvv':{
        'regexPattern':/^\d{3,4}$/,
        'errorMessage': 'CVV is Required',
        'invalidMessage':'CVV is not valid'
    } 
}
//-------------------------------------------------------- END :: FormValidation - Object --------------------------------------------------->

console.log(formValidation)

let submitBtn = document.querySelector("#form");

let inputs= document.querySelectorAll("input");

let inputBox  = document.querySelectorAll(".inputBox");

inputBox.forEach(errorBox => {
    p  = document.createElement("span");
    errorBox.append(p);
    
});

let errorBox  = document.querySelectorAll("span");


submitBtn.addEventListener('submit',(event)=>{
    
    event.preventDefault();

    for (const i in inputs) {

        let nameId = inputs[i].getAttribute("id")
        let match = formValidation[nameId].regexPattern;

            if(inputs[i].value === '' ){
                inputs[i].setAttribute("class","inputError");
                errorBox[i].innerHTML=formValidation[nameId].errorMessage;
            }
            else if(!(match.test(inputs[i].value))){
                inputs[i].setAttribute("class","inputError");
                errorBox[i].innerHTML=formValidation[nameId].invalidMessage;
            }
            else{
                inputs[i].setAttribute("class","");
                errorBox[i].innerHTML="";
            } 
    }


})




