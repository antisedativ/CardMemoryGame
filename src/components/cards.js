import { useState } from 'react'

import Card from './card'

import glasses from '../icon/glasses.png'
import mask from '../icon/mask.png'
import photo from '../icon/photo.png'
import slippers from '../icon/slippers.png'
import surf from '../icon/surf.png'
import sunbed from '../icon/sunbed.png'

function Cards() {

    const [items, setItems] = useState([
        { id: 1, key: 1, img: glasses, stat: "" },
        { id: 1, key: 2, img: glasses, stat: "" },
        { id: 2, key: 3, img: mask, stat: "" },
        { id: 2, key: 4, img: mask, stat: "" },
        { id: 3, key: 5, img: slippers, stat: "" },
        { id: 3, key: 6, img: slippers, stat: "" },
        { id: 4, key: 7, img: photo, stat: "" },
        { id: 4, key: 8, img: photo, stat: "" },
        { id: 5, key: 9, img: sunbed, stat: "" },
        { id: 5, key: 10, img: sunbed, stat: "" },
        { id: 6, key: 11, img: surf, stat: "" },
        { id: 6, key: 12, img: surf, stat: "" }
    ].sort(() => Math.random() - 0.5))

    const [prev, setPrev] = useState(-1)
    const [moves, setMoves] = useState(0)
 
    function check(current) {

        if (items[current].key !== items[prev].key ) {
            if (items[current].id === items[prev].id) {
                items[current].stat = 'correct'
                items[prev].stat = 'correct'
                setItems([...items])
                setPrev(-1)
            } else {
                items[current].stat = 'wrong'
                items[prev].stat = 'wrong'
                setItems([...items])
                setTimeout(() => {
                    items[current].stat = ''
                    items[prev].stat = ''
                    setItems([...items])
                    setPrev(-1)
                }, 700);
            }
        }
    }


    function handleClick(id) {
        
        if (prev === -1) {
            items[id].stat = 'active'
            setItems([...items])
            setPrev(id)
        } else {
            setMoves(moves + 1)
            check(id)
        }
        
    }

    function Restart() {
        setMoves(0)
        items.map(item => {
            item.stat = ''
            setItems([...items].sort(() => Math.random() - 0.5))
        })
        items[prev].stat = ''
        setPrev(-1)
    }

    return (
        <div className='wrapper'>
            <p className='moves'>Сделано ходов:  { moves }</p>
            <div className="container">
                {items.map((item, index) => (
                    <Card key={index} item={item} id={index} handleClick={handleClick}  />
                ))}
            </div>
             <button className='restart' onClick={Restart}>Начать заново!</button>
        </div>
        
        
    )
}

export default Cards;
