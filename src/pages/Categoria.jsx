import { useState, useEffect } from "react";
import "../assets/css/blog.css"
import { buscar } from "../api/api";
import ListCategories from "../components/ListCategories";
import ListPosts from "../components/ListPosts";
import { useParams, Routes, Route } from "react-router-dom";
const Categoria = () => {
    const [subCategorias, setsubCategorias] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        buscar(`/categorias?id=${id}`, (response) => {
            setsubCategorias(response[0].subcategorias);
        });
    }, [id]);

    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet noticias</h2>
            </div>
            <ListCategories />
            <Routes>
                <Route path="/" element={<ListPosts url={`/posts?categoria=${id}`} />} />
            </Routes>

        </>
    )
}

export default Categoria;