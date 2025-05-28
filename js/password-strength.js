function addStrengthMeter(inputId, meterId, textId) {
  const passwordInput = document.getElementById(inputId);
  const strengthMeter = document.getElementById(meterId);
  const strengthText = document.getElementById(textId);

  if (!passwordInput) return;

  passwordInput.addEventListener("input", () => {
    const val = passwordInput.value;
    let strength = 0;

    if (val.length >= 8) strength++;
    if (/[A-Z]/.test(val)) strength++;
    if (/[0-9]/.test(val)) strength++;
    if (/[^A-Za-z0-9]/.test(val)) strength++;

    strengthMeter.value = strength;

    const strengthLabels = ["Very Weak", "Weak", "Fair", "Good", "Strong"];
    strengthText.textContent = strengthLabels[strength] || "";
  });
}

// Call for both login and signup fields
addStrengthMeter("signupPassword", "signupStrengthMeter", "signupStrengthText");
addStrengthMeter("loginPassword", "loginStrengthMeter", "loginStrengthText");
