import { useState } from 'react'
import DropDown from '../components/DropDown'

function DropDownPage(){
    const [selection, setSelection] = useState(null)

    const handleSelection = (option) => {
        setSelection(option)
    }

    const options = [
        { label: 'Pikachu', value: 'pikachu'},
        { label: 'Charmander', value: 'charmander'},
        { label: 'Squirtle', value: 'squirtle'}
    ]

    return (
        <div className='flex'>
            <DropDown options={options} value={selection} onChange={handleSelection}/>            
            <DropDown options={options} value={selection} onChange={handleSelection}/>            
        </div>
        )
}

export default DropDownPage