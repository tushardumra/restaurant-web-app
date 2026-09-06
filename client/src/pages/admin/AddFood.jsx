import { useRef, useState } from "react";
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
  const imageInputRef = useRef(null);

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
      },
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
        },
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

      if (imageInputRef.current) {
        imageInputRef.current.value = "";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8">Add Food</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
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

          {/* <input
            ref={imageInputRef}
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          /> */}

          <div class="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 bg-neutral-secondary-medium border border-dashed border-default-strong rounded-xl cursor-pointer hover:bg-neutral-tertiary-medium"
            >
              <div class="flex flex-col items-center justify-center text-body pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h3a3 3 0 0 0 0-6h-.025a5.56 5.56 0 0 0 .025-.5A5.5 5.5 0 0 0 7.207 9.021C7.137 9.017 7.071 9 7 9a4 4 0 1 0 0 8h2.167M12 19v-9m0 0-2 2m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input
                ref={imageInputRef}
                id="dropzone-file"
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                class="hidden"
              />
            </label>
          </div>

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
