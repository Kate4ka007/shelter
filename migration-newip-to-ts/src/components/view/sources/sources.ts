import './sources.scss';
import { ISources, SourcesItemInt } from '../../intefaces';

class Sources implements ISources {
  draw(data: SourcesItemInt[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

      const sourceItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
      sourceItemName.textContent = item.name;
      const sourceCloneItem = sourceClone.querySelector('.source__item') as HTMLElement;
      sourceCloneItem.setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
