const initialAmount = parseFloat(prompt("Enter the initial amount of money:"));
const numberOfYears = parseInt(prompt("Enter the number of years:"));
const annualPercentage = parseFloat(prompt("Enter the percentage of a year:"));

if (
  isNaN(initialAmount) || 
  isNaN(numberOfYears) || 
  isNaN(annualPercentage) || 
  initialAmount < 1000 || 
  numberOfYears < 1 || 
  annualPercentage <= 0 || 
  annualPercentage > 100
) {
  alert("Invalid input data");
} else {
  let totalAmount = initialAmount;
  let totalProfit = 0;

  for (let year = 1; year <= numberOfYears; year++) {
    const yearlyProfit = (totalAmount * annualPercentage) / 100;
    totalProfit += yearlyProfit;
    totalAmount += yearlyProfit;

    console.log(
      `${year} Year\nTotal profit: ${totalProfit.toFixed(2)}\nTotal amount: ${totalAmount.toFixed(2)}`
    );
  }

  alert(
    `Initial amount: ${initialAmount.toFixed(2)}\n` +
    `Number of years: ${numberOfYears}\n` +
    `Percentage of year: ${annualPercentage.toFixed(2)}\n` +
    `Total profit: ${totalProfit.toFixed(2)}\n` +
    `Total amount: ${totalAmount.toFixed(2)}`
  );
}
