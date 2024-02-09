import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent = () => {
  const [countries, setCountries] = useState({ features: [] });

  const myData = [
    {
      longitude: -122.4194,
      latitude: 37.7749,
      label: 'San Francisco',
      color: 'red',
      altitude: 0.2,
    },
  ];


  useEffect(() => {
    // load data
    fetch('../../public/map.geojson')
      .then(res => res.json())
      .then(setCountries);
    console.log(countries)
  }, []);

  return (
    <div className='md:-mt-8 md:ml-20'>
      <Globe
        width={550}
        height={490}
        pointsData={myData}
        backgroundColor='#fff'
        
        showGraticules={true}
        atmosphereColor='#9b0901f8'
        atmosphereAltitude='0.25'
        globeImageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLrm8XvJkHkZOmH54vx_AwYTFNqlfnnLWJpqlodi1IJdYqSeyGk3cXVVTsC64lp3X1DOI&usqp=CAU'

        hexPolygonsData={countries.features}
        hexPolygonResolution={3}
        hexPolygonMargin={0.3}
        hexPolygonUseDots={true}
        hexPolygonColor={() => `#9B0801`}
      />
    </div>
  );
};

export default GlobeComponent;
