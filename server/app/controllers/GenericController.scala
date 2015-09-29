package controllers

import play.api.mvc._

/**
 * @author Ivan Zhamoidzin
 */
object GenericController extends Controller {

  def about = Action {
    Ok("Super-duper service is coming!")
  }
}
