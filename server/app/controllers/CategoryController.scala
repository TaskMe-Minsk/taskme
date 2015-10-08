package controllers

import play.api.mvc.{Action, Controller}

/**
 * @author Ivan Zhamoidzin
 */
object CategoryController extends Controller {
  def getListOfAllCategories = Action {
    Ok
  }
}
