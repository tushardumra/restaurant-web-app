const foodModel = require("../models/food.model");

// Controller function to add new food item, only admin can add food item
const addFood = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    const { name, price, category, image, stock } = req.body;

    const isfoodNameAlreadyExists = await foodModel.findOne({ name });

    if (isfoodNameAlreadyExists) {
      return res.status(409).json({
        message: "Food item already exists, please change food item name",
      });
    }

    const food = await foodModel.create({
      name,
      price,
      category,
      image,
      stock,
    });

    res.status(201).json({
      message: "Food item added",
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error in adding food" });
  }
};

// Controller function to get all food items,  anyone can see food menu (admin, staff and user)
const getAllFood = async (req, res) => {
  try {
    const foods = await foodModel.find();
    res.status(200).json({
      count: foods.length,
      foods,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error in showing food menu",
    });
  }
};

// Controller function to update food item, only admin can update food item
const updateFood = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedFood = await foodModel.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });

    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({
      message: "Food updated",
      updatedFood,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error in updating food" });
  }
};

// Controller function to delete food item, only admin can delete food item
const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFood = await foodModel.findByIdAndDelete(id);

    if (!deletedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({ message: "Food item deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error in deleting food" });
  }
};

module.exports = { addFood, getAllFood, updateFood, deleteFood };
