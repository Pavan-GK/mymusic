import React from "react";

const Footer = () => {
  return (
    <div style={{ backgroundColor: " #3f51b5" }}>
      <footer className="page-footer font-small blue">
        {/* <!-- Copyright --> */}
        <div
          className="footer-copyright text-center py-3"
          style={{ color: "white" }}
        >
          © 2020 Copyright:
          <a
            href="https://mdbootstrap.com/"
            style={{
              color: "white",
            }}
          >
            Mymusic.com
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
