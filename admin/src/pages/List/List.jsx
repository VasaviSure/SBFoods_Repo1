import React, { useState, useEffect } from 'react';
import './List.css'; 
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = ({url}) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error("Error fetching data");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);
  
  const removeFood = async (foodId) => {
        const response = await axios.post(`${urlf}/api/food/remove`, { id: foodId });
        await fetchList();

        if (response.data.success) {
            toast.success(response.data.message);
        } else {
            toast.error("Error");
        }
};


  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
          <div key={index} className='list-table-format'>
            <img src={`${url}/images/${item.image}`} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p onClick={()=> removeFood(item._id)} className='cursor'>X</p>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default List;
