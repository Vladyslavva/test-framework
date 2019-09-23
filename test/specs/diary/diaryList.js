const {expect} = require('chai');
const loginAction = require('../../actions/loginAction');

const menuItemSelector = '//div[@id="site-menu"]//a[text() = "Diary"]';

describe('Diary List', () =>{

    it('should have main menu item Diary', () => {
      loginAction(browser);
      const isDisplayed = $(menuItemSelector).isDisplayed();
      expect(isDisplayed).to.be.true;    
    });

    it('click to Diary in main menu should redirect to Diary list page', () => {
      $(menuItemSelector).click();
      const actualH1Text = $('//h1').getText();
      const expected = 'Day reports';

      expect(actualH1Text).to.eq(expected);
      
    });

    it('should have a few records', () => {
       const selector = '//div[@class = "pb-4 mb-4 border-bottom"]';
       const element = $(selector);
       console.log(element)

    });




});
