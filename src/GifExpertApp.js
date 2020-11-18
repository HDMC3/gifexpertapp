import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Smaurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
        // NO ES CORRECTO MUTAR EL ESTADO DE ESTA 
        // MANERA, SE DEBE MUTAR MEDIANTE LA FUNCION 
        // DEFINIDA PARA ESO CON EL HOOK 'USESTATE'
        // categories.push("HunterXHunterX");

        // setCategories([...categories, 'HunterXHunter'])
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}/>
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    // categories.map( (category) => {
                    //     return <li key={category}>{category}</li>
                    // })
                    categories.map( category => 
                        <GifGrid key={category} category={category}/>
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
