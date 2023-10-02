// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';

 const currentYear = new Date().getFullYear(); // Get the current year dynamically

const Footer = () => {
  return (

    <footer className="footer">
    <div>
      <h1 className="footer-heading">Satisfactory Service</h1>
    
         Our Commitment to Excellence Ensures <br></br>Every Interaction Leaves You Delighted and Fully Satisfied.
     
      </div>

<div>
<h1 className="footer-heading">Upsez Company</h1>
      <p className="footer-text">
        © {currentYear} All right reserved 
      </p></div>

    </footer>
  );
};

export default Footer;
