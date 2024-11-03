
let display=document.querySelector(".display-calculation");
let numBtns=document.querySelector(".numbers-buttons");
let menu=document.querySelector(".menu");
let acKey=document.getElementsByClassName("grid")[0].children[4];
let actualDisplay=document.getElementsByClassName("display-calculation")[0];



menu.addEventListener('click',()=>{
    let line=document.querySelector('.line');
    let sideBar=document.querySelector('.side-bar');
    line.classList.toggle("translatedRotated");
    sideBar.classList.toggle('translated');

})



document.addEventListener('keydown',(e)=>{
    console.clear();
    console.log(`${e.key} key pressed`);
    let regex=/[0-9\+\-\/*\^=%\.\(\)]+/g;
    if (regex.test(e.key)) {
        display.textContent+=e.key;
       
        
    }
    if (actualDisplay.textContent.replace(/[ \n]+/g,'').length>0) {
        acKey.textContent='CE';
        
    }
    if (e.key==='Backspace') {
        if (display.textContent.replace(/[ \n]+/g,'').length>0) {
            let displayExpressionString=display.textContent.replace(/[ \n]+/g,'');
        let displayStringArray=displayExpressionString.split('');
        displayStringArray.splice(displayStringArray.length-1,1);
        displayExpressionString=displayStringArray.join('');
        display.textContent=displayExpressionString;
            
        }
        
        
    }

    if (e.key==='Enter') {
        let displayExpressionString=display.textContent.replace(/[ \n]+/g,'');
        let result=Function ("return "+displayExpressionString)();
        display.textContent=result;
        
    }
    

})

numBtns.addEventListener('mousedown',(event)=>{

    if (event.target.classList.contains('btn')) {


        
    
    // console.log(event.target.textContent);
    let keyValue=event.target.textContent;
    let simpleKeys=/[0-9+\-*\/%\.]+/g;
    let plusMinus=/\+\\-/;


    if (actualDisplay.textContent.replace(/[ \n]+/g,'').length>0) {
        acKey.textContent='CE';
        
    }


    if (simpleKeys.test(keyValue)) {
        display.textContent+=keyValue;
        
    }
    else if(plusMinus.test(keyValue)){
        display.textContent+='';

    }

    if (keyValue==='=') {
        let displayExpressionString=display.textContent.replace(/[ \n]+/g,'');
        let result=Function ("return "+displayExpressionString)();
        display.textContent=result;
        
    }

    if (keyValue==='x') {
        display.textContent+='*';
        
    }

    if (keyValue==='CE') {
        display.textContent='';
        
    }

    if (keyValue==='±') {
        console.log(keyValue);
        console.log(display.textContent.replace(/[\s\n]+/g,'')[0]);
        let currentDisplay=display.textContent.replace(/[ \n]+/g,'');

        if (currentDisplay[0]==='-') {
            display.textContent=currentDisplay.slice(1);
            
        }else{
            display.textContent="-"+currentDisplay;
        }
        
    }


    if (keyValue=='π') {
    
        display.textContent+='3.1415926536';
        
    }
    if (keyValue=='xy') {
    
        display.textContent+='**';
        
    }
    if (keyValue=='R2') {
    
        let floatNumber=parseFloat(display.textContent).toFixed(2);
        display.textContent=floatNumber;
        
    }
    if (keyValue=='R0') {
    
        let intNumber=parseInt(display.textContent);
        display.textContent=intNumber;
        
    }
    if (keyValue=='√x') {
    
        display.textContent+='Math.sqrt(';
        
    }
    if (keyValue=='mr') {
    
        display.textContent=display.textContent;
        
    }
    if (keyValue=='mc') {
    
        display.textContent='';
        
    }
    if (keyValue==='m+') {
        // let currentDisplay=display.textContent.replace(/[\s\n]+/g,'');
        // console.log(currentDisplay);
        
    
        display.textContent=display.textContent.slice(0,display.textContent.length-2)+'+';

        
    }
    if (keyValue=='m-') {
    
        display.textContent=display.textContent.slice(0,display.textContent.length-2)+'-';
        
    }


}

    
    

})