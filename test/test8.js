const checkPart = require('../src/challenge8.js');
describe("test gift inventory", () => {
    test("test with short strings", () => {
        expect(checkPart("a")).toBeTruthy();
        expect(checkPart("aa")).toBeTruthy();
        expect(checkPart("aba")).toBeTruthy();
        expect(checkPart("abb")).toBeTruthy();
    });

    test("example true removing one at 3 and 4 reverse", () => {
        expect(checkPart("paowap")).toBeTruthy();
    });
    test("example true", () => {
        expect(checkPart("uwu")).toBeTruthy();
    });
    test("example true removing one", () => {
        expect(checkPart("uawu")).toBeTruthy();
        //diff at 1
        //uawu
        //uwau

        expect(checkPart("asppa")).toBeTruthy();
        //diff at 1
        //asppa
        //appsa

        expect(checkPart("miidim")).toBeTruthy();
        //diff at 2
        //tamano 6
        //eliminar en indice original y comprobar

        //miidim --> midim
        //midiim
        //iim
        //dim -->

        expect(checkPart("ijuujoi")).toBeTruthy();
        //diff at 1
        //ijuujoi
        //iojuuji

        expect(checkPart("aijuuji")).toBeTruthy();
        //diff at 0
        //aijuuji
        //ijuujia

        expect(checkPart("paijkkjioap")).toBeTruthy(); //middle finishing
        //diff at index 2
        //eliminar en invertido
        // paijkkjioap
        // paoijkkjiap
        //iap
        //oap
        //// paijkkjiap

        expect(checkPart("paijkkojiap")).toBeTruthy();
        //4
        //paijkkojiap
        //paijokkjiap

        expect(checkPart("paijkkjiap")).toBeTruthy();

        expect(checkPart("retapopter")).toBeTruthy();
        //diff at 3
        //retapopter
        //retpopater

        expect(checkPart("retpaopter")).toBeTruthy();
        //diff at 4
        //retpaopter
        //retpoapter

        expect(checkPart("retpopter")).toBeTruthy();
    });
    test("all false", () => {
        // expect(checkPart("somosonosomos")).toBeTruthy();
        // expect(checkPart("amolapacificapaloma")).toBeTruthy();


        expect(checkPart("")).toBeTruthy(); //middle finishing


    });

    test("all false", () => {
        expect(checkPart("paijkkiijiap")).toBeFalsy();
    });

    // paijkkijiap
    // paijikkjiap

});