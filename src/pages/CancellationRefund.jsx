import React from "react";


const CancellationRefundPolicy = () => {
  return (
    <div className="container my-5 px-3 px-md-5">
      

      <div className="text-center mb-4">
        <h1 className="fw-bold">Cancellation & Refund Policy</h1>
        <p className="text-muted">Last updated: 9 October 2025</p>
      </div>

      <section className="mb-4">
        <h5 className="fw-semibold">1. Cancellation Policy</h5>
        <p>
          At <strong>EditEZY</strong>, we strive to deliver a smooth and transparent user experience. 
          If you wish to cancel your purchase or subscription, please review the following terms:
        </p>
        <ul>
          <li>
            Cancellations made within <strong>24 hours</strong> of purchase are eligible for a full refund.
          </li>
          <li>
            Cancellations made after 24 hours but before any service or download begins may be eligible for a 
            <strong>50% refund</strong>.
          </li>
          <li>
            Once design assets, templates, or premium features have been accessed, downloaded, or used, 
            <strong>no refund</strong> will be applicable.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h5 className="fw-semibold">2. Refund Policy</h5>
        <ul>
          <li>
            Approved refunds will be credited to the original payment method within 
            <strong> 7–10 business days</strong>.
          </li>
          <li>
            If a payment error or duplicate transaction occurs, please contact us immediately for resolution.
          </li>
          <li>
            Refunds are not applicable for partially used subscriptions or services that have already been rendered.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h5 className="fw-semibold">3. How to Request a Cancellation or Refund</h5>
        <p>
          To cancel or request a refund, please reach out to our support team with your 
          transaction details and the reason for your request:
        </p>
        <ul>
          <li>Email: <a href="mailto:editezy.contact@gmail.com">editezy.contact@gmail.com</a></li>
          <li>Subject: <em>Refund Request – EditEZY</em></li>
        </ul>
      </section>

      <section className="mb-4">
        <h5 className="fw-semibold">4. Force Majeure</h5>
        <p>
          In the event of unforeseen circumstances beyond our control — such as natural disasters, 
          system outages, or government restrictions — EditEZY reserves the right to cancel services 
          or delay refunds without liability. In such cases, affected users will receive full refunds 
          where applicable.
        </p>
      </section>

      <section className="mb-4">
        <h5 className="fw-semibold">5. Contact Us</h5>
        <p>
          For any questions or concerns regarding our Cancellation & Refund Policy, please contact us:
        </p>
        <ul>
          <li>Email: <a href="mailto:editezy.contact@gmail.com">editezy.contact@gmail.com</a></li>
          <li>Website: <a href="https://editezy.com" target="_blank" rel="noopener noreferrer">https://editezy.com</a></li>
          {/* <li>Mobile: <a href="tel:+919182971816">+91 9182971816</a></li> */}
        </ul>
      </section>

      <div className="text-center mt-5">
        <p className="text-muted small">
          © {new Date().getFullYear()} EditEZY. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;