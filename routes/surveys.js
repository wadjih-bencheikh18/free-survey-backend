const userRoutes = (app, fs) => {
  const dataPath = "./data/surveys.json";
  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }
      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }

      callback();
    });
  };

  // READ
  app.get("/getSurveys", (req, res) => {
    readFile((data) => {
      res.send(data);
    }, true);
  });
  // CREATE
  app.post("/AddSurvey", (req, res) => {
    readFile((data) => {

        data.push(req.body)
        console.log(data)
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send("new survey added");
      });
    }, true);
  });
  // UPDATE
  app.put("/AddAnswer/:id", (req, res) => {
    readFile((data) => {
      // add the new user
      const Id = Number(req.params["id"]);
      data.find((e) => e.id === Id).answers.push(req.body);

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`Survey id:${Id} answers updated`);
      });
    }, true);
  });
};

module.exports = userRoutes;
