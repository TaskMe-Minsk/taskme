package controllers

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import model.Task
import play.api.mvc._
import task.{StubTaskRepository, TaskRepository}

/**
 * @author Ivan Zhamoidzin
 */
object TaskController extends Controller {
  val taskRepo: TaskRepository = new StubTaskRepository()
  val gson = new Gson()

  def getTaskById(id: String) = Action {
    taskRepo.getTaskById(id).map( t =>
      Ok(gson.toJson(t))
    ).getOrElse(
      NotFound
    )
  }

  def submitNewTask() = Action { request =>
    request.body.asJson.map( bodyJsVal => {
      val taskString = bodyJsVal.toString()
      val newTask: Task = gson.fromJson(taskString, classOf[Task])
      val createdId = taskRepo.createNewTask(newTask)
      Created("").withHeaders(("Location", s"/task/$createdId"))
    }).getOrElse(
      BadRequest("There is no task entity in the request body")
    )
  }
}