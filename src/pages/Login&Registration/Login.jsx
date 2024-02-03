import { Link } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        loginUser(email, password)
            .then(result => {
                console.log("Login successful:", result.user);
            })
            .catch(err => {
                console.error(err);
            })
    };

    const navInfo = {
        button_text: "Register",
        button_link: "/registration"
    }

    return (
        <div className="bg-[#f3f3f3] min-h-screen font-Poppins flex flex-col justify-center items-center">

            <div className="px-7 w-full">
                <NavBar
                    navInfo={navInfo}
                ></NavBar>
            </div>
            <div className="w-full max-w-md">
                <div className="mx-auto bg-white px-8 py-10 rounded-md">
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
