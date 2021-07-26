import Sequelize from "sequelize";
import db from "../database/db";

const Op = Sequelize.Op;
const User = db.User;

const GET = {
  // returns all users
  findAll: async (req, res) => {
    console.log(User);
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  // returns 1 user based on the id provided
  find: async (req, res) => {
    const { id } = req.query;

    try {
      const user = await User.findById(id);
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  },

  // returns users based on criteria
  filter: async (req, res) => {
    try {
      const users = await User.findAll({
        where: {
          name: {
            [Op.like]: "y%",
          },
        },
      });
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  },
};

const POST = {
  createUser: async () => {
    const newUser = req.body.user;

    try {
      await User.create({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      });
      res.send("success");
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  },
};

const PUT = {
  updateUser: async (req, res) => {
    const { name, password, id } = req.body;

    try {
      await User.update({ name, password }, { where: { id } });
      res.send("success");
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  },
};

const DEL = {
  deleteUser: async (req, res) => {
    const { id } = req.query;

    try {
      await User.destroy({
        where: { id },
      });
    } catch (error) {
      console.error(error);
      res.status(404).send(error);
    }
  },
};

export default {
  GET,
  POST,
  PUT,
  DEL,
};
