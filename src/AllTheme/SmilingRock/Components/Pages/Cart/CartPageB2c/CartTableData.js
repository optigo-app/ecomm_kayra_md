import React, { useEffect, useState } from 'react';
import QuantitySelector from './QuantitySelector';
import { GetCountAPI } from '../../../../../../utils/API/GetCount/GetCountAPI';
import { CartCount } from '../../../Recoil/atom';
import { useSetRecoilState } from 'recoil';
import Cookies from "js-cookie";
import moment from 'moment';
import { CardMedia, Skeleton } from '@mui/material';
import { formatTitleLine } from '../../../../../../utils/Glob_Functions/GlobalFunction';

const ExampleComponent = ({
    cartData,
    CurrencyData,
    qtyCount,
    CartCardImageFunc,
    noImageFound,
    decodeEntities,
    handleDecrement,
    handleIncrement,
    onRemove,
    key,
}) => {
    const [imageSrc, setImageSrc] = useState();
    const [isLoading, setisLoading] = useState(true);
    const setCartCountVal = useSetRecoilState(CartCount)
    const [storeInitData, setStoreInitData] = useState();
    const visiterId = Cookies.get('visiterId');

    const shipsDate = cartData?.shipsdate;
    const dayOfMonth = moment(shipsDate).format('D');

    const CDNDesignImageFolThumb = storeInitData?.CDNDesignImageFolThumb;
    // const fullImagePath = `${CDNDesignImageFolThumb}${item?.designno}~1.${item?.ImageExtension}`;
    const fullImagePath = `${CDNDesignImageFolThumb}${cartData?.designno}~1.jpg`;

    // const isLoading = cartData?.loading;

    useEffect(() => {
        const delay = (key + 1) * 200;

        const timer = setTimeout(() => {
            setisLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [key]);


    const loginInfo = JSON.parse(sessionStorage.getItem("loginUserDetail"));

    useEffect(() => {
        const storeinitData = JSON.parse(sessionStorage.getItem('storeInit'));
        setStoreInitData(storeinitData)
    }, [])

    // useEffect(() => {
    //     if (cartData?.ImageCount > 0) {
    //         CartCardImageFunc(cartData).then((src) => {
    //             setImageSrc(src);
    //         });
    //     } else {
    //         setImageSrc(noImageFound);
    //     }
    // }, [cartData]);

    // const handleRemovecartData = (cartData) => {
    //     onRemove(cartData)
    //     setTimeout(() => {
    //         if (countstatus) {
    //             GetCountAPI(visiterId).then((res) => {
    //                 
    //                 setCartCountVal(res?.cartcount);
    //             })
    //         }
    //     }, 500)
    // }

    const handleRemovecartData = async (item) => {
        const returnValue = await onRemove(item);
        if (returnValue?.msg == "success") {
            GetCountAPI(visiterId).then((res) => {
                setCartCountVal(res?.cartcount);
            })
        }
    };

    useEffect(() => {
        const img = new Image();
        img.src = cartData?.images;
        img.onload = () => setImageSrc(cartData?.images);
        img.onerror = () => {
            if (cartData?.ImageCount > 0 && fullImagePath) {
                setImageSrc(fullImagePath);
            } else {
                setImageSrc(noImageFound);
            }
        };
    }, [cartData]);

    return (
        <table className="smr_B2C-table smr_B2C-table-xs">
            <tbody>
                <tr key={cartData.id} className="smr_B2C-cartData-row">
                    <td className='smr_b2cCartImagetd'>
                        {isLoading === true ? (
                            <CardMedia
                                sx={{
                                    width: "10rem",
                                    height: "9rem",
                                    '@media (max-width: 1350px)': {
                                        width: "9rem",
                                    },
                                    '@media (max-width: 840px)': {
                                        width: "10rem",
                                    },
                                    '@media (max-width: 650px)': {
                                        width: "9rem",
                                    },
                                }}
                            >
                                <Skeleton
                                    animation="wave"
                                    variant="rect"
                                    width="100%"
                                    height="100%"
                                />
                            </CardMedia>
                        ) : (
                            <img
                                className='smr_b2ccartImage'
                                src={imageSrc}
                                alt={` `}
                                draggable={true}
                                onContextMenu={(e) => e.preventDefault()}
                                style={{
                                    border: 'none',
                                    outline: 'none',
                                    boxShadow: 'none',
                                    '&:focus': { outline: 'none' },
                                    '&:active': { outline: 'none' },
                                }}
                                loading='lazy'
                            />
                        )}
                    </td>
                    <td className='smr_b2ccartContentTd'>
                        <p className='smr_b2ccartContentTitle' title="Titleline">{formatTitleLine(cartData?.TitleLine) && cartData?.TitleLine}</p>
                        {/* <p className='smr_b2ccartContentMtDT'>{cartData?.metalcolorname} | {cartData?.MetalWeight} | {cartData?.totalGrossweight} | {cartData?.totalDiaWt} / {cartData?.totaldiamondpcs} | {cartData?.totalCSWt}  / {cartData?.totalcolorstonepcs}</p> */}
                        <p className='smr_b2ccartContentMtDT'>
                            {storeInitData?.IsMetalTypeWithColor == 1 &&
                                <>
                                    <span className='smr_b2ccartContentcartData'>{cartData?.metalcolorname}</span>
                                    <span> | </span>
                                </>
                            }
                            {storeInitData?.IsGrossWeight == 1 &&
                                <>
                                    <span className='smr_b2ccartContentcartData'>{(cartData?.Nwt || 0)?.toFixed(3)}</span>
                                </>
                            }
                            {storeInitData?.IsMetalWeight == 1 &&
                                <>
                                    <span> | </span>
                                    {Number(cartData?.Nwt) !== 0 && (
                                        <>
                                            <span className='smr_b2ccartContentcartData'>{(cartData?.Gwt || 0)?.toFixed(3)}</span>
                                        </>
                                    )}
                                </>
                            }
                            <span> | </span>
                            {storeInitData?.IsDiamondWeight == 1 &&
                                <>
                                    {(cartData?.Dwt != "0" || cartData?.Dpcs != "0") &&

                                        <span className='smr_b2ccartContentcartData'>{(cartData?.Dwt || 0)?.toFixed(3)} / {(cartData?.Dpcs || 0)}</span>
                                    }
                                </>
                            }
                            <span> | </span>
                            {storeInitData?.IsStoneWeight == 1 &&
                                <>
                                    {(cartData?.CSwt != "0" || cartData?.CSpcs != "0") &&
                                        <span className='smr_b2ccartContentcartData'>{(cartData?.CSwt || 0)?.toFixed(3)} / {(cartData?.CSpcs || 0)}</span>
                                    }
                                </>
                            }
                        </p>

                        <div className='smr_b2cCartQTRm'>

                            <QuantitySelector
                                cartData={cartData}
                                qtyCount={qtyCount}
                                handleIncrement={handleIncrement}
                                handleDecrement={handleDecrement}
                            />
                            <p className='smr_b2cCartRmBtn' onClick={() => handleRemovecartData(cartData)}>Remove</p>
                        </div>
                        <td className="smr_B2cCartshippingDayMobile" title="Shipping Info">Ships in {dayOfMonth} days</td>
                        <td className="smr_B2cCartPriceDayMobile" title="Price">
                            {storeInitData?.IsPriceShow == 1 &&
                                <span>
                                    <span
                                        className="smr_currencyFont"
                                    >
                                        {loginInfo?.CurrencyCode ?? storeInitData?.CurrencyCode}
                                    </span>
                                    {/* <span
                                    className="smr_currencyFont"
                                    dangerouslySetInnerHTML={{
                                        __html: decodeEntities(
                                            CurrencyData?.Currencysymbol
                                        ),
                                    }}
                                /> */}
                                    {" "}{(cartData?.UnitCostWithMarkUp)}
                                </span>
                            }
                        </td>
                    </td>
                    <td className="smr_B2C-text-right smr_B2cCartshippingDay" title="Shipping Info">Ships in {dayOfMonth} days</td>
                    <td className="smr_B2C-text-right smr_B2cCartPrice" title="Total">
                        {storeInitData?.IsPriceShow == 1 &&
                            <span>
                                {/* <span
                                    className="smr_currencyFont"
                                    dangerouslySetInnerHTML={{
                                        __html: decodeEntities(
                                            CurrencyData?.Currencysymbol
                                        ),
                                    }}
                                /> */}
                                <span
                                    className="smr_currencyFont"
                                >
                                    {loginInfo?.CurrencyCode ?? storeInitData?.CurrencyCode}
                                </span>
                                {" "}{(cartData?.UnitCostWithMarkUp)}
                            </span>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default ExampleComponent;
