const assert = require('assert');
const wizardFunctions = require('./wizard_mobileFunctions');

describe('Axonator application', () => {

  it('App open and login', async () => {
    try{
      await browser.pause(5000);
      await wizardFunctions.login("yash_axo_test@axonator.com", "Welcome@12345");
    }
    catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
  });

  it('Open Form', async () => {
    try{
      await browser.pause(5000);
      await wizardFunctions.openForm();
      await wizardFunctions.addRecord();
      await wizardFunctions.wizardMode();
    }
    catch (error) {
        console.error("Open form failed:", error);
        throw error;
    }
  });

  it('Add text box', async () => {
      try {
          await wizardFunctions.addText("sample_test1");
          await wizardFunctions.nextButtonClick();
          await browser.pause(1000);
      } catch (error) {
          console.error("Add text box step failed:", error);
          throw error;
      }
  });

  it('Select choice list', async () => {
      try {
          await wizardFunctions.selectChoiceList();
          console.log("choicelist");
          await browser.pause(1000);
      } catch (error) {
          console.error("Select choice list step failed:", error);
          throw error;
      }
  });

  it('Toggle Change', async () => {
      try {
          await wizardFunctions.toggleChange();
          console.log("toggle change");
          await browser.pause(1000);
      } catch (error) {
          console.error("Toggle Change step failed:", error);
          throw error;
      }
  });

  it('Add Date Time', async () => {
      try {
          await wizardFunctions.addDateTime();
          await browser.pause(1000);
          await wizardFunctions.nextButtonClick();
      } catch (error) {
          console.error("Add Date Time step failed:", error);
          throw error;
      }
  });

  it('Add time stamp', async () => {
      try {
          await wizardFunctions.addTimeStamp();
          await browser.pause(1000);
          await wizardFunctions.nextButtonClick();
      } catch (error) {
          console.error("Add time stamp step failed:", error);
          throw error;
      }
  });

  it('Counter', async () => {
      try {
          await wizardFunctions.counter();
          await browser.pause(1000);
          await wizardFunctions.nextButtonClick();
      } catch (error) {
          console.error("Counter step failed:", error);
          throw error;
      }
  });

  it('Add photo', async () => {
      try {
          await wizardFunctions.addPhoto();
          await browser.pause(1000);
          await wizardFunctions.nextButtonClick();
      } catch (error) {
          console.error("Add photo step failed:", error);
          throw error;
      }
  });

  it('Add GPS location', async () => {
      try {
          await wizardFunctions.GPSLocation();
          await browser.pause(1000);
          await wizardFunctions.nextButtonClick();
      } catch (error) {
          console.error("Add GPS location step failed:", error);
          throw error;
      }
  });

  it('Add child record', async () => {
      try {
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
      } catch (error) {
          console.error("Add child record step failed:", error);
          throw error;
      }
  });

  it('Save and submit form', async () => {
    try{
      await browser.pause(2000);
      await wizardFunctions.saveForm();
      await browser.pause(10000);
    }
    catch (error) {
        console.error("Save form step failed:", error);
        throw error;
    }

  });

  afterEach(async function () {
      if (this.currentTest.state === 'failed') {
          await browser.takeScreenshot(); // Take screenshot on test failure
      }
  });
  
});
