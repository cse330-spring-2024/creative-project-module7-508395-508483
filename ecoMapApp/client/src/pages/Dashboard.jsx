"use client";
import { useContext, useState, useMemo } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import React from 'react';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow,} from '@vis.gl/react-google-maps';

export default function ecoMap() {
    
    // const {isLoaded} = UseLoadScript({
    //     googleMapsApiKey: "AIzaSyAxNlMVrV_zj4HFuApQUhDWg9q39jJsjLY",
    //     libraries: ["places"],
    // });

    const { user } = useContext(UserContext);
   
    if (user == null) {
        // If not logged in, redirect to the login page
        return <Navigate to="/login" />;
    } 

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
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxNlMVrV_zj4HFuApQUhDWg9q39jJsjLY&loading=async&libraries=places&callback=initMap">
      </script>
{/* 
      <div className="places-container">
        <PlacesAutoComplete setSelected = {setSelected} />
      </div>
        {selected && <Marker position={selected}/>} */}

      <div style={{ display: 'flex', height: '100vh' }}> 
        {/* Left Content */}
        <div style={{ position: 'absolute', top: 100, bottom: 0, left: 210.5, width: '300px', backgroundColor: '#605DE9', padding: '20px', overflowY: 'auto' }}>
          {/* Add your content here */}
          <h2>Eco Map</h2>
          <p>This is the echo Map.</p>
        </div>
        
        {/* Map */}
        <div style={{ flex: 2 }}>
        <Map zoom={17.5} center={position} mapId={map_ID} gestureHandling={"none"} style={{ position: 'absolute', top: 100, bottom: 0, left: 550, width: '60%', height: '87.5%' }}>
          <AdvancedMarker position={positionHurd} onClick={() => setOpenHurd(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionMudd} onClick={() => setOpenMudd(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionPark} onClick={() => setOpenPark(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionWheeler} onClick={() => setOpenWheeler(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionDanforth} onClick={() => setOpenDanforth(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionShanedling} onClick={() => setOpenShanedling(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionDauten} onClick={() => setOpenDauten(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionRutledge} onClick={() => setOpenRutledge(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionLee} onClick={() => setOpenLee(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionBeaumont} onClick={() => setOpenBeaumont(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionUmrath} onClick={() => setOpenUmrath(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionZetcher} onClick={() => setOpenZetcher(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionEliot} onClick={() => setOpenEliot(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionLiggetKoenig} onClick={() => setOpenLiggetKoenig(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionDardick} onClick={() => setOpenDardick(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionNemerov} onClick={() => setOpenNemerov(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>
            <AdvancedMarker position={positionLien} onClick={() => setOpenLien(true)}>
              <Pin background={"#605DE9"} borderColor={"black"} glyphColor={"white"} />
            </AdvancedMarker>

            {openHurd && (
            <InfoWindow position={positionHurd} onCloseClick={() => setOpenHurd(false)}>
              <p>Hurd House</p>
              <button onClick={() => console.log("hi")}>Click me!</button>
            </InfoWindow>)}
            {openMudd && (
            <InfoWindow position={positionMudd} onCloseClick={() => setOpenMudd(false)}>
              <p>Mudd House</p>
              <button onClick={() => console.log("hi")}>Click me!</button>
            </InfoWindow>)}
            {openPark && (
            <InfoWindow position={positionPark} onCloseClick={() => setOpenPark(false)}>
              <p>Park House</p>
              <button onClick={() => console.log("hi")}>Click me!</button>
            </InfoWindow>
          )}
          {openWheeler && (
            <InfoWindow position={positionWheeler} onCloseClick={() => setOpenWheeler(false)}>
              <p>Wheeler House</p>
              <button onClick={() => console.log("hi")}>Click me!</button>
            </InfoWindow>
          )}
          {openDanforth && (
            <InfoWindow position={positionDanforth} onCloseClick={() => setOpenDanforth(false)}>
              <p>Danforth House</p>
              <button onClick={() => console.log("hi")}>Click me!</button>
            </InfoWindow>
          )}
          {openShanedling && (
          <InfoWindow position={positionShanedling} onCloseClick={() => setOpenShanedling(false)}>
            <p>Shanedling House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openDauten && (
          <InfoWindow position={positionDauten} onCloseClick={() => setOpenDauten(false)}>
            <p>Dauten House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openRutledge && (
          <InfoWindow position={positionRutledge} onCloseClick={() => setOpenRutledge(false)}>
            <p>Rutledge House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openLee && (
          <InfoWindow position={positionLee} onCloseClick={() => setOpenLee(false)}>
            <p>Lee House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openBeaumont && (
          <InfoWindow position={positionBeaumont} onCloseClick={() => setOpenBeaumont(false)}>
            <p>Beaumont House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openUmrath && (
          <InfoWindow position={positionUmrath} onCloseClick={() => setOpenUmrath(false)}>
            <p>Umrath House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openZetcher && (
          <InfoWindow position={positionZetcher} onCloseClick={() => setOpenZetcher(false)}>
            <p>Zetcher House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openEliot && (
          <InfoWindow position={positionEliot} onCloseClick={() => setOpenEliot(false)}>
            <p>Eliot House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openLiggetKoenig && (
          <InfoWindow position={positionLiggetKoenig} onCloseClick={() => setOpenLiggetKoenig(false)}>
            <p>Ligget Koenig House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openDardick && (
          <InfoWindow position={positionDardick} onCloseClick={() => setOpenDardick(false)}>
            <p>Dardick House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openNemerov && (
          <InfoWindow position={positionNemerov} onCloseClick={() => setOpenNemerov(false)}>
            <p>Nemerov House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}
        {openLien && (
          <InfoWindow position={positionLien} onCloseClick={() => setOpenLien(false)}>
            <p>Lien House</p>
            <button onClick={() => console.log("hi")}>Click me!</button>
          </InfoWindow>
        )}


          </Map>
        </div>
      </div>
    </APIProvider>
  );
}

// const PlacesAutoComplete = ({ setSelected }) => {
//     const {
//         ready,
//         value,
//         setValue,
//         suggestions: {status, data},
//         clearSuggestions,
//     } =  usePlacesAutoComplete();
    
//     return (
//     <Combobox>
//         <ComboboxInput value={value}/>
//     </Combobox>
//     );
// };