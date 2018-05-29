describe('reg exp', () => {

    let regex;
    
    //simple
    it('returns true when a expression is found in string', () => {
        regex = /marth/;
        regex.test('marth is the best player').should.be.true;
    });
    

    // . basic one character match test
    it(". matches one single character", () => {
        regex = new RegExp("w.n");
        regex.test("wee").should.be.false;
        regex.test("win").should.be.true;
        regex.test("w7n").should.be.true;
        regex.test("wanted").should.be.true;
    });

    //* basic one or more test; one or more e's are optional rest is required for a match.. snak[e]s
    it("* matches an expression 0 or more times", () => {
        regex = new RegExp("snake*s");
        regex.test("snake").should.be.false;
        regex.test("snakes").should.be.true;
        regex.test("snakesssssssss ").should.be.true;
        regex.test("snakeeeeeesssssssss ").should.be.true;
        regex.test("snaksssssssss").should.be.true;
    });

    // one or more repetations with `+`
    it('will find one or more matches', () => {
        regexp = new RegExp("hell+o");
        regexp.test("helloooooooooo").should.be.true;
        regexp.test("hello").should.be.true;
        regexp.test("hell").should.be.false;
    })

    //? expression is optionsal
    it('will optionally match with ?', () => {
        regex = new RegExp("h?ld");
        regex.test("hold").should.be.true;
        regex.test("held").should.be.true;
        regex.test("hld").should.be.true;
        regex.test("holt").should.be.false;
    });

    //^ matches beginning of the string
    it('^ will match begining of a string', () => {
        regex = new RegExp("^st");
        regex.test("strong").should.be.true;
        regex.test("sstrong").should.be.false;
        regex.test("st").should.be.true;
        regex.test("stroll").should.be.true;
    });

    //$ matches end of a string
    it('% will match end of a string', () => {
        regex = new RegExp("ing$");
        regex.test("taking").should.be.true;
        regex.test("making").should.be.true;
        regex.test("ing").should.be.true;
        regex.test("ingle").should.be.false;

    });

    // \d matches any digit(s)
    it("\d can only look for digits", () => {
        regex = new RegExp("\\d");
        regex.test("123 hello cat").should.be.true;
        regex.test("75768374578634785").should.be.true;
        regex.test("hello world").should.be.false;
    });

    // \w macthes any word charcter
    it('\w matches any word character', () => {
       regex = new RegExp("\\w");
       regex.test('a').should.be.true;
       regex.test('$').should.be.false;
       regex.test('abc this $ is a test').should.be.true;
    });

    // [A-C] matches any single character from the range
    it('[] matches any single charcter from option', () => {
        regex = new RegExp("[lpmsg]et");
        regex.test("met").should.be.true;
        regex.test("let").should.be.true;
        regex.test("jet").should.be.false;
    });

});


