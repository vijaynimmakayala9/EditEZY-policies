import React from "react";

const PrivacyAndPolicy = () => {
    return (
        <div className="container-fluid py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-11 col-12">
                    {/* Header Section */}
                    <div className="text-center mb-5">
                        <h1 className="display-4 fw-bold text-primary mb-3">Privacy Policy</h1>
                        <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
                        <div className="divider mx-auto bg-gradient-primary" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
                    </div>

                    {/* Policy Content */}
                    <div className="privacy-content">
                        <div className="policy-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">1</span>
                                    Information We Collect
                                </h4>

                                <h6 className="fw-semibold mt-4">Personal Data You Provide:</h6>
                                <ul className="list-styled">
                                    <li>Full name, phone number, email address, and date of birth</li>
                                    <li>Profile picture (optional)</li>
                                    <li>Any uploaded images, designs, or creative content</li>
                                    <li>Messages, feedback, or inquiries you send to us</li>
                                </ul>

                                <h6 className="fw-semibold mt-4">Automatically Collected Data:</h6>
                                <ul className="list-styled">
                                    <li>Device details (operating system, browser, unique identifier)</li>
                                    <li>App usage (pages visited, features accessed, time spent)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="policy-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">2</span>
                                    How We Use Your Information
                                </h4>
                                <ul className="list-styled">
                                    <li>Enable access to our services and features</li>
                                    <li>Save and personalize your designs</li>
                                    <li>Enhance and optimize app performance</li>
                                    <li>Provide support and respond to your requests</li>
                                </ul>
                            </div>
                        </div>

                        <div className="policy-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">3</span>
                                    How We Protect Your Data
                                </h4>
                                <ul className="list-styled">
                                    <li>Encryption of confidential information</li>
                                    <li>Secure and reliable cloud storage</li>
                                    <li>Controlled access for authorized personnel only</li>
                                </ul>
                            </div>
                        </div>

                        <div className="policy-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">4</span>
                                    Sharing Your Data
                                </h4>
                                <p>We do <strong className="text-danger">not sell</strong> your personal data. Limited sharing may occur with:</p>
                                <ul className="list-styled">
                                    <li>Cloud hosting and storage partners</li>
                                    <li>Analytics and performance monitoring providers</li>
                                    <li>Regulatory authorities, if legally required</li>
                                </ul>
                            </div>
                        </div>

                        <div className="policy-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">5</span>
                                    Your Rights and Choices
                                </h4>
                                <ul className="list-styled">
                                    <li>Request access to the personal data we hold about you</li>
                                    <li>Update or correct your profile information</li>
                                    <li>Delete your account and data permanently</li>
                                </ul>
                                <div className="mt-3 p-3 bg-light rounded">
                                    <p className="mb-0">
                                        To exercise these rights, contact us at:{" "}
                                        <a
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=info.editezy@gmail.com&su=Hello&body=I%20would%20like%20to%20connect"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="fw-semibold text-decoration-none"
                                        >
                                            info.editezy@gmail.com
                                        </a>

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="policy-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">6</span>
                                    Data Retention
                                </h4>
                                <p className="mb-0">
                                    We retain your personal data only as long as necessary for delivering our services or fulfilling legal requirements.
                                </p>
                            </div>
                        </div>

                        <div className="policy-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">7</span>
                                    Children's Privacy
                                </h4>
                                <p className="mb-0">
                                    Our services are not designed for children under 13. We do not knowingly collect information from minors.
                                </p>
                            </div>
                        </div>

                        <div className="policy-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">8</span>
                                    Changes to This Privacy Policy
                                </h4>
                                <p className="mb-0">
                                    We may update this Privacy Policy from time to time. Any updates will be shared within the app or via email. By continuing to use our services, you agree to the revised policy.
                                </p>
                            </div>
                        </div>

                        <div className="policy-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">9</span>
                                    Contact Us
                                </h4>
                                <p className="mb-0">
                                    If you have questions or concerns, reach out at:{" "}
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=info.editezy@gmail.com&su=Hello&body=I%20would%20like%20to%20connect"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="fw-semibold text-decoration-none"
                                    >
                                        info.editezy@gmail.com
                                    </a>


                                </p>
                            </div>
                        </div>

                        <div className="policy-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">10</span>
                                    Subscription & Payment Information
                                </h4>
                                <ul className="list-styled">
                                    <li>We do not process or store your payment information.</li>
                                    <li> All payments for auto-renewable subscriptions are securely processed by Apple through your Apple ID account.</li>
                                    <li> We only receive a confirmation from Apple when your purchase is successful so we can activate your premium features.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .number-badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
                    color: white;
                    border-radius: 50%;
                    font-size: 16px;
                    font-weight: 600;
                }
                
                .list-styled {
                    list-style: none;
                    padding-left: 0;
                    margin-bottom: 0;
                }
                
                .list-styled li {
                    position: relative;
                    padding-left: 1.5rem;
                    margin-bottom: 0.5rem;
                }
                
                .list-styled li:before {
                    content: "•";
                    color: #0d6efd;
                    font-weight: bold;
                    position: absolute;
                    left: 0.5rem;
                }
                
                .policy-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border-left: 4px solid #0d6efd !important;
                }
                
                .policy-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1) !important;
                }
                
                .bg-gradient-primary {
                    background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
                }
                
                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .display-4 {
                        font-size: 2.2rem;
                    }
                    
                    .policy-card {
                        border-left: 3px solid #0d6efd !important;
                    }
                    
                    .card-body {
                        padding: 1.5rem !important;
                    }
                }
                
                @media (max-width: 576px) {
                    .display-4 {
                        font-size: 1.8rem;
                    }
                    
                    .card-body {
                        padding: 1.25rem !important;
                    }
                    
                    .number-badge {
                        width: 28px;
                        height: 28px;
                        font-size: 14px;
                    }
                }
            `}</style>
        </div>
    );
};

export default PrivacyAndPolicy;
