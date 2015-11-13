package category

import model.Category

/**
 * @author Ivan Zhamoidzin
 */
trait CategoryRepository {
  def listAll: List[Category]
}
