// Write your solution in this file!
var driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    var newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    var deleteDriver = {...driver};
    delete deleteDriver[key];
    return deleteDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}