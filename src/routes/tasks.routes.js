const { Router } = require("express");
const {
  createTask,
  deleteTask,
  renderTasks,
  goTable,
  taskToggleDone,
  taskTogglePedidos,
  renderTaskEdit,
  editTask,
  renderAddCommentPedido,
  editAddCommentPedido,
  renderToReadCommentPedido,
  statusCommentPedido,
  goToContacto,
} = require("../controllers/tasks.controllers.js");

const router = Router();

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

