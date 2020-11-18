import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {

    // FUNCIONALIDAD TRASLADADA A 'useFetchGifs'
    // const [images, setImages] = useState([]);

    // FUNIONALIDAD TRASLADADA A 'useFetchGifs
    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs))
    // }, [category])


    // Uso del Custom Hook
    const {data: images, loading} = useFetchGifs(category);
    
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className='card-grid'>
                {
                    // PASANDO EL OBJETO COMPLETO POR props
                    // images.map(img => (
                    //     <GifGridItem 
                    //         key = {img.id} 
                    //         img = {img} 
                    //     />
                    // ))

                    images.map( img => (
                        <GifGridItem 
                            key={img.id} 
                            {...img} 
                        />
                    ))
                }

                {/* <h3>{count}</h3>
                <button onClick={()=>setCount(count+1)}>Contador</button> */}
            </div>
        </>
    )
}
