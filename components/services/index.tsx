import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import colors from '../../styles/colors.module.scss';


const Services = () => {
  const servicesData = [
    { title: 'Turnos médicos online' , description :'Ayuda a los proveedores de atención médica a gestionar eficientemente sus horarios y recursos, minimizando tiempos muertos y maximizando la productividad de la institución.' },
    { title: 'Experiencia del Paciente' , description :'Una aplicación intuitiva y fácil de usar simplifica el proceso de programación de citas para los pacientes, lo que mejora la accesibilidad,  lo que contribuye a una atención más centrada en el paciente.' },
    { title: 'Recordatorios Automáticos' , description :'Recordar a los pacientes sus próximas citas reduce las tasas de ausencia, lo que es beneficioso tanto para los pacientes como para los proveedores de atención médica.' },
    { title: 'Historiales Médicos Electrónicos' , description :'Los EHR permiten un acceso rápido y centralizado a la información médica del paciente desde cualquier ubicación solo con un dispositivo con acceso a internet, incluyendo información sobre diagnósticos, tratamientos, medicamentos recetados, alergias y resultados de pruebas. ' },
    { title: 'Informes y Estadísticas' , description :'La generación de informes y estadísticas puede ayudar a evaluar la eficiencia y la carga de trabajo del personal médico.' },
  ];

  return (
    <div className="services">
      {servicesData.map((service, index) => (
        <div className="service-card" key={index}>
          <h3>{service.title}</h3>
          <div>{service.description}</div>
          <button className="arrow-button">
            <IoIosArrowForward color={colors.primaryColor} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Services;