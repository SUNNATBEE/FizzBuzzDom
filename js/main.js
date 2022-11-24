var elForm = document.querySelector(".form__wrapper");
var elInput = document.querySelector(".input-js");
var elAlert = document.querySelector(".alert")

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault()
    var elinputValue = elInput.value;
    if(elinputValue % 3 == 0 && elinputValue % 5 == 0){
        elAlert.textContent = "FizzBuzz";
        elAlert.classList.add("alertblock");
        alert.classList.remove("alert-dark");
        elAlert.classList.add("alert-info");
        elAlert.classList.remove("alert-danger")
        elAlert.classList.remove("alert-warning");
    }else if(elinputValue % 3 == 0){
        elAlert.textContent = "Fizz";
        elAlert.classList.add("alertblock");
        elAlert.classList.remove("alert-info");
        elAlert.classList.add("alert-danger");
        elAlert.classList.remove("alert-dark");
    }else if(elinputValue % 5 == 0){
        elAlert.textContent = "Buzz";
        elAlert.classList.add("alertblock");
        elAlert.classList.remove("alert-info")
        elAlert.classList.remove("alert-danger");
        elAlert.classList.add("alert-dark");
    }else{
        elAlert.textContent = "kiritgan sonigiz 3ga ham 5ga ham bolinmaydi";
        elAlert.classList.add("alertblock");
        elAlert.classList.remove("alert-danger");
        elAlert.classList.add("alert-warning");
    }
})
