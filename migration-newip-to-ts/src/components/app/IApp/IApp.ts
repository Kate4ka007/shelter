import AppController from "../../controller/controller";
import AppView from "../../view/appView";

interface IApp {
  controller: AppController;
  view: AppView;
  start(): void;
}

export default IApp;