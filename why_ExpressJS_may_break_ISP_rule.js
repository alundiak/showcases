// ChatGPT:

// Regular ExpressJS logic
function myMiddleware(req, res, next) {
  // Middleware logic here
  next();
}
app.use(myMiddleware);

//
// a hypothetical scenario where a third-party middleware expects a different set of parameters, violating the ISP
//
function hypotheticalMiddleware(req, res, next, additionalParam) {
  // Middleware logic using additionalParam
  next();
}
app.use(hypotheticalMiddleware);
