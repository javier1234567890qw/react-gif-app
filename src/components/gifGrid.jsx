// import { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGif';
import 'animate.css';
// import { getGif } from '../helpers/funcionBuscarGif';
import { ItemGif } from "./ItemGif"
export const GifGrid = ({ Element }) => {

    const { data, loading } = useFetchGifs(Element);


    ////////////////////////////////
    // const [Images, setImages] = useState([]);


    // useEffect(() => {

    //     ////////////////////////////////
    //     //como retorna una promesa necesitamos then y catch 
    //     getGif(Element)
    //     .then(img => setImages(img))


    // }, [Element])//si el elemento cambia va a ejecutar el evento
    ////////////////////////////////

    // useFetchGifs();




    return (
        <>
            <h3>{Element}</h3>
            {loading && 'Loading...'}


            <div className="card-grid ">

                {
                    data.map(img => (
                        <ItemGif
                            key={img.id}
                            {...img} />
                    ))
                }

            </div>

        </>
    )
}


