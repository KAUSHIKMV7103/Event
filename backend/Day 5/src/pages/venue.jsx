
import '../assets/CSS/cards.css'
import Navbar from './navbar';
import Footer from './footer';
const Venue = () => {
   
    const cards = [
      {
        title:'CJ Palazzio',
        description : '50,000',
        image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708751317/welcome-image-480x305_vck2kl.jpg'
      },
      {
        title: 'Raddison',
        description: '60,000',
        image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708751317/th_l94rvy.jpg'
      },
      {
        title: 'Pragati Maidan',
        description: '2,00,000',
        image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708751317/th_1_hgrrjb.jpg'
      },
      {
        title: 'The Lalit Ashok',
        description: '1,20,000',
        image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708751318/Fortune-Select-Metropolitan-Jaipur_zfix2u.jpg'
      },
      {
        title: 'Fortune Select Metropolian',
        description: '1,00,000',
        image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708751318/the-lalit-ashok_vezgrr.jpg'
      },
      {
        title: 'Taj Lands End',
        description: '80,000',
        image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708751318/maxresdefault_hv1xnw.jpg'
      },
    ];
    
    return (
        <div>
            <Navbar/>
      <div className="cards-containercc">
        {cards.map((card, index) => (
          <div key={index} className="cardcc">
            {card.image && <img src={card.image} alt={card.title} />}
            <div className="card-contentcc">
              <button>{card.title}</button>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
      </div>
    );
  };
  
  export default Venue;