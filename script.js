"use strict";
const views = document.querySelector(".first-box-headline");
const price = document.querySelector(".range-input");
const priceLabel = document.querySelector(".first-box-pricing-card-price");
const period = document.querySelector(".first-box-pricing-card-month");
const checkbox = document.querySelector("#billing-freq");
const pricingSlider = document.querySelector(".container__pricing--slider");
let isyearlyBilling = false;

checkbox.addEventListener("input", checkBillingPeriod);

pricingSlider.addEventListener("input", priceRange);

function checkBillingPeriod() {
  let priceValue = price.value;

  if (checkbox.checked) {
    isyearlyBilling = true;
    period.innerHTML = "/year";
    priceValue = priceValue * 12 * 0.75;
  } else {
    isyearlyBilling = false;
    period.innerHTML = "/month";
  }

  priceLabel.innerHTML = ` $ ${priceValue}.00`;
}

function priceRange() {
  let priceValue = price.value;
  priceLabel.innerHTML = ` $ ${priceValue}.00`;

  if (isyearlyBilling) {
    yearlyPriceValue(priceValue);
  }
  monthlyPriceValue(priceValue);
  fillLower();
}
function monthlyPriceValue(priceValue) {
  switch (priceValue) {
    case "8":
      views.innerHTML = "10K PAGEVIEWS";
      break;
    case "12":
      views.innerHTML = "50K PAGEVIEWS";
      break;
    case "16":
      views.innerHTML = "100K PAGEVIEWS";
      break;
    case "20":
      views.innerHTML = "500K PAGEVIEWS";
      break;
    case "24":
      views.innerHTML = "1M PAGEVIEWS";
      break;
  }
}

function yearlyPriceValue(priceValue) {
  priceValue = priceValue * 12 * 0.75;
  priceLabel.innerHTML = ` $ ${priceValue}.00`;
}
function fillLower() {
  let fillLower = ((price.value - price.min) / (price.max - price.min)) * 100;

  price.style.background = `linear-gradient(to right, 
        hsl(174, 77%, 80%) 0%, 
        hsl(174, 77%, 80%) ${fillLower}%, 
        hsl(224, 65%, 95%) ${fillLower}%, 
        hsl(224, 65%, 95%) 100%)`;
}
