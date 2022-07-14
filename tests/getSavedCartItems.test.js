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
  // it('Testa se, caso não seja passado um argumento, a função saveCartItems retorn a mensagem de erro \'Nenhum item foi adicionado.\'', () => {
  //   expect(getSavedCartItems()).toEqual(new Error('Nenhum item foi adicionado.'));
  // });
});
