import * as categoriesAPI from "./fakeCategories";

const foods = [
  {
    _id: "5fe5c299db9b000a30e07753",
    title: "Coca-Cola",
    price: 8000,
    amount: 20,
    unit: "Dona",
    category: { _id: "5fe5c183db9b000a30e0774a", name: "Ichimlik" },
  },
  {
    _id: "5fe5c2bbdb9b000a30e07759",
    title: "Fanta",
    price: 10000,
    amount: 10,
    unit: "Dona",
    category: { _id: "5fe5c183db9b000a30e0774a", name: "Ichimlik" },
  },
  {
    _id: "5fe5c220db9b000a30e0774d",
    title: "Kavob",
    price: 70000,
    amount: 10,
    unit: "Kg",
    category: { _id: "5fe5c169db9b000a30e07749", name: "Taom" },
  },
  {
    _id: "5fe5c25ddb9b000a30e07751",
    title: "Ko`k choy",
    price: 2000,
    amount: 20,
    unit: "Dona",
    category: { _id: "5fe5c183db9b000a30e0774a", name: "Ichimlik" },
  },
  {
    _id: "5fe5c2a8db9b000a30e07755",
    title: "Limon choy",
    price: 4000,
    amount: 10,
    unit: "Dona",
    category: { _id: "5fe5c183db9b000a30e0774a", name: "Ichimlik" },
  },
  {
    _id: "5fe5c354db9b000a30e07773",
    title: "Shashlik",
    price: 12000,
    amount: 22,
    unit: "Dona",
    category: { _id: "5fe5c169db9b000a30e07749", name: "Taom" },
  },
  {
    _id: "5fe5c366db9b000a30e07775",
    title: "Shirin Osh",
    price: 14000,
    amount: 12,
    unit: "Dona",
    category: { _id: "5fe5c169db9b000a30e07749", name: "Taom" },
  },
  {
    _id: "5fe5c3d1db9b000a30e07791",
    title: "Snikers",
    price: 6000,
    amount: 10,
    unit: "Dona",
    category: { _id: "5fe5c18bdb9b000a30e0774b", name: "Shirinlik" },
  },
  {
    _id: "5fe5c2b7db9b000a30e07757",
    title: "Sprite",
    price: 10000,
    amount: 10,
    unit: "Dona",
    category: { _id: "5fe5c183db9b000a30e0774a", name: "Ichimlik" },
  },
  {
    _id: "5fe5c3c0db9b000a30e0778f",
    title: "To`rt",
    price: 25000,
    amount: 20,
    unit: "Dona",
    category: { _id: "5fe5c18bdb9b000a30e0774b", name: "Shirinlik" },
  },
];

export const getFoods = () => {
  return [...foods];
};

export const getFood = (_id) => {
  return foods.find((food) => food._id === _id);
};

export const saveFood = (food) => {
  let foodInDb = foods.find((m) => m._id === food._id) || {};
  foodInDb.title = food.title;
  foodInDb.category = categoriesAPI
    .getCategories()
    .find((g) => g._id === food.categoryId);
  foodInDb.price = food.price;
  foodInDb.amount = food.amount;
  foodInDb.unit = food.unit;

  if (!foodInDb._id) {
    foodInDb._id = Date.now();
    foods.push(foodInDb);
  }

  return foodInDb;
};

export const deletefood = (_id) => {
  let foodInDb = foods.find((m) => m._id === _id);
  foods.splice(foods.indexOf(foodInDb), 1);
  return foodInDb;
};
