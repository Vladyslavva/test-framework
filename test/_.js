const {expect} = require('chai');
const loginAction = require('./actions/loginAction');

describe('Login form', () =>{
    before( () => {
      loginAction(browser);

    });

    it('should have correct h1', () => {
      const selector = '//h1';
      const element = $(selector);
      const actual = element.getText();
      const expected = 'User Login';
      
      expect(actual).to.eq(expected)
    });


});
