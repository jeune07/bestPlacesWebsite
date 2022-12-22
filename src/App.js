import {React,useEffect,useState} from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import {getPlacesData} from "./api/index";
import List from "./components/List/List"
import Map from "./components/Map/Map"
import Header from "./components/Header/Header"

const App=()=>{
    const [places, setPlaces]= useState([]);
    const[coordinates, setCoordinates]= useState({});
    const[bounds, setBounds]= useState({});

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
            setCoordinates({lat:latitude, lng:longitude})          
            
        })

    },[])

    useEffect(()=>{
        console.log(coordinates,bounds)
                //getPlacesData(bounds.sw, bounds.ne)
                getPlacesData(bounds.sw, bounds.ne)
            .then((data)=>{
                //console.log(data)
                setPlaces(data)
            })
        
    }, [coordinates, bounds]);  
    //coordinates, bounds
    return (
        <>
            <CssBaseline/>        
            <Header/>
            <Grid container spacing={3} style={{width:"100%"}}>
            <Grid item sx={12} md={4}>
            <List places={places}/>
            </Grid>
            <Grid item sx={12} md={8}>
            <Map 
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinates}
                bounds={bounds}
                />                
            </Grid>
            </Grid>
            
        </>
    )
}
export default App;