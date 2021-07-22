import Emoji from '../Inheritance/Emoji'
export default class Text extends Emoji{
// eslint-disable-next-line no-useless-constructor
constructor(props){
    super(props)
}
render(){
    const decoratedText = this.addEmoji(`Emoji`, 'I am JavaScript Developer')
    return super.render(decoratedText)
}
}