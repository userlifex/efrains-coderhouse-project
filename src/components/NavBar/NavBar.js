import { images } from "../../common";
import { CartWidget } from "../CartWidget/CartWidget";
import { asyncCategories } from "../../common/asyncSongs";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestore } from "../../services/firebase";

export const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const [isLoadingCategories, setIsLoadingCategories] = useState(true);

    useEffect(() => {
        setIsLoadingCategories(true);
        let collectionRef = collection(firestore, "categories");

        getDocs(collectionRef).then((response) => {
            const products = response.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });

            setCategories(products);
            setIsLoadingCategories(false);
        });
    }, []);

    return ( <
        nav className = "NavContainer" >
        <
        Link to = "/"
        className = "ImgContainer" >
        <
        div className = "ImgContainer" >
        <
        img className = "ImgLogo"
        src = { images.logo }
        alt = "logo" / >
        <
        /div> <
        /Link> <
        ul className = "NavOptionsContainer" > {
            isLoadingCategories ? ( <
                div > Cargando... < /div>
            ) : (
                categories.map((category) => ( <
                    li key = { category.id }
                    className = "NavOptions" >
                    <
                    NavLink to = { `/category/${category.id}` }
                    className = {
                        ({ isActive }) => (isActive ? "Active" : "Inactive") } >
                    { category.name } <
                    /NavLink> <
                    /li>
                ))
            )
        } <
        /ul> <
        CartWidget / >
        <
        /nav>
    );
};