"use strict";

var _require = require("express"),
  Router = _require.Router;
var _require2 = require("../controllers/tasks.controllers.js"),
  createTask = _require2.createTask,
  deleteTask = _require2.deleteTask,
  renderTasks = _require2.renderTasks,
  goTable = _require2.goTable,
  taskToggleDone = _require2.taskToggleDone,
  taskTogglePedidos = _require2.taskTogglePedidos,
  renderTaskEdit = _require2.renderTaskEdit,
  editTask = _require2.editTask,
  renderAddCommentPedido = _require2.renderAddCommentPedido,
  editAddCommentPedido = _require2.editAddCommentPedido,
  renderToReadCommentPedido = _require2.renderToReadCommentPedido,
  statusCommentPedido = _require2.statusCommentPedido,
  goToContacto = _require2.goToContacto;
var router = Router();

// Render all tasks
router.get("/", renderTasks);
router.get("/:idPage/goTable", goTable);
router.post("/tasks/add", createTask);
router.post("/tasks/:id/toggleDone", taskToggleDone);
router.post("/tasks/:id/togglePedidos", taskTogglePedidos);
router.get("/tasks/:id/edit", renderTaskEdit);
router.post("/tasks/:id/edit", editTask);
router.get("/tasks/:id/addCommentPedido", renderAddCommentPedido);
router.post("/tasks/:id/addCommentPedido", editAddCommentPedido);
router.get("/tasks/:id/readComment", renderToReadCommentPedido);
router.post("/tasks/:id/statusComment", statusCommentPedido);
router.get("/tasks/:id/delete", deleteTask);
router.get("/tasks/contacto", goToContacto);
module.exports = router;