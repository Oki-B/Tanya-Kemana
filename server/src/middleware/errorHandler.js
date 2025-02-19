function errorHandler(err, req, res, next) {
  let status = 500;
  let message = "Internal server error";

  switch (err.name) {
    case "ValidationError":
      status = 400;
      message = Object.values(err.errors).map((val) => val.message)[0];
      break;

    case "MongooseError":
      if (err.cause.code === 11000) {
        status = 400;
        const field = Object.keys(err.cause.keyValue);
        message = field + " already exists";
      }
      break;

    case "EmailRequired":
      status = 400;
      message = "Email is required";
      break;

    case "PasswordRequired":
      status = 400;
      message = "Password is required";
      break;

    case "InvalidInput":
      status = 400;
      message = "Invalid email or password";
      break;
  }

  res.status(status).json({ message });
}

module.exports = { errorHandler };
