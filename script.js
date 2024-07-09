function updateCountdown() {
  const startAmount = 4000.00;
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  
  // Calculate the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Calculate the total number of seconds in the current month
  const totalSecondsInMonth = daysInMonth * 24 * 60 * 60;

  // Calculate the number of seconds that have passed since the start of the month
  const secondsPassed = ((day - 1) * 24 * 60 * 60) + (hour * 60 * 60) + (minute * 60) + second;

  // Calculate the remaining amount
  const remainingAmount = (startAmount - (secondsPassed / totalSecondsInMonth * startAmount)).toFixed(10);

  // Update the DOM elements
  document.getElementById('date').textContent = `${now.toLocaleString('default', { month: 'long' })} ${day}, ${year}`;
  document.getElementById('amount').textContent = `$${remainingAmount}`;

  // Update the countdown every second
  setTimeout(updateCountdown, 1000);
}

// Initialize the countdown
updateCountdown();