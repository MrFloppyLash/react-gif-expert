import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) =>{
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    useEffect( ()=> {
        getImages();
        //getGifs(category).then(newImages => setImages(newImages));
        //si el useEffect tiene algún elemento pendiente de los cambios (patrón observador) entonces tendremos que devolver el resultado en un return. En este caso no hay nada esperando.
        //reutn ...
    },
    //Entre corchetes, los eventos que se desea que lancen de nuevo la función. Si se deja vacío sólo es la creación.
    []);
    return {
        images: images,
        isLoading:isLoading
    }

}