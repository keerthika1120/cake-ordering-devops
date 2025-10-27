document.getElementById('cakeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const cake = document.getElementById('cake').value;
  const qty = document.getElementById('quantity').value;
  document.getElementById('output').innerText = `🎉 Thank you, ${name}! Your order for ${qty} ${cake}(s) has been placed.`;
});
