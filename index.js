// FUNCTION IS USED TO CALL THE SUMBIT BUTTON
function calc(){

    let height = Number(document.getElementById('height').value); //GETING HEIGHT VALUE AND CONVERTING INTO NUMBER
    let weight = Number(document.getElementById('weight').value); // GETING WEIGHT VALUE AND CONVERTING INTO NUMBER
    let res = document.getElementById('result'); // GETING DISPLAY TAG
    if(height<=0 || weight<=0 || isNaN(height)|| isNaN(weight)){
        res.textContent = ` HI USER PLEASE ENTER YOUR HEIGHT OR WEIGHT`
        return
    }
    
    let inch = Math.ceil(height/2.54); // CONVERTING HEIGHT INTO INCH
    let pound = Math.ceil(weight*2.205); // CONVERTING WEIGHT INTO POUND
    let he = inch*inch;  
    let bmi = pound/he;
    let ans = Math.ceil(bmi*703);
    // DISPLAYING ANSWER IN BROWSER
    if(ans<18){
        res.innerHTML=` HI USER YOUR BMI IS ${ans} YOU ARE UNDER WEIGHT`;
    }
    else if(ans<25){
        res.innerHTML=` HI USER YOUR BMI IS ${ans} YOU ARE NORMAL WEIGHT`;
    }
    else if(ans<30){
        res.innerHTML=`  HI USER YOUR BMI IS ${ans} YOU ARE OVER WEIGHT`;
    }
    
    else {
        res.innerHTML=` HI USER YOUR BMI IS ${ans} YOU ARE OBESE`;
    }
    
   
}








