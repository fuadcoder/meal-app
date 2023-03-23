import { useGlobalContext } from "../context";
import { GrFavorite } from "react-icons/gr";
const Meals = () => {
    //const context = useGlobalContext();
    //console.log(context);
    const{ meals, loading, selectMeal, addToFavorites } = useGlobalContext();

    if(loading) {
        return <section className="loading-section">
            <h4>Loading...</h4>
        </section>
    }
    
    if(meals.length < 1) {
        return <section className="loading-section">
            <h4>Oops, No Meals Matched Your Search Term. Please Try Again.</h4>
        </section>
    }

    return <section className="section-center">
        { meals.map((singleMeal)=>{
            const {idMeal, strMeal: title, strMealThumb:image} = singleMeal
        
            return <article key={idMeal} className="single-meal">
                <img src={image} className="img" onClick={()=> selectMeal(idMeal)} />
                <footer>
                    <h5>{ title }</h5>
                    <button className="like-btn" onClick={()=> addToFavorites(idMeal)}><GrFavorite /></button>
                </footer>
            </article>
        })}
    </section>
}
 
export default Meals;