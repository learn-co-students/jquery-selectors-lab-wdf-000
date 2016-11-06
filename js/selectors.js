'use-strict';
function h1Selector(){
  return $('h1');
}

function liInOlSelector(){
  return $('ol li');
}

function linkSelector(){
  return $('div#box4 a:first-child')
}

function imageSelector(){
  return $('img[alt="cat sleeping"]')
}

function checkboxInputSelector(){
  return $('input[type="checkbox"]')
}


$(document).ready(function(){
  h1Selector();
  liInOlSelector();
  linkSelector();
  imageSelector();
  checkboxInputSelector();
  
});
