import React, { useState, useEffect } from "react";

function Section() {
    function takeActivity(){
        fetch("http://www.boredapi.com/api/activity/")
        .then((res) => res.json())
        .then((data) => setMessage([data.key, data.activity ]))    
        // .then((data) => setKey(data.key)) 
    }
    
    const [message, setMessage] = useState([])
    // const [key, setKey] = useState("")
    

    useEffect(() => {takeActivity()}, [])

    let [favs, setFavs] = useState([])
    // let [keys, setKeys] = useState([])

    function toFavorite() {
        favs = [...favs, message]
        // console.log(favs)
        // favs = favs.filter((fa)=> fa[0] !==  "9999999")
        setFavs(favs)
    }

    function deleteFav(id){
        // alert(id)
        favs = favs.filter((fa)=> fa[0] !==  id)
        setFavs(favs)
    }


    return(
        <>
            <div className="Section">
            <h2>Section</h2>
            <div>{message[1]}</div>
            <button onClick={takeActivity}>Показать ещё </button>                
            <button onClick={toFavorite}>Добавить в избранное </button>
            <h2>Избранное</h2>
            <ul>{                    
                  favs.map(f => <li id={f[0]}>{f[1]}<button onClick={()=> deleteFav(f[0])}>x</button></li>)                     
                }
            </ul>
            </div>            
        </>
    )
}

export default Section;