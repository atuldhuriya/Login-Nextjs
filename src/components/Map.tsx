"use client";
import React, { useEffect, useRef } from 'react';

const Map = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDjsYSsrLTouzWRYkAzVCzqEVpXpc4cLHE&libraries=places`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            if (inputRef.current) {
                new (window as any).google.maps.places.Autocomplete(inputRef.current);
            }
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <React.Fragment>
            <input type='text' placeholder='Enter a place' ref={inputRef} />
            <button type='submit'>Click</button>
        </React.Fragment>
    );
};

export default Map;
