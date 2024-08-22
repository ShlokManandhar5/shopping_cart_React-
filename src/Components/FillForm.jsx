import React from 'react';
import { useForm } from 'react-hook-form';

function FillForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <div className="flex flex-col">
            <form className="my-8 mx-8 box-border flex flex-col gap-5 max-w-[25rem]" onSubmit={handleSubmit(onSubmit)}>
                <div className="font-bold text-2xl">Contact Us</div>
                
                <input
                    type="text"
                    placeholder="Name"
                    className="min-h-11 w-[100%] px-2 shadow-lg outline-none border"
                    {...register("username", {
                        required: { value: true, message: "Username is required" },
                        minLength: { value: 3, message: "Min length is 3 characters" },
                        maxLength: { value: 10, message: "Max length is 9 characters" },
                    })}
                />
                {errors.username && <div>{errors.username.message}</div>}

                <input
                    type="email"
                    placeholder="Email"
                    className="min-h-11 w-[100%] px-2 shadow-lg outline-none border"
                    {...register("email", {
                        required: { value: true, message: "Email is required" },
                        minLength: { value: 12, message: "Min length is 12 characters" },
                    })}
                />
                {errors.email && <div>{errors.email.message}</div>}

                <input
                    type="number"
                    placeholder="Phone Number"
                    className="min-h-11 w-[100%] px-2 shadow-lg outline-none border"
                    {...register("phonenumber", {
                        required: { value: true, message: "Phone number is required" },
                        minLength: { value: 10, message: "Phone number must be 10 digits" },
                        maxLength: { value: 10, message: "Phone number must be 10 digits" },
                    })}
                />
                {errors.phonenumber && <div>{errors.phonenumber.message}</div>}

                <select
                    className="min-h-11 w-[100%] shadow-lg outline-none border px-2 text-gray-400"
                    {...register("Options", {
                        required: { value: true, message: "Please select a service" },
                    })}
                    defaultValue=""
                >
                    <option value="" disabled>
                        Service Required
                    </option>
                    <option value="Web Design" className="text-black">
                        Web Design
                    </option>
                    <option value="Web Development" className="text-black">
                        Web Development
                    </option>
                    <option value="Graphic Design" className="text-black">
                        Graphic Design
                    </option>
                    <option value="App Development" className="text-black">
                        App Development
                    </option>
                </select>
                {errors.Options && <div>{errors.Options.message}</div>}

                <textarea placeholder='Enter your message this if any' className='shadow-lg outline-none border px-2 text-gray-400'  {...register("usermessage", {})}></textarea>
                

                <button className="px-4 py-3 bg-[#24285b] text-white font-semibold w-[100%] hover:bg-blue-950" type="submit">
                    Send
                </button>
            </form>
        </div>
    );
}

export default FillForm;
