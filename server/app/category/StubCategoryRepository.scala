package category

import model.Category

/**
 * @author Ivan Zhamoidzin
 */
class StubCategoryRepository extends CategoryRepository {
  val iconPlaceholder = "http://pmaadvantage.com/wp-content/uploads/2013/09/Icon-Placeholder.png"
  val categories = List(
    Category("1","Курьер",iconPlaceholder),
    Category("2","Дом",iconPlaceholder),
    Category("3","Уборка",iconPlaceholder),
    Category("4","Ассистент",iconPlaceholder),
    Category("5","Сад",iconPlaceholder),
    Category("6","Ремонт",iconPlaceholder),
    Category("7","Другое",iconPlaceholder)
  )
  override def listAll: List[Category] = categories
}
