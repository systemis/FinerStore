import React, { useState } from "react";
import { NextPage } from "next";
import Layout from "../../layouts/layout";
import { ProductAction } from "../../actions/product.action";
import { toast } from "react-toastify";

const AddProdutPage: NextPage = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const productAction = new ProductAction();

  const handleAddProduct = async () => {
    console.log('handle add product');
    if (!name || !price || !description || !image) {
      return;
    }

    const product = await productAction.addProduct({
      name, 
      price, 
      description, 
      image, 
    });

    if (product?._id) {
      toast.success("Add product successfully");
      setName("");
      setDescription("");
      setImage("");
      setPrice(0);
    }
  }

  return (
    <Layout>
      <div className="add-produt-page container">
        <div className="h-screen md:flex">
          <div
            className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
            <div className="px-[20px]">
              <img src={image} className="rounded-[10px]" alt=""/>
            </div>
            <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          </div>
          <div className="flex md:w-full justify-center py-10 items-center bg-white">
            <div className="bg-white">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
              <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back, want to add more product ?</p>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 md:w-[350px] w-[250px]">
                <i className='bx bx-rename' ></i>
                <input className="pl-2 outline-none border-none w-full text-start" type="text" name="" id="" placeholder="Name"  value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <i className='bx bxs-image' ></i>
                <input className="pl-2 outline-none border-none w-full text-start" type="text" name="" id="" placeholder="Image" value={image} onChange={e => setImage(e.target.value)} />
              </div>
              <div className="flex border-2 py-2 px-3 rounded-2xl mb-4">
                <i className='bx bx-text mt-[5px]' ></i>
                <textarea className="pl-2 outline-none border-none w-full"  name="" id="" placeholder="description"  value={description} onChange={e => setDescription(e.target.value)} />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <i className='bx bxs-purchase-tag-alt' ></i>
                <input className="pl-2 outline-none border-none w-full text-start" type="number" name="" id="" placeholder="Price" value={price} onChange={e => setPrice(parseFloat(e.target.value))}/>
              </div>
              <button 
                className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
                type="submit" 
                onClick={(e) => {
                  e.preventDefault();
                  console.log("request to add product");
                  handleAddProduct();
                }}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  );
}

export default AddProdutPage;