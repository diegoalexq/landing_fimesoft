import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import colors from '../../styles/colors.module.scss';


const Services = () => {
  const servicesData = [
    { title: 'Servicio 1' },
    { title: 'Servicio 2' },
    { title: 'Servicio 3' },
    { title: 'Servicio 4' },
  ];

  return (
    <div className="services">
      {servicesData.map((service, index) => (
        <div className="service-card" key={index}>
          <h3>{service.title}</h3>
          <button className="arrow-button">
            <IoIosArrowForward color={colors.primaryColor} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Services;