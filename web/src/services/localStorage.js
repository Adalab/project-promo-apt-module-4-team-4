
export const get = (key, defaultValue) => {
  const dataFromLS = JSON.parse(localStorage.getItem( key ));

  return dataFromLS  || defaultValue;
};

export const set = (key, value) => {
  const localStorageData = JSON.stringify(value);
  localStorage.setItem(key, localStorageData);
};

// Función que borra una propiedad del local storage
export const remove = (key) => {
  localStorage.removeItem(key);
};

// Función que limpia todo el local storage
export const clear = () => {
  localStorage.clear();
};

export const includes = (key) => {
  return localStorage.getItem( key ) !== null;
}
