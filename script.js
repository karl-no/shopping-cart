const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  const removeCart = event.target.parentNode;
  removeCart.removeChild(event.target);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductsList = async () => {
  const sectionProducts = document.querySelector('.items');
  const loading = document.createElement('div');
  loading.className = 'loading';
  loading.innerHTML = 'carregando...';
  sectionProducts.appendChild(loading);
  const { results } = await fetchProducts('computador');
  sectionProducts.innerHTML = '';
  results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    sectionProducts.appendChild(createProductItemElement({ sku, name, image }));
  });
};

const cartList = document.querySelector('.cart__items');
const addToCart = async (item) => {
  const itemSku = getSkuFromProductItem(item.target.parentElement);
  const { id: sku, title: name, price: salePrice } = await fetchItem(itemSku);
  cartList.appendChild(createCartItemElement({ sku, name, salePrice }));
};

const itemListener = async () => {
  await createProductsList();
  const buttonAddItem = document.querySelectorAll('.item__add');
  buttonAddItem.forEach((button) => {
    button.addEventListener('click', addToCart);
  });
};

itemListener();

const emptyButton = document.querySelector('.empty-cart');
const emptyCart = () => {
  cartList.innerHTML = '';
};
emptyButton.addEventListener('click', emptyCart);

window.onload = () => { 
  
};
