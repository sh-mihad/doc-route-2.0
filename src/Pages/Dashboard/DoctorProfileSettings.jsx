import { useState } from "react";
import { useForm } from "react-hook-form";

const DoctorProfileSettings = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [loading, setLoading] = useState(false)
    return (
        <div>

            <form>
                {/* basic information */}
                <div className="border rounded-md p-5">
                    <h5 className="text-lg font-bold text-center lg:text-start  text-gray-700">Basic Information</h5>
                    <div className="grid lg:grid-cols-2 grid-rows-1 gap-3">
                        <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Doctor Name" {...register("name", {
                            required: "Invalid Name Field",
                        })} />
                        {errors.name && <p className='text-sm mt-2 text-red-700'>{errors.name.message}</p>}
                        <input type="email" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Email " {...register("email", {
                            required: "Invalid Name Field",
                        })} />
                        {errors.email && <p className='text-sm mt-2 text-red-700'>{errors.email.message}</p>}
                        <select className="select border border-gray-600 input w-full mt-4" {...register("gender", {
                            required: "Invalid this Field",

                        })} >
                            <option value="" hidden>Select Gender </option>
                            <option value="Male">Male </option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                        </select>
                        {errors.gender && <p className='text-sm mt-2 text-red-700'>{errors.email.message}</p>}
                        <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Phone Number " {...register("number", {
                            required: "Invalid Name Field",
                        })} />
                        {errors.number && <p className='text-sm mt-2 text-red-700'>{errors.number.message}</p>}
                    </div>
                </div>
                {/* about me */}
                <div className="border rounded-md p-5 my-4">
                    <h5 className="text-lg font-bold text-center lg:text-start  text-gray-700">About Me</h5>
                    <h5 className="text-md  text-center lg:text-start  text-gray-700">Biography</h5>
                    <div className="grid  grid-rows-1 gap-3">
                        <textarea className="w-full border h-72 mt-5 border-gray-600 p-2 rounded-md" placeholder="Bio" {...register("biography", {
                            required: "Invalid Name Field",
                        })} />
                        {errors.biography && <p className='text-sm mt-2 text-red-700'>{errors.biography.message}</p>}
                    </div>
                </div>
                {/* Services and Specialization */}
                <div className="border rounded-md p-5">
                    <h5 className="text-lg font-bold text-center lg:text-start  text-gray-700">Services and Specialization</h5>
                    <h5 className="text-md mt-3 text-center lg:text-start  text-gray-700">Service</h5>
                    <div className="grid  grid-rows-1 gap-3">
                        <select className="select border border-gray-600 input w-full mt-4" {...register("specialist", {
                            required: "Invalid this field",

                        })}>
                            <option defaultValue hidden>Select specialist </option>
                            <option value="urology">Urology </option>
                            <option value="neurology">Neurology</option>
                            <option value="Dentist">Dentist</option>
                            <option value="Orthopedic">Orthopedic</option>
                            <option value="Cardiologist">Cardiologist</option>
                            <option value="Gastroenterologist">Gastroenterologist</option>
                        </select>
                        {errors.specialist && <p className='text-sm mt-2 text-red-700'>{errors.specialist.message}</p>}
                        <h5 className="text-md mt-3 text-center lg:text-start  text-gray-700">Specialization</h5>
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Specialization" {...register("specalization1", {
                                required: "Invalid Fild",
                            })} />
                            {errors.specalization1 && <p className='text-sm mt-2 text-red-700'>{errors.specalization1.message}</p>}
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Specialization" {...register("specalization2", {
                                required: "Invalid Fild",
                            })} />
                            {errors.specalization2 && <p className='text-sm mt-2 text-red-700'>{errors.specalization2.message}</p>}
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Specialization" {...register("year1", {
                                required: "Invalid Fild",
                            })} />
                            {errors.specalization3 && <p className='text-sm mt-2 text-red-700'>{errors.specalization3.message}</p>}
                        </div>
                    </div>
                </div>
                {/* Education */}
                <div className="border rounded-md my-4 p-5">
                    <h5 className="text-lg font-bold text-center lg:text-start  text-gray-700">Education</h5>

                    <div className=" grid mt-3 grid-rows-1 gap-3">
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Degree Name" {...register("degree1", {
                                required: "Invalid Fild",
                            })} />
                            {errors.degree1 && <p className='text-sm mt-2 text-red-700'>{errors.degree1.message}</p>}
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="College/Institute" {...register("collage1", {
                                required: "Invalid Fild",
                            })} />
                            {errors.collage1 && <p className='text-sm mt-2 text-red-700'>{errors.collage1.message}</p>}
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Year of Completion" {...register("year1", {
                                required: "Invalid Fild",
                            })} />
                            {errors.year1 && <p className='text-sm mt-2 text-red-700'>{errors.year1.message}</p>}
                        </div>
                    </div>
                    <div className=" grid mt-3 grid-rows-1 gap-3">
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Degree Name" {...register("degree2", {
                                required: "Invalid Fild",
                            })} />
                            {errors.degree2 && <p className='text-sm mt-2 text-red-700'>{errors.degree2.message}</p>}
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="College/Institute" {...register("collage2", {
                                required: "Invalid Fild",
                            })} />
                            {errors.collage2 && <p className='text-sm mt-2 text-red-700'>{errors.collage2.message}</p>}
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Year of Completion" {...register("year2", {
                                required: "Invalid Fild",
                            })} />
                            {errors.year2 && <p className='text-sm mt-2 text-red-700'>{errors.year2.message}</p>}
                        </div>
                    </div>
                    <div className=" grid mt-3 grid-rows-1 gap-3">
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Degree Name" {...register("degree3", {
                            })} />
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="College/Institute" {...register("collage3", {
                            })} />
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Year of Completion" {...register("year3", {
                            })} />

                        </div>
                    </div>
                </div>

                {/* expiriance */}
                <div className="border rounded-md my-4 p-5">
                    <h5 className="text-lg font-bold text-center lg:text-start  text-gray-700">Experience</h5>

                    <div className=" grid mt-3 grid-rows-1 gap-3">
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Degree Name" {...register("hospital1", {
                                required: "Invalid Fild",
                            })} />
                            {errors.hospital1 && <p className='text-sm mt-2 text-red-700'>{errors.hospital1.message}</p>}
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="College/Institute" {...register("from1", {
                                required: "Invalid Fild",
                            })} />
                            {errors.from1 && <p className='text-sm mt-2 text-red-700'>{errors.from1.message}</p>}
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Year of Completion" {...register("to1", {
                                required: "Invalid Fild",
                            })} />
                            {errors.to1 && <p className='text-sm mt-2 text-red-700'>{errors.to1.message}</p>}
                        </div>
                    </div>
                    <div className=" grid mt-3 grid-rows-1 gap-3">
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Degree Name" {...register("hospital2")} />

                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="College/Institute" {...register("from2")} />

                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Year of Completion" {...register("to2")} />
                        </div>
                    </div>
                    <div className=" grid mt-3 grid-rows-1 gap-3">
                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Degree Name" {...register("hospital3")} />

                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="College/Institute" {...register("from3")} />

                            <input type="text" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Year of Completion" {...register("to3")} />
                        </div>
                    </div>
                </div>

                <button disabled={loading} type="submit" className="w-full my-5 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-400 duration-300">{loading ? "Loading.." : "Save Changes"}</button>

            </form>
        </div>
    );
};

export default DoctorProfileSettings;