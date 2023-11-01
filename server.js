import express from "express";
import loginRegister from "./API/login-register/Router/login-register.Router.js";
import samples from "./API/sample/Router/samples.router.js";

const app = express();
app.use(express.json());

app.use('/login-register', loginRegister);
app.use('/sample', samples);
// app.use("*", (req, res)=>{
//   res.status(404).json({success: false, message: "Page not found."})
// })

export default app;