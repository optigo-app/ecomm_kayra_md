import React from 'react'
import PaymentComponent from '../../../../../../utils/Glob_Functions/PaymentComponent/PaymentComponent'

const Payment = () => {
  return (
    <div><PaymentComponent bgcolor={"#c0bbb1"}/></div>
  )
}

export default Payment


// old code 


// import React, { useEffect, useState } from 'react';
// import "./Payment.scss";
// import { IoMdArrowRoundBack } from "react-icons/io";
// import Footer from '../../Home/Footer/Footer';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { handlePaymentAPI } from '../../../../../../utils/API/OrderFlow/PlaceOrderAPI';
// import { GetCountAPI } from '../../../../../../utils/API/GetCount/GetCountAPI';
// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { CartCount, loginState, smr_loginState } from '../../../Recoil/atom';
// import OrderRemarkModal from '../OrderRemark/OrderRemark';
// import { handleOrderRemark } from '../../../../../../utils/API/OrderRemarkAPI/OrderRemarkAPI';
// import Cookies from "js-cookie";
// import { fetchEstimateTax } from '../../../../../../utils/API/OrderFlow/GetTax';
// import { formatter } from '../../../../../../utils/Glob_Functions/GlobalFunction';
// import { Skeleton } from '@mui/material';

// const Payment = () => {
//     const [isloding, setIsloding] = useState(false);
//     const [isPloding, setIsPloding] = useState(false);
//     const navigate = useNavigate();
//     const [selectedAddrData, setSelectedAddrData] = useState();
//     const [totalprice, setTotalPrice] = useState();
//     const [totalpriceText, setTotalPriceText] = useState();
//     const [finalTotal, setFinlTotal] = useState();
//     const [CurrencyData, setCurrencyData] = useState();
//     const [taxAmmountData, setTaxAmountData] = useState();

//     const setCartCountVal = useSetRecoilState(CartCount);

//     const [open, setOpen] = useState(false);
//     const [orderRemark, setOrderRemark] = useState();
//     const [orderRemakdata, setOrderRemarkData] = useState();
//     const islogin = useRecoilValue(smr_loginState)

//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     const handleRemarkChangeInternal = (e) => {
//         setOrderRemark(e.target.value);
//     };

//     // const handleSaveInternal = () => {
//     //     handleOrderRemarkFun(orderRemark);
//     //     handleClose();
//     // };


//     const handleSaveInternal = () => {
//         const trimmedRemark = orderRemark?.trim();
//         handleOrderRemarkFun(trimmedRemark);
//         handleClose();
//     };

//     const loginInfo = JSON.parse(sessionStorage.getItem("loginUserDetail"));
//     const storeInit = JSON.parse(sessionStorage.getItem("storeInit"));

//     useEffect(() => {
//         const orderRemakdata = sessionStorage.getItem("orderRemark");
//         const storeInit = JSON.parse(sessionStorage.getItem("storeInit"));
//         const storedData = JSON.parse(sessionStorage.getItem("loginUserDetail"));
//         setOrderRemarkData(orderRemakdata);
//         if (storeInit?.IsB2BWebsite != 0) {
//             setCurrencyData(storedData?.Currencysymbol)
//         } else {
//             setCurrencyData(storeInit?.Currencysymbol)
//         }
//     }, [])

//     const handleBackNavigate = () => {
//         navigate(-1);
//     }

//     useEffect(() => {
//         setIsPloding(true);
//         const fetchData = async () => {
//             try {
//                 const taxData = await fetchEstimateTax();

//                 if (taxData) {
//                     const data = taxData[0];
//                     setTaxAmountData(data);
//                 }
//             } catch (error) {
//                 console.error('Error fetching tax data:', error);
//             } finally {
//                 setIsPloding(false);
//             }

//             const selectedAddressData = JSON.parse(sessionStorage.getItem('selectedAddressId'));
//             setSelectedAddrData(selectedAddressData);

//             const totalPriceData = sessionStorage.getItem('TotalPriceData');
//             if (totalPriceData) {
//                 const totalPriceNum = parseFloat(totalPriceData);
//                 const finalTotalPrice = totalPriceNum;
//                 setFinlTotal(finalTotalPrice);
//             }
//         };

//         fetchData();
//     }, []);


//     const handlePay = async () => {
//         const visiterId = Cookies.get('visiterId');
//         setIsloding(true);
//         const paymentResponse = await handlePaymentAPI(visiterId, islogin);
//         if (paymentResponse?.Data?.rd[0]?.stat == 1) {
//             let num = paymentResponse.Data?.rd[0]?.orderno
//             sessionStorage.setItem('orderNumber', num);
//             navigate('/Confirmation',{replace :true});
//             setIsloding(false);
//             sessionStorage.removeItem("orderRemark")

//             GetCountAPI().then((res) => {
//                 setCartCountVal(res?.cartcount)
//             })

//         } else {
//             toast.error('Something went wrong!')
//         }
//     }

//     const handleOrderRemarkChange = () => {

