import React from 'react'
import { Helmet } from 'react-helmet-async';

class HtmlHeadManager extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
      return this.props.AllowReRender(nextProps, this.props);
    }
  
    render() {
        console.log('Helmet re-rendered');

        let finalHelmet = ""
        const basicKeywords = "R, Python, Stata, React, ReactJS, Bootstrap, Excel, Software, Azure, SQL, Tableau, Power, BI, Machine, Deep, Learning, Data, Javascript, Front, Frontend, CRISP, DM, "

        if( this.props.locale==="en"){
          finalHelmet = <Helmet >
            <html lang="en" />
            <meta name="description" content="Data scientist, software developer & Entrepreneur (www.digitalmedtools.com) in services for biomedical researchers" />
            <meta name="keywords" content={basicKeywords+"Developer, Mining, Prediction, Analytics, Analysis, Business , Intelligence"} />
          </Helmet>
        }else{
          finalHelmet = <Helmet >
            <html lang="es" />
            <meta name="description" content="Científico de datos, desarrollador de software & emprendedor (www.digitalmedtools.com) en servicios para investigadores biomédicos" />
            <meta name="keywords" content={basicKeywords+"Desarrollador, Minería, Predicción, Analítica, Datos, Inteligencia, Negocios"} />
          </Helmet>
        }

        return (
          finalHelmet
        )
    }

}

export default HtmlHeadManager