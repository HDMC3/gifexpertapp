import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSbumit = (e) => {
        // Metodo para evitar que la pagina se recargue
        e.preventDefault();

        if(inputValue.trim().length > 2){
            // Uso de setCategories, pasandole como argumento un callback
            // que recibe el estado actual
            setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
        
        // console.log("Submit realizado!!!")
    }

    return (
        // <>
        <form onSubmit={handleSbumit}>
            {/* <h1>{inputValue}</h1> */}
            <input 
                type="text"
                value={inputValue}
                onChange = {(handleInputChange)}
            />
        </form>
        // </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
