import { CallbackData, NewsDataInt } from "../../intefaces";
import { CallbackType } from "./controllerType";

interface AppControllerInt {
  getSources(callback: CallbackData): void;
  getNews(e: Event, callback: CallbackType<NewsDataInt>): void;
}

export { AppControllerInt };