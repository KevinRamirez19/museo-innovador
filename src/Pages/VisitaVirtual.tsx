import { useState } from 'react';
import { FaTimes, FaStar, FaRegStar } from 'react-icons/fa';

const salas = [
  {
    id: 1,
    nombre: 'Sala de Arte Precolombino',
    descripcion: 'Descubre las piezas y arte de las culturas ancestrales de Colombia.',
    imagen: 'https://totenart.com/noticias/wp-content/uploads/2015/10/arte-precolombino-noticias-totenart-1024x741.jpg',
  },
  {
    id: 2,
    nombre: 'Sala de Historia Moderna',
    descripcion: 'Explora los momentos clave que marcaron la historia reciente.',
    imagen: 'https://content-historia.nationalgeographic.com.es/medio/2019/12/11/corsario5_95a39481_1280x720.jpg',
  },
  {
    id: 3,
    nombre: 'Sala de Biodiversidad',
    descripcion: 'Un recorrido por la riqueza natural y ecosistemas colombianos.',
    imagen: 'https://clinicalaveterinaria.it/wp-content/uploads/2024/05/biodiversita-450x231.jpg',
  },
  {
    id: 4,
    nombre: 'Sala de Culturas Indígenas',
    descripcion: 'Conoce las tradiciones y costumbres de los pueblos originarios.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2sjk_Rivq4ePtILDrNhTPmdeZMz_UtqYWIQ&s',
  },
  {
    id: 5,
    nombre: 'Sala de Innovación y Tecnología',
    descripcion: 'Descubre cómo la tecnología transforma nuestro presente y futuro.',
    imagen: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/10/buen-uso-tecnologia-innovacion-como-nos-ayuda-salvar-planeta-tierra-2850309.jpg?tf=3840x',
  },
  {
    id: 6,
    nombre: 'Sala de Arquitectura Colonial',
    descripcion: 'Admira la belleza y el diseño de la época colonial en Colombia.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Catedral_de_M%C3%A9xico.jpg',
  },
  {
    id: 7,
    nombre: 'Sala de Arte Contemporáneo',
    descripcion: 'Una muestra de la creatividad y expresión actual en Colombia.',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5SvRjxRcxDLMDkIvCdsnG6by6KTyqA8CGg&s',
  },
];

