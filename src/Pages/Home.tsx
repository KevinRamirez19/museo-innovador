// ... importaciones sin cambios
import { useState } from 'react';
import { FaHome, FaInfoCircle, FaImages, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
      titulo: 'Puente de Boyacá',
      imagen: 'https://imagenes.eltiempo.com/files/og_thumbnail/uploads/2019/02/26/5c75671a198e1.jpeg',
    },
    {
      titulo: 'Guerra de los Mil Días',
      imagen: 'https://bayanodigital.com/wp-content/uploads/2018/05/Representai%C3%B3n-de-la-Guerra-de-los-Mil-D%C3%ADas.jpg',
    },
    {
      titulo: 'Carnaval de Barranquilla',
      imagen: 'https://carnavaldebarranquilla.org/wp-content/uploads/2019/06/Marimondas-de-Barrio-Abajo.jpg',
    },
  ];

  const eventos = [
    {
      titulo: 'Espada de bolivar',
      descripcionCorta: 'Símbolo de libertad y lucha por la independencia de Colombia.',
      descripcionLarga: 'La espada de Simón Bolívar representa la lucha por la emancipación de los pueblos latinoamericanos...',
      imagen: 'https://imagenes.eltiempo.com/files/image_1200_600/uploads/2019/07/19/5d31fe81ee9f9.jpeg',
    },
    {
      titulo: 'Jarron de llorente',
      descripcionCorta: 'Objeto central del grito de independencia del 20 de julio de 1810.',
      descripcionLarga: 'El Florero de Llorente es una pieza clave en la historia colombiana...',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/El_Florero_de_Llorente.JPG/2560px-El_Florero_de_Llorente.JPG',
    },
    {
      titulo: 'Poporo quimbaya',
      descripcionCorta: 'Artefacto precolombino de gran valor cultural y espiritual.',
      descripcionLarga: 'El Poporo Quimbaya es una joya de la orfebrería indígena...',
      imagen: 'https://blogtrip.org/wp-content/uploads/2016/05/poporo-quimbaya-dorado-museo-del-oro.jpg',
    },
    {
      titulo: 'Bogotazo',
      descripcionCorta: 'Violenta revuelta tras el asesinato de Jorge Eliécer Gaitán en 1948.',
      descripcionLarga: 'El Bogotazo fue una insurrección social masiva ocurrida el 9 de abril de 1948...',
      imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/El_Bogotazo.jpg/1200px-El_Bogotazo.jpg',
    },
  ];

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <header style={styles.navbar}>
        <nav style={styles.nav}>
          <Link to="/" style={styles.navLink}><FaHome /> Inicio</Link>
          <Link to="/VisitaVirtual" style={styles.navLink}><FaInfoCircle /> Visita Virtual</Link>
          <Link to="/Exposiciones" style={styles.navLink}><FaImages /> Exposiciones</Link>
          <Link to="/Contacto" style={styles.navLink}><FaPhoneAlt /> Contacto</Link>
        </nav>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <motion.h1
          style={styles.heroTitle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenido a Raíces Digitales
        </motion.h1>
        <motion.p
          style={styles.heroText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Explora nuestras exposiciones y eventos en línea desde cualquier lugar.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.heroButton}
        >
          Explorar ahora
        </motion.button>
      </section>

      {/* Exposiciones */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Exposiciones Destacadas</h2>
        <div style={styles.cardGrid}>
          {exposiciones.map(({ titulo, imagen }, i) => (
            <motion.div
              key={i}
              style={styles.card}
              whileHover={{ scale: 1.03 }}
            >
              <img src={imagen} alt={titulo} style={styles.cardImage} />
              <h3>{titulo}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Eventos */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Próximos Eventos</h2>
        <div style={styles.cardGrid}>
          {eventos.map(({ titulo, descripcionCorta, descripcionLarga, imagen }, i) => (
            <motion.div
              key={i}
              style={styles.card}
              whileHover={{ scale: 1.03 }}
              onClick={() => openModal(titulo, descripcionLarga, imagen)}
            >
              <img src={imagen} alt={titulo} style={styles.cardImage} />
              <h3>{titulo}</h3>
              <p>{descripcionCorta}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal con efecto glassmorphism */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            style={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={{
                ...styles.modalGlass,
                backgroundImage: `url(${modalContent.image})`,
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button onClick={closeModal} style={styles.closeButton}>×</button>
              <div style={styles.modalContent}>
                <h2>{modalContent.title}</h2>
                <p>{modalContent.description}</p>
                <button onClick={closeModal} style={styles.heroButton}>Cerrar</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

// 🎨 Estilos
const styles: { [key: string]: React.CSSProperties } = {
  page: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f2f5',
    color: '#333',
    scrollBehavior: 'smooth',
    width: '204%',
  },
  navbar: {
    backgroundColor: '#1a1a1a',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1rem',
  },
  hero: {
    backgroundImage: 'url("https://www.mincultura.gov.co/areas/patrimonio/publicaciones/PublishingImages/patrimonio-cultural-de-colombia.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'black',
    textAlign: 'center',
    padding: '6rem 2rem',
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  heroText: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  heroButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#ff9900',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  section: {
    padding: '4rem 2rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalGlass: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '2rem',
    maxWidth: '600px',
    width: '90%',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  modalContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '1rem',
    borderRadius: '12px',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    color: '#fff',
    cursor: 'pointer',
  },
};
