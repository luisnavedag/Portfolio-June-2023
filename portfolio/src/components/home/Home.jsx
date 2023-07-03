import React from "react";
import styles from "./Home.module.css";
import TypeIt from "typeit-react";


export default function Home(props){
    return (
        <div className={styles.container}>
            <div className={styles.homeContent}>
                <h3>Hola, mi nombre es</h3>
                <h1 style={{marginTop: "-30px", fontSize: "50px"}}>Luis Naveda</h1>
                <h3 style={{marginTop: "-39px"}}>Y soy                      <TypeIt options={{speed: 50, waitUntilVisible: true,}}><span style={{color: "#02ECFF", fontSize: "25px"}}>Full Stack Developer</span></TypeIt> </h3>
                <p>Soy un apasionado de la programación. Desde febrero de 2021, he adquirido habilidades en JavaScript, HTML, CSS y React, y actualmente estoy ampliando mis conocimientos como estudiante de Desarrollo Full Stack en el bootcamp de SoyHenry. Mi autodisciplina, adaptabilidad y disposición para enfrentar desafíos me impulsan a alcanzar mis metas como programador.
                </p>
                    <div className={styles.social}>
                    <a href="https://www.facebook.com/luis.navedagarcia/" target="_blank" ><i class='bx bxl-facebook'></i></a>
                    <a href="https://www.instagram.com/luisnavedag/" target="_blank"><i class='bx bxl-instagram'></i></a>
                    <a href="https://github.com/luisnavedag" target="_blank" ><i class='bx bxl-github'></i></a>
                    <a href="https://www.linkedin.com/in/luisnavedag" target="_blank"><i class='bx bxl-linkedin' ></i></a>
                    </div>
                    <a href={require("./LuisNavedaCV.pdf") } download="Luis Naveda CV" className={styles.btnDownload}>Descargar CV</a>
            </div>
            <div className={styles.profileImg}>
                <img src={require("../../assets/imagen.png")} alt="profile-pic-portfolio"/>
            </div>

        </div>
    )
}