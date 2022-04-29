
const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className='bg-dark text-light d-flex justify-content-between p-4 mt-3'>
            <p>&copy; Copyright {year}, All Rights Reserved.</p>
            <p>Website Developed By: Afridi Azmain</p>
        </div>
    );
};

export default Footer;