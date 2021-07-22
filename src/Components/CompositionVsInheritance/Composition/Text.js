export default function Text({ addEmoji, addBracket }) {
    let text = `I am a JavaScript Programmer`
    if(addBracket){
        text = addBracket(text)
    }
    if(addEmoji){
        text = addEmoji(text, 'Emoji')
    }
    return (
        <div>
            {text}
        </div>
    )
}
