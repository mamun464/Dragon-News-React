import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategory] = useState([])
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }
        , [])
    return (
        <div className="space-y-7">
            <h1 className="text-xl font-semibold">All Category</h1>
            {
                categories.map(category => <NavLink
                    key={category.id}
                    to={`/category/${category?.id}`}
                    className="block ml-4 text-[#9F9F9F] text-xl font-medium"
                >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;