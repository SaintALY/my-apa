import '/root/code/SaintALY/learn-react-course/my-apa/src/App.css';
import iconFacebook from '/root/code/SaintALY/learn-react-course/my-apa/src/images/icon-facebook.png';
import iconTwitter from '/root/code/SaintALY/learn-react-course/my-apa/src/images/icon-twitter.png';
import iconGithub from '/root/code/SaintALY/learn-react-course/my-apa/src/images/icon-github.png';
import iconLinkedin from '/root/code/SaintALY/learn-react-course/my-apa/src/images/icon-linkedin.png';
import iconInstagram from '/root/code/SaintALY/learn-react-course/my-apa/src/images/icon-instagram.png';


function Footer() {
  return (
    <footer className='footer'>
        <img src={iconTwitter} alt="Twitter Icon" className='footer--icon'/>
        <img src={iconFacebook} alt="Facebook Icon" className='footer--icon'/>
        <img src={iconInstagram} alt="Instagram Icon" className='footer--icon'/>
        <img src={iconLinkedin} alt="LinkedIn Icon" className='footer--icon'/>
        <img src={iconGithub} alt="GitHub Icon" className='footer--icon'/>
    </footer>
    )
}

export default Footer;
