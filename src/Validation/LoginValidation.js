function LoginValidation(values) {
  let error = {};
  const email_Pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_Pattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (values.email === "") {
    error.email = "ne moze biti prazno";
  } else if (!email_Pattern.test(values.email)) {
    error.email = "Not matching";
  } else {
    error.email = "";
  }
  if (values.password === "") {
    error.password = "ne moze biti prazno";
  } else if (!password_Pattern.test(values.password)) {
    error.password = "Not matching";
  } else {
    error.password = "";
  }
  return error;
}

export default LoginValidation;
