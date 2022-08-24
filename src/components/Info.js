import amadeus from '/root/code/SaintALY/learn-react-course/my-apa/src/images/amadeus-profile-320.png';
import '/root/code/SaintALY/learn-react-course/my-apa/src/App.css';

function Info() {
  return (
    <div className="Info">
        <img src={amadeus} alt="profile photo" className='info--photo'/>
        <h1 className='info--head'>Amadeus Hoffmann</h1>
        <h3 className='info--subhead'>Software Developer</h3>
        <h5 className='info--text'>Some Text about Website</h5>
    </div>
  );
}

export default Info;
