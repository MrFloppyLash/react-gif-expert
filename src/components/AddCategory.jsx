import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch'); 

    const onImputChange = ({target}) =>{
        setInputValue( target.value );
    }

    const cleanInput = () =>{
        setInputValue( "" );
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const inputValueTrimmed = inputValue.trim();
        if(inputValueTrimmed.length <= 1) return;
        onNewCategory(inputValueTrimmed);
        //setCategories(categories => [inputValue, ...categories]);
        cleanInput();
    }

  return (
    <form onSubmit={ onSubmit}>
        <input
        type="text"
        placeholder='Buscar gifts'
        value = {inputValue}
        onChange={ onImputChange }
        />
    </form>
    )
}
