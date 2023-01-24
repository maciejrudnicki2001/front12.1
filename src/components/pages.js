import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Home() {
    return (
        <div>
            <h1>[Company Website]</h1>
            <nav>
                <Link to="About">About</Link>
                <Link to="Services">Services</Link>
                <Link to="Contact">Contact</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[About]</h1>
        </div>
    );
}

export function Services() {
    return (
        <div>
            <h1>[Services]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}
export function Us() {
    return (
        <div>
            <h1>[Us]</h1>
        </div>
    );
}
export function Pl() {
    return (
        <div>
            <h1>[Pl]</h1>
        </div>
    );
}
export function De() {
    return (
        <div>
            <h1>[De]</h1>
        </div>
    );
}
export function Error404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Nie znaleziono elementu: {location.pathname}</h1>
        </div>
    );
}