export const VisitaVirtual = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [salaActiva, setSalaActiva] = useState<typeof salas[0] | null>(null);
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [salaMapaActiva, setSalaMapaActiva] = useState<number | null>(null);

  const abrirModal = (sala: typeof salas[0]) => {
    setSalaActiva(sala);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setSalaActiva(null);
  };

  // Función para marcar o desmarcar favorito
  const toggleFavorito = (id: number) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  // Simulación mapa interactivo: al hacer clic en una sala, se activa en el mapa
  const seleccionarEnMapa = (id: number) => {
    setSalaMapaActiva(id === salaMapaActiva ? null : id);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '130%',
        backgroundImage: `url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1470&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#f0f0f5',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
      }}
    >
      <h1
        style={{
          fontSize: '3rem',
          marginBottom: '30px',
          fontWeight: '700',
          letterSpacing: '1.5px',
        }}
      >
        Visita Virtual
      </h1>

      {/* Mapa interactivo (simulado) */}
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderRadius: '20px',
          padding: '20px',
          marginBottom: '40px',
          width: '90%',
          maxWidth: '1100px',
          color: '#ffd700',
          fontWeight: '700',
          fontSize: '1.2rem',
          textAlign: 'center',
          boxShadow: '0 8px 30px rgba(255, 215, 0, 0.7)',
        }}
      >
        {salaMapaActiva
          ? `Mapa: Sala seleccionada → ${
              salas.find((s) => s.id === salaMapaActiva)?.nombre
            }`
          : 'Mapa interactivo: Haz clic en una sala para destacarla aquí'}
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '1100px',
          width: '100%',
        }}
      >
        {salas.map((sala) => {
          const esFavorito = favoritos.includes(sala.id);
          const estaEnMapa = salaMapaActiva === sala.id;

          return (
            <div
              key={sala.id}
              onClick={() => abrirModal(sala)}
              style={{
                backgroundColor: estaEnMapa
                  ? 'rgba(255, 215, 0, 0.25)'
                  : 'rgba(255, 255, 255, 0.12)',
                borderRadius: '20px',
                maxWidth: '320px',
                width: '100%',
                boxShadow: estaEnMapa
                  ? '0 0 20px 5px rgba(255, 215, 0, 0.8)'
                  : '0 12px 25px rgba(0, 0, 0, 0.6)',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                color: '#fff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'translateY(-10px) scale(1.05)';
                target.style.boxShadow = '0 20px 40px rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                const target = e.currentTarget;
                target.style.transform = 'none';
                target.style.boxShadow = estaEnMapa
                  ? '0 0 20px 5px rgba(255, 215, 0, 0.8)'
                  : '0 12px 25px rgba(0, 0, 0, 0.6)';
              }}
            >
              <img
                src={sala.imagen}
                alt={sala.nombre}
                style={{
                  width: '100%',
                  height: '190px',
                  objectFit: 'cover',
                  filter: 'brightness(0.85)',
                  transition: 'filter 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = 'brightness(1)')}
                onMouseLeave={(e) => (e.currentTarget.style.filter = 'brightness(0.85)')}
              />
              <div
                style={{
                  padding: '20px',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.8rem',
                    marginBottom: '15px',
                    fontWeight: '700',
                    color: '#ffd700',
                    textShadow: '1px 1px 5px rgba(0,0,0,0.8)',
                  }}
                >
                  {sala.nombre}
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.5, color: '#ddd', flexGrow: 1 }}>
                  {sala.descripcion}
                </p>

                {/* Botón de favoritos */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorito(sala.id);
                  }}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: esFavorito ? '#ffd700' : '#888',
                    fontSize: '1.8rem',
                    transition: 'color 0.3s ease',
                  }}
                  aria-label={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                  title={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = esFavorito ? '#ffd700' : '#888')
                  }
                >
                  {esFavorito ? <FaStar /> : <FaRegStar />}
                </button>

                <button
                  style={{
                    marginTop: '20px',
                    padding: '10px 18px',
                    background: 'linear-gradient(135deg, #f8b500, #fceabb)',
                    border: 'none',
                    borderRadius: '12px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    color: '#333',
                    boxShadow: '0 5px 10px rgba(248, 181, 0, 0.6)',
                    transition: 'background 0.3s ease, color 0.3s ease',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    abrirModal(sala);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #fceabb, #f8b500)';
                    e.currentTarget.style.color = '#111';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #f8b500, #fceabb)';
                    e.currentTarget.style.color = '#333';
                  }}
                >
                  Ver más
                </button>

                {/* Botón para destacar en mapa */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    seleccionarEnMapa(sala.id);
                  }}
                  style={{
                    marginTop: '12px',
                    padding: '8px 14px',
                    background: estaEnMapa ? '#ffd700' : 'rgba(255, 255, 255, 0.15)',
                    border: 'none',
                    borderRadius: '10px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    color: estaEnMapa ? '#111' : '#eee',
                    boxShadow: estaEnMapa
                      ? '0 5px 15px rgba(255, 215, 0, 0.7)'
                      : 'none',
                    transition: 'background 0.3s ease, color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#ffd700';
                    e.currentTarget.style.color = '#111';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = estaEnMapa
                      ? '#ffd700'
                      : 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.color = estaEnMapa ? '#111' : '#eee';
                  }}
                  aria-label={estaEnMapa ? 'Quitar del mapa' : 'Destacar en mapa'}
                  title={estaEnMapa ? 'Quitar del mapa' : 'Destacar en mapa'}
                >
                  {estaEnMapa ? 'Quitar del mapa' : 'Destacar en mapa'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {modalOpen && salaActiva && (
        <div
          onClick={cerrarModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1100,
            cursor: 'pointer',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#111f3f',
              borderRadius: '18px',
              maxWidth: '700px',
              width: '90%',
              padding: '30px',
              color: '#eee',
              boxShadow: '0 15px 40px rgba(0,0,0,0.7)',
              textAlign: 'center',
              position: 'relative',
              cursor: 'default',
            }}
          >
            <button
              onClick={cerrarModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '25px',
                fontSize: '2.2rem',
                border: 'none',
                background: 'transparent',
                color: '#ffd700',
                cursor: 'pointer',
                fontWeight: '700',
                transition: 'color 0.3s ease',
              }}
              aria-label="Cerrar modal"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#ffd700')}
            >
              <FaTimes />
            </button>

            <img
              src={salaActiva.imagen}
              alt={salaActiva.nombre}
              style={{
                maxHeight: '300px',
                maxWidth: '100%',
                borderRadius: '12px',
                objectFit: 'cover',
                marginBottom: '25px',
                boxShadow: '0 10px 30px rgba(255, 215, 0, 0.7)',
              }}
            />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#ffd700' }}>
              {salaActiva.nombre}
            </h2>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.6, color: '#ddd' }}>
              {salaActiva.descripcion}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
