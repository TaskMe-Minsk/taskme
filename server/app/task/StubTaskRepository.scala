package task

import java.util.UUID

import model._

/**
 * @author Ivan Zhamoidzin
 */
class StubTaskRepository extends TaskRepository {
  var tasks = Map[String, Task]()

  val defaultOriginator = Originator("405", "Luke Skywalker", "http://www.masterskywalker.net/wp-content/uploads/2014/01/luke_anh2.jpg")
  val defaultCategory = CategoryPreview("1", "Smuggling")
  val defaultLocation = Location("Space cantina", 25.7435F, -19.0324F)
  val defaultDateTime = DateTime("04-05-2016", "7:00", "7:15")
  val defaultTask = Task( "default",
    System.currentTimeMillis(),
    System.currentTimeMillis(),
    defaultOriginator,
    defaultCategory,
    TaskStatus.Draft,
    "Escape Tatooine",
    "Looking for an exceptional band with a really fast ship to help me leave this planet anonymously",
    defaultLocation,
    defaultDateTime
  )
  
  override def getTaskById(id: String): Option[Task] = {
    Option(
      tasks.getOrElse(id,
        {
          // default value if there is no task by the id specified
          defaultTask.copy(id)
        }
      )
    )
  }

  override def createNewTask(task: Task): String = {
    // todo check category in service
    task.category
    val newId = UUID.randomUUID().toString
    tasks += newId -> task.copy(id = newId, originator = defaultOriginator)
    newId
  }

  override def getAllTasks: List[Task] = {
    tasks.values.toList.sortBy(_.updated)
  }

  override def getTasks(categoryId: String): List[Task] = {
    tasks.values.toList.filter(categoryId equals _.category.id).sortBy(_.updated)
  }

  override def editTask(updatedTask: Task): Option[String] = {
    tasks.get(updatedTask.id).map(t => {
      tasks += t.id -> t.copy(
        updated = System.currentTimeMillis(),
        title = updatedTask.title,
        details = updatedTask.details,
        location = updatedTask.location,
        dateTime = updatedTask.dateTime,
        category = updatedTask.category
      )
      t.id
    })
  }

  override def deleteTask(taskId: String): Option[Task] = {
    val taskById = tasks.get(taskId)
    taskById.foreach(t => tasks = tasks - taskId)
    taskById
  }

  override def changeTaskStatus(id: String, status: TaskStatus): Option[Task] = {
    tasks.get(id).map(t => {
      val updatedTask = t.copy(status = status, updated = System.currentTimeMillis())
      tasks += t.id -> updatedTask
      updatedTask
    })
  }
}
