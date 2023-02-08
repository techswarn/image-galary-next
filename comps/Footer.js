import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container grid grid--2-cols">
            <div>
              <p className="copyright">
                Copyright &copy; 2027 by Omnifood, Inc. All rights reserved.
              </p>
            </div>
            <div className="footer-links">
              <Link className="footer-link" href="/home">FAQ</Link>
              <Link className="footer-link" href="/privacy-policy">Privacy & Policy</Link>
              <Link className="footer-link" href="/terms-and-conditions">Terms and Conditions</Link>
            </div>
        </div>
      </footer>
    );
  }
   
  export default Footer;