import React from "react";

const TermsandConditions = () => {
    return (
        <div className="container-fluid py-5">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-11 col-12">
                    {/* Header Section */}
                    <div className="text-center mb-5">
                        <h1 className="display-4 fw-bold text-primary mb-3">Terms and Conditions</h1>
                        <p className="text-muted">Last updated: {new Date().toLocaleDateString()}</p>
                        <div className="divider mx-auto bg-gradient-primary" style={{ width: '80px', height: '4px', borderRadius: '2px' }}></div>
                    </div>

                    <p className="lead text-center mb-5">
                        These Terms and Conditions ("Terms") govern your use of the{" "}
                        <strong className="text-primary">EditEZY</strong> application ("App"). By accessing or using the App, you agree to these Terms in full.
                    </p>

                    {/* Terms Content */}
                    <div className="terms-content">
                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">1</span>
                                    Acceptance of Terms
                                </h4>
                                <p className="mb-0">
                                    By registering or using the App, you agree to follow these Terms. If you do not agree, you must stop using the App immediately.
                                </p>
                            </div>
                        </div>

                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">2</span>
                                    Eligibility
                                </h4>
                                <p className="mb-0">
                                    You must be at least 13 years old to use the App. By using the App, you confirm that you meet this minimum age requirement.
                                </p>
                            </div>
                        </div>

                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">3</span>
                                    User Responsibilities
                                </h4>
                                <ul className="list-styled">
                                    <li>Provide true and accurate details during registration.</li>
                                    <li>Keep your account credentials private and secure.</li>
                                    <li>Do not misuse the App or upload harmful, offensive, or unlawful content.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">4</span>
                                    Content Ownership
                                </h4>
                                <p className="mb-0">
                                    You own the rights to the content you create. However, by uploading, you grant us a license to use it for operating and improving the App.
                                </p>
                            </div>
                        </div>

                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">5</span>
                                    Usage Restrictions
                                </h4>
                                <ul className="list-styled">
                                    <li>Do not use the App for illegal or unauthorized purposes.</li>
                                    <li>Do not copy, distribute, reverse engineer, or resell the App or its services.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">6</span>
                                    Termination
                                </h4>
                                <p className="mb-0">
                                    We may suspend or terminate your account if you violate these Terms, engage in fraudulent activities, or misuse the App.
                                </p>
                            </div>
                        </div>

                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">7</span>
                                    Limitation of Liability
                                </h4>
                                <p className="mb-0">
                                    editezy is provided on an "as-is" basis. We are not liable for indirect, incidental, or consequential damages resulting from use of the App.
                                </p>
                            </div>
                        </div>

                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">8</span>
                                    Changes to Terms
                                </h4>
                                <p className="mb-0">
                                    We may revise these Terms periodically. Updates will be effective once posted in-app. Continued use means acceptance of the updated Terms.
                                </p>
                            </div>
                        </div>

                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">9</span>
                                    Contact Us
                                </h4>
                                <div className="mt-3 p-3 bg-light rounded">
                                    <p className="mb-0">
                                        For questions or clarifications, contact us at:{" "}
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

                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">10</span>
                                    Auto-Renewable Subscription Terms (For iOS Users)
                                </h4>
                                <ul className="list-styled">
                                    <li>Payments for subscriptions will be charged to your Apple ID account upon confirmation of purchase.</li>
                                    <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the current period ends.</li>
                                    <li>Your account will be charged for renewal within 24 hours before the end of the current subscription period.</li>
                                    <li>You can manage or cancel your subscription at any time by going to your Account Settings on the App Store after purchase.</li>
                                    <li>If you cancel, your subscription will continue until the end of the current billing period.</li>
                                    <li>Removing the app does not automatically cancel your subscription.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="terms-card card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <h4 className="mb-3 d-flex align-items-center">
                                    <span className="number-badge me-3">11</span>
                                    Subscription Details(For launching Plan)
                                </h4>
                                <ul className="list-styled">
                                    <li><strong>Subscription Name:</strong> EditEZY Premium</li>
                                    <li><strong>Subscription Type:</strong> Auto-renewing</li>
                                    <li><strong>Subscription Length:</strong> Yearly</li>
                                    <li><strong>Subscription Benefits:</strong> Access to premium editing tools, unlimited exports, premium templates, AI tools, and advanced features.</li>
                                    <li><strong>Subscription Price:</strong> Displayed clearly inside the App Store purchase screen before payment.</li>
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
                
                .terms-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border-left: 4px solid #0d6efd !important;
                }
                
                .terms-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1) !important;
                }
                
                .bg-gradient-primary {
                    background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
                }
                
                .lead {
                    font-size: 1.2rem;
                    line-height: 1.6;
                }
                
                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .display-4 {
                        font-size: 2.2rem;
                    }
                    
                    .terms-card {
                        border-left: 3px solid #0d6efd !important;
                    }
                    
                    .card-body {
                        padding: 1.5rem !important;
                    }
                    
                    .lead {
                        font-size: 1.1rem;
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
                    
                    .lead {
                        font-size: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default TermsandConditions;
