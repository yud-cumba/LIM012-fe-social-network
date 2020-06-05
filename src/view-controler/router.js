/* eslint-disable consistent-return */

import { components } from '../view/index.js';

const actualView = document.getElementById('actual-view');
const homeView = () => {
  actualView.appendChild(components.home());
  const lateralLeft = actualView.querySelector('.lateral-left');
  const lateralRigth = actualView.querySelector('.lateral-rigth');
  lateralLeft.classList.add('fixed');
  return lateralRigth.classList.add('margin-left');
};
const FormView = () => {
  const appContent = actualView.querySelector('#route-change-content');
  const lateralRigth = actualView.querySelector('.lateral-rigth');
  lateralRigth.classList.add('hide-overflow');
  return appContent.appendChild(components.postform());
};
const changeView = (route) => {
  actualView.innerHTML = '';
  switch (route) {
    case '':
    case '#':
    case '#/login':
    case '#/': {
      return actualView.appendChild(components.login());
    }
    case '#/signup': {
      actualView.appendChild(components.login());
      const mainForm = actualView.querySelector('.form-container');
      mainForm.innerHTML = '';
      return mainForm.appendChild(components.signup());
    }
    case '#/home': {
      return homeView();
    }
    case '#/profile': {
      actualView.appendChild(components.home());
      const coreRail = actualView.querySelector('.core-rail');
      const profileSection = actualView.querySelector('#profile-section');
      profileSection.classList.add('show-element-flex');
      coreRail.innerHTML = '';
      return coreRail.appendChild(components.profile());
    }
    case '#/post-content': {
      homeView();
      return FormView();
    }
    case '#/edit-profile': {
      homeView();
      FormView();
      const settingsSection = actualView.querySelector('.settings-section');
      settingsSection.innerHTML = '';
      return settingsSection.appendChild(components.editProfile());
    }
    case '#/theme-options': {
      homeView();
      FormView();
      const settingsSection = actualView.querySelector('.settings-section');
      settingsSection.innerHTML = '';
      return settingsSection.appendChild(components.themes());
    }
    default: {
      actualView.innerHTML = '';
    }
  }
};

export { changeView };
