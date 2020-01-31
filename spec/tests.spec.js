describe('tests for the memory game', () => {
    const html = require('./thefix.js')
    const jsdom = require('jsdom')
    const {JSDOM} = jsdom;

    const virtualConsole = new jsdom.VirtualConsole();

    virtualConsole.sendTo(console);

    beforeEach(() => {
        dom = new JSDOM(html, {
            runScripts: "dangerously",
            resources: "usable"
        });
        document = dom.window.document;
        game = require("../src/script");
    })

    
})