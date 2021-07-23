import { v4 as uuid } from "uuid";

let messages = [];

const today = () => {
  const d = new Date();
  const date = d.toDateString();
  const time = d.toTimeString().split(" ")[0];

  return `${date} - ${time}`;
};

const controller = {
  get: (req, res) => {
    res.status(200).send(messages);
  },

  post: (req, res) => {
    const { msg } = req.body;
    const id = uuid();
    const date = today();
    messages.push({ msg, id, date });

    res.status(200).send(messages);
  },

  put: (req, res) => {
    const { id, msg } = req.body;
    messages = messages.map((m) => {
      if (m.id === id) m.msg = msg;
      return m;
    });

    res.status(200).send(messages);
  },

  del: (req, res) => {
    const id = req.params.id;
    messages = messages.filter((m) => m.id !== id);

    res.status(200).send(messages);
  },
};

export default controller;
