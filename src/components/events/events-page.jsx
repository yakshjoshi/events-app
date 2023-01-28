import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const EventsPage = ({data}) => {

    return(
    <div className="events_page">


    
    {data.map(ev => <Link className='card' key={ev.id} href={`/events/${ev.id}`} passHref><Image width ={300} height = {300} alt={ev.title} src={ev.image}/> <h2>{ev.title}</h2></Link>)}
        

    
    </div>
    );
}

export default EventsPage;

