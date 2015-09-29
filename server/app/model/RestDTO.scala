package model

/**
 *
 * @author Ivan Zhamoidzin
 */
case class Task(id: String,
                created: Long,
                updated: Long,
                originator: Originator,
                category: Category,
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
case class Category(id: String, name: String) extends Identifiable

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