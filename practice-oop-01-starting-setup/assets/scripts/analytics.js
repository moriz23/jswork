const intervalId = setInterval(() => {
  console.log('Sending analytics data...');
}, 2000);

document.getElementById('analytics').addEventListener('click', () => {
  clearInterval(intervalId);
});
