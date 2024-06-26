"use client";
import React, { useEffect, useRef, useState } from 'react';

const ApMap = () => {
    const inputRef = useRef(null);
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDjsYSsrLTouzWRYkAzVCzqEVpXpc4cLHE&libraries=places`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            if (inputRef.current) {
                const autocompleteInstance = new (window as any).google.maps.places.Autocomplete(inputRef.current);
                setAutocomplete(autocompleteInstance);

                autocompleteInstance.addListener('place_changed', () => {
                    const place = autocompleteInstance.getPlace();
                    if (place.geometry) {
                        const location = place.geometry.location;
                        if (map) {
                            map.setCenter(location);
                            new (window as any).google.maps.Marker({
                                position: location,
                                map: map,
                            });
                        } else {
                            const mapInstance = new (window as any).google.maps.Map(mapRef.current, {
                                center: location,
                                zoom: 14,
                            });
                            setMap(mapInstance);
                            new (window as any).google.maps.Marker({
                                position: location,
                                map: mapInstance,
                            });
                        }
                    }
                });
            }
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, [map]);

    const handleClick = () => {
        if (autocomplete) {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                const location = place.geometry.location;
                if (map) {
                    map.setCenter(location);
                    new (window as any).google.maps.Marker({
                        position: location,
                        map: map,
                    });
                } else {
                    const mapInstance = new (window as any).google.maps.Map(mapRef.current, {
                        center: location,
                        zoom: 14,
                    });
                    setMap(mapInstance);
                    new (window as any).google.maps.Marker({
                        position: location,
                        map: mapInstance,
                    });
                }
            }
        }
    };

    return (
        <React.Fragment>
            <input type='text' placeholder='Enter a place' ref={inputRef} />
            <button type='submit' onClick={handleClick}>Click</button>
            <div ref={mapRef} style={{ width: '100%', height: '500px', marginTop: '10px' }}></div>
        </React.Fragment>
    );
};

export default ApMap;
