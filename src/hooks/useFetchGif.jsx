import { useEffect, useState } from "react"
import { getGif } from "../helpers/funcionBuscarGif";




export const useFetchGifs = (Element) => {



    ///estado para este hooks
    const [state, setstate] = useState({
        data: [],
        loading: true

    });


    useEffect(() => {
        
            getGif(Element)
            .then(img => {
                setTimeout(() => 
                { setstate({
                data: img,
                loading: false
            });  
        
        
        }, 1000);
        
    
    })
   
   
    }, [Element]);




    return state  //R   {data:[], loadin: true}
}