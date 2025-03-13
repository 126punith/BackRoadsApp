import React from 'react'
import Title from '../reusableComponents/Title'
import { services } from '../utils/data'

function Services() {
  return (
    <section className="section services" id="services">
   <Title title={"our"} subTitle={"services"}/>
    <div className="section-center services-center">
   {services.map((data) => {
    const {description,icon,id,title} = data
    return(
        <article className="service" key={id}>
        <span className="service-icon">
          <i className={icon}></i>
        </span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">
            {description}
          </p>
        </div>
      </article>
    )
   })}

    </div>
  </section>
  )
}

export default Services
