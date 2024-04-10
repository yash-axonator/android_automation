const { readLocatorsFromXML } = require('./xpathReader');
const { AppiumBy } = require('appium');


const path = require('path');

// Function to read locators from XML
const filePath = path.resolve(__dirname, 'wizard_xpath.xml');
const locators = readLocatorsFromXML(filePath);

async function login(username, password) {
    await browser.pause(5000); 

    const usernameInput = await $(locators.usernameInput);
    await usernameInput.setValue(username);

    const passwordInput = await $(locators.passwordInput);
    await passwordInput.setValue(password);

    const loginButton = await $(locators.loginButton);
    loginButton.click();

    await browser.pause(5000);
    
    const mapPermission = await $(locators.allowPermission);
    mapPermission.click();
    await browser.pause(1000);
}

async function openApp() {
    

    const openAppButton = await $(locators.openApp);
    try {
        await browser.findElement(openAppButton);
        openAppButton.click();
      } 
    catch (error) {
        if (error.name === 'NoSuchElementError') {
          console.log(`Element with locator '${openAppButton}' not found. Skipping step.`);
          
        } 
    }
    await browser.pause(5000);
    console.log("app opened");
}

async function openForm() {
    const openFormButton = await $(locators.openForm);
    openFormButton.click();
    await browser.pause(5000);
    console.log("form opened");
}

async function addRecord(){
    const addRecordButton = await $(locators.addRecord);
    addRecordButton.click();
    await browser.pause(10000);

    const mediaPermission = await $(locators.allowPermission);
    mediaPermission.click();
    await browser.pause(1000);

    const musicPermission = await $(locators.musicPermission);
    musicPermission.click();
    await browser.pause(1000);

    musicPermission .click();
    await browser.pause(1000);

    console.log("add record");


}

async function addText(text)
{
    await browser.pause(1000);
    const tapHere = await $(locators.tapHere);
    tapHere.click();
    await browser.pause(1000);
    const enterResponse = await $(locators.enterResponse);
    enterResponse.setValue(text);
    await browser.pause(1000);
    // await browser.execute('mobile: performEditorAction', { action: 'done' });
    // await browser.execute('mobile: pressKey', { keycode: 66 }); // 66 is the key code for 'ENTER'/'DONE'
    // await browser.pause(1000);
    // const nextButtonClick= await $(locators.nextButton);
    // nextButtonClick.click();

    


}

async function selectChoiceList()
{
    await browser.pause(1000);
    const choiceOption = await $(locators.choiceList);
    choiceOption.click();


}

async function addPhoto()
{
    await browser.pause(1000);
    const capturePhoto = await $(locators.cameraButton);
    capturePhoto.click();

    await browser.pause(1000);

    const captureButton = await $(locators.capturePhoto);
    captureButton.click();

    await browser.pause(1000);

}

async function stopWatch()
{
    await browser.pause(500);
    const stopWatchStart = await $(locators.stopWatchStart);
    stopWatchStart.click();
   
    await browser.pause(1000);
    const stopWatchStop = await $(locators.stopWatchStop);
    stopWatchStop.click();
    
    
}

async function toggleChange()
{
   


    const toggle = await $(locators.toggle);
    // await driver.executeScript("mobile:scroll", [{ direction: 'down', element: toggle.selector }]);
    toggle.click();
}

async function addDateTime()
{
    await browser.pause(500);

    const date = await $(locators.date);
    date.click();

}

async function addTimeStamp()
{
    
    await browser.pause(1000);

    const timeStampTap = await $(locators.timeStampTap);
    timeStampTap.click();




}

async function counter(){
    await browser.pause(1000);
    const counterInc = await $(locators.counterInc);
    counterInc.click();
    counterInc.click();
    await browser.pause(1000);
}

async function GPSLocation()
{
    const tapToLocate = await $(locators.tapToLocate);
    tapToLocate.click();

    await browser.pause(5000);

    const setLocation = await $(locators.setLocation);
    setLocation.click();
}

async function addChildForm()
{
    const addChildForm = await $(locators.addChildForm);
    addChildForm.click();
}

async function clickFirstWizard()
{
    const wizard = await $(locators.childFormWizard);
    wizard.click();
}
async function wizardMode()
{
    const settingsButton = await $(locators.settings);
    settingsButton.click();
    await browser.pause(1000);
    const disableInline = await $(locators.disableInline);
    disableInline.click();
}

async function nextButtonClick()
{
    const nextButton = await $(locators.nextButton);
    nextButton.click();
    // try {
    //     // await browser.findElement(nextButton);
    //     nextButton.click();
    //   } 
    // catch (error) {
    //     if (error.name === 'NoSuchElementError') {
    //       console.log(`Element with locator '${openAppButton}' not found. Skipping step.`);
          
    //     } 
    // }
}


async function saveForm()
{
    // await browser.pause(1000);
    const back = await $(locators.back);
    back.click();
    console.log("back button clicked");

    await browser.pause(1000);
    const saveButton =  await $(locators.saveButton);
    saveButton.click();
    console.log("save button clicked");

    await browser.pause(1000);

    const submitForm = await $(locators.submitForm);
    submitForm.click();
    console.log("submit form");
    // await browser.pause(1000);

}

async function saveChildForm()
{
    await browser.pause(1000);
    const back = await $(locators.back);
    back.click();
    console.log("back button clicked");

    await browser.pause(1000);
    const saveButton =  await $(locators.saveButton);
    saveButton.click();
    console.log("save button clicked");

    await browser.pause(1000);

    // const submitForm = await $(locators.submitForm);
    // submitForm.click();
    // console.log("submit form");
    // await browser.pause(1000);

}

async function scrollDown(element) {
    await browser.pause(5000);
    await browser.executeScript('mobile:scroll', [ // Pass options as an array
    {
        strategy: 'class name',
        selector: 'android.widget.FrameLayout',
        direction: 'down'
    }
]);
  }

module.exports = {
    login,
    openApp,
    openForm,
    addRecord,
    addText,
    selectChoiceList,
    addPhoto,
    stopWatch,
    toggleChange,
    addDateTime,
    addTimeStamp,
    counter,
    GPSLocation,
    addChildForm,
    clickFirstWizard,
    wizardMode,
    nextButtonClick,
    scrollDown,
    saveChildForm,
    saveForm
};