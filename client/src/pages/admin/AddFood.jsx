import { useState } from "react";
import axios from "axios";
import AdminSidebar from "../../components/admin/AdminSidebar";

const AddFood = () => {
  const [formData, setFormData] = useState({
  name: "",
  category: "",
  price: "",
  description: "",
  stock: "",
});

const [image, setImage] = useState(null);

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};



const uploadImage = async () => {
  const formData = new FormData();

  formData.append("image", image);

  const response = await axios.post(
    "http://localhost:5000/api/upload/image",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.imageUrl;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let imageUrl = "";

    if (image) {
      imageUrl = await uploadImage();
    }

    const foodData = {
      ...formData,
      image: imageUrl,
    };

    const response = await axios.post(
      "http://localhost:5000/api/food/add",
      foodData,
      {
        withCredentials: true,
      }
    );

    console.log(response.data);

    alert("Food Added Successfully");

    setFormData({
      name: "",
      category: "",
      price: "",
      description: "",
      stock: "",
    });

    setImage(null);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">
          Add Food
        </h1>
        <form
        onSubmit={handleSubmit}
  className="space-y-4 max-w-xl"
>
  <input
    type="text"
    name="name"
    placeholder="Food Name"
    value={formData.name}
    onChange={handleChange}
    className="w-full border p-3 rounded-lg"
  />

  <input
    type="text"
    name="category"
    placeholder="Category"
    value={formData.category}
    onChange={handleChange}
    className="w-full border p-3 rounded-lg"
  />

  <input
    type="number"
    name="price"
    placeholder="Price"
    value={formData.price}
    onChange={handleChange}
    className="w-full border p-3 rounded-lg"
  />

  <textarea
    name="description"
    placeholder="Description"
    value={formData.description}
    onChange={handleChange}
    className="w-full border p-3 rounded-lg"
  />

  <input
    type="number"
    name="stock"
    placeholder="Stock"
    value={formData.stock}
    onChange={handleChange}
    className="w-full border p-3 rounded-lg"
  />

  <input
    type="file"
    onChange={(e) =>
      setImage(e.target.files[0])
    }
  />

  <button
    type="submit"
    className="
      bg-orange-500
      text-white
      px-6
      py-3
      rounded-lg
    "
  >
    Add Food
  </button>
</form>
      </div>
      
    </div>
  );
};

export default AddFood;