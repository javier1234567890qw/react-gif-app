
export const getGif = async (Element) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(Element)}&limit=10&api_key=ZbawqAHLcWVB8sj1eUSCtFGKYrRwaIem`
    const resp = await fetch(url);
    const { data } = await resp.json();





    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.fixed_height_small.webp
        }


    });




    //regresa una promesa
    return gifs;
}
