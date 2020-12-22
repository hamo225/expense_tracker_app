const balance = document.getElementById("balance");
const incomeplus = document.getElementById("money-plus");
const expenseminus = document.getElementById("money-minus");
const listItem = document.getElementById("list");
const form = document.getElementById("form");
const newItemText = document.getElementById("text");
const newItemAmount = document.getElementById("amount");
const addBtn = document.getElementById("btn");

// temprary transactions to test functionality
const dummyTransaction = [
  { id: 1, text: "Flowers", amount: -25 },
  { id: 2, text: "Cash", amount: 20 },
  { id: 3, text: "Chai Latte", amount: -4 },
  { id: 4, text: "Rent", amount: -1020 },
  { id: 5, text: "Salary", amount: -3600 },
  { id: 5, text: "Sale", amount: 5000 },
];

// global state for transactions as they are now testing
let transactions = dummyTransaction;

// Function to Add transactions to the DOM
function addTransactionDom(transaction) {
  // Get the sign if minus or plus/using ternary operator
  const sign = transaction.amount < 0 ? "-" : "+";
  // Create an item for the transaction
  const item = document.createElement("li");
  // add new class based on value to the new item variable
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");
  item.innerHTML = `${transaction.text} 
  <span>${sign}${Math.abs(transaction.amount)}
  </span$> <button class="delete-btn">x</button>`;
  // add the transactions to the list
  list.appendChild(item);
}

// Amend the Balance,Income, Expense
function updateValues(transaction) {
  // get the amounts - create an array of the amounts
  const amounts = transactions.map((transaction) => transaction.amount);
  console.log(amounts);
  // total the amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log(total);

  // Get the Income
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  console.log(income);

  // Getting the expense
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2); //multiply by - so it appears positive removes the -
  console.log(expense);

  // display in the Balance, Icome, Expense in the DOM
  balance.innerText = `$${total}`;
  incomeplus.innerText = `$${income}`;
  expenseminus.innerText = `$${expense}`;
}

// Init App - create an initalising app
function init() {
  // list is reset to 0 and cleared
  list.innerHTML = "";
  // then use a forEach to loop through the transactions data array and apply the addTransactions function to each one. Adding each one to the list.
  transactions.forEach(addTransactionDom);
  updateValues();
}
init();
