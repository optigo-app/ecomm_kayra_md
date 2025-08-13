import Marquee from "react-fast-marquee";
import "./brandComponents.scss";
import { storImagePath } from "../../../../../../utils/Glob_Functions/GlobalFunction";

const BrandsComponent = () => {
  const kayralogo = [
    "logo1.png",
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo5.png",
    "logo6.png",
    // "logo8.png",
    "logo7.png",
    "logo9.png",
    "logo10.png",
    "logo11.png",
    "logo1.png",
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo5.png",
    "logo6.png",
    // "logo8.png",
    "logo7.png",
    "logo9.png",
    "logo10.png",
    "logo11.png",
  ];
  const mayrologo = [
    "logo1.png",
    "logo2.jpg",
    "logo3.png",
    "logo4.png",
    "logo1.png",
    "logo2.jpg",
    "logo3.png",
    "logo4.png",
    "logo1.png",
    "logo2.jpg",
    "logo3.png",
    "logo4.png",
  ];

  const sonasonsLogo = [
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo6.png",
    "logo2.png",
    "logo3.png",
    "logo4.png",
    "logo6.png",
  ];

  const dfineLogo = [
    "logo1.png",
    "logo2.png",
    "logo3.jpg",
    "logo4.png",
    "logo5.png",
    "logo1.png",
    "logo2.png",
    "logo3.jpg",
    "logo4.png",
    "logo5.png",
    "logo1.png",
    "logo2.png",
    "logo3.jpg",
    "logo4.png",
    "logo5.png",
  ];
  const KayralogoElements = kayralogo.map((logo, index) => (
    <img
      key={index}
      className="smr_affilitionImg"
      role="img"
      loading="lazy"
      src={`${storImagePath()}/images/HomePage/BrandLogo/kayra/${logo}`}
      alt={`Kayralogo-${index}`}
      style={{ width: "130px", objectFit: "cover", marginRight: "90px" }}
    />
  ));
  const MayoralogoElements = mayrologo.map((logo, index) => (
    <img
      key={index}
      className="smr_affilitionImg"
      role="img"
      loading="lazy"
      src={`${storImagePath()}/images/HomePage/BrandLogo/mayora/${logo}`}
      alt={`Mayoralogo-${index}`}
      style={{ width: "130px", objectFit: "cover", marginRight: "90px" }}
    />
  ));
  const SonasonslogoElements = sonasonsLogo.map((logo, index) => (
    <img
      key={index}
      className="smr_affilitionImg"
      role="img"
      loading="lazy"
      src={`${storImagePath()}/images/HomePage/BrandLogo/sonasons/${logo}`}
      alt={`Sonasonslogo-${index}`}
      style={{ width: "130px", objectFit: "cover", marginRight: "90px" }}
    />
  ));
  const dfinelogoElements = dfineLogo.map((logo, index) => (
    <img
      key={index}
      className="smr_affilitionImg"
      role="img"
      loading="lazy"
      src={`${storImagePath()}/images/HomePage/BrandLogo/dfine/${logo}`}
      alt={`Dfinelogo-${index}`}
      style={{ width: "130px", objectFit: "cover", marginRight: "90px" }}
    />
  ));
  return (
    <div id="brandsComponentID" className="smr_brandsComponentsDiv">
      {/* For kayra */}
      <p className="smr_brandsCompoents">Participation In Exhibitions</p>
      {/* For miora */}
      {/* <p className="smr_brandsCompoents">In Affiliation With</p> */}
      {/* For Sonasons */}
      {/* <p className="smr_brandsCompoents">Introducing our exclusive brands</p> */}
      <Marquee
        className="smr_brandsComponentClass"
        gradient={false}
        speed={40}
        pauseOnHover={true}
      // style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {KayralogoElements}
      </Marquee>
    </div>
  );
};

export default BrandsComponent;

{
  /* <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo1.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                />
                <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo2.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                />
                <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo3.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                />
                <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo4.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                />
                <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo5.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                />
                <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo6.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                />
                <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo1.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                />
                <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo2.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                />
                 <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo4.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                />
                 <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo5.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                />
                 <img className='smr_affilitionImg' loading="lazy" src={`${storImagePath()}/images/HomePage/BrandLogo/logo6.png`}
                    style={{ width: '130px', objectFit: 'cover', marginRight: '90px' }}
                /> */
}
