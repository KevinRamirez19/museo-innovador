import { useState, useMemo } from 'react';

interface Exposicion {
  titulo: string;
  descripcion: string;
  imagen: string;
}

const exposiciones: Exposicion[] = [

  {
    titulo: 'Puente de Boyacá',
    descripcion:
      'El Puente de Boyacá es un lugar histórico emblemático para Colombia, donde se libró la batalla que selló la independencia.',
    imagen:
      'https://imagenes.eltiempo.com/files/og_thumbnail/uploads/2019/02/26/5c75671a198e1.jpeg',
  },
  {
    titulo: 'Guerra de los Mil Días',
    descripcion:
      'Conflicto civil colombiano entre 1899 y 1902 que tuvo profundas consecuencias sociales y políticas.',
    imagen:
      'https://bayanodigital.com/wp-content/uploads/2018/05/Representai%C3%B3n-de-la-Guerra-de-los-Mil-D%C3%ADas.jpg',
  },
  {
    titulo: 'Carnaval de Barranquilla',
    descripcion:
      'Una de las fiestas folclóricas más importantes de Colombia, reconocida por la UNESCO como patrimonio cultural.',
    imagen:
      'https://carnavaldebarranquilla.org/wp-content/uploads/2019/06/Marimondas-de-Barrio-Abajo.jpg',
  },
  {
    titulo: 'La independencia de Colombia',
    descripcion:
      'Proceso histórico que llevó a la liberación del dominio español en 1819, con líderes como Simón Bolívar y Francisco de Paula Santander.',
    imagen:
      'https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/inline-images/independencia-de-colombia-historia-claves-protagonistas-antecedentes-eventos-1.jpg',
  },
  {
    titulo: 'La Conquista Española',
    descripcion:
      'Periodo de exploración y colonización en el siglo XVI que marcó el inicio de la era colonial en Colombia.',
    imagen:
      'https://images.theconversation.com/files/643556/original/file-20250120-15-9lmu80.png?ixlib=rb-4.1.0&rect=3%2C6%2C2033%2C1441&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip',
  },
  {
    titulo: 'El Dorado',
    descripcion:
      'Mito y leyenda indígena que inspiró numerosas expediciones en busca de riquezas y que forma parte de la identidad cultural colombiana.',
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gold_Museum%2C_Bogota_%2836145671394%29.jpg/250px-Gold_Museum%2C_Bogota_%2836145671394%29.jpg',
  },
  {
    titulo: 'La cultura Muisca',
    descripcion:
      'Civilización indígena precolombina reconocida por sus avanzadas técnicas en agricultura, orfebrería y organización social.',
    imagen:
      'https://muiscas.net/wp-content/uploads/Muisca_1.jpg',
  },
  {
    titulo: 'El Bogotazo',
    descripcion:
      'Disturbios y revueltas sociales en 1948 tras el asesinato de Jorge Eliécer Gaitán que marcaron el inicio de una época violenta en Colombia.',
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/El_Bogotazo.jpg/1200px-El_Bogotazo.jpg',
  },
  {
    titulo: 'La abolición de la esclavitud',
    descripcion:
      'Proceso que culminó en 1851, que liberó a miles de personas esclavizadas y transformó la sociedad colombiana.',
    imagen:
      'https://www.comisiondelaverdad.co/sites/default/files/2022-07/17.%20DPE_LIBERTAD%20DE%20VIENTRES_FONDO.jpg',
  },
  {
    titulo: 'La independencia de Cartagena',
    descripcion:
      'Uno de los episodios clave en la lucha por la independencia de Colombia, con un sitio que duró casi seis meses en 1815.',
    imagen:
      'https://www.colombiaaprende.edu.co/sites/default/files/files_public/imagenes_agenda/shutterstock_1534914158.jpg',
  },
  {
    titulo: 'El café colombiano',
    descripcion:
      'El cultivo y exportación de café ha sido fundamental para la economía y cultura de Colombia desde el siglo XIX.',
    imagen:
      'https://colombia.co/sites/default/files/articles/semillas-y-taza-de-cafe.jpeg',
  },
  {
    titulo: 'La Constitución de 1991',
    descripcion:
      'La actual carta magna que reconoce derechos fundamentales y la diversidad cultural de Colombia.',
    imagen:
      'https://www.diariojuridico.com/wp-content/uploads/2021/07/constitucion-1991-colombia-diariojuridico.jpg',
  },
  {
    titulo: 'La cultura Wayuu',
    descripcion:
      'Pueblo indígena de La Guajira con una rica tradición en artesanía, lengua y costumbres ancestrales.',
    imagen:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCqjpPFLWoOzmW6IsCo3l1cbEKth8kS8kYA&s',
  },
  {
    titulo: 'La Violencia',
    descripcion:
      'Conflicto civil interno en Colombia entre los años 1948 y 1958 que causó gran impacto social y político.',
    imagen:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8xESX4b7q7d8CvJsePuN8VJ1oQ2SRWF8WG_IoGgg88Oew33T8hBC8Q0JOATfwI96JL_ktSFHs4c1qxJlYkjr6y-ntc9FhfmAvWficBb6khp2J-O-bG4dYM5MFponFGACGsxwqr3FR6r8arG67fN7JBiYlipocp_ew5UcGK5GyOgS0S07bjnCtqrlDkxFG/w400-h236/Violenciaen%20Colombia.jpeg',
  },
  {
    titulo: 'El Carnaval de Negros y Blancos',
    descripcion:
      'Celebración cultural y folclórica de Pasto, declarada Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.',
    imagen:
      'https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/inline-images/historia-carnaval-negros-y-blancos-4.jpg',
  },
  {
    titulo: 'La exploración del Amazonas',
    descripcion:
      'Expediciones y estudios científicos en la región amazónica colombiana que han aportado al conocimiento de su biodiversidad.',
    imagen:
      'https://laamericaespanyola.com/wp-content/uploads/2016/05/descubrimiento-del-amazonas.jpg',
  },
  
];
  


