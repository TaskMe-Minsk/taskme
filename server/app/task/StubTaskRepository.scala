package task

import java.util.UUID

import model._

/**
 * @author Ivan Zhamoidzin
 */
class StubTaskRepository extends TaskRepository {
  var tasks = Map[String, Task]()
  
  override def getTaskById(id: String): Option[Task] = {
    Option(
      tasks.getOrElse(id,
        {
          // default value if there is no task by the id specified
          val originator = Originator("405", "Luke Skywalker", "http://www.masterskywalker.net/wp-content/uploads/2014/01/luke_anh2.jpg")
          val category = Category("1", "Smuggling")
          val location = Location("Space cantina", 25.7435F, -19.0324F)
          val dateTime = DateTime("04-05-2016", "7:00", "7:15")

          Task(id,
            System.currentTimeMillis(),
            System.currentTimeMillis(),
            originator,
            category,
            "Escape Tatooine",
            "Looking for an exceptional band with a really fast ship to help me leave this planet anonymously",
            location,
            dateTime
          )
        }
      )
    )
  }

  override def createNewTask(task: Task): String = {
    val newId = UUID.randomUUID().toString
    tasks += newId -> task
    newId
  }
}
