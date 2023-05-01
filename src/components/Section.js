import React, { useState, useEffect } from "react";

function Section() {
    function takeActivity(){
        fetch("http://www.boredapi.com/api/activity/")
        .then((res) => res.json())
        .then((data) => setMessage(data.activity))    
        // .then((data) => setKey(data.key)) 
    }
    
    const [message, setMessage] = useState("")
    // const [key, setKey] = useState("")
    

    useEffect(() => {takeActivity()}, [])

    let [favs, setFavs] = useState([])
    // let [keys, setKeys] = useState([])

    function toFavorite() {
        favs = [...favs, message]
        setFavs(favs)
    }

    // function deleteFav(){
    //     keys = [...keys, key]
    //     setKeys(keys)
    //     console.log(keys)
    // }


    return(
        <>
            <div className="Section">
            <h2>Section</h2>
            <div>{message}</div>
            <button onClick={takeActivity}>Показать ещё </button>                
            <button onClick={toFavorite}>Добавить в избранное </button>
            <h2>Избранное</h2>
            <ul>{
                    favs.map(f => <li>{f}<button>x</button></li>) 
                }
            </ul>
            </div>            
        </>
    )
}

export default Section;