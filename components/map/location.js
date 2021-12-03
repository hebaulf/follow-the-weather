
const LocationMarker = props => {
    //Props
    const {
        placeName,
        pointGeo,
        setPointAndCheck,
    } = props;

    //Return
    return (
        <div className="Location clickable" onClick={() => setPointAndCheck(pointGeo)}>
            <p>{placeName}</p>
        </div>
    );
}



export default LocationMarker;