function validateEmail(email) {
  const [emailName, domain] = email.split("@");

  if (
    email.includes("@") && // Check if '@' symbol exists
    emailName.length > 0 && // Check if email name exists
    domain && // Check if domain exists
    domain.includes(".") && // Check if domain has a '.' symbol
    domain.split(".").length > 1 // Check if domain extension exists
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = validateEmail;
