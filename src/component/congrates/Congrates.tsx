import React from 'react'
interface Cprops{
    success?:boolean
}
const Congrates = ({success}:Cprops) => {
    return (
        <div data-test="component-congrats">
            
            {success&& <span data-test="message-congrats">Congratulations!! You got the word</span>}
        </div>
    )
}

export default Congrates;   
