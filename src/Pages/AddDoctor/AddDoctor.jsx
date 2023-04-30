import { useState } from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
    
    const [loading,setLoading] =useState(false)
    const { register, handleSubmit, formState: { errors }, } = useForm()
    


    const submitForm = (data) => {
        setLoading(true)
        const name = data.name
        const certificate = data.certificate
        const gender = data.gender
        const adress = data.adress
        const specialist = data.specialist
        

        //  host image in server
        const formData = new FormData();
        formData.append('image', data.photo[0]);
        fetch('https://api.imgbb.com/1/upload?key=2fbe1796a4bf3cd52ba5028ba7992a29', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result=>{
            setLoading(false)
            console.log( result.data.display_url);
        })

        const doctorData = {
            name,
            certificate,
            gender,
            adress,
            specialist,

        }
        console.log(doctorData);
    }

    return (
        <div className="border border-gray-300 p-10 m-10 rounded-md">
            <p>Add a Doctor</p>
            <form onSubmit={handleSubmit(submitForm)}>
                <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Doctor Name" {...register("name", {
                    required: "Invalid Name Fild",
                })} />
                {errors.name && <p className='text-sm mt-2 text-red-700'>{errors.name.message}</p>}
                <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Title and Certificate" id=""  {...register("certificate", {
                    required: "Invalid this Fild",

                })} />
                {errors.certificate && <p className='text-sm mt-2 text-red-700'>{errors.certificate.message}</p>}

                <select className="select border border-gray-600 input w-full mt-4" {...register("gender", {
                    required: "Invalid this fild",

                })} >
                    <option value="" hidden>Select Gender </option>
                    <option value="Male">Male </option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
                {errors.gender && <p className='text-sm mt-2 text-red-700'>{errors.email.message}</p>}
                <input type="text" className="w-full border mt-4 border-gray-600 p-2 rounded-md" placeholder="Full Adress" id="" {...register("adress", {
                    required: "Invalid this fild",

                })} />
                {errors.adress && <p className='text-sm mt-2 text-red-700'>{errors.adress.message}</p>}
                <select className="select border border-gray-600 input w-full mt-4" {...register("specialist", {
                    required: "Invalid this fild",

                })}>
                    <option value="" hidden>Select specialist </option>
                    <option value="Male">Uroloy </option>
                    <option value="Female">Neorology</option>
                    <option value="Others">Dentist</option>
                    <option value="Others">Orthopedic</option>
                    <option value="Others">Cardiologist</option>
                </select>
                {errors.specialist && <p className='text-sm mt-2 text-red-700'>{errors.specialist.message}</p>}
                <label className="label">
                    <span className="label-text">Upload  Photo</span>
                </label>
                <input type="file" className="file-input w-full border-gray-400" placeholder="email" {...register("photo", {
                    required: "Invalid this fild",

                })} />
                {errors.photo && <p className='text-sm mt-2 text-red-700'>{errors.photo.message}</p>}
                <button disabled={loading} type="submit" className="w-full my-5 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-400 duration-300">{loading?"Loading..":"Add Doctor"}</button>


            </form>


        </div>
    );
};

export default AddDoctor;