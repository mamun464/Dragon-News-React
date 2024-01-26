import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import LeftSideNav from './../Shared/LeftSideNav/LeftSideNav';


const Home = () => {
    return (
        <div className="font-Poppins ">
            <NavBar></NavBar>
            <Header></Header>
            <h1 className="text-3xl">This is Home</h1>
            <div className="grid grid-cols-1  md:grid-cols-4 gap-6">

                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="md:col-span-2 border">
                    <h1 className="text-2xl"> Comming Soon</h1>
                </div>

                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;