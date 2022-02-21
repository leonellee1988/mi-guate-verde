import React, { Fragment } from 'react';
import './organicStyles.css';

const OrganicKnowledge =()=>{
    return(
        <Fragment>

            <div 
            className="organic-title" 
            id="organic-knowledge">Conocimiento orgánico</div>

            <div className="container-videos-organic">

                <iframe 
                src="https://www.youtube.com/embed/yaxOdg7FClo" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>

                <iframe 
                src="https://www.youtube.com/embed/WYHDzBRUsFk" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
                
                <iframe 
                src="https://www.youtube.com/embed/Ld8aPlCGxog" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>

            </div>

        </Fragment>
    );
};

export default OrganicKnowledge;