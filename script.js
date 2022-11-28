// card details
const card_number = document.querySelector(".c-number");
const card_name = document.querySelector("#c-name");
const card_cvv = document.querySelector(".c-cvv");
const exp_mm = document.querySelector("#exp-mm");
const exp_yy = document.querySelector("#exp-yy");
// form inputs
const cname = document.querySelector("#card-name");
const cnum = document.querySelector("#card-number");
const date_mm = document.querySelector("#mm");
const date_yy = document.querySelector("#yy");
const cvv = document.querySelector("#cvv");
// form element
const submit = document.querySelector("#form");
const date_container = document.querySelector("#exp-container");
// form container element
const formContainerElement = submit.parentElement;
// complete state element
const formConpleteState = document.querySelector(".complete-pg-wrapper");
// continue button 
const continueButton = document.querySelector("#complete-continue");

// window on load operations
window.onload = function(){
  // cardholder name input field events ---
  cname.addEventListener("keyup",(e)=>{
    // linking inputs to the cards
    if(cname.value.length === 0){
      card_name.textContent = "Jane Appleseed";
    }else{
      card_name.textContent = cname.value;
    }
  });
  cname.addEventListener("focus",(e)=>setBorderFocus(e.target,"hsl(249, 99%, 64%)"));
  cname.addEventListener("blur",(e) => removeBorderFocus(e.target));
  
  // card number input field events ---
  const cnum_im = new Inputmask({
    mask:"**** **** **** ****",
    placeholder:" ",
  });
  cnum_im.mask(cnum);
  cnum.addEventListener("keyup",(e)=>{
    if(cnum.value.length === 0){
      card_number.textContent = "0000 0000 0000 0000";
    }else{
      card_number.textContent = cnum.value;
    }
  });
  cnum.addEventListener("focus",(e)=>setBorderFocus(e.target,"hsl(249, 99%, 64%)"));
  cnum.addEventListener("blur",(e) => removeBorderFocus(e.target));

  // Expiry date input field events ---
  date_mm.addEventListener("focus",(e)=> setBorderFocus(e.target,"hsl(249, 99%, 64%)"));
  date_mm.addEventListener("blur",(e)=> removeBorderFocus(e.target));
  date_mm.addEventListener("input",(e)=>{
    if(date_mm.value===""){
      exp_mm.textContent = "00";
    }else{
      exp_mm.textContent = date_mm.value;
    }
  })
  date_yy.addEventListener("focus",(e)=> setBorderFocus(e.target,"hsl(249, 99%, 64%)"));
  date_yy.addEventListener("blur",(e)=> removeBorderFocus(e.target));
  date_yy.addEventListener("input",(e)=>{
    if(date_yy.value===''){
      exp_yy.textContent = "00";
    }else{
      exp_yy.textContent = date_yy.value;
    }
  })
  // cvv input fields events ---
  cvv.addEventListener("input",(e)=>{
    if(cvv.value.length === 0){
      card_cvv.textContent = "000";
    }else{
      card_cvv.textContent = cvv.value;
    }
  })
  cvv.addEventListener("focus",(e)=> setBorderFocus(e.target,"hsl(249, 99%, 64%)"));
  cvv.addEventListener("blur",(e)=> removeBorderFocus(e.target));

}

