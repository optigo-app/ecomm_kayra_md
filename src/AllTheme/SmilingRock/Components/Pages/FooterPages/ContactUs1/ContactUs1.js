import React, { useState } from 'react';
import './ContactUs1.scss';
import { ContactUsAPI } from '../../../../../../utils/API/ContactUs/ContactUsAPI';
import { toast } from 'react-toastify';
import Footer from '../../Home/Footer/Footer';

const ContactUs1 = () => {

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        FullName: '',
        InQuiryCompanyName: '',
        EmailId: '',
        mobileno: '',
        Be_In_Message: '',
        Themeno: '1'
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = {};
        if (!formData.FullName) {
            errors.FullName = 'Please enter your full name';
        }
        if (!formData.InQuiryCompanyName) {
            errors.InQuiryCompanyName = 'Please enter your company name';
        }
        if (!formData.EmailId) {
            errors.EmailId = 'Please enter your email address';
        } else if (!/\S+@\S+\.\S+/.test(formData.EmailId)) {
            errors.EmailId = 'Please enter a valid email address';
        }
        if (!formData.mobileno) {
            errors.mobileno = 'Phone is required';
        } else if (!/^\d{10}$/.test(formData.mobileno)) {
            errors.mobileno = 'Phone must be a 10-digit number';
        }
        if (!formData.Be_In_Message) {
            errors.Be_In_Message = 'Please enter your message';
        }

        if (Object.keys(errors).length === 0) {
            setLoading(true);
            await ContactUsAPI(formData).then((res) => {
                if (res?.stat_msg === 'success') {
                    toast.success("Got it! We've received your query. We'll be in touch shortly.")
                    setLoading(false);
                } else {
                    toast.error("Something went wrong");
                    setLoading(false);
                }
            })
            setFormData({
                FullName: '',
                InQuiryCompanyName: '',
                EmailId: '',
                mobileno: '',
                Be_In_Message: '',
                Themeno: '1'
            });
        } else {
            setErrors(errors);
        }
    };

    return (
        <div className='smr_contactMain_div' >
            <div className='Fo-contactMain'>
                <div>
                    <div className="contact-us-container">
                        <div className="contact-left">
                            {/* <h2>Contact Us</h2> */}

                            <div className="contact-details">
                                <h4>Contact Details</h4>

                                <div className="office-block">
                                    <span className="office-label">(INDIA OFFICE)</span>
                                    <p>📍 3rd Floor, B-5,6,7, Krushnakant Compound, Vasta Devdi Rd, opp. Shivam Jeweles, Katargam, Surat, Gujarat 395004</p>
                                    <span className="office-label">Registered Office</span>
                                    <p>📍 118, SHANTINIKETAN SOCIETY, NR. LAZAMANI CHOWK, MOTA VARACHHA, Surat, Gujarat, 394101</p>
                                    <p>📞 +91 76000 44392</p>
                                </div>

                                <div className="office-block">
                                    <span className="office-label">(USA OFFICE)</span>
                                    <div className="office-location">
                                        <strong>Los Angeles:</strong>
                                        <div className="office-details">
                                            <p>📍 607 S Hill, Suite 812, Los Angeles, CA 90014</p>
                                            <p>📞 +1 (213) 331-8356</p>
                                        </div>
                                    </div>
                                    <div className="office-location" style={{ marginTop: "0.5rem" }}>
                                        <strong>NEW JERSY:</strong>
                                        <div className="office-details">
                                            <p>📍 109 Wali St West, Suite 390, Lyndhurst, NJ 07410</p>
                                            <p>📞 +973.841.6688</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form className="enquiry-form" onSubmit={handleSubmit}>
                                <h3>Submit an Enquiry</h3>

                                <div className="form-row">
                                    <div style={{ width: "100%" }}>
                                        <input
                                            style={{ width: "100%" }}
                                            type="text"
                                            placeholder="Name"
                                            name='FullName'
                                            value={formData.FullName}
                                            onChange={handleChange}
                                        />
                                        {errors.FullName && <p className='error'>{errors.FullName}</p>}
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <input
                                            style={{ width: "100%" }}
                                            type="text"
                                            placeholder="Company"
                                            name='InQuiryCompanyName'
                                            value={formData.InQuiryCompanyName}
                                            onChange={handleChange}
                                        />
                                        {errors.InQuiryCompanyName && <p className='error'>{errors.InQuiryCompanyName}</p>}
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div style={{ width: "100%" }}>
                                        <input
                                            style={{ width: "100%" }}
                                            type="email"
                                            placeholder="E-mail Address"
                                            name='EmailId'
                                            value={formData.EmailId}
                                            onChange={handleChange}
                                        />
                                        {errors.EmailId && <p className='error'>{errors.EmailId}</p>}
                                    </div>
                                    <div style={{ width: "100%" }}>
                                        <input
                                            style={{ width: "100%" }}
                                            type="text"
                                            placeholder="Phone"
                                            name='mobileno'
                                            value={formData.mobileno}
                                            onChange={handleChange}
                                        />
                                        {errors.mobileno && <p className='error'>{errors.mobileno}</p>}
                                    </div>
                                </div>

                                <textarea
                                    placeholder="How can we help?"
                                    rows="5"
                                    name='Be_In_Message'
                                    value={formData.Be_In_Message}
                                    onChange={handleChange}
                                />
                                {errors.Be_In_Message && <p className='error'>{errors.Be_In_Message}</p>}

                                <button type="submit" disabled={loading === true}>{loading === true ? 'Submitting' : 'Submit'}</button>
                            </form>
                        </div>

                        <div className="contact-right">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7438.963528905824!2d72.83037697597307!3d21.21273638143297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0fbb20ca2d%3A0xdb35ed20906bc726!2sDfine%20Jewellery!5e0!3m2!1sen!2sin!4v1752751529477!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBlock: '30px' }}>
                <p style={{ margin: '0px', fontWeight: 500, width: '100px', color: 'white', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>BACK TO TOP</p>
            </div>
        </div>
    );
};

export default ContactUs1;
