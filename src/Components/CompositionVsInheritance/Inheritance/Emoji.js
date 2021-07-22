import React from 'react'
export default class Emoji extends React.Component{
    addEmoji = (emoji, text) => `${emoji} ${text} ${emoji}`
    render(override){
        let text = `I am Emoji Component`
        if(override) text = override
        return <div>{text}</div>
    }
}