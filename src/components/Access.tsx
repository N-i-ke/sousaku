import React from 'react';

const Access: React.FC = () => {
  return (
    <section className="access">
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Access;
