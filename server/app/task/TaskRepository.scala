package task

import model.Task

/**
 * @author Ivan Zhamoidzin
 */
trait TaskRepository {
  def getTaskById(id: String): Option[Task]
  def createNewTask(task: Task): String
}