//     }
//     const handleOrderRemarkFun = async (trimmedRemark) => {
//         try {
//             const response = await handleOrderRemark(trimmedRemark);
//             let resStatus = response?.Data?.rd[0]
//             if (resStatus?.stat == 1) {
//                 // const updatedCartData = cartData.map(cart =>
//                 //     cart.id == data.id ? { ...cart, Remarks: resStatus?.design_remark } : cart
//                 // );
//                 setOrderRemarkData(resStatus?.orderremarks)
//                 sessionStorage.setItem('orderRemark', trimmedRemark)
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     }


//     const decodeEntities = (html) => {
//         var txt = document.createElement("textarea");
//         txt.innerHTML = html;
//         return txt.value;
//     }

//     function scrollToTop() {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     }

//     return (
//         <div className='smr_paymentMainDiv'>
//             <div className='smr_paymentSecondMainDiv'>
//                 <div className='smr_PaymentContainer'>
//                     <div className='smr_paymentBackbtnDiv'>
//                         <IoMdArrowRoundBack className='smr_paymentBackbtn' onClick={handleBackNavigate} />
//                         <Link
//                             className="smr_addorderRemarkbtn"
//                             variant="body2"
//                             onClick={handleOpen}
//                         >
//                             {(orderRemakdata === "" || orderRemakdata === null || orderRemakdata === undefined) ? "Add order Remark" : "Update order Remark"}
//                         </Link>
//                     </div>
//                     <div className='smr_paymentDetailMainDiv'>
//                         <div className='smr_paymentDetailLeftSideContent'>
//                             <h2>Payment Card Method</h2>
//                             <div className='smr_billingAddress'>
//                                 <h3>Billing Address</h3>
//                                 <p>Name : {selectedAddrData?.shippingfirstname} {selectedAddrData?.shippinglastname}</p>
//                                 <p>Address : {selectedAddrData?.street}</p>
//                                 <p>City : {selectedAddrData?.city}</p>
//                                 <p>State : {selectedAddrData?.state}</p>
//                                 <p>Mobile : {selectedAddrData?.shippingmobile}</p>
//                                 <p className='smr_orderRemakrPtag' style={{ maxWidth: '400px', wordWrap: 'break-word' }}>
//                                     Order Remark : {orderRemakdata}
//                                 </p>

//                             </div>
//                         </div>
//                         <div className='smr_paymentDetailRightSideContent'>
//                             {storeInit?.IsPriceShow == 1 &&
//                                 <>
//                                     <h3>Order Summary</h3>
//                                     {!isPloding ? (
//                                         <div class="smr_order-summary">
//                                             <div class="smr_summary-item">
//                                                 <div class="smr_label">Subtotal</div>
//                                                 <div class="smr_value">
//                                                     <span className="smr_currencyFont">
//                                                         {loginInfo?.CurrencyCode ?? storeInit?.CurrencyCode}
//                                                     </span>&nbsp;
//                                                     <span>{formatter(taxAmmountData?.TotalAmount)}</span>
//                                                 </div>
//                                             </div>
//                                             <div class="smr_summary-item">
//                                                 <div class="smr_label">Estimated Tax</div>
//                                                 <div class="smr_value">
//                                                     <span className="smr_currencyFont">
//                                                         {loginInfo?.CurrencyCode ?? storeInit?.CurrencyCode}
//                                                     </span>&nbsp;
//                                                     <span>{formatter(Number((taxAmmountData?.TaxAmount)?.toFixed(3)))}</span>
//                                                 </div>
//                                             </div>
//                                             <div class="smr_summary-item">
//                                                 <div class="smr_label">Estimated Total</div>
//                                                 <div class="smr_value">
//                                                     <span className="smr_currencyFont">
//                                                         {loginInfo?.CurrencyCode ?? storeInit?.CurrencyCode}
//                                                     </span>&nbsp;
//                                                     <span>{formatter(Number((taxAmmountData?.TotalAmountWithTax)?.toFixed(3)))}</span>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ) :
//                                         <Skeleton className='smr_CartSkelton' variant="rectangular" width="100%" height={90} animation="wave" />
//                                     }
//                                 </>
//                             }
//                             <div className='smr_shippingAddress'>
//                                 <h3>Shipping Address</h3>
//                                 <p className='smr_paymentUserName'>{selectedAddrData?.shippingfirstname} {selectedAddrData?.shippinglastname}</p>
//                                 <p>{selectedAddrData?.street}</p>
//                                 <p>{selectedAddrData?.city}-{selectedAddrData?.zip}</p>
//                                 <p>{selectedAddrData?.state}</p>
//                                 <p>{selectedAddrData?.shippingmobile}</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className='smr_paymentButtonDiv'>
//                         <button className='smr_payOnAccountBtn' onClick={handlePay} disabled={isloding}>
//                             {isloding ? 'LOADING...' : 'PAY ON ACCOUNT'}
//                             {isloding && <span className="loader"></span>}
//                         </button>
//                     </div>
//                 </div>
//                 <OrderRemarkModal
//                     open={open}
//                     onClose={handleClose}
//                     remark={orderRemark}
//                     onRemarkChange={handleRemarkChangeInternal}
//                     onSave={handleSaveInternal}
//                 />
//                 <Footer />
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
//                 <p className='smr_backtoTopBtn' style={{ margin: '0px', fontWeight: 500, color: 'white', cursor: 'pointer' }} onClick={scrollToTop}>BACK TO TOP</p>
//             </div>
//         </div>
//     )
// }

// export default Payment;
