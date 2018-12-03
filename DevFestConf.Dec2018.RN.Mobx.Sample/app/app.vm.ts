import { observable, computed, action } from 'mobx';
import { appStore } from './app.store';
import { Icon } from './core/models';

export class AppVM {

  @observable searchString: string = '';

  @action
  setSearchString(text: string) {
    this.searchString = text;
  }

  @computed
  get appIcons() {
    if (this.searchString) {
      return appStore.icons
        .filter((icon: Icon) => icon.name.toLowerCase().includes(this.searchString.toLowerCase()));
    } else {
      return appStore.icons;
    }
  }

}