'use-strict';

function h1Selector() {
  // all h1
  return $('h1');
}

function liInOlSelector() {
  // all li's inside ordered lists (ol)
  return $('ol li');
}

function linkSelector() {
  // all links nested inside a div with id box4 and class of box5
  return $('#box4.box5 a');
}

function imageSelector() {
  // image with an alt text of 'cat sleeping'
  return $("img[alt='cat sleeping']");
}

function checkboxInputSelector() {
  // all checkbox inputs
  // the below is equivalent to $("[type=checkbox]")
  return $(':checkbox');
}
