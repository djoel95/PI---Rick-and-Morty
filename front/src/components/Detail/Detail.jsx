import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./Detail.module.css";
import { FaDownload, FaShare } from "react-icons/fa";
import { useRef } from "react";

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const containerRef = useRef(null);
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });

        return setCharacter({});
    }, [id]);
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = character?.image;
        link.download = `${character?.name}.jpg`;
        link.click();
    };

    const handleShare = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
        alert("¡URL copiada al portapapeles!");
    };

    return (

        <div className={styles.container} ref={containerRef}>
            <div className={styles.containerText}>
                <h1 >{character?.name}</h1>
                <h1>{character?.status}</h1>
                <h1>{character?.species}</h1>
                <h1>{character?.gender}</h1>
            </div>
            <div className={styles.containerImage}>
                <img src={character?.image} alt={character?.name} />
                <div className={styles.buttonsContainer}>
                    <button onClick={handleDownload}>
                        <FaDownload />
                        Descargar
                    </button>
                    <button onClick={handleShare}>
                        <FaShare />
                        Compartir
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Detail;
