function SignUpValidation(values) {
  let error = {};
  const email_Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_Pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (values.name === "") {
    error.name = "Mora imati par slova";
  } else {
    error.name = "ok je";
  }

  if (values.email === "") {
    error.email = "Name should not be empty";
  } else if (!email_Pattern.test(values)) {
    error.email = "Email does not match";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    error.password = "Password cant be 0 words";
  } else if (!password_Pattern.test(values)) {
    error.password = "Password don't match";
  } else {
    error.password = "";
  }
  return error;
}
export default SignUpValidation;
