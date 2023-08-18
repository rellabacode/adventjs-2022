const fixLetter = require("../src/challenge16.js");
describe("", () => {
    test("trim", () => {
        expect(fixLetter("   paco paco   ")).toEqual("Paco paco.");
    });

    test("multiple spaces", () => {
        expect(fixLetter("   paco  paco   ")).toEqual("Paco paco.");
        expect(fixLetter("   p  a  c  o  p  a  c  o   ")).toEqual("P a c o p a c o.");
        expect(fixLetter("   pa  co  p     a  co   ")).toEqual("Pa co p a co.");
    });

    test("space after every comma", () => {
        expect(fixLetter("antonio,paco, juanjo")).toEqual("Antonio, paco, juanjo.");
    });

    test("multiple punctuation", () => {
        expect(fixLetter("paco,,,,paco")).toEqual("Paco, paco.");
        expect(fixLetter("paco??????paco")).toEqual("Paco? Paco.");
        expect(fixLetter("¿¿paco??????paco")).toEqual("¿Paco? Paco.");
        expect(fixLetter("paco.. paco")).toEqual("Paco. Paco.");
    });

    test("comma and dot without previous space", () => {
        expect(fixLetter("   antonio,paco , paco   .")).toEqual("Antonio, paco, paco.");
        expect(fixLetter("   antonio,paco .Jose ,paco   .")).toEqual("Antonio, paco. Jose, paco.");
    });

    //.only
    test("comma and dot with space after", () => {
        expect(fixLetter("Jose.Pepe.Julián.raul,antonio,paco.paco.")).toEqual("Jose. Pepe. Julián. Raul, antonio, paco. Paco.");
    });

    test("fix questions", () => {
        expect(fixLetter("paco?? antonio? jesus?. jose?.")).toEqual("Paco? Antonio? Jesus?. Jose?.");
        expect(fixLetter("¿¿paco?? antonio? jesus?. jose?.")).toEqual("¿Paco? Antonio? Jesus?. Jose?.");
    });

    test("santa claus", () => {
        expect(fixLetter(" sAnTa ClAuS santa claus SANTA CLAUS ")).toEqual("Santa Claus Santa Claus Santa Claus.");
    });

    test("end point", () => {
        expect(fixLetter("juanjo.")).toEqual("Juanjo.");
        expect(fixLetter("juanjo")).toEqual("Juanjo.");
        expect(fixLetter("juanjo   ")).toEqual("Juanjo.");
        expect(fixLetter("juanjo   ")).toEqual("Juanjo.");
        expect(fixLetter("juanjo?")).toEqual("Juanjo?");
        expect(fixLetter("juanjo!")).toEqual("Juanjo!");
        expect(fixLetter("juanjo,")).toEqual("Juanjo,");
    });


    test("ONE ELEMENT", () => {
        const result = "Hello, how are you? I am good, really good. Do you know if Santa Claus exists? I really hope he does! Bye.";
        expect(fixLetter(" hello ,  how are you ?? i am good,really good .    do you know if santa claus exists ?  i really hope he does !  bye")).toEqual(result);
    });

    test("ONE ELEMENT", () => {
        const result = "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?";
        expect(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"))
            .toEqual(result);
    });

    test("", () => {
        const result = "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.";
        expect(fixLetter(" hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  ")).toEqual(result);
    });

});
