// Extra logic to handle double press c as ac, 
// and to save only the last operator pressed ex: 12*/-*-+1=13
// and to use result screen
var prev, operation='', result;
function calculate(pressed,operator = false){
    if(pressed=='c'){
        if(prev==operator){
            operation='';
            document.getElementById("pre").value ='';
        }
        document.getElementById("calculation").value ='';
    } else if (operator) {
        if(prev==operator) {
            operation=operation.slice(0, -3);
        }
        operation+=document.getElementById("calculation").value + pressed;
        document.getElementById("calculation").value='';
        document.getElementById("pre").value = operation;
        if (pressed==' = '){
            result = eval(operation.slice(0, -3));
            document.getElementById("calculation").value = result
            document.getElementById("pre").value = operation + result;
            operation='';
        }
    }else{
         document.getElementById("calculation").value += pressed;
    }
    prev=operator;
}