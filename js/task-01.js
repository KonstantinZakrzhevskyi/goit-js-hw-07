const allCategories = document.querySelectorAll('.item');

console.log(`В списке ${allCategories.length} категории.`);

const categotiesTitle = [...allCategories].map(category =>
  `Категория: ${category.children[0].textContent} 
Количество элементов: ${category.children[1].children.length}`).join('\n');

  console.log(categotiesTitle);