submit.addEventListener("submit",(e)=>{
  // cardholder name validation 
  if(cname.value.length ===0){
    addMessage(cname.parentElement,"can't be left blank");
    setBorderFocus(cname,"hsl(0, 100%, 66%)");
    e.preventDefault();
  }else if(/[^\sa-zA-Z]/.test(cname.value)){
    addMessage(cname.parentElement,"Wrong format,alphabets only");
    setBorderFocus(cname,"hsl(0, 100%, 66%)");
    e.preventDefault();
  }else{
    if(!/[^\sa-zA-Z]/.test(cname.value)){
      removeMessage(cname.parentElement);
      // setBorderFocus(cname,"hsl(249, 99%, 64%)");
    }
  }

  // card number validation
  if(cnum.value.length ===0){
    addMessage(cnum.parentElement,"Can't be left blank");
    setBorderFocus(cnum,"hsl(0, 100%, 66%)");
    e.preventDefault();
  }else if(/[^\s0-9]/.test(cnum.value)){
    addMessage(cnum.parentElement,"Wrong format,numbers only");
    setBorderFocus(cnum,"hsl(0, 100%, 66%)");
    e.preventDefault();
  }else if(cnum.inputmask.unmaskedvalue().length !=16){
    addMessage(cnum.parentElement,"Invalid card number");
    setBorderFocus(cnum,"hsl(0, 100%, 66%)");
    e.preventDefault();
  }
  else{
    removeMessage(cnum.parentElement);
    // setBorderFocus(cnum,"hsl(249, 99%, 64%)");
    removeBorderFocus(cnum);
  }
  // exp. date validation
  if(date_mm.value.length ===0 || date_yy.value.length===0){
    e.preventDefault();
    addMessage(date_container,"can't be left blank");
    if(date_yy.value.length===0){
      setBorderFocus(date_yy,"hsl(0, 100%, 66%)");
    }
    if(date_mm.value.length ===0){
      setBorderFocus(date_mm,"hsl(0, 100%, 66%)");
    }
  }else if(Number(date_mm.value)<1 || 
    Number(date_mm.value)>12){
    e.preventDefault();
    setBorderFocus(date_mm,"hsl(0, 100%, 66%)");
    addMessage(date_container,"Invalid month");
  }else if(/[^0-9]/.test(date_mm.value) || /[^0-9]/.test(date_yy.value)){
    e.preventDefault();
    addMessage(date_container,"Invalid month");
    if(/[^0-9]/.test(date_mm.value)){
      setBorderFocus(date_mm,"hsl(0, 100%, 66%)");
    }if(/[^0-9]/.test(date_yy.value)){
      setBorderFocus(date_yy,"hsl(0, 100%, 66%)");
    }
  }else{
    removeBorderFocus(date_mm);
    removeBorderFocus(date_yy);
    removeMessage(date_container);
  }
  // cvv field validation
  if(cvv.value.length===0){
    e.preventDefault();
    setBorderFocus(cvv,"hsl(0, 100%, 66%)");
    addMessage(cvv.parentElement,"can't be left blank");
  }else if(cvv.value.length <3){
    e.preventDefault();
    setBorderFocus(cvv,"hsl(0, 100%, 66%)");
    addMessage(cvv.parentElement,"Invalid cvc");
  }else if(/[^0-9]/.test(cvv.value)){
    e.preventDefault();
    setBorderFocus(cvv,"hsl(0, 100%, 66%)");
    addMessage(cvv.parentElement,"numbers only");
  }else{
    removeBorderFocus(e.target)
    removeMessage(cvv.parentElement);
  }
  if(!e.defaultPrevented){
    e.preventDefault();
    toggleView();
  }
});
// continue button click event.
continueButton.addEventListener("click",(e)=>{
  toggleView();
  clearFields();
})
// helper functions
function clearFields(){
  card_name.textContent = "Jane Appleseed";
  card_number.textContent = "0000 0000 0000 0000"
  exp_mm.textContent = "00";
  exp_yy.textContent = "00";
  card_cvv.textContent = "000";
  cname.value = "";
  cnum.value = "";
  date_mm.value = "";
  date_yy.value = "";
  cvv.value = "";
}
// function to toggle the form view and the complete state view.
function toggleView(){
  formContainerElement.classList.toggle("hidden");
  formConpleteState.classList.toggle("hidden");
}
function removeMessage(ele){
  // takes the parent element of the input element.
  if(ele.lastElementChild.tagName === "SPAN"){
      ele.lastElementChild.remove();
  }
}
function addMessage(ele,message){
  // takes input the parent element of the input element.
  if(ele.lastElementChild.tagName != "SPAN"){
      const span = document.createElement("span");
      span.textContent = message;
      span.classList.add("error-messages");
      ele.append(span);
  }else{
      ele.lastElementChild.textContent = message;
  }
}
function setBorderFocus(ele,color){
  ele.style.borderColor = color;
}
function removeBorderFocus(ele){
  ele.style.borderColor = "hsl(270, 3%, 87%)";
}
