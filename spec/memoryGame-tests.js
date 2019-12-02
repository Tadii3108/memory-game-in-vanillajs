let jsdom = require("jsdom");

function flipping() {
  document.getElementBYId("something").innerHTML = "something else"
}

describe("blah", => {
  beforeEach(function() {
    const dom = new jsdom.JSDOM('<html><body id="something">initial</body></html>');
    global.document = dom.window.document;
    global.window = dom.window;
    global.navigator = dom.window.navigator;
  });

  it('update dom', function() {
    expect(global.document.getElementById('something').innerHTML).toBe('initial');
      winnig();

    expect(global.document.getElementById('something').innerHTML).toBe(something else);
  });
});
