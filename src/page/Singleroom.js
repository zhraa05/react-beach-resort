import React, { useContext } from 'react'
import { Roomconraxt } from '../contax'
import defaultBcg from '../images/room-1.jpeg'
import { Link, useParams, } from "react-router-dom"
import Stylehero from '../component/Stylehero'
import Baneer from '../component/Baneer'






const Singleroom = () => {
    const { slug } = useParams();
    const { getroom } = useContext(Roomconraxt);
    const room = getroom(slug);

    if (!room) {
        return (

            <div className="error">
                <h3> no such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                    back to rooms
                </Link>
            </div>
        )

    }
    const {
        name,
        price,
        description,
        capacity,
        size,
        extras,
        breakfast,
        pets,
        images,
    } = room;

    const [mainImg, ...defaultImg] = images;

    return (
        <>
            <Stylehero img={images[0] || this.state.defaultBcg}>
                <Baneer title={`${name} room`}>
                    <Link to="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Baneer>
            </Stylehero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item, index) => (
                        <img key={index} src={item} alt={name} />
                    ))}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>
                            max capacity :
                            {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>extras </h6>
                <ul className="extras">
                    {extras.map((item, index) => (
                        <li key={index}>- {item}</li>
                    ))}
                </ul>
            </section>
        </>
    );
}
export default Singleroom



