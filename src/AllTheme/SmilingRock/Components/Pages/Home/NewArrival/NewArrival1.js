import React, { useEffect, useRef, useState } from 'react';
import './NewArrival1.scss';
import { Get_Tren_BestS_NewAr_DesigSet_Album } from '../../../../../../utils/API/Home/Get_Tren_BestS_NewAr_DesigSet_Album/Get_Tren_BestS_NewAr_DesigSet_Album';
import Pako from 'pako';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { homeLoading, loginState, smr_loginState } from '../../../Recoil/atom';
import Cookies from 'js-cookie';
import { formatRedirectTitleLine, formatter, formatTitleLine, storImagePath } from '../../../../../../utils/Glob_Functions/GlobalFunction';
import imageNotFound from "../../../Assets/image-not-found.jpg"
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';


const NewArrival = () => {
    const newArrivalRef = useRef(null);
    const [newArrivalData, setNewArrivalData] = useState('');
    const [imageUrl, setImageUrl] = useState();
    const navigation = useNavigate();
    const loginUserDetail = JSON.parse(sessionStorage.getItem("loginUserDetail"));
    const [storeInit, setStoreInit] = useState({});
    const [ring1ImageChange, setRing1ImageChange] = useState(false);
    const [ring2ImageChange, setRing2ImageChange] = useState(false);
    const islogin = useRecoilValue(smr_loginState);
    const setLoadingHome = useSetRecoilState(homeLoading);
    const [validatedData, setValidatedData] = useState([]);

    useEffect(() => {
        setLoadingHome(true);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        callAPI();
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                threshold: 0.5,
            }
        );

        if (newArrivalRef.current) {
            observer.observe(newArrivalRef.current);
        }
        return () => {
            if (newArrivalRef.current) {
                observer.unobserve(newArrivalRef.current);
            }
        };

        // const loginUserDetail = JSON.parse(sessionStorage.getItem('loginUserDetail'));
        // const storeInit = JSON.parse(sessionStorage.getItem('storeInit'));
        // const visiterID = Cookies.get('visiterId');
        // let finalID;
        // if (storeInit?.IsB2BWebsite == 0) {
        //     finalID = islogin === false ? visiterID : (loginUserDetail?.id || '0');
        // } else {
        //     finalID = loginUserDetail?.id || '0';
        // }
        // let storeinit = JSON.parse(sessionStorage.getItem("storeInit"));
        // setStoreInit(storeinit)

        // let data = JSON.parse(sessionStorage.getItem('storeInit'))
        // setImageUrl(data?.DesignImageFol);

        // Get_Tren_BestS_NewAr_DesigSet_Album("GETNewArrival", finalID).then((response) => {
        //     if (response?.Data?.rd) {
        //         setNewArrivalData(response?.Data?.rd);
        //     }
        // }).catch((err) => console.log(err))
    }, [])

    const callAPI = () => {
        const loginUserDetail = JSON.parse(sessionStorage.getItem('loginUserDetail'));
        const storeInit = JSON.parse(sessionStorage.getItem('storeInit'));
        const visiterID = Cookies.get('visiterId');
        let finalID;
        if (storeInit?.IsB2BWebsite == 0) {
            finalID = islogin === false ? visiterID : (loginUserDetail?.id || '0');
        } else {
            finalID = loginUserDetail?.id || '0';
        }
        let storeinit = JSON.parse(sessionStorage.getItem("storeInit"));
        setStoreInit(storeinit)

        let data = JSON.parse(sessionStorage.getItem('storeInit'))
        setImageUrl(data?.CDNDesignImageFol);

        Get_Tren_BestS_NewAr_DesigSet_Album("GETNewArrival", finalID).then((response) => {
            setLoadingHome(false);
            if (response?.Data?.rd) {
                setNewArrivalData(response?.Data?.rd);
            }
        }).catch((err) => console.log(err))
    }

    const checkImageAvailability = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(url);
            img.onerror = () => resolve(imageNotFound);
            img.src = url;
        });
    };

    const validateImageURLs = async () => {
        if (!newArrivalData?.length) return;
        const validatedData = await Promise.all(
            newArrivalData.map(async (item) => {
                const imageURL = `${imageUrl}${item?.designno}~1.${item?.ImageExtension}`;
                // const validatedURL = await checkImageAvailability(imageURL);
                // return { ...item, validatedImageURL: validatedURL };
                return { ...item, validatedImageURL: imageURL };
            })
        );
        setValidatedData(validatedData);
    };

    useEffect(() => {
        validateImageURLs();
    }, [newArrivalData]);

    const compressAndEncode = (inputString) => {
        try {
            const uint8Array = new TextEncoder().encode(inputString);
            const compressed = Pako.deflate(uint8Array, { to: 'string' });
            return btoa(String.fromCharCode.apply(null, compressed));
        } catch (error) {
            console.error('Error compressing and encoding:', error);
            return null;
        }
    };

    const handleNavigation = (designNo, autoCode, titleLine) => {
        let obj = {
            a: autoCode,
            b: designNo,
            m: loginUserDetail?.MetalId,
            d: loginUserDetail?.cmboDiaQCid,
            c: loginUserDetail?.cmboCSQCid,
            f: {}
        }
        let encodeObj = compressAndEncode(JSON.stringify(obj))
        // navigation(`/d/${titleLine.replace(/\s+/g, `_`)}${titleLine?.length > 0 ? "_" : ""}${designNo}?p=${encodeObj}`)
        navigation(`/d/${formatRedirectTitleLine(titleLine)}${designNo}?p=${encodeObj}`);
    }

    const decodeEntities = (html) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    const handleMouseEnterRing1 = (data) => {
        if (data?.ImageCount > 1) {
            setRing1ImageChange(true)
        }
    }
    const handleMouseLeaveRing1 = () => {
        setRing1ImageChange(false)
    }


    const handleMouseEnterRing2 = (data) => {
        if (data?.ImageCount > 1) {
            setRing2ImageChange(true)
        }
    }
    const handleMouseLeaveRing2 = () => {
        setRing2ImageChange(false)
    }

    return (
        <div ref={newArrivalRef}>
            {validatedData?.length != 0 &&
                <div className='smr_newwArr1MainDiv'>
                    <Typography variant='h4' className='smrN_NewArr1Title'>NEW ARRIVAL
                        <Link 
                        className='smr_designSetViewmoreBtn'
                          style={{
                            fontSize:"18px",
                            color:"grey",
                            textDecoration:"underline" ,
                            marginLeft:"10px",
                            textTransform:"lowercase"
                          }}
                          aria-label='Click Here to See More Products'
                          aria-live='assertive'
                          role="link"
                        onClick={() => navigation(`/p/NewArrival/?N=${btoa('NewArrival')}`)}>
                            View more
                        </Link>
                    </Typography>
                    <Grid container spacing={1} className='smr_NewArrival1product-list'>
                        {validatedData?.slice(0, 4)?.map((product, index) => (
                            <Grid item xs={6} sm={4} md={3} lg={3} key={index}>
                                <Card className='smr_NewArrproduct-card' onClick={() => handleNavigation(product?.designno, product?.autocode, product?.TitleLine)}>
                                    <div className='smr_newArr1Image'>
                                        <CardMedia
                                            component="img"
                                            className='smr_newArrImage'
                                            // image="https://www.bringitonline.in/uploads/2/2/4/5/22456530/female-diamond-necklace-jewellery-photoshoot-jewellery-photography-jewellery-photographers-jewellery-model-shoot-jewellery-product-shoot-bringitonline_orig.jpeg"
                                            image={product?.ImageCount >= 1 ?
                                                product?.validatedImageURL
                                                // `${imageUrl}${newArrivalData && product?.designno}~1.${newArrivalData && product?.ImageExtension}`
                                                : imageNotFound}
                                            alt={product?.TitleLine || `newArrivalData-${index}`}
                                            onError={(e) => {
                                                e.target.src = imageNotFound
                                            }}
                                        />
                                    </div>
                                    <CardContent className='smr_newarrproduct-info'>
                                        <Typography variant="h6" className="smr_newArrTitle">
                                            {product?.designno}
                                            {formatTitleLine(product?.TitleLine) && " - "}
                                            {formatTitleLine(product?.TitleLine) && product?.TitleLine}
                                        </Typography>
                                        <Typography variant='body2'>
                                            {storeInit?.IsGrossWeight == 1 &&
                                                <>
                                                    <span className='smr_lb3detailDT'>GWT: </span>
                                                    <span className='smr_lb3detailDT'>{(product?.Gwt || 0)?.toFixed(3)}</span>
                                                </>
                                            }
                                            {storeInit?.IsGrossWeight == 1 &&
                                                <>
                                                    <span className='smr_lb3pipe'> | </span>
                                                    <span className='smr_lb3detailDT'>NWT : </span>
                                                    <span className='smr_lb3detailDT'>{(product?.Nwt || 0)?.toFixed(3)}</span>
                                                </>
                                            }
                                            {storeInit?.IsGrossWeight == 1 &&
                                                <>
                                                    {(product?.Dwt != "0" || product?.Dpcs != "0") &&
                                                        <>
                                                            <span className='smr_lb3pipe'> | </span>
                                                            <span className='smr_lb3detailDT'>DWT: </span>
                                                            <span className='smr_lb3detailDT'>{(product?.Dwt || 0)?.toFixed(3)} / {(product?.Dpcs || 0)}</span>
                                                        </>
                                                    }
                                                </>
                                            }
                                            {storeInit?.IsGrossWeight == 1 &&
                                                <>
                                                    {(product?.CSwt != "0" || product?.CSpcs != "0") &&
                                                        <>
                                                            <span className='smr_lb3pipe'> | </span>
                                                            <span className='smr_lb3detailDT'>CWT: </span>
                                                            <span className='smr_lb3detailDT'>{(product?.CSwt || 0)?.toFixed(3)} / {(product?.CSpcs || 0)}</span>
                                                        </>
                                                    }
                                                </>
                                            }
                                        </Typography>
                                        <p className='smr_newArrPrice'>
                                            <span
                                                className="smr_currencyFont"
                                                dangerouslySetInnerHTML={{
                                                    __html: decodeEntities(
                                                        islogin ? loginUserDetail?.CurrencyCode : storeInit?.CurrencyCode
                                                    ),
                                                }}
                                            /> {formatter(product?.UnitCostWithMarkUp)}</p>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            }
        </div>

    );
}

export default NewArrival;
