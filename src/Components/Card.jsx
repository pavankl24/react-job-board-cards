import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (Prop) => {
    return (
        <div className='card'>
            <div>
                <div className="top">
                    <img src={Prop.brand} alt="" />
                    <button>Save <Bookmark size={12} /></button>
                </div>
            </div>
            <div className="center">
                <h3>{Prop.company} <span>{Prop.datePosted}</span></h3>
                <h2>{Prop.post}</h2>
                <div className='tag'>
                </div>

                <h4>{Prop.tag}</h4>
                <h4>{Prop.tag2}</h4>
            </div>
            <div className="bottom">
                <div>
                    <h3>{Prop.pay}<b> $/hr</b></h3>
                    <p>{Prop.location}</p>
                </div>
                <button>Apply Now</button>

            </div>

        </div>
    )
}

export default Card