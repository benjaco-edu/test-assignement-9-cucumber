const chai = require('chai');
var expect = chai.expect;
const { Given, When, Then } = require('cucumber');
const Discount = require("./../../src/Discount");

let units, cashOnDelivery, wholesale, discount;

Given('{int} of units', function (int) {
    units = int;
});

Given(/^cash ([A-Za-z\-]+) delivery$/, function (when) {
    cashOnDelivery = when === "on"
});

Given('company type is wholesale', function () {
    wholesale = true;
});
Given('company type is not wholesale', function () {
    wholesale = false;
});


When('discount is calculated', function () {
    discount = Discount.getDiscount(units, cashOnDelivery, wholesale);
});

Then('discount is {int}', function (int) {
    // Write code here that turns the phrase above into concrete actions
    expect(discount).to.equal(int);
});
