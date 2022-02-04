require('dotenv').config()


const router = require("./router");
const express = require('express')
const app = express()
const cors = require("cors");
const { ErrorHandler } = require('./handler');

const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");


Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());



const port = process.env.APP_PORT

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use("/", router);
app.use(Sentry.Handlers.errorHandler());
app.use(ErrorHandler);

const server = app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`)
})


module.exports = server;