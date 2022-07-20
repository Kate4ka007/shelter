import SortType from "../interfaces/enum";
import { prod } from "../../index";

const checkLastSort = (): void => {
  if (localStorage.getItem('sorting')) {
    const loc = localStorage.getItem('sorting')
    if (loc === SortType.PriceMin) {
      prod.sortProducts(SortType.PriceMin)
    } else if (loc === SortType.PriceMax) {
      prod.sortProducts(SortType.PriceMax)
    } else if (loc === SortType.Rating) {
      prod.sortProducts(SortType.Rating)
    } else if (loc === SortType.RatingDown) {
      prod.sortProducts(SortType.RatingDown)
    } else if (loc === SortType.TitleUp) {
      prod.sortProducts(SortType.TitleUp)
    } else if (loc === SortType.TitleDown) {
      prod.sortProducts(SortType.TitleDown)
    }
  }
}

export default checkLastSort;