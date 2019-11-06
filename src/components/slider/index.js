import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import * as UI from './style';

// `url(${require('../../assets/img/testimonybg.jpg')})`

class SimpleSlider extends React.Component {

    renderItems = () =>{

        const {content} = this.props

        return content.map((item , i) =>{
            return (
              <UI.Bg>
                  <div  style={{background:`linear-gradient(to right bottom, #ff717e,#343450)`, backgroundSize:'cover', backgroundPosition:'top', height:'100%', padding:'31px'}}>
                    <UI.ImageBg>
                      <i className="fa fa-user"></i>
                    </UI.ImageBg>      
                  <h4>{item.name}</h4>
                  <p className="occupation">{item.occupation}</p>
                  <p className="desc">{item.testimony}</p>
                  </div>
               
              </UI.Bg>
            )
        })
    }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
      autoplay:true,
      pauseOnFocus:true
    };
    return (
      <Slider {...settings}>
          {this.renderItems()}
       
      </Slider>
    );
  }
}

export default SimpleSlider;