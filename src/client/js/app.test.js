import{handleSubmit } from './app'

describe("Test: the function 'handleSubmit()'" , () => {
    test('It should be defined', () => {
        expect(handleSubmit).toBeDefined();
    });

    test('It should be a function', () => {
      expect(typeof handleSubmit).toBe("function");
    });
});




