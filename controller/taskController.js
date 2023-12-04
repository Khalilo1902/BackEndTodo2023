import Task from "../model/task.js";

export const getAllTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

export const createTask = async (req, res) => {
  try {
    const { _id, name } = req.body;
    const task = Task.create({
      _id,
      name,
    });
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.deleteOne(
      { _id: req.params._id },
      { $set: req.body }
    );
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.updateOne(
      { _id: req.params._id },
      { $set: req.body }
    );
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};
