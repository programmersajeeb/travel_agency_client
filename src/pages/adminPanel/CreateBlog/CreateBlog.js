import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import AdminPanel from '../AdminPanel/AdminPanel';
import './CreateBlog';

const CreateBlog = () => {
  const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios
            .post('https://shielded-hollows-68484.herokuapp.com/newBlogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
  return (
    <div>
        <AdminPanel />
            <div className="add-product-area">
                <h2>Please add a service
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title", { required: true })} placeholder="Title"/>
                    <input {...register("location", { required: true })} placeholder="Location"/>
                    <input {...register("country", { required: true })} placeholder="Country"/>
                    <input {...register("img")} placeholder="Img url"/>
                    <input type="date" {...register("date")} />
                    <input type="email" {...register("gmail")} placeholder="Gmail"/>
                    <textarea {...register("discription")} placeholder="Description"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
  );
};

export default CreateBlog;