 export const getGifs = async ( category ) => {
    const API_KEY = `uUMHlQI7vn70pAZ8RhfanAAbQO1cQa3G`;
    const  URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${6}&offset=0&rating=g&lang=en`
    const resp = await fetch(URL);
    const { data }= await resp.json( );


    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.original.url,
        }
    ));
    return gifs;
}