import LocalStorageMock, { LocalStorageMockType } from './localStorageMock';

describe('localStorageMock', () => {
  let storage: LocalStorageMockType;

  beforeEach(() => {
    storage = new LocalStorageMock({
      a: 'test1',
      b: 'test2',
    });
  });

  it('getItem', () => {
    const value1 = storage.getItem('a');
    expect(value1).toEqual('test1');

    const value2 = storage.getItem('b');
    expect(value2).toEqual('test2');
  });

  it('setItem', () => {
    storage.setItem('c', 'test3');
    expect(storage._store.c).toEqual('test3');

    storage.setItem('d', 'test4');
    expect(storage._store.d).toEqual('test4');
  });

  it('setItem', () => {
    storage.clear();
    expect(Object.keys(storage._store).length).toEqual(0);
  });

  it('removeItem', () => {
    expect(storage._store.a).toEqual('test1');
    storage.removeItem('a');
    expect(storage._store.a).toBeUndefined();
  });
});
