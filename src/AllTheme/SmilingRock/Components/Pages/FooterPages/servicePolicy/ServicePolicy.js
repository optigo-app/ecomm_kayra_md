import React, { useEffect, useState } from 'react'
import { storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';
import Footer from '../../Home/Footer/Footer';
import './ServicePolicy.modul.scss'
import { useRecoilValue } from 'recoil';
import { IsCurrentTheme } from '../../../Recoil/atom';

const ServicePolicy = () => {

  const [htmlContent, setHtmlContent] = useState('');
 const IsCurrentThemeState = useRecoilValue(IsCurrentTheme);


  useEffect(() => {

    let theme = ""
    if(IsCurrentThemeState === "1"){
      theme = "MaioraservicePolice.html"
    }else if(IsCurrentThemeState === "2"){
      theme = "servicePolice.html"
    }else if(IsCurrentThemeState === "3"){
      theme = ""
    }else if(IsCurrentThemeState === "4"){
      theme = "servicePolice.html"
    }else if(IsCurrentThemeState === "5"){
      theme = ""
    }


    // fetch(`${storImagePath()}/html/servicePolice.html`)   /*  for kayra */
    // fetch(`${storImagePath()}/html/MaioraservicePolice.html`)   /* for mairo */
      // fetch(`${storImagePath()}/html/servicePolice.html`)   /* for sonasons */

    fetch(`${storImagePath()}/html/${theme}`)
      .then((response) => response.text())
      .then((html) => {
        setHtmlContent(html);
      })
      .catch((error) => {
        throw new Error(error)
      });
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className='smr_Services_mainDiv_q'>
      <div className='daimondsEveryAbout_a'>
        <div className='service_Wrraper_main'
        >
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          <Footer />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px', backgroundColor: "#C0BBB1", color: "white" }}>
        <p style={{ margin: '0px', fontWeight: 500, cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>BACK TO TOP</p>
      </div>
    </div>
  )
}

export default ServicePolicy