/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import * as noUiSlider from 'nouislider';
import SortType from "../intefaces/enum";
import { prod } from "../../index";
import PRODUCT from "../../../server/product";
import IProduct from "../intefaces/IProduct";

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

export const search = document.querySelector('.input-search') as HTMLInputElement;
search.addEventListener('change', () => {
  const data = PRODUCT;
  const searchData = data.filter(el => el.title.toLowerCase().includes(search.value.toLowerCase()));
  (document.querySelector('.cards') as HTMLDivElement).innerHTML = ''

  prod.render(searchData)

  prod.dataProd = PRODUCT;
  const inputColor = document.querySelectorAll('input');
  inputColor.forEach(el => { el.checked = true });

});

export const colorCheckboxes = document.querySelectorAll('.color-checkbox') as NodeListOf<HTMLInputElement>;
colorCheckboxes.forEach(el => {
  el.addEventListener('change', () => {
    if (!el.checked) {
      localStorage.setItem(el.id, el.id)
    } else {
      localStorage.removeItem(el.id)
    }
    onChangeColor()
    checkLastSort()

  })
});
export const onChangeColor = () => {
  (document.querySelector('.cards') as HTMLDivElement).innerHTML = '';
  let newData = filteres(PRODUCT, colorCheckboxes)
  newData = filterCategory(newData, categoryCheckboxes)
  prod.render(newData)
  if (newData.length === 0) {
    prod.notFound();
  }
  prod.dataProd = newData;
  localStorage.setItem('newData', JSON.stringify(newData))
}

export const categoryCheckboxes = document.querySelectorAll('.category-checkbox') as NodeListOf<HTMLInputElement>;
categoryCheckboxes.forEach(el => {
  el.addEventListener('change', () => {
    if (!el.checked) {
      localStorage.setItem(el.id, el.id)
    } else {
      localStorage.removeItem(el.id)
    }

    (document.querySelector('.cards') as HTMLDivElement).innerHTML = ''
    let newData = filterCategory(PRODUCT, categoryCheckboxes);
    newData = filterYear(newData, yearCheckboxes);
    newData = filteres(newData, colorCheckboxes)
    prod.render(newData)

    if (newData.length === 0) {
      prod.notFound()
    }
    prod.dataProd = newData;
    localStorage.setItem('newData', JSON.stringify(newData))
    checkLastSort()
  })
});

export const yearCheckboxes = document.querySelectorAll('.year-checkbox') as NodeListOf<HTMLInputElement>;
yearCheckboxes.forEach(el => {
  el.addEventListener('change', () => {
    if (!el.checked) {
      localStorage.setItem(el.id, el.id)
    } else {
      localStorage.removeItem(el.id)
    }

    (document.querySelector('.cards') as HTMLDivElement).innerHTML = '';
    let newData = filterYear(PRODUCT, yearCheckboxes)
    newData = filterCategory(newData, categoryCheckboxes)
    newData = filteres(newData, colorCheckboxes)
    prod.render(newData)

    if (newData.length === 0) {
      prod.notFound()
    }
    prod.dataProd = newData;
    localStorage.setItem('newData', JSON.stringify(newData))
    checkLastSort()
  })
});

export function check(type: NodeListOf<HTMLInputElement>) {
  const ideas: Array<string> = []
  for (let i = 0; i < type.length; i+=1) {
    if (type[i].checked === true) {
      ideas.push(type[i].id)
    }
  } return ideas;
}

export function filteres(data: IProduct[], type: NodeListOf<HTMLInputElement>) {
  const dfg = check(type);
  const newData: IProduct[] = [];
  for (let i = 0; i < data.length; i+=1) {
    for (let j = 0; j < dfg.length; j+=1) {
      if (dfg[j] === data[i].color) {
        if (!newData.includes(data[i]))
          newData.push(data[i])

      }
    }
  }
  return newData
}

export function filterCategory(data: IProduct[], type: NodeListOf<HTMLInputElement>) {
  const dfg = check(type);
  const newData: IProduct[] = [];
  for (let i = 0; i < data.length; i+=1) {
    for (let j = 0; j < dfg.length; j+=1) {
      if (dfg[j] === data[i].category) {
        if (!newData.includes(data[i]))
          newData.push(data[i])
      }
    }
  }
  return newData
}

export function filterYear(data: IProduct[], type: NodeListOf<HTMLInputElement>) {
  const dfg = check(type);
  const newData: IProduct[] = [];
  for (let i = 0; i < data.length; i+=1) {
    for (let j = 0; j < dfg.length; j+=1) {
      if (dfg[j] === data[i].release.toString()) {
        if (!newData.includes(data[i]))
          newData.push(data[i])
      }
    }
  }
  return newData
}

export default checkLastSort;