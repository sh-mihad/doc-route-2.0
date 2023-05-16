import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/authProvider";
import { toast } from "react-hot-toast";
import { useAddUserMutation } from "../../fetures/usersApi/usersApi";
import Loading from "../../utils/Loading";


const AddDoctor = () => {
    
    const [loading,setLoading] =useState(false)
    const { register, handleSubmit, formState: { errors },reset } = useForm()
    const { createUserAccount, updateName} = useContext(UserAuth)
    const [addUser,{isSuccess}] = useAddUserMutation()
    const navigate = useNavigate()


    useEffect(() => {

        if (isSuccess === true) {
            setLoading(false)
            reset()
            navigate('/')
        }
    }, [isSuccess, reset,navigate])

    const submitForm = (data) => {
        setLoading(true)
        const name = data.name
        const email = data.email
        const certificate = data.certificate
        const gender = data.gender
        const adress = data.adress
        const specialist = data.specialist
        const password = data.password
        

        //  host image in server
        const formData = new FormData();
        formData.append('image', data.photo[0]);
        fetch('https://api.imgbb.com/1/upload?key=2fbe1796a4bf3cd52ba5028ba7992a29', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result=>{
            const image = result.data.display_url
            if (result.success) {
                createUserAccount(email, password)
                    .then(res => {
                         
                         res.user
                        updateName(name, image)
                            .then(() => {

                                const doctorData = {
                                    name,
                                    certificate,
                                    email,
                                    gender,
                                    adress,
                                    specialist,
                                    image:result.data.display_url,
                                    category:"doctor",
                                    status : "pending"
                        
                                }

                                addUser(doctorData)
                                

                            })
                            .catch(err => {
                                setLoading(false)
                                toast.error(err.message.slice(18,-1))
                            })
                    })
                    .catch(err => {
                        setLoading(false)
                        toast.error(err.message.slice(22,-2))
                    })
            }
          
            
        })

        
    }

   if(loading){
    return <Loading/>
   }

    return (
        <div className="border border-gray-300 p-10 m-10 rounded-md">
            <div className="flex items-center justify-between text-lg font-semibold text-gray-600">
                    <p>Doctor Register</p>
                    <Link to="/register"> <p className="text-cyan-500">Not a Doctor?</p></Link>
                </div>
            <form onSubmit={handleSubmit(submitForm)}>
                <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Doctor Name" {...register("name", {
                    required: "Invalid Name Fild",
                })} />
                {errors.name && <p className='text-sm mt-2 text-red-700'>{errors.name.message}</p>}
                <input type="email" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Email " {...register("email", {
                    required: "Invalid Name Fild",
                })} />
                {errors.email && <p className='text-sm mt-2 text-red-700'>{errors.email.message}</p>}
                <input type="password" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Password " {...register("password", {
                    required: "Invalid Name Fild",
                })} />
                {errors.password && <p className='text-sm mt-2 text-red-700'>{errors.password.message}</p>}
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
                    <option value="urology">Urology </option>
                    <option value="neorology">Neorology</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Orthopedic">Orthopedic</option>
                    <option value="Cardiologist">Cardiologist</option>
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