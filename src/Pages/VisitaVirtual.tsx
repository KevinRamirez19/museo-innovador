
import './VisitaVirtual.css';

const VisitaVirtual = () => {
  return (
    <div className="visita-virtual-container">
      <h1 className="titulo">Visita Virtual</h1>
      <p className="descripcion">
        Explora nuestro museo desde la comodidad de tu hogar. Sumérgete en la historia con una experiencia inmersiva 360°.
      </p>

      <div className="video-wrapper">
        {/* Aquí puedes insertar un video o iframe de visita 360° */}
        <iframe 
          src="https://www.youtube.com/embed/ScMzIvxBSi4" 
          title="Visita Virtual"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="info-adicional">
        <h2>¿Qué puedes esperar?</h2>
        <ul>
          <li>Recorridos interactivos por las salas del museo.</li>
          <li>Información detallada sobre cada exposición.</li>
          <li>Acceso a contenido multimedia exclusivo.</li>
          <li>Fácil navegación y diseño responsivo.</li>
        </ul>
      </div>
    </div>
  );
};

export default VisitaVirtual;
