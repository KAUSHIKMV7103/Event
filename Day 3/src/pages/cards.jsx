import '../assets/CSS/cards.css'
const Type = () => {
  const cards = [
    {
      title:'Venues',
      description: '',
      image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708670330/19955_mgakqh.jpg'
    },
    {
      title: 'Events',
      description: '',
      image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708671102/2150951243_pvowx0.jpg'
    },
    {
      title: 'Photography',
      description: '',
      image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708670404/14046_lox5xz.jpg'
    },
    {
      title: 'Food',
      description: '',
      image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708670677/2148723505_u7ttve.jpg'
    },
    {
      title: 'Decorations',
      description: '',
      image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708670552/31133_vrnju0.jpg'
    },
    {
      title: 'Return Gifts',
      description: '',
      image: 'https://res.cloudinary.com/djlak1qdm/image/upload/v1708670991/two-men-giving-presents-each-other-friend-gift-party-flat-illustration-cartoon-illustration_74855-14552_xhwxnt.jpg'
    },
  ];
  
  return (
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
  );
};

export default Type;