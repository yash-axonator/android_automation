var assert = require('assert');
// const inlineFunctions = require('./mobileFunctions');
const wizardFunctions = require('./wizard_mobileFunctions');

describe('Axonator application', () => {

  it('App open and login', async () => {
      await browser.pause(5000);
      await wizardFunctions.login("yash_axo_test@axonator.com", "Welcome@12345");
  });

  it('Open Form',async()=>{
      await browser.pause(5000);
      await wizardFunctions.openForm();
      await wizardFunctions.addRecord();
      await wizardFunctions.wizardMode();
  });

  it('Add text box', async () => {
      await wizardFunctions.addText("sample_test1");
      await wizardFunctions.nextButtonClick();
      await browser.pause(1000);
  });

  it('Select choice list',async()=> {
      await wizardFunctions.selectChoiceList();
      console.log("choicelist");
      await browser.pause(1000);
  });

  it('Toggle Change',async()=> {
      await wizardFunctions.toggleChange();
      console.log("toggle change");
      await browser.pause(1000);
  });

  it('Add Date Time',async()=>{
      await wizardFunctions.addDateTime();
      await browser.pause(1000);
      await wizardFunctions.nextButtonClick();
  });

  it('Add time stamp',async()=>{
      await wizardFunctions.addTimeStamp();
      await browser.pause(1000);
      await wizardFunctions.nextButtonClick();
  });

  it('Counter',async()=>{
      await wizardFunctions.counter();
      await browser.pause(1000);
      await wizardFunctions.nextButtonClick();
  });

  it('Add photo',async()=>{
      await wizardFunctions.addPhoto();
      await browser.pause(1000);
      await wizardFunctions.nextButtonClick();
  });

  it('Add GPS location',async()=>{
      await wizardFunctions.GPSLocation();
      await browser.pause(1000);
      await wizardFunctions.nextButtonClick();
  });

  it('Add child record',async()=>{
      await browser.pause(1000);
      // await wizardFunctions.addChildForm();
      // await browser.pause(1000);
      // await wizardFunctions.wizardMode();
      await browser.pause(1000);
      await wizardFunctions.clickFirstWizard();
      await wizardFunctions.addDateTime();
      await browser.pause(1000);
      await wizardFunctions.nextButtonClick();

      await wizardFunctions.nextButtonClick();
      await browser.pause(1000);

      await wizardFunctions.addTimeStamp();
      await browser.pause(1000);
      await wizardFunctions.nextButtonClick();

      await wizardFunctions.counter();
      await browser.pause(1000);
      await wizardFunctions.nextButtonClick();

      await browser.pause(2000);
      await wizardFunctions.saveChildForm();
      await browser.pause(1000);

      await wizardFunctions.nextButtonClick();




  });




  it('Save and submit form', async () => {
      await browser.pause(2000);
      await wizardFunctions.saveForm();
      await browser.pause(10000);
  });

  afterEach(async function () {
      if (this.currentTest.state === 'failed') {
          await browser.takeScreenshot(); // Take screenshot on test failure
      }
  });
  
     
  //     
  //     

     

  //     // await wizardFunctions.addPhoto();
  //     // await browser.pause(500);
      

  //     // await wizardFunctions.stopWatch();
  //     // await wizardFunctions.nextButtonClick();
  //     // await browser.pause(5000);
      
  //     // await wizardFunctions.nextButtonClick();
      
     
  

    

      
      
      

  //     // await wizardFunctions.stopWatch();
  //     // await browser.pause(1000);
  //     // await wizardFunctions.nextButtonClick();

      



  //     await browser.pause(2000);
  //     await wizardFunctions.saveForm();
  //     await browser.pause(1000);
      


     
  // });
});
