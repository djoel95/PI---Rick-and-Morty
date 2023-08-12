import React from "react";
import style from "./About.module.css";
import video from "../../assets/gen2.mp4";


const About = () => {
  return (
    <div className={style.aboutContainer}>
      <h1># Sobre mí</h1>

      <div className={style.aboutContainerText}>
        <p>
          ¡Hola! Soy Joel López, un apasionado de la vida y de los retos. Nacido
          bajo el signo de Géminis, tengo 28 años de experiencia en este mundo.
          Desde joven, descubrí mi amor por la playa y el gaming, dos
          pasatiempos que me permiten relajarme y desconectar del mundo. Además
          de estos intereses, también tengo una gran pasión por los búhos. Desde
          pequeño, me ha fascinado su belleza y sabiduría. De hecho, un dato
          curioso es que los búhos son considerados símbolos de la sabiduría en
          muchas culturas antiguas, gracias a su habilidad para ver en la
          oscuridad y su agudeza mental. Como fundador de los Búhos Nocturnos,
          un grupo dedicado a la conservación y estudio de estas majestuosas
          aves, he tenido la oportunidad de aprender mucho sobre su
          comportamiento y hábitat. Esto me ha enseñado la importancia de cuidar
          y proteger nuestro entorno natural, para que las futuras generaciones
          puedan disfrutar de la belleza de la naturaleza.
        </p>
        <video autoPlay muted loop src={video}></video>

        <div className={style.aboutContainerImg}>
          <img src={video} alt="" />
        </div>
        <p>
          A lo largo de mi carrera, he trabajado en diversas áreas y sectores,
          lo que me ha brindado una amplia variedad de herramientas y
          habilidades. Me he desempeñado como productor de eventos, en la
          gastronomía y en el departamento de operaciones de una casa de cambio
          (exchange) nacional de Venezuela, siempre con el objetivo de aprender
          y crecer profesionalmente. Cada uno de estos trabajos me ha enseñado
          algo nuevo y me ha permitido adquirir habilidades valiosas que puedo
          aplicar en cualquier ámbito. Creo que es importante estar siempre
          dispuesto a aprender y a probar cosas nuevas, especialmente en un
          mundo tan cambiante como el nuestro. Por eso, siempre estoy buscando
          nuevas oportunidades y retos que me permitan seguir creciendo y
          aprendiendo. Si tienes algún proyecto interesante en mente, ¡no dudes
          en contactarme! Estoy seguro de que juntos podemos lograr grandes
          cosas.
        </p>

        <div className={style.aboutContainerImg}>
          <img src={video} alt="" />
        </div>

        <p>
          Además de mi experiencia laboral, he participado en diversos proyectos
          personales, como TuttiBollitosCcs, un proyecto gastronómico que he
          estado desarrollando durante los últimos tres años en Venezuela. Esta
          iniciativa ofrece productos con las 3 B: bueno, bonito y barato. Me
          apasiona crear cosas nuevas y deliciosas para compartir con mi
          comunidad. En mis tiempos libres, me gusta explorar y crear relaciones
          profundas con las personas que me rodean. Creo que la vida es mucho
          más rica cuando compartimos nuestras experiencias y aprendemos unos de
          otros. También disfruto los deportes y los viajes, ya que creo que es
          importante encontrar un equilibrio entre el trabajo y la vida
          personal. Siempre estoy buscando nuevos retos y oportunidades para
          crecer y aprender. Si tienes algún proyecto interesante en mente, ¡no
          dudes en contactarme! Estoy seguro de que juntos podemos lograr
          grandes cosas.
        </p>
      </div>
      <div className={style.aboutContainerImg}>
        <img src={video} alt="" className={style.img} />
      </div>
      <h1>¡Gracias por visitar mi página de About Me!</h1>
    </div>
  );
};

export default About;
