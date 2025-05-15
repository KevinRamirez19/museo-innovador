import { useState } from 'react';
import { FaTimes, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export const Contacto = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setFormData({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '220%',
        backgroundImage: `url('https://blog.naturlider.com/wp-content/uploads/2020/03/AdobeStock_309195144-post-dia-mundial-naturaleza.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 20px',
        color: '#fff',
        textShadow: '1px 1px 4px #000',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1 style={{ fontSize: '3rem', textAlign: 'center', fontWeight: 'bold', marginBottom: '40px' }}>
        Contáctanos
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            borderRadius: '20px',
            padding: '30px',
            maxWidth: '500px',
            width: '100%',
            boxShadow: '0 15px 40px rgba(0,0,0,0.7)',
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '10px',
                border: 'none',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="correo">Correo:</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '10px',
                border: 'none',
              }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={5}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '10px',
                border: 'none',
                resize: 'none',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(135deg, #00c6ff, #0072ff)',
              color: '#fff',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
            }}
          >
            Enviar mensaje
          </button>
        </form>

        {/* Mapa */}
        <div
          style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0,0,0,0.7)',
            maxWidth: '500px',
            width: '100%',
          }}
        >
          <iframe
            title="Mapa Tibirita"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.989416419319!2d-73.51158828591677!3d5.049583596317832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4069242df2c74d%3A0xb41b4e410f4c2e0e!2sTibirita%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1687207075180!5m2!1ses!2sco"
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      {/* Íconos sociales */}
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h3>Síguenos en redes sociales</h3>
        <div style={{ fontSize: '1.8rem', display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '15px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00c6ff' }}>
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e1306c' }}>
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#1da1f2' }}>
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#25D366' }}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Modal de confirmación */}
      {modalOpen && (
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
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#002244',
              borderRadius: '20px',
              maxWidth: '400px',
              padding: '30px',
              color: '#fff',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            <button
              onClick={cerrarModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '25px',
                fontSize: '1.8rem',
                border: 'none',
                background: 'transparent',
                color: '#00c6ff',
                cursor: 'pointer',
              }}
              aria-label="Cerrar modal"
            >
              <FaTimes />
            </button>
            <h2 style={{ marginBottom: '15px', color: '#00c6ff' }}>¡Gracias por tu mensaje!</h2>
            <p>Nos pondremos en contacto contigo muy pronto.</p>
          </div>
        </div>
      )}
    </div>
  );
};
