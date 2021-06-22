import React from 'react';

const FooterComponent = () => {
  return (
    <React.Fragment>
      <div className="flex-grow-1"></div>
      <footer className="footer bg-dark">
        <p>&copy; 2021 Acme.</p>
      </footer>
    </React.Fragment>
  );
}

export default FooterComponent;