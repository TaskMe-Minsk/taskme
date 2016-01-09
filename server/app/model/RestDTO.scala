package model

/**
 *
 * @author Ivan Zhamoidzin
 */
case class Task(id: String,
                created: Long,
                updated: Long,
                originator: Originator,
                category: CategoryPreview,
                status: TaskStatus,
                title: String,
                details: String,
                location: Location,
                dateTime: DateTime)
  extends Identifiable

/**
 * Represents task originator - person or organization submitted the task
 *
 * @param id - foreign key to originator account itself
 * @param name - originator name, e.g. first name + last name or alias
 * @param userpic - url to user pic preview
 */
case class Originator(id: String, name: String, userpic: String) extends Identifiable

/**
 * Represents category this task belongs to
 *
 * @param id - foreign key to category itself
 * @param name - human readable category name
 */
case class CategoryPreview(id: String, name: String) extends Identifiable

/**
 * Represents the exact place where the task is desired to be done
 *
 * @param text - user prompted text: city, address, any location identifier
 * @param gpsLat - evaluated GPS latitude
 * @param gpsLon - evaluated GPS longitude
*/
case class Location(text: String, gpsLat: Double, gpsLon: Double)

/**
 * Represents particular moment when the task is desired to be done
 *
 * @param date - day definition
 * @param startTime - desired task execution start time
 * @param endTime - desired task execution end time
 */
case class DateTime(date: String, startTime: String, endTime: String)

sealed trait TaskStatus

object TaskStatus {

  /**
    * Task is created but its creation is still not completed. Task is not exposed to potential doers
    */
  case object Draft extends TaskStatus

  /**
    * Task description is complete. It is exposed to potential doers. System is managing to connect clients & doers
    */
  case object Looking4Doer extends TaskStatus

  // TODO negotiate & TODO 2 phase handshake

  /**
    * Contract between client and doer is confirmed by both sides
    * Task can not be changed and is not exposed to other doers anymore
    * System is waiting for expected task execution time (possibly sending notifications about this inevitable moment :)
    */
  case object ContractConfirmed extends TaskStatus

  // TODO fulfilment stages & confirmations

  /**
    * (TERMINAL)
    * Task is done and both sides confirmed it
    */
  case object CompletelyDone extends TaskStatus

  // TODO what about partially done tasks, e.g. Execution confirmed only from one side

  /**
    * (TERMINAL)
    * Task is cancelled at TODO any stage. It can not be changed and is not exposed to potential doers anymore
    */
  case object Cancelled extends TaskStatus

  /**
    * (TERMINAL)
    * Task is expired because of no update from both sides, e.g. nobody confirmed the fulfilment
    * or nobody was hired before expected execution time. System should expire tasks automatically
    * Task can not be changed and is not exposed to potential doers anymore
    */
  case object Expired extends TaskStatus

}