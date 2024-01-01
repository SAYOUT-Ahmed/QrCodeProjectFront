// App.js
import React from 'react';
import QRCodeGeneratorForm from './components/QRCodeGeneratorForm';
import QRCodeReader from './components/QRCodeReader';
import PictureQR from './components/PictureQR';
import './App.css'; // Import your custom CSS file for additional styling

const App = () => {
  return (
    <div className="container-fluid app-container">
      <header className="app-header">
        <h1 className="text-center app-title">QR Application</h1>
      </header>
      <div className="row">
        <div className="col-md-4">
          <div className="card app-card">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">Generate QR Code</h2>
              <QRCodeGeneratorForm />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card app-card">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">Scan QR Code</h2>
              <QRCodeReader />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card app-card">
            <div className="card-body">
              <h2 className="card-title text-center mb-3">QR Code Link</h2>
              <PictureQR />
            </div>
          </div>
        </div>
      </div>
       {/* Footer */}
       <footer className="text-center mt-4">
        <p>EMSI</p>
      </footer>
    </div>
  );
};

export default App;
