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

$('document').ready(function() {
    $('.image-container').hover(function () {
        $('#hide').toggle()
    })
    })

$('document').ready(function() {
    $('.image-container2').hover(function () {
        $('#hide2').toggle()
  })
  })
$('document').ready(function() {
    $('.image-container3').hover(function () {
        $('#hide3').toggle()
  })
  })
  $('document').ready(function() {
      $('.image-container4').hover(function(){
          $('#hide4').toggle()
      })
  })
  $('document').ready(function() {
    $('.image-container5').hover(function () {
        $('#hide5').toggle()
  })
  })
  $('document').ready(function() {
    $('.image-container6').hover(function () {
        $('#hide6').toggle()
  })
  })
  $('document').ready(function() {
    $('.image-container7').hover(function () {
        $('#hide7').toggle()
  })
  }) 
  $('document').ready(function() {
    $('.image-container8').hover(function () {
        $('#hide8').toggle()
  })
  })
  $('document').ready(function() {
    $('.image-container9').hover(function () {
        $('#hide9').toggle()
  })
  })  
