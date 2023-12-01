import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Img_Hosting_Key;
const AddClass = () => {
  const { user } = useContext(AuthContext)
  const { handleSubmit, setValue, register } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data?.image[0]);

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(imgResponse => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const newItem = {
            className: data.className,
            image: imgUrl,
            instructorName: data.instructorName,
            instructorEmail: data.instructorEmail,
            availableSeats: parseInt(data.availableSeats),
            price: parseFloat(data?.price),
            enrolledStudent: parseInt(0),
            status: "pending",
          }

          fetch("http://localhost:5000/classes", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newItem),
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                Swal.fire(
                  'Good job!',
                  'New classes added successfully!',
                  'success'
                )
              }
            })
        }
      })

    // You can send the form data to your server to create a class with status as 'pending'.
    // Example: Send a POST request to your API to create the class.

    // Reset the form after submission
    setValue('className', '');
    setValue('availableSeats', '');
    setValue('price', '');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
      <div className="w-full text-white">
        <div className="shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
          <div className='grid md:grid-cols-2 gap-8'>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2">
                Class name:
              </label>
              <input
                className="shadow appearance-none text-white bg-black border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="className"
                type="text"
                placeholder="Class name"
                {...register('className')}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="classImage">
                Photo URL:
              </label>
              <input
                className="shadow appearance-none text-white bg-black border rounded w-full py-1 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="classImage"
                type="file"
                placeholder='Photo URL'
                {...register('image')}
              />
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="className">
                Instructor Name:
              </label>
              <input
                defaultValue={user?.displayName}
                readOnly
                className="shadow appearance-none text-white bg-black border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="className"
                type="text"
                placeholder="Instructor Name"
                {...register('instructorName')}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="className">
                Instructor Email:
              </label>
              <input
                defaultValue={user?.email}
                readOnly
                className="shadow appearance-none bg-black border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="className"
                type="text"
                placeholder="Instructor Email"
                {...register('instructorEmail')}
              />
            </div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="className">
                Available Seat:
              </label>
              <input
                className="shadow appearance-none text-white bg-black border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="className"
                type="number"
                placeholder="Available Seat"
                {...register('availableSeats')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="price">
                Price:
              </label>
              <input
                className="shadow appearance-none text-white bg-black border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                type="number"
                placeholder="Price"
                {...register('price')}
              />
            </div>
          </div>


          <div className="flex items-center justify-between w-full">
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddClass;
