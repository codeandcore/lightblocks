import React from "react";

const InfoPlatefrom = ({title, subtitle, description, readmore_text}) =>{
    return(
        <div className="platfrom_box">
            <h2>{subtitle}</h2>
            <p>{description}</p>
            {readmore_text && <button className="btn">{readmore_text}</button>}
        </div>
    );
}

export default InfoPlatefrom;