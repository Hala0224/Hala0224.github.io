function alert1()
{
   alert("Hello my name is Hala");
}

window.addEventListener("load", alert1);


function increaseSize()
{
    const button=document.getElementById("button1");
    button.style.fontSize=size;
    button.style.fontSize=size*2;
}

document.getElementById("button1").addEventListener("click",increaseSize);



