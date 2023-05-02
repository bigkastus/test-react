import React, { useState, useEffect } from "react";

function Section() {
    function takeActivity(){
        fetch("http://www.boredapi.com/api/activity/")
        .then((res) => res.json())
        .then((data) => setMessage({id:data.key, activity:data.activity}))            
    }
    
    const [message, setMessage] = useState({})

    useEffect(() => {takeActivity()}, [])

    let [favs, setFavs] = useState([])    

    function toFavorite() {
        favs = [...favs, message]        
        setFavs(favs)
    }

    function deleteFav(id){        
        favs = favs.filter((fa)=> fa.id !==  id)
        setFavs(favs)
    }
    console.log(favs)
    return(
        <>
            <div className="Section">
            <h2>Section</h2>
            <div>{message.activity}</div>
            <button onClick={takeActivity}>Показать ещё </button>                
            <button onClick={toFavorite}>Добавить в избранное </button>
            <h2>Избранное</h2>
            <ul>{                    
                  favs.map(f => <li id={f.id}>{f.activity}
                                    <button onClick={()=> deleteFav(f.id)}>x</button>
                                </li>)                     
                }
            </ul>
            </div>            
        </>
    )
}

export default Section;