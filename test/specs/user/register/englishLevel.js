const {expect} = require('chai');

describe('English level form', () =>{
    before( () => {
      browser.url('https://stage.pasv.us/user/register');

    });

    it('should have English level dropdown', () => {
      const selector = '//label[@for="englishLevel"]/../../select';
      const element = $(selector);
      const elementIsDisplayed =  element.isDisplayed();
      expect(elementIsDisplayed).to.be.true;
    });

    it('should have correct items in dropdown', () => {
        const selector = '//label[@for="englishLevel"]/../../select/option';
        const options = $$(selector).map(option => option.getText());
        const expectedList = ['Zero','Beginner','Elementary', 'Pre-Intermediate', 'Intermediate', 'Upper intermediate','Advanced','Proficient', 'Native' ];
        expect(options).to.deep.equal(expectedList);
      //  const elementIsDisplayed =  element.isDisplayed();
       // expect(elementIsDisplayed).to.be.true;
      });

     // it('should have English level dropdown', () => {
       // const selector = '//label[@for="englishLevel"]/../../select';
      //  const element = $(selector);
       // const elementIsDisplayed =  element.isDisplayed();
      //  expect(elementIsDisplayed).to.be.true;
     // }); 
   

});