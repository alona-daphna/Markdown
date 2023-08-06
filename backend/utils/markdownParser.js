export default (markdown) => {
    console.log(markdown)
    const toHTML = markdown.content
        .replace(/###(.*)###/g, '<h3>$1</h3>')
        .replace(/##(.*)##/g, '<h2>$1</h2>')
        .replace(/#(.*)#/g, '<h1>$1</h1>')
        .replace(/\*\*(.*)\*\*/g, '<b>$1</b>')
        .replace(/~~(.*)~~/g, '<i>$1</i>')
        .replace(/----/g, '<hr>')
        .replace(/``(.*)``/g, '<code>$1</code>')
        .replace(/--(.*)--/g, '<s>$1</s>')
        .replace(/\\n/g, '<br>')

        console.log(toHTML)
    
    return toHTML
}