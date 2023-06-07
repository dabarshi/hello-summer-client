import logo from "../../assets/logo.svg";
import info from '../../assets/footer/info.png';
import contacts from '../../assets/footer/contacts.png';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center bg-neutral text-neutral-content">
                <div className='grid place-items-center p-8 space-y-3'>
                    <figure className="pt-6">
                        <img width='48px' src={logo} />
                    </figure>
                    <div>
                        <h3 className="font-bold uppercase text-lg mb-2">About Us</h3>
                        <p>Hello Summer School programs has earnd the reputation of the best leader in summer programs for over 50 years</p>
                    </div>
                </div>
                <div className='grid place-items-center p-8 space-y-3'>
                    <figure>
                        <img src={info} />
                    </figure>
                    <div>
                        <h3 className="font-bold uppercase text-lg mb-2">Address</h3>
                        <p>Address: 123, Hello Summer Way,</p>
                        <p>Dhaka, VA 22233</p>
                        <p>Postal mail: P.O.Box 123, Dhaka, VA 22333</p>
                    </div>
                </div>
                <div className='grid place-items-center p-8 space-y-3'>
                    <figure>
                        <img src={contacts} />
                    </figure>
                    <div>
                        <h3 className="font-bold uppercase text-lg mb-2">Contacts</h3>
                        <p>Office hours: 9:00am – 5:00pm</p>
                        <p>Phone: (+88) 017-700-900</p>
                        <p>Email: info@example.com</p>
                    </div>
                </div>

            </div>
            {/* <div className='h-[1px] mx-auto '></div> */}
            <div className="footer footer-center p-4 bg-neutral text-neutral-content">
                <div className="border-t-2 md:w-1/2 pt-4">
                <p>Copyright © {year} - All right reserved by Hello Summer</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;