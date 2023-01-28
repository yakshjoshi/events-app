
import CatEvent from '../../../src/components/events/cat-events';
const EventCatPage = ({data, pageName}) => <CatEvent data={data} pageName={pageName}/>

export default EventCatPage;



export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map((ev) => {
      return {
        params: {
          cat: ev.id.toString(),
        },
      };
    });
    console.log(allPaths);
    return {
      paths: allPaths,
      fallback: false,
    };
  }
  
  export async function getStaticProps(context) {
    console.log(context);
    const id = context?.params.cat;
    const { allEvents } = await import('/data/data.json');
  
    const data = allEvents.filter((ev) => ev.city === id);
  
    return { props: { data, pageName: id } };
  }

