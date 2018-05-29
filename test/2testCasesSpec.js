describe('reg ex use cases', () => {
    let regex;

    // regex to match '12-34' but ignore digit count, 125-5667 should be true as well
    it('matches 34-77 and 6790-1', () => {
        regex = new RegExp("\\d+-\\d+");
        regex.test("34-77").should.be.true;
        regex.test("6790-1").should.be.true;
        regex.test("6790-").should.be.false;
    });

    //when macthing meooow and meow and meeeoooowww
    it('matches meow meeeeoooow meowwww', () => {
        regex = new RegExp("m(e)+(o)+(w)+");
        regex.test("meow").should.be.true;
        regex.test("meeeeeeeeow").should.be.true;
        regex.test("meeeeoooooooow").should.be.true;
        regex.test("meeeeeeeeeeeoeoooooooooowwwwwwwwwww").should.be.false;
    });


});