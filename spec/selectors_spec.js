'use-strict';
describe('Selectors', function() {
  beforeEach(function() {
    setFixtures('<body><div id="wrapper"><div id="content"><h1>Header 1</h1><h2>Header 2</h2><h3>Header 3</h3><h4>Header 4</h4><h5>Header 5</h5><h6>Header 6</h6><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis fringilla augue pellentesque cursus. Integer a placerat sapien. Suspendisse faucibus sodales commodo. Etiam ac accumsan urna. Vestibulum condimentum placerat elit, sit amet commodo est feugiat non. Vivamus eget magna semper nisi iaculis interdum. Phasellus interdum, mauris interdum interdum ornare, eros velit varius augue, at fermentum lorem justo eget metus. Nulla id ligula urna. Nulla nisi velit, sagittis nec mattis non, feugiat sit amet libero. Donec et lectus sed tellus consectetur venenatis. Quisque volutpat sagittis est, eget pellentesque neque elementum non.</p><div>This is a box!</div><ul><li>Apples<span class="special">*</span></li><li>Oranges</li><li>Bananas</li></ul><ul><li>broccoli</li><li>spinach</li><li>carrots</li></ul><ol><li>Crayon</li><li>Pencil</li><li>Stapler</li></ol><div id="box2">This is box 2</div><div class="box3">This is box 3</div><a href="#">This is a link</a><div id="box4" class="box5"><a href="#">This is a link nested inside a div</a></div><p><img src="images/kitten-face.jpg" width="200px" height="auto" alt="Kitty"/></p><p><img src="images/cat.jpg" width="200px" height="auto" alt="cat sleeping"/></p><form name="myform" method="post">Username: <input type="username" name="name" /><br />Password: <input type="password" name="pass" /><br /><input type="radio" name="sex" value="male" /> Male<br /><input type="radio" name="sex" value="female" /> Female<br /><input type="checkbox" name="vehicle" value="Bike" checked="no"/> I have a bike<br /><input type="checkbox" name="vehicle" value="Car" checked="no"/> I have a car <br /><input type="submit" value="Submit" /></form></div></div></body>');
  });

  it('#h1Selector should select all h1\'s', function() {
    expect(h1Selector().length).toBe(1);
    expect(h1Selector()[0].innerHTML).toEqual("Header 1");

  });

  it('#liInOlSelector should select all li elements nested in ol\'s', function() {
    expect(liInOlSelector().length).toBe(3);
    expect(liInOlSelector()[0].innerHTML).toEqual("Crayon");
    expect(liInOlSelector()[1].innerHTML).toEqual("Pencil");
    expect(liInOlSelector()[2].innerHTML).toEqual("Stapler");
  });

  it('#linkSelector should select all links that are inside of the element with an id of box4 and a class of box5.', function() {
    expect(linkSelector().length).toBe(1);
    expect(linkSelector()[0].innerHTML).toEqual("This is a link nested inside a div");
  });

  it('#imageSelector should an image that has the alt text equal to "cat sleeping"', function() {
    expect(imageSelector().length).toBe(1);
    expect(imageSelector().attr("src")).toEqual("images/cat.jpg")
  });

  it('#checkboxInputSelector should select all checkbox inputs', function() {
    
    expect(checkboxInputSelector().length).toBe(2);
    expect(checkboxInputSelector()[0].value).toEqual("Bike");
    expect(checkboxInputSelector()[1].value).toEqual("Car");
  });

});
