
// 4 digit Random Pin Number Generation
document.getElementById('generatePin').addEventListener('click', function () {
    const generatePin = Math.round(1000 + Math.random() * 9000);
    document.getElementById('showPin').value = generatePin;
    
    // hide notification
    let failed = document.getElementById('failure');
    failed.style.display = "none";
    let successed = document.getElementById('successfull');
    successed.style.display = "none";
});
document.getElementById("generatePin").value = "";

  // Input Number
        function inputNumber(number) {   
           let getNumber= document.getElementById('numberInput');
           switch (number) {
               case 'c':{
                   getNumber.value = "";
                   break;
               }
                case '<':{
                    getNumber.value = getNumber.value.substr(0, getNumber.value.length - 1);
                    break;
                }
               default:
                   getNumber.value += number;
                   break;
           }
}        
document.getElementById('numberInput').value = "";
       
const btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', function () {
    let generatePin = document.getElementById("generatePin").value;
    let getNumber = document.getElementById('numberInput').value;
    
    if ( getNumber === generatePin && getNumber.length > 0 && generatePin.length > 0 ){
        let successed = document.getElementById('successfull');
        successed.style.display = "block";
        document.getElementById('numberInput').value = "";
        document.getElementById('generatePin').value = "";                  
    } else if ( getNumber !== generatePin ) {
        let failed = document.getElementById("failure");
        failed.style.display = "block";
        document.getElementById('numberInput').value = "";
        document.getElementById("generatePin").value = "";
                    
    }
    else {
        let successed = document.getElementById("successfull");
        successed.style.display = "none";
        let failed = document.getElementById("failed");
        failed.style.display = "none";
                    
    }
});
