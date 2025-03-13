import React from 'react'
import Title from '../reusableComponents/Title'
import { tours } from '../utils/data'

function Tours() {
  return (
    <section className="section" id="tours">
   <Title title={"featured"} subTitle={"tours"}/>
  

    <div className="section-center featured-center">
    {tours.map((tour) => {
        const {country,date,days,description,id,image, money,title} = tour
        return(
            <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={image} className="tour-img" alt="" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
               {description}
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {country}
                </p>
                <p>{days} days</p>
                <p>from ${money}</p>
              </div>
            </div>
          </article>
        )
    })}
     
    </div>
  </section>
  )
}

export default Tours