const Exhibiciones = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [exposicionActiva, setExposicionActiva] = useState<Exposicion | null>(null);
  const [animateModal, setAnimateModal] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  // Filtro memoizado para optimizar búsqueda
  const exposicionesFiltradas = useMemo(() => {
    const term = busqueda.toLowerCase();
    return exposiciones.filter((exp) =>
      exp.titulo.toLowerCase().includes(term)
    );
  }, [busqueda]);

  const abrirModal = (exposicion: Exposicion) => {
    setExposicionActiva(exposicion);
    setModalOpen(true);
    setTimeout(() => setAnimateModal(true), 10);
  };

  const cerrarModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModalOpen(false);
      setExposicionActiva(null);
    }, 300);
  };

  return (
    <div
      className="exhibiciones-page"
  style={{
    maxWidth: 1495,
    margin: '0 auto',
    padding: '20px 15px',
    minHeight: '100vh',
    width: '190%',
    backgroundImage:
      'url(https://imagenes.elpais.com/resizer/v2/UIHSLF6HRRHFZHFD2PM6G4V2PA.JPG?auth=4fcdbe88b34ea4ea1b0cc7a2f70640ecd2b627fe66a0828b31a41ed2cb0f4670&width=1960&height=1103&focal=3526%2C2493)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          marginBottom: 40,
          textShadow: '0 0 10px rgba(0,0,0,0.7)',
        }}
      >
        Exposiciones
      </h1>

      {/* Buscador */}
      <div style={{ maxWidth: 400, margin: '0 auto 40px auto' }}>
        <input
          type="text"
          placeholder="Buscar exposición..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 15px',
            borderRadius: 30,
            border: 'none',
            fontSize: 16,
            boxShadow: '0 0 8px rgba(0,0,0,0.4)',
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
          }}
          onFocus={(e) => (e.target.style.boxShadow = '0 0 12px #1e90ff')}
          onBlur={(e) => (e.target.style.boxShadow = '0 0 8px rgba(0,0,0,0.4)')}
        />
      </div>

      {/* Grid de tarjetas */}
      <div
        className="tarjetas-exposiciones"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '25px',
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        {exposicionesFiltradas.map((exp) => (
          <div
            key={exp.titulo}
            className="tarjeta"
            onClick={() => abrirModal(exp)}
            style={{
              cursor: 'pointer',
              borderRadius: '12px',
              boxShadow: '0 8px 15px rgba(0,0,0,0.4)',
              overflow: 'hidden',
              textAlign: 'center',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: '#fff',
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              opacity: 0,
              animation: 'fadeInUp 0.5s forwards',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.transform = 'translateY(-10px)';
              target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.7)';
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.transform = 'translateY(0)';
              target.style.boxShadow = '0 8px 15px rgba(0,0,0,0.4)';
            }}
          >
            <img
              src={exp.imagen}
              alt={exp.titulo}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3 style={{ padding: '12px 10px', fontWeight: 'bold' }}>
              {exp.titulo}
            </h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && exposicionActiva && (
        <div
          className="modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.75)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            opacity: animateModal ? 1 : 0,
            transition: 'opacity 300ms ease',
          }}
          onClick={cerrarModal}
        >
          <div
            className="modal-contenido"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#222',
              borderRadius: '14px',
              maxWidth: '550px',
              width: '90%',
              padding: '25px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.6)',
              textAlign: 'center',
              color: '#fff',
              transform: animateModal ? 'translateY(0)' : 'translateY(30px)',
              transition: 'transform 300ms ease',
              position: 'relative',
            }}
          >
            <button
              onClick={cerrarModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                fontSize: '1.8rem',
                border: 'none',
                background: 'transparent',
                color: '#fff',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              aria-label="Cerrar modal"
            >
              &times;
            </button>
            <h2 style={{ marginBottom: 15 }}>{exposicionActiva.titulo}</h2>
            <img
              src={exposicionActiva.imagen}
              alt={exposicionActiva.titulo}
              style={{
                width: '100%',
                maxHeight: '320px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.7)',
                marginBottom: 20,
                transition: 'transform 0.3s ease',
              }}
            />
            <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#ddd' }}>
              {exposicionActiva.descripcion}
            </p>
          </div>
        </div>
      )}

      {/* Animación keyframes */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Exhibiciones;
