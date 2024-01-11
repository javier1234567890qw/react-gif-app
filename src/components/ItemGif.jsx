
import 'animate.css'
export const ItemGif = ({ id, title, url }) => {

    console.log(id, title, url);

    //ojo animate
    return (
        <div className='card animate__animated animate__backInDown'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}


