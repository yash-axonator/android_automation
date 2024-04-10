const fs = require('fs');
const xml = require('xml-js');

function readLocatorsFromXML(fileName) {
    const locatorData = fs.readFileSync(fileName, 'utf8');
    const locators = xml.xml2js(locatorData, { compact: true }).locators;
    return locators.locator.reduce((acc, curr) => {
        acc[curr._attributes.id] = curr._text;
        return acc;
    }, {});
}

module.exports = { readLocatorsFromXML };