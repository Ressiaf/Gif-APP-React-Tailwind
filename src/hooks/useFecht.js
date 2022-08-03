import React from 'react'
import { getGifs } from '../data/getGifs';

export const useFecht = ( category ) => {
    
    const [ images , setImages] = React.useState( [  ] );
    const [ loading , setLoading] = React.useState( true );
    const [ nanGifs , setNanGifs] = React.useState(false);
    const [ close , setClose] = React.useState(false);

    
    const getImages = async ( ) => {
        const newImages = await getGifs(category);
        if (newImages.length > 1 ) {
            setImages(newImages);
            setTimeout(( ) => { 
            setLoading(false)
            }, 1000);
        } else { 
            setTimeout(( ) => { 
                setLoading(false)
                setClose(!close)
                setNanGifs(true)
            }, 1000);
            return null 
        }
    }

    React.useEffect( ( ) => {
        getImages( )
    }, [ ] )
    
    return {
        images,
        loading,
        close,
        setClose,
        nanGifs
    }
    };

