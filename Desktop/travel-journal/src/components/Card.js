import React from "react"

export default function Card(props) {
    console.log(props)
    
    return (
        <div className="card">
            <img className="card--photo" src={props.imageUrl} alt={`a photo of ${props.title}`}/>
            <div className="card--info">
                <div className="card--head">
                    <h3 className="card--country">{props.location}</h3>
                    <a className="card--maps-link" href={props.googleMapsUrl} 
                    target="_blank">View on Google Maps</a>
                </div>
                <h2 className="card--title">{props.title}</h2>
                <div className="card--duration">
                    <h4 className="card--date card--start-date">{props.startDate}</h4>
                     - 
                    <h4 className="card--date card--end-date">{props.endDate}</h4>
                </div>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}