import logo from "../../assets/logo.svg";
import info from '../../assets/footer/info.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center bg-neutral text-neutral-content">
                <div className='grid place-items-center p-8'>
                    <figure>
                        <img width='48px' src={logo} />
                    </figure>
                    <h3>About Us</h3>
                    <p>Hello Summer</p>
                    <p>Our school Summer programs has earnd the reputation of the best leader in summer programs for over 50 years.</p>
                </div>
                <div className='grid place-items-center p-8'>
                    <figure>
                        <img src={info} />
                    </figure>
                    <h3>Address</h3>
                    <p>Address: 123, Hello Summer Way,</p>
                    <p>Palmyra, VA 22233</p>
                    <p>Postal mail: P.O.Box 123, Palmyra, VA 22333</p>
                </div>
                <div className='grid place-items-center p-8'>
                    <figure>
                        <img src={info} />
                    </figure>
                    <h3>Contacts</h3>
                    <p>Office hours: 9:00am – 5:00pm</p>
                    <p>Telephone: (123) 456-78-90</p>
                    <p>Email: info@example.com</p>
                </div>

            </div>
            <div className='w-3/4  h-[1px] mx-auto '></div>
            <div className="footer footer-center p-4 bg-neutral text-neutral-content">
                <p>Copyright © {year} - All right reserved by Hello Summer</p>
            </div>
        </footer>
    );
};

export default Footer;