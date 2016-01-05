package task

import model.Task

/**
 * @author Ivan Zhamoidzin
 */
trait TaskRepository {
  /**
   * Return full task description by its ID
   */
  def getTaskById(id: String): Option[Task]

  /**
   * Update task info with unique ID, creation time, originator (logged in ) ID and persist it
   */
  def createNewTask(task: Task): String

  /**
   * Get list of all tasks previews ordered by date (created or updated).
   * Newer tasks would be on the top
   */
  def getAllTasks: List[Task]

  /**
   * Get list of tasks previews filtered by category it belongs to &
   * ordered by date (created or updated). Newer tasks would be on the top
   */
  def getTasks(categoryId: String): List[Task]

  def editTask(updatedTask: Task): Option[String]

  def deleteTask(taskId: String): Option[Task]
}
