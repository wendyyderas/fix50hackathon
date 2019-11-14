import React from "react";
import "../style/footer.scss";

function Footer() {
  return (
    <div>
   
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#114B5F" fill-opacity="1" d="M0,224L40,213.3C80,203,160,181,240,154.7C320,128,400,96,480,96C560,96,640,128,720,149.3C800,171,880,181,960,165.3C1040,149,1120,107,1200,101.3C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>      <footer className="page-footer font-small cyan darken-3">
        
        <div className="container">
          <div className="row">
            <div className="sm-links col-md-12">
              <div className="sm-links-container flex-center">
                <a
                  className="social-media-link"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="social-media-link"
                  href="https://twitter.com/"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="social-media-link"
                  href="https://dribbble.com/"
                  target="_blank"
                >
                  <i className="fa fa-dribbble"></i>
                </a>
                <a
                  className="social-media-link"
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2020 All Rights Reserved by:
          <a href="#" className="copyright-name">
            {" "}
            Team Charlotte
          </a>
        </div>
      </footer>
    </div>

    // <footer className="site-footer footer">
    //   {/* <div className="container"></div> */}
    //   <div className="container footer-container">
    //     <div className="row">
    //       <div className="col-md-8 col-sm-6 col-xs-12">
    //         <p className="copyright-text">
    //           Copyright &copy; 2020 All Rights Reserved by
    //           <a href="#"> TeamCharlotte</a>.
    //         </p>
    //       </div>

    //       <div className="sm-container col-md-4 col-sm-6 col-xs-12">
    //         <ul className="social-icons">
    //           <li className="sm-list-item">
    //             <a className="sm-link facebook" href="#">
    //               <i className="fa fa-facebook"></i>
    //             </a>
    //           </li>
    //           <li className="sm-list-item">
    //             <a className="sm-link twitter" href="#">
    //               <i className="fa fa-twitter"></i>
    //             </a>
    //           </li>
    //           <li className="sm-list-item">
    //             <a className="sm-link dribbble" href="#">
    //               <i className="fa fa-dribbble"></i>
    //             </a>
    //           </li>
    //           <li className="sm-list-item">
    //             <a className="sm-link linkedin" href="#">
    //               <i className="fa fa-linkedin"></i>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
  );
}
export default Footer;
