const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Testa se, ao executar getSavedCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    getSavedCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o \'cartItems\' como parâmetro.', () => {
    getSavedCartItems(); 
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
