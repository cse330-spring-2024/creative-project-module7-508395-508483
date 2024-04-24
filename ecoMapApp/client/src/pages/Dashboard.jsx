"use client";
import { useEffect,useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import React from 'react';
import axios from 'axios';
import{ useLoadScript } from "@react-google-maps/api"
import usePlacesAutoComplete,{
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox, 
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxInput,
} from "@reach/combobox";
import "../styles/combobox-styles.css";
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow,} from '@vis.gl/react-google-maps';

export default function ecoMap() {
  const [markerColor, setMarkerColor] = useState("#605DE9");

  const changeMarkerColor = (color) => {
    setMarkerColor(color);
  };
    
    useLoadScript({
        googleMapsApiKey: "AIzaSyAxNlMVrV_zj4HFuApQUhDWg9q39jJsjLY",
        libraries: ["places"],
    });
    const callbackName = "YOUR_CALL_BACKNAME"

    const [showReviews, setShowReviews] = useState(false); //thithitihtihjtihjtihjtjhtihjthithj
    const toggleShowReviews = () => {
        setShowReviews(!showReviews);
    };

    const [showComments, setShowComments] = useState(false); 
    const toggleComments = () => {
        setShowComments(!showComments);
    };
        
    //const center = useMemo (() => ({lat:43.45, lng: -80.49}), []);
     const [selected, setSelected] = useState(null);

    const { user } = useContext(UserContext);
   
    if (user == null) {
        // If not logged in, redirect to the login page
        return <Navigate to="/login" />;
    } 

    const [data, setData] = useState({}); // Define setData instead of setdata
    const fetchLocations = () => {
        axios.get('/getLocations')
            .then((response) => {
                setData(response.data); // Use setData instead of setdata
                console.log(response.data)
            })
            .catch(() => {
                console.log("Error fetching locations");
            });
    };
    console.log(data);
    useEffect(() => {
        fetchLocations(); // Call fetchLocations when the component mounts
    }, []); 
    
    const [comments, cSetData] = useState({});
    const fetchComments = () => {
      axios.get('/get-comments')
        .then ((response)=> {
          cSetData(response.data);
          console.log(response.data)
        })
        .catch((error) => {
          console.log("Error fetching comments", error);
        });
    };
    useEffect(() => {
      fetchComments();
    }, []);
    //locations not getting set but why
    // const[locations, setLocation] = useState([]);
    // useEffect(()=> {
    //   axios.get('http://localhost:5173/getLocation')
    //   console.log("locations:", locations.data )
    //   .then(locations => setLocation(locations.data))
    //   .catch(err => console.log(err))
    // }, [])
    // console.log("locations:", locations);

  console.log("hi");
  const position = { lat: 38.6446, lng: -90.31382 };
  const positionHurd = { lat: 38.64338126245161, lng: -90.3129583224726 }; //1
  const positionMudd = {lat:38.643456099294596 , lng: -90.31398650189014 }; //2
  const positionPark = {lat:38.643561185354606 , lng: -90.31492925404241 }; //3 
  const positionWheeler = {lat: 38.64377559418187,lng: -90.31567802286224}; //4
  const positionDanforth = {lat: 38.6446477216334,lng: -90.31546059424431}; //5
  const positionShanedling = {lat: 38.64500462881444,lng: -90.31577015363958}; //6
  const positionDauten = {lat: 38.64527806456551,lng: -90.31547902040033}; //7
  const positionRutledge = {lat: 38.64508809878885,lng: -90.31519157238905}; //8
  const positionLee = {lat: 38.64535289943016,lng:-90.31475302991032 }; //9
  const positionBeaumont = {lat: 38.644883741102326,lng: -90.31459825021756}; //10 
  const positionUmrath = {lat: 38.644901010788445, lng: -90.31373590618372}; //11
  const positionZetcher = {lat:38.644935550144396 , lng:-90.31298780431293 }; //12
  const positionEliot = {lat:38.644431849494 , lng: -90.31293989631236}; //13
  const positionLiggetKoenig = {lat: 38.64468513940617, lng:-90.31184538273484 }; //14 
  const positionDardick = {lat:38.64577600278223 , lng:-90.31537214870272  }; //15
  const positionNemerov = {lat: 38.64568000868689, lng: -90.31432776834215 }; //16
  const positionLien = {lat:38.64557639163376 , lng: -90.31321851384197}; //17
  const map_ID = "82a79b40cfdc5f3b";
  
  const [openHurd, setOpenHurd] = useState(false);
  const [openMudd, setOpenMudd] = useState(false);
  const [openPark, setOpenPark] = useState(false);
  const [openWheeler, setOpenWheeler] = useState(false);
  const [openDanforth, setOpenDanforth] = useState(false);
  const [openShanedling, setOpenShanedling] = useState(false);
  const [openDauten, setOpenDauten] = useState(false);
  const [openRutledge, setOpenRutledge] = useState(false);
  const [openLee, setOpenLee] = useState(false);
  const [openBeaumont, setOpenBeaumont] = useState(false);
  const [openUmrath, setOpenUmrath] = useState(false);
  const [openZetcher, setOpenZetcher] = useState(false);
  const [openEliot, setOpenEliot] = useState(false);
  const [openLiggetKoenig, setOpenLiggetKoenig] = useState(false);
  const [openDardick, setOpenDardick] = useState(false);
  const [openNemerov, setOpenNemerov] = useState(false);
  const [openLien, setOpenLien] = useState(false);
  return (
    
    <APIProvider apiKey="AIzaSyAxNlMVrV_zj4HFuApQUhDWg9q39jJsjLY">
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxNlMVrV_zj4HFuApQUhDWg9q39jJsjLY&libraries=places"/>
            <script
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxNlMVrV_zj4HFuApQUhDWg9q39jJsjLY&libraries=places&callback=YOUR_CALL_BACKNAME"
></script>

       <div className="places-container">
         <PlacesAutoComplete setSelected = {setSelected} />
       </div>

      <div style={{ display: 'flex', height: '100vh' }}> 
        {/* Left Content */}
        <div style={{ position: 'absolute', top: 100, bottom: 0, left: 210.5, width: '300px', backgroundColor: '#605DE9', padding: '20px', overflowY: 'auto' }}>
          {/* Add your content here */}
          <h1>Eco Map</h1>
          <p>This is the WashU South 40 EcoMap!</p><br/>
          <h2>How To Use:</h2>
          <p>-Standard Google Maps Features <br/>
             -Click on a Marker to see Recycle Status <br/>
             -Toggle Reviews at Bottom of Screen <br/>
             -Toggle Comments at Bottom of Screen <br/>
             -Apply Recycling filter at Bottom of Screen <br/>
             -Search/Mark Address with Combobox at the Top<br/>
             -Go to Home Page to leave Rating and Reviews, logout, comments, and msg<br/>
          </p>
        </div>
        
        <div>
        <div>
  <button onClick={toggleShowReviews} style={{ marginTop: '750px' }}>Toggle Reviews</button>
  <button onClick={toggleComments} style={{ marginTop: '750px', marginLeft: '10px' }}>Toggle Comments</button>
  </div>
  {showReviews && showComments && (
  <div style={{ position: 'absolute', top: 950, left: 230, right: 230, backgroundColor: '#605DE9', padding: '10px', zIndex: 1 }}>
    <LocationReviews locations={data} />
    <div style={{ marginTop: '10px', backgroundColor: '#3C39A3', padding: '10px' }}>
      <CommentDisplay comments={comments} />
    </div>
  </div>
)}
{showReviews && !showComments&&(
  <div style={{ position: 'absolute', top: 950, left: 230, right: 230, backgroundColor: '#605DE9', padding: '10px', zIndex: 1 }}>
    <LocationReviews locations={data} />
  </div>
)}
{showComments && !showReviews&&(
  <div style={{ position: 'absolute', top: 950, left: 230, right: 230, backgroundColor: '#3C39A3', padding: '10px', zIndex: 1 }}>
    <CommentDisplay comments={comments} />
  </div>
)}

            <button onClick={() => changeMarkerColor("green")}>RecycleFilter</button>
            <button onClick={() => changeMarkerColor("#605DE9")}>UndoFilter</button>

        </div>

        {/* Map */}
        <div style={{ flex: 2 }}>
        <Map zoom={17.5} center={position} mapId={map_ID} gestureHandling={"none"} style={{ position: 'absolute', top: 100, bottom: 0, left: 550, width: '60%', height: '87.5%' }}>
            {selected && <AdvancedMarker position={selected}/>} 
           <AdvancedMarker position={positionHurd} onClick={() => setOpenHurd(true)}>
          <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
        </AdvancedMarker>
            <AdvancedMarker position={positionMudd} onClick={() => setOpenMudd(true)}>
              <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionPark} onClick={() => setOpenPark(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionWheeler} onClick={() => setOpenWheeler(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionDanforth} onClick={() => setOpenDanforth(true)}>
              <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionShanedling} onClick={() => setOpenShanedling(true)}>
              <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionDauten} onClick={() => setOpenDauten(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionRutledge} onClick={() => setOpenRutledge(true)}>
              <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionLee} onClick={() => setOpenLee(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionBeaumont} onClick={() => setOpenBeaumont(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionUmrath} onClick={() => setOpenUmrath(true)}>
              <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionZetcher} onClick={() => setOpenZetcher(true)}>
              <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionEliot} onClick={() => setOpenEliot(true)}>
              <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionLiggetKoenig} onClick={() => setOpenLiggetKoenig(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionDardick} onClick={() => setOpenDardick(true)}>
              <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionNemerov} onClick={() => setOpenNemerov(true)}>
              <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionLien} onClick={() => setOpenLien(true)}>
              <Pin background={markerColor} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>

            {openHurd && (
            <InfoWindow position={positionHurd} onCloseClick={() => setOpenHurd(false)}>
              <p style={{ color: 'blue' }}>Hurd House<br/>Recycles</p>
            </InfoWindow>)}
            {openMudd && (
            <InfoWindow position={positionMudd} onCloseClick={() => setOpenMudd(false)}>
              <p style={{ color: 'blue' }}>Mudd House<br/>Recycles</p>
            </InfoWindow>)}
            {openPark && (
            <InfoWindow position={positionPark} onCloseClick={() => setOpenPark(false)}>
              <p style={{ color: 'blue' }}>Park House<br/>No Recycling</p>
            </InfoWindow>
          )}
          {openWheeler && (
            <InfoWindow position={positionWheeler} onCloseClick={() => setOpenWheeler(false)}>
              <p style={{ color: 'blue' }}>Wheeler House<br/>No Recycling</p>
            </InfoWindow>
          )}
          {openDanforth && (
            <InfoWindow position={positionDanforth} onCloseClick={() => setOpenDanforth(false)}>
              <p style={{ color: 'blue' }}>Danforth House<br/>Recycles</p>
            </InfoWindow>
          )}
          {openShanedling && (
          <InfoWindow position={positionShanedling} onCloseClick={() => setOpenShanedling(false)}>
            <p style={{ color: 'blue' }}>Shanedling House<br/>Recycles</p>
          </InfoWindow>
        )}
        {openDauten && (
          <InfoWindow position={positionDauten} onCloseClick={() => setOpenDauten(false)}>
            <p style={{ color: 'blue' }}>Dauten House<br/>No Recycling</p>
          </InfoWindow>
        )}
        {openRutledge && (
          <InfoWindow position={positionRutledge} onCloseClick={() => setOpenRutledge(false)}>
            <p style={{ color: 'blue' }}>Rutledge House<br/>Recycles</p>
          </InfoWindow>
        )}
        {openLee && (
          <InfoWindow position={positionLee} onCloseClick={() => setOpenLee(false)}>
            <p style={{ color: 'blue' }}>Lee House<br/>No Recycling</p>
          </InfoWindow>
        )}
        {openBeaumont && (
          <InfoWindow position={positionBeaumont} onCloseClick={() => setOpenBeaumont(false)}>
            <p style={{ color: 'blue' }}>Beaumont House<br/>No Recycling</p>
          </InfoWindow>
        )}
        {openUmrath && (
          <InfoWindow position={positionUmrath} onCloseClick={() => setOpenUmrath(false)}>
            <p style={{ color: 'blue' }}>Umrath House<br/>Recycles</p>
          </InfoWindow>
        )}
        {openZetcher && (
          <InfoWindow position={positionZetcher} onCloseClick={() => setOpenZetcher(false)}>
            <p style={{ color: 'blue' }}>Zetcher House<br/>Recycles</p>
          </InfoWindow>
        )}
        {openEliot && (
          <InfoWindow position={positionEliot} onCloseClick={() => setOpenEliot(false)}>
            <p style={{ color: 'blue' }}>Eliot House<br/>Recycles</p>
          </InfoWindow>
        )}
        {openLiggetKoenig && (
          <InfoWindow position={positionLiggetKoenig} onCloseClick={() => setOpenLiggetKoenig(false)}>
            <p style={{ color: 'blue' }}>Ligget Koenig House<br/>No Recycling</p>
          </InfoWindow>
        )}
        {openDardick && (
          <InfoWindow position={positionDardick} onCloseClick={() => setOpenDardick(false)}>
            <p style={{ color: 'blue' }}>Dardick House<br/>Recycles</p>
          </InfoWindow>
        )}
        {openNemerov && (
          <InfoWindow position={positionNemerov} onCloseClick={() => setOpenNemerov(false)}>
            <p style={{ color: 'blue' }}>Nemerov House<br/>Recycles</p>
          </InfoWindow>
        )}
        {openLien && (
          <InfoWindow position={positionLien} onCloseClick={() => setOpenLien(false)}>
            <p style={{ color: 'blue' }}>Lien House<br/>Recycles</p>
          </InfoWindow>
        )}
            {/* <LocationReviews locations={data} /> */}
          </Map>
        </div>
      </div>
    </APIProvider>
  );
}

