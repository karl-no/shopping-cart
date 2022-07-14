const saveCartItems = (arg) => {
  if (arg === undefined) {
    return new Error('Nenhum item foi adicionado.');
  }
  localStorage.setItem('cartItems', arg);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
