import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header(props){
    return (
        <div className={styles.container}>
            <header className={styles.header}>
            <h5 className={styles.logo}>Luis Naveda</h5>
        
            <nav className={styles.navbar}>
            <NavLink to="/" className={styles.navLinkDeco} style={{ "--animation-order": 1 }}><h5>Home</h5></NavLink>
            <NavLink to="/" className={styles.navLinkDeco} style={{ "--animation-order": 2 }}><h5>Sobre Mi</h5></NavLink>
            <NavLink to="/" className={styles.navLinkDeco} style={{ "--animation-order": 3 }}><h5>Cursos y capacitaciones</h5></NavLink>
            <NavLink to="/" className={styles.navLinkDeco} style={{ "--animation-order": 4 }}><h5>Certificados</h5></NavLink>
            <NavLink to="/" className={styles.navLinkDeco} style={{ "--animation-order": 5 }}><h5>Proyectos</h5></NavLink>
            <NavLink to="/" className={styles.navLinkDeco} style={{ "--animation-order": 6 }}><h5>Contacto</h5> </NavLink>
            </nav>
    </header>
        </div>
    )
}



