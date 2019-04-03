import React from 'react'

function Button(){
    count = 0
    return <div>
        <button onClick={count = count + 1}>click me!</button>
        count
    </div>
}

export default Button