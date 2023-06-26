function loadMenuItems(category) {
    const menuItems = [
      { name: 'Item 1', price: '$10' },
      { name: 'Item 2', price: '$15' },
      { name: 'Item 3', price: '$12' }
    ];
    
    const categoryTitle = document.getElementById('category-title');
    const menuItemsList = document.getElementById('menu-items');

    categoryTitle.textContent = '';
    menuItemsList.innerHTML = '';

    categoryTitle.textContent = category;
 
    menuItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - ${item.price}`;
      menuItemsList.appendChild(listItem);
    });
  }
 
 const specialsTile = document.getElementById('specials-tile');
  specialsTile.addEventListener('click', function() {

    const categories = ['Lunch', 'Dinner', 'Sushi', 'Burger', 'Pizza'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    loadMenuItems(randomCategory);
  });

  const menuTile = document.getElementById('menu-tile');

  menuTile.addEventListener('click', function() {

    const menuItemsList = document.getElementById('menu-items');
    menuItemsList.innerHTML = '';
    const categoryTitle = document.getElementById('category-title');
    categoryTitle.textContent = '';
  });

  menuTile.addEventListener('click', function() {

    const menuItemsList = document.getElementById('menu-items');
    menuItemsList.innerHTML = '';
  });