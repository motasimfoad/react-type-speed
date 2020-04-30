const randomText = () =>{

    const text = [
        "This is text 1" ,
        "This is text 2" ,
        "This is text 3"
        ]

    return text[Math.floor(Math.random()*text.length)];
    } 



export {
    randomText,
};