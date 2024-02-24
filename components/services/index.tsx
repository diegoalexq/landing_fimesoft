import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import colors from '../../styles/colors.module.scss';
import { servicesData } from '../../model/data';

const Services = () => {

  return (
    <div className="services">
      { servicesData.map((service, index) => (
        <div className='service-card' key={index}>
          <div className='service-card__container'>
            <img src={`/svg/${service.icon}`} alt={service.title}/>
            <h3 className='service-card__title'>{service.title}</h3>
            <div className='service-card__description'>{service.description}</div>
            <button className="arrow-button">
              <IoIosArrowForward color={colors.primaryColor} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;