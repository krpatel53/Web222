const password = document.getElementById('password');
const meter = document.getElementById('password-strength-meter');
const text = document.getElementById('password-strength-text');

password.addEventListener('input', () => {
  const val = password.value;
  let strength = 0;

  if (val.length > 5) strength++;
  if (val.match(/[a-z]+/)) strength++;
  if (val.match(/[A-Z]+/)) strength++;
  if (val.match(/[0-9]+/)) strength++;
  if (val.match(/[\W]+/)) strength++;

  // Limit to max=4 (same as in <meter>)
  strength = Math.min(strength, 4);
  meter.value = strength;

  const labels = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];
  text.textContent = labels[strength];
});
