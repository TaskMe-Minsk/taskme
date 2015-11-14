package controllers

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import model.Task
import play.api.mvc
import play.api.mvc._
import task.{StubTaskRepository, TaskRepository}

/**
 * @author Ivan Zhamoidzin
 */
object TaskController extends Controller {
  val taskRepo: TaskRepository = new StubTaskRepository
  val gson = new Gson()

  def getTaskById(id: String) = Action {
    taskRepo.getTaskById(id).map( t =>
      Ok(gson.toJson(t))
    ).getOrElse(
      NotFound
    )
  }

  def submitNewTask = Action { request =>
    request.body.asJson.map( bodyJsVal => {
      val newTask: Task = gson.fromJson(bodyJsVal.toString(), classOf[Task])
      val createdId = taskRepo.createNewTask(newTask)
      Created("").withHeaders(("Location", s"/task/$createdId"))
    }).getOrElse(
      BadRequest("There is no task entity in the request body")
    )
  }

  def allTaskList() = Action {
    Ok(gson.toJson( taskRepo.getAllTasks ))
  }

  def taskList(categoryId: String) = Action {
    Ok(gson.toJson( taskRepo.getAllTasks(categoryId) ))
  }

  def editTask = Action { request =>
    request.body.asJson.map( bodyJsVal => {
      val task: Task = gson.fromJson(bodyJsVal.toString(), classOf[Task])
      taskRepo.editTask(task).fold( NotFound("") ) { id => Ok("") }
    }).getOrElse(
      BadRequest("There is no task entity in the request body")
    )
  }
}