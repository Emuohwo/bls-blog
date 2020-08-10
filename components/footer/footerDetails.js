import React from 'react';

const FooterDetails = () => (
    <div className="footer-area">
      <div className="flex-container">
          <div className="footer-flex-item">
              <h3>BetterLifesavings</h3>
              <p>6, Omokudu Ajayi Street, Okuneye Estate, Egbe, Lagos Nigeria</p>
              <p><a href="tel:+2348055018140">+2348055018140</a></p>
              <p><a href="mailto:betterlifesavings2020@gmail.com">betterlifesavings2020@gmail.com</a></p>
          </div>
          <div className="footer-flex-item">
              <h3>Quick Links</h3>
              <p><a href="http://eloshines.com" target="_blank">Register</a></p>

          </div>
          <div className="footer-flex-item">
              <h3>We are social</h3>
              <div className="social-media">
                  <span><a href="http://eloshines.com" target="_blank">Facebook</a></span>
                  <span><a href="http://eloshines.com" target="_blank">Instagram</a></span>
                  <span><a href="http://eloshines.com" target="_blank">Whatsapp</a></span>
              </div>
          </div>
      </div>
      <div className="copyright">
          <p>&copy; 2020 BetterLifesavings</p>
          <p><a href="http://eloshines.com" target="_blank">Eloshines</a></p>
      </div>
      <style jsx>{`
        .footer-area{
            background-color: green;
            color: #fff;
        }
        .social-media,
        .copyright,
        .flex-container {
            display: flex;
            justify-content: space-between;
            padding: 5%;
        }
      `}</style>
    </div>
)

export default FooterDetails;
