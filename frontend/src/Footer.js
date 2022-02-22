import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <React.Fragment>
      <div class="footer-dark">
        <footer>
          <div className="container3">
            <div className="row4">
              <div className="elements">
                <h3 classNameName="text-3xl font-bold underline">Services</h3>
                <ul className="ul-elements">
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="elements">
                <h3>About</h3>
                <ul className="ul-elements">
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="elements">
                <h3>Company Name</h3>
                <p className="ul-elements">
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
            </div>
            <div className="">
              <ul className="social">
                <li>
                  <a href="https://twitter.com/" title="">
                    <span className="icon fa fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" title="">
                    <span className="icon fa fa-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="https://plus.google.com/" title="">
                    <span className="icon fa fa-google-plus"></span>
                  </a>
                </li>
              </ul>
            </div>
            <p className="copyright">Company Name © 2018</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
