import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Registration = () => {
    const { createUser } = useContext(AuthContext)



    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    };

    const navInfo = {
        button_text: "Login",
        button_link: "/login",
    }

    return (
        <div className="bg-[#f3f3f3] min-h-screen font-Poppins flex flex-col justify-center items-center">

            <div className="mt-5 px-7 w-full">
                <NavBar
                    navInfo={navInfo}
                ></NavBar>
            </div>
            <div className="w-full max-w-md pb-5">
                <div className="mx-auto bg-white px-8 py-10 rounded-md pt-6">
                    <h1 className="text-3xl text-center mb-4">Register your account</h1>
                    <hr className="mb-4" />
                    <form onSubmit={handleRegister} className="">
                        <div className="">
                            <label className="label">
                                <span className="label-text font-bold">Your Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" name="name" className="px-4 py-3 bg-[#f3f3f3] w-full rounded-md" required />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter your Photo URL" name="photoUrl" className="px-4 py-3 bg-[#f3f3f3] w-full rounded-md" required />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" className="px-4 py-3 bg-[#f3f3f3] w-full rounded-md" required />
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your email password" name="password" className="px-4 py-3 bg-[#f3f3f3] w-full rounded-md" required />
                        </div>
                        <div className="mt-5">
                            <button className="btn text-xl w-full bg-[#403f3f] text-white hover:text-black">Register</button>
                        </div>
                    </form>
                    <p className="text-center mt-2 font-bold">Already Have An Account ? <Link to={'/login'} className="text-red-600 ">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
