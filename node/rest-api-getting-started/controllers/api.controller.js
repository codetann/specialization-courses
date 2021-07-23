import fs from "fs";

const FILE_NAME = "./data/pies.json";

const controller = {
  get: (req, res) => {
    fs.readFile(FILE_NAME, (err, data) => {
      if (err) res.status(400).send("Error: could not find pies");
      if (!err) res.status(200).send(JSON.parse(data));
    });
  },

  getById: (req, res) => {
    const id = +req.params.id;

    fs.readFile(FILE_NAME, (err, data) => {
      const pie = JSON.parse(data).find((p) => p.id === id);

      if (err) res.status(400).send("Error: could not parse data");

      if (!pies) res.status(400).send("Error: could not find pie by id");
      if (pie) res.status(200).send(pie);
    });
  },

  search: (req, res) => {
    fs.readFile(FILE_NAME, (err, data) => {
      const obj = {
        name: req.query.name,
      };
      let pies = JSON.parse(data);

      // if(obj) res.status(200).send(pies.filter((p) => (obj.id ? p.id === obj.id : true) && (obj.name ? p.name.toLowerCase().indedOf(obj.name.toLowerCase()) >= 0: true)))

      if (obj)
        res
          .status(200)
          .send(
            pies.filter((p) =>
              p.name.toLowerCase().includes(obj.name.toLowerCase())
            )
          );
    });
  },
};

export default controller;
