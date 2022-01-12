const menu =
{
  _courses: 
  {
    appetizers: [], //empty array of appetizers
    mains: [], //empty array of main dishes
    desserts: [], // empty array of desserts
  },

  addDishToCourse(courseName, dishName, dishPrice)
  {
    const newDish =
    {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(newDish);
  },

  getRandomDishFromCourse(courseName)
  {
    const randomdish = this._courses[courseName];
    const randomNum = Math.floor(Math.random() * randomdish.length);
    return randomdish[randomNum];
  },

  generateRandomMeal()
  {
    const setAppetizer = this.getRandomDishFromCourse('appetizers');
    const setMain = this.getRandomDishFromCourse('mains');
    const setDessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = setAppetizer.price + setMain.price + setDessert.price;
    return `Your Appetizer is: ${setAppetizer.name} \nYour Main Course is: ${setMain.name} \nYour Dessert is: ${setDessert.name} \nYour Total Price is: ${totalPrice} dollars`;
  },
};

menu.addDishToCourse('appetizers', 'Salad' , 3.00);
menu.addDishToCourse('appetizers', 'Onion Rings' , 4.00);
menu.addDishToCourse('appetizers', 'Fries' , 5.00);

menu.addDishToCourse('mains', 'Burger' , 8.00);
menu.addDishToCourse('mains', 'Steak' , 10.00);
menu.addDishToCourse('mains', 'Sandwich' , 6.00);

menu.addDishToCourse('desserts', 'Cookie' , 1.50);
menu.addDishToCourse('desserts', 'Cake' , 4.75);
menu.addDishToCourse('desserts', 'Pie' , 5.00);

const meal = menu.generateRandomMeal();
console.log(meal);

