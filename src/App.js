import {React,useEffect,useState} from "react";
import { CssBaseline, Grid } from "@material-ui/core";
import {getPlacesData} from "./api/index";
import List from "./components/List/List"
import Map from "./components/Map/Map"
import Header from "./components/Header/Header"

const App=()=>{
    const [places, setPlaces]=useState([]);

    const[coordinates, setCoordinates]=useState({lat:11.847676, lng:11.847676});

    const[bounds, setBounds]=useState(null);

    useEffect(()=>{
        getPlacesData()
            .then((data)=>{
                //console.log(data)
                setPlaces(data)
            })
        
    }, []);  
    return (
        <>
            <CssBaseline/>        
            <Header/>
            <Grid container spacing={3} style={{width:"100%"}}>
            <Grid item sx={12} md={4}>
            <List/>
            </Grid>
            <Grid item sx={12} md={8}>
            <Map 
                setCoordinates={setCoordinates}
                setBounds={setBounds }
                coordinates={coordinates}
                />                
            </Grid>
            </Grid>
            
        </>
    )
}
export default App;