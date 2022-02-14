function getPin(){
   // console.log('generatePin');
   const pin = Math.round(Math.random()*10000);
   const pinString = pin + '';
   if(pinString.length == 4 ){
      return pin;

   }else{
      // console.log('get 3 digit pin and calling again',pin);
      return getPin();
   }
}

function generatePin(){

   const pin = getPin();
   // console.log('Pin');
   document.getElementById('display-pin').value = pin;
  
}

document.getElementById('key-pad').addEventListener('click',function(event){
   //   console.log('any key clicked');
   //   console.log(event.target.innerText);
      const calcInput = document.getElementById('typed-numbers');
      const number = event.target.innerText;
     
     if(isNaN(number)){
      // console.log(number);
      if(number == 'C'){
         calcInput.value = '';
      }
   }else{
      
     const previousNumber = calcInput.value;
     const newNumber = previousNumber + number;
     calcInput.value = newNumber;
   }
     
})

function verifyPin(){
   // console.log('going to verify');
   const pin = document.getElementById('display-pin').value;
   const typedNumbers = document.getElementById('typed-numbers').value;

   const successMessage = document.getElementById('notify-success');
   const failMessage = document.getElementById('notify-fail');

   if(pin == typedNumbers){
      // console.log('matched YAY');
      // const successMessage = document.getElementById('notify-success');
      successMessage.style.display = 'block';
      failMessage.style.display = 'none';
   }else{
      // console.log('opps!!')
      // const failMessage = document.getElementById('notify-fail');
      successMessage.style.display = 'none';
      failMessage.style.display = 'block';

   }

}