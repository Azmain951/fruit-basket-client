import './Footer.css'
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='footer bg-dark text-light d-flex justify-content-between p-4 mt-3'>
            <p>&copy; Copyright {year}, All Rights Reserved.</p>
            <p>Website Developed By <span className='fw-bold'>Afridi Azmain</span></p>
        </div>
    );
};

export default Footer;