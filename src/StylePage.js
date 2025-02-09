import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const StylePage = () => {
    return (
      <div className="container mx-auto p-8 text-center">
        <div className="w-100 min-vh-50 bg-pink-200 text-center py-5">
          <h1 className="display-3 fw-bold text-pink-800">What Are You Looking For?</h1>
          <h2 className="fs-4 text-secondary">Dress Better, Stress Less</h2>
        </div>

        <h1 className="text-3xl font-bold mb-6">Styles</h1>

        <div className="grid grid-cols-3 gap-6">
          <Link to="/style/western" className="border rounded-lg p-6 shadow-sm hover:shadow-lg block">
            <h3 className="text-lg font-medium">Western</h3>
            <p>Classic western-style outfits.</p>
          </Link>

          <Link to="/style/casual" className="border rounded-lg p-6 shadow-sm hover:shadow-lg block">
            <h3 className="text-lg font-medium">Casual</h3>
            <p>Relaxed and stylish everyday wear.</p>
          </Link>

          <Link to="/style/formal" className="border rounded-lg p-6 shadow-sm hover:shadow-lg block">
            <h3 className="text-lg font-medium">Formal</h3>
            <p>Elegant attire for special occasions.</p>
          </Link>
        </div>
      </div>
    );
  };

  export default StylePage;