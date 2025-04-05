interface StoreType {
  [key: string]: string;
}

export interface LocalStorageMockType {
  _store: StoreType;
  getItem: (key: string) => string;
  setItem: (key: string, value: string) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}

class LocalStorageMock implements LocalStorageMockType {
  _store: StoreType;

  constructor(value: StoreType = {}) {
    this._store = { ...value };
  }

  getItem(key: string) {
    return this._store[key];
  }

  setItem(key: string, value: string) {
    this._store[key] = value;
  }

  clear() {
    this._store = {};
  }

  removeItem(key: string) {
    delete this._store[key];
  }
}

export default LocalStorageMock;