const PlacesAutoComplete = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions,
    } =  usePlacesAutoComplete();
    
    const handleSelect = async(address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = getLatLng(results[0]);
        setSelected({lat, lng})
    };

    return (
    <Combobox onSelect={handleSelect}>
        <ComboboxInput
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        disabled={!ready}
        className="combobox-input" 
        placeholder="Search an Address"/>
        <ComboboxPopover>
            <ComboboxList>
                {status === "OK" && data.map(({place_id, description}) => <ComboboxOption key= {place_id} value = {description}/>)}
            </ComboboxList>
        </ComboboxPopover>
    </Combobox>
    );
};

  function CommentDisplay({ comments }) {
    return (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center '>
            <div className='w-50'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th style={{ paddingRight: '150px' }}>User</th>
                            <th style={{ paddingRight: '150px' }}>Reply To ReviewID#</th>
                            <th style={{ paddingRight: '85px' }}>Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map(comment => (
                            <tr key={comment._id}>
                                <td style={{ paddingRight: '150px' }}>{comment.user}</td>
                                <td style={{ paddingRight: '150px' }}>{comment.postTo}</td>
                                <td style={{ paddingRight: '85px' }}>{comment.text}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


function LocationReviews({ locations }) {
    return (
        <div className='w-100 vh-100 d-flex justify-contentcenter-center align-items-center '>
            <div className='w-50'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th style={{ paddingRight: '150px' }}>ID#</th>
                            <th style={{ paddingRight: '150px' }}>User</th>
                            <th style={{ paddingRight: '150px' }}>Place</th>
                            <th style={{ paddingRight: '40px' }}>Score</th>
                            <th style={{ paddingRight: '85px' }}>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {locations.map(location => (
                            <tr key={location._id}>
                                <td style={{ paddingRight: '150px' }}>{location._id}</td>
                                <td style={{ paddingRight: '150px' }}>{location.reviewer}</td>
                                <td style={{ paddingRight: '150px' }}>{location.name}</td>
                                <td style={{ paddingRight: '40px' }}>{location.Score}/5</td>
                                <td style={{ paddingRight: '85px' }}>{location.Review}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
