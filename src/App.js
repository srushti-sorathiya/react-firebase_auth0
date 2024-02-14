import { useEffect, useRef, useState } from 'react';
import './App.css';
// import Crud from './Component/Crud';
import {
  getAllData, saveItem, updateItem,
  deleteItem
} from './firebase/functions/function';
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Profile from "./Profile";


function App() {

  const [data, setData] = useState([])

  const productName = useRef();
  const productPrice = useRef();

  const save = async () => {
    const newData = {
      productName: productName.current.value,
      productPrice: productPrice.current.value,
    };

    await saveItem(newData);
    const allData = await getAllData();
    setData(allData);
  };

  const update = async (id) => {
    const updatedData = {
      productName: productName.current.value,
      productPrice: productPrice.current.value
    };

    await updateItem(id, updatedData);
    const allData = await getAllData();
    setData(allData);
  };

  const remove = async (id) => {
    await deleteItem(id);
    const allData = await getAllData();
    setData(allData);
  };

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getAllData();
      setData(allData);
    };

    fetchData();
  }, []);

  return (
    // <Crud />
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
      <input type="text" ref={productName} />
      <input type="text" ref={productPrice} />
      <button onClick={save}>save</button>
      <div>
        <h2>Data:</h2>
        <ul>
          {data?.map((item) => (
            <li key={item.id}>
              {item.fname} {item.lname} - {item.email} - {item.phone}
              <button onClick={() => update(item.id)}>Update</button>
              <button onClick={() => remove(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
