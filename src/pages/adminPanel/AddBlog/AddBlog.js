import axios from 'axios';
import React from 'react';
import './AddBlog.css';
import {useForm} from "react-hook-form";

const AddBlog = () => {
  const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios
            .post('http://localhost:5000/blogs', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
  return (
    <div>
            <div className="add-product-area">
                <h2>Please add a service
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("country", { required: true, maxLength: 40 })} placeholder="Country"/>
                    <input {...register("trip_area", { required: true })} placeholder="Trip Area"/>
                    <input type="number" {...register("days")} placeholder="Days"/>
                    <input type="date" {...register("date")} />
                    <input type="number" {...register("price")} placeholder="Price"/>
                    <input {...register("img")} placeholder="Img url"/>
                    <input {...register("title", { required: true })} placeholder="Title"/>
                    <input {...register("sub_title", { required: true })} placeholder="Sub Title"/>
                    <textarea {...register("discription")} placeholder="Description"/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
  );
};

export default AddBlog;