const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });
  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com o parâmetro \'cartItems\' e o valor passado como argumento para saveCartItems', () => {
    const param = '<ol><li>Item</li></ol>';
    saveCartItems(param); 
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', param);
  });
  it('Testa se, caso não seja passado um argumento, a função saveCartItems retorn a mensagem de erro \'Nenhum item foi adicionado.\'', () => {
    expect(saveCartItems()).toEqual(new Error('Nenhum item foi adicionado.'));
  });
});
