import amadeus from '/root/code/SaintALY/learn-react-course/my-apa/src/images/amadeus-profile-320.png';
import '/root/code/SaintALY/learn-react-course/my-apa/src/App.css';

function Info() {
  return (
    <div className="Info">
        <img src={amadeus} alt="profile photo" className='info--photo'/>
        <p className='info--head'>Amadeus Hoffmann</p>
        <p className='info--subhead'>Software Developer</p>
        <p className='info--text'>Some Text about Website</p>
        <button type="button" className='info--button'>eMail Me</button>
    </div>
  );
}

export default Info;
