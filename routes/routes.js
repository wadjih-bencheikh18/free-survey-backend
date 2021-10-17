
const userRoutes = require('./surveys');

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("welcome to the development api-server");
  });

  userRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;
