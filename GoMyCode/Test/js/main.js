var Area=document.getElementById("text")
var size=document.getElementById("select1")
var police=document.getElementById("select2")

function bold (){
   
   if (Area.style.fontWeight!="bold") {
        Area.style.fontWeight="bold";
    }
    else{
        Area.style.fontWeight="normal";
    }
}

function italic (){
if (Area.style.fontStyle!="italic"){
    Area.style.fontStyle="italic";
}
else {
    Area.style.fontStyle="normal";
}
}

function underline (){
    if (Area.style.textDecoration!="underline"){
        Area.style.textDecoration="underline";
    }
else{
    Area.style.textDecoration="none";
}
}

function fontsize () {
  Area.style.fontSize=size.value;
}

function fontstyle () {
    Area.style.fontFamily=police.value;
}