import { useGlobalContext } from "../context";
import { useState } from "react";

const Search = () => {
    const [text, setText] = useState('');

    const {setSearchTerm, FetchRandomMeal} = useGlobalContext();
    const handleChange = (e)=> {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text){
            setSearchTerm(text);
            //setText('');
        }  

    }

    const handleRandomMeal = () => {
        setSearchTerm(text);
            setText('');
            FetchRandomMeal();
    }
    return ( 
       <header className="search-container">
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="type favourite meal"  value={text} onChange={handleChange} className="form-input" />
            <button type="submit" className="btn">search</button>
            <button type="button" className="btn btn-hipster" onClick={handleRandomMeal }>surprise me!</button>
        </form>
        
       </header> 
     );
}
 
export default Search;