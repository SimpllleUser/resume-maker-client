export default {
  statuePropertyToLocalStorage: (key, value) => { localStorage[key] = JSON.stringify(value); },
  initStateProperty: (stateKey, defaultValue) => {
    if (!localStorage[stateKey]) {
      this.statuePropertyToLocalStorage(stateKey, defaultValue);
      return defaultValue;
    }
    return JSON.parse(localStorage[stateKey]);
  },
};
