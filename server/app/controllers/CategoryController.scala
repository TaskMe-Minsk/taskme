package controllers

import category.{StubCategoryRepository, CategoryRepository}
import com.google.gson.Gson
import play.api.mvc.{Action, Controller}

/**
 * @author Ivan Zhamoidzin
 */
object CategoryController extends Controller {
  val catRepo : CategoryRepository = new StubCategoryRepository
  val gson = new Gson()

  def getListOfAllCategories = Action {
    Ok(gson.toJson( catRepo.listAll.toArray ))
  }
}
