import { createServer } from "http";
import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
// require("dotenv").config();


var app = express();
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

//Handle CORS
const corsOptions = {
	credentials: true,
	origin: true,
	optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));

app .use("/", indexRouter);
app .use("/users", usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json("error");
});

export default app;


const port = process.env.PORT || 4040;
const server = createServer(app);

server.listen(port);
