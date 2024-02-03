import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('password'));

    };
    return (
        <div className="bg-[#f3f3f3] w-screen h-screen font-Poppins">

            <div className="py-7 px-7">
                <NavBar />
            </div>
            <div>
                <div className="md:w-3/4 lg:w-1/2 mx-auto bg-white px-11 py-10 rounded-md">
                    <h1 className="text-3xl text-center mb-8">Login your account</h1>

                    <hr />
                    <form onSubmit={handleLogin} className="mt-8">
                        <div>
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email address" name="email" className=" px-4 py-3 bg-[#f3f3f3] w-full rounded-md" required />
                        </div>
                        <div className="mt-8">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="Enter your email password" name="password" className=" px-4 py-3 bg-[#f3f3f3] w-full rounded-md" required />
                        </div>
                        <div className=" mt-8">
                            <button className="btn text-xl w-full bg-[#403f3f] text-white hover:text-black">Login</button>
                        </div>
                    </form>

                    <p className="text-center mt-5 font-bold">Do not Have An Account ? <Link to={'/registration'} className="text-red-600 ">Register</Link></p>


                </div>
            </div>

        </div>
    );
};

export default Login;
