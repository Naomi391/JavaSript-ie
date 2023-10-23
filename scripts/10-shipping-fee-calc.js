function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  let cost = Number(inputElement.value);

  if (cost < 40) {
    cost += 10;
    console.log(cost);
  }

  document.querySelector(
    ".js-total-cost"
  ).innerHTML = `Your total cost is: $${cost}`;
}
