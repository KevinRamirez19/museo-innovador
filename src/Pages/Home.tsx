import { useState } from 'react';
import { FaHome, FaInfoCircle, FaImages, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';
import './Home.css';
import { Link } from 'react-router-dom';

interface ModalContent {
  title: string;
  description: string;
  image: string;
}

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    title: '',
    description: '',
    image: '',
  });

  const openModal = (title: string, description: string, image: string) => {
    setModalContent({ title, description, image });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const exposiciones = [
    {
      titulo: 'Puente de boyaca',
      imagen: 'https://imagenes.eltiempo.com/files/og_thumbnail/uploads/2019/02/26/5c75671a198e1.jpeg',
    },
    {
      titulo: 'Guerra de los mil dias',
      imagen: 'https://bayanodigital.com/wp-content/uploads/2018/05/Representai%C3%B3n-de-la-Guerra-de-los-Mil-D%C3%ADas.jpg',
    },
    {
      titulo: 'Carnaval de Barranquilla',
      imagen: 'https://carnavaldebarranquilla.org/wp-content/uploads/2019/06/Marimondas-de-Barrio-Abajo.jpg',
    },
  ];

  const eventos = [
    {
      titulo: 'Evento 1',
      descripcionCorta: 'Descripción breve',
      descripcionLarga: 'Descripción detallada del Evento 1',
      imagen:
        'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2019/07/19/5d31fe81ee9f9.jpeg',
    },
    {
      titulo: 'Evento 2',
      descripcionCorta: 'Descripción breve',
      descripcionLarga: 'Descripción detallada del Evento 2',
      imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/El_Florero_de_Llorente.JPG/2560px-El_Florero_de_Llorente.JPG',
    },
    {
      titulo: 'Evento 3',
      descripcionCorta: 'Descripción breve',
      descripcionLarga: 'Descripción detallada del Evento 3',
      imagen:
        'https://blogtrip.org/wp-content/uploads/2016/05/poporo-quimbaya-dorado-museo-del-oro.jpg',
    },
    {
      titulo: 'Evento 4',
      descripcionCorta: 'Descripcion breve',
      descripcionLarga: 'Descripcion detallada del evento 4',
      imagen:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/El_Bogotazo.jpg/1200px-El_Bogotazo.jpg',
    },
  ];

  return (
    <div className="home">
    <header className="navbar">
  <div className="navbar-container">
    <div className="logo">
     
      
    </div>
   <nav className="nav">
  <ul>
    <li><Link to="/"><FaHome className="nav-icon" /> Inicio</Link></li>
    <li><Link to="/VisitaVirtual"><FaInfoCircle className="nav-icon" />Visita Virtual</Link></li>
    <li><Link to="/Exposiciones"><FaImages className="nav-icon" /> Exposiciones</Link></li>
    <li><Link to=".Pages/GamesMenu"><FaCalendarAlt className="nav-icon" /> MenuJuegos</Link></li>
    <li><Link to="/Contacto"><FaPhoneAlt className="nav-icon" /> Contacto</Link></li>
  </ul>
</nav>

  </div>
</header>


      {/* Hero Section */}
      <section className="hero">
        <h1>Bienvenido a Raices Digitales</h1>
        <p>Explora nuestras exposiciones y eventos en línea desde cualquier lugar.</p>
        <button className="btn-explore">Explorar ahora</button>
      </section>

      {/* Exposiciones */}
      <section className="exposiciones" id="exhibitions">
        <h2>Exposiciones Destacadas</h2>
        <div className="exposiciones-list">
          {exposiciones.map(({ titulo, imagen }, index) => (
            <div className="exposicion" key={index}>
              <img src={imagen} alt={titulo} />
              <h3>{titulo}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Eventos */}
      <section className="eventos" id="events">
        <h2>Próximos Eventos</h2>
        <div className="eventos-list">
          {eventos.map(({ titulo, descripcionCorta, descripcionLarga, imagen }, index) => (
            <div
              className="evento"
              key={index}
              onClick={() => openModal(titulo, descripcionLarga, imagen)}
            >
              <img src={imagen} alt={titulo} />
              <h3>{titulo}</h3>
              <p>{descripcionCorta}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal} role="button" aria-label="Cerrar modal">
              ×
            </span>
            <h2>{modalContent.title}</h2>
            <img src={modalContent.image} alt={modalContent.title} className="modal-image" />
            <p>{modalContent.description}</p>
            <button className="btn-close" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
