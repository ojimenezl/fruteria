const Task = require("../model/Task.js");
const Comment = require("../model/Comment.js");

exports.renderTasks = async (req, res) => {
  try {
    const tasks = await Task.find().lean();
    res.render("menuInit", {
      tasks,
    });
  } catch (error) {
    console.log({ error });
    return res.render("error", { errorMessage: error.message });
  }
};

exports.goTable = async (req, res) => {
  let { idPage } = req.params;
  if(idPage=="1"){
      try {
        const tasks = await Task.find().lean();
        res.render("index", {
          tasks,
        });
      } catch (error) {
        console.log({ error });
        return res.render("error", { errorMessage: error.message });
      }
  }
  if(idPage=="2"){
    try {
      const tasks = await Task.find().lean();
      res.render("indexCocina", {
        tasks,
      });
    } catch (error) {
      console.log({ error });
      return res.render("error", { errorMessage: error.message });
    }
}
};

exports.createTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.redirect("/1/goTable");
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

exports.taskTogglePedidos = async (req, res, next) => {
  try {
    let { id } = req.params;
    const task = await Task.findById(id);
    task.pedido = !task.pedido;
    if(task.pedido){
      task.comentarioPedido = "Pedir"
    }else{
      task.comentarioPedido = ""
    }
    
    console.log("aquii",task);
    console.log(task.pedido);
    
    
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
  res.redirect("/1/goTable");
};

exports.renderAddCommentPedido = async (req, res, next) => {
  const task = await Task.findById(req.params.id).lean();  
  console.log(task);
  res.render("createComment", { task });
};

exports.editAddCommentPedido = async (req, res, next) => {
  const { id } = req.params;
  await Task.updateOne({ _id: id }, req.body);
  await Comment.updateOne({ _id: id }, req.body);
  try {
    let { id } = req.params;
    const task = await Task.findById(id);
    const comment = await Comment.findById(id);
    if(!task.pedido){
      task.pedido = !task.pedido;
    }
    console.log("comentario: ",comment);
    await task.save();
    // await comment.save();
    // res.status(200).send({ message: "Estado del producto actualizado exitosamente" });
    res.redirect("/2/goTable");
 
  } catch (error) {
    console.error("Hubo un error al cambiar el estado del producto:", error);
    res.status(500).send({ error: "Hubo un problema al cambiar el estado del producto" });
  }
};

exports.renderToReadCommentPedido = async (req, res, next) => {
  const task = await Task.findById(req.params.id).lean(); 
  console.log(task);
  res.render("readComment", { task });
};

exports.statusCommentPedido = async (req, res, next) => {
  console.log("estado");
  
  try {
    let { id } = req.params;
    const task = await Task.findById(id);
    await Task.updateOne({ _id: id }, req.body); 
    task.pedido = !task.pedido; 
    if(!task.done){
    task.done = !task.done;    
    }  
    await task.save();
    console.log("200 , comentario pedido cambiado con exito!");
    // res.status(200).send({ message: "Estado del producto actualizado exitosamente" });
    res.redirect("/1/goTable");
  } catch (error) {
    console.error("Hubo un error al cambiar el estado del producto:", error);
    res.status(500).send({ error: "Hubo un problema al cambiar el estado del producto" });
  }
  
};

exports.deleteTask = async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({ _id: id });
  res.redirect("/1/goTable");
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