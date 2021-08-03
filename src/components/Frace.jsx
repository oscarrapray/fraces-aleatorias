import React from 'react'

const Frace = ({result}) =>{
    const{quote,author} = result
    return(
        <div className="content-frase">
            <h2>{quote}</h2>
            <p>{author}</p>
        </div>
    )
}

export default Frace