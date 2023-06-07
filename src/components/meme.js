import React from 'react'
import memesData from '../memesData'

export default function Meme(){
    const [allMemeImages, setAllMemeImages] = React.useState([])

    const [meme,setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randomImage:"http://i.imgflip.com/1bij.jpg" 
    })

    function newMeme(event){
        const randomNum = Math.floor(Math.random()*allMemeImages.length)
        const url = allMemeImages[randomNum].url
        event.preventDefault()
        setMeme(prevState => (
            {
                ...prevState,
                randomImage:url
            }
        ))
        
    }

    function handleChange(event){
        const {name,value} = event.target;
        setMeme(prevState => (
            {
                ...prevState,
                [name] : value
            }
        ))
    }

    // React.useEffect(() => {
    //     fetch("https://api.imgflip.com/get_memes")
    //         .then(res => res.json())
    //         .then(data => setAllMemeImages(data.data.memes))
    // }, [])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getMemes()
    }, [])


    return(
        <div className='meme-form'>
            <form>
                <input type="text" className='top-text' placeholder='Top Text' name='topText' value={meme.topText} onChange={handleChange}/>
                <input type="text" className='bottom-text' placeholder='Bottom Text' name='bottomText' value={meme.bottomText} onChange={handleChange}/>
                <button onClick={newMeme} className='form-submit'>Get a new meme image 🖼</button>
                <div className='meme-container'>
                <img alt='newMemeImage' src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </form>
        </div>
    )
}