const Task = require("../model/Task.js");

exports.renderTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("index", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    return res.render("error", { errorMessage: error.message });
  }
};

exports.taskToggleDone = async (req, res, next) => {
  try {
    let { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.status(200).send({ message: "Estado del producto actualizado exitosamente" });
  } catch (error) {
    console.error("Hubo un error al cambiar el estado del producto:", error);
    res.status(500).send({ error: "Hubo un problema al cambiar el estado del producto" });
  }
};


exports.renderTaskEdit = async (req, res, next) => {
  const task = await Task.findById(req.params.id).lean();
  res.render("edit", { task });
};

exports.editTask = async (req, res, next) => {
  const { id } = req.params;
  await Task.updateOne({ _id: id }, req.body);
  res.redirect("/");
};

exports.deleteTask = async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({ _id: id });
  res.redirect("/");
};

exports.goToContacto = async (req, res, next) => {
  try {
    console.log("aqui");
    res.render("contacto");
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};