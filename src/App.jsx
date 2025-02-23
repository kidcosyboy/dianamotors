import "./App.css";

const images = [
  { src: "/alignment.jpg", alt: "Wheel Alignment" },
  { src: "/boss.jpeg", alt: "Shop Owner" },
  { src: "/all.jpeg", alt: "Inside the Shop" },
  { src: "/lift.jpeg", alt: "Car Lift in Action" },
  { src: "/x540.jpeg", alt: "X540 Machine" },
  { src: "/outdoors.jpeg", alt: "Shop Exterior" },
];

function App() {
  return (
    <div className="container">
      <div className="hero">
        <img src="/all.jpeg" alt="Inside the Shop" className="hero-image" />
        <div className="hero-text">
          <h1>Diana Drive Motors</h1>
          <p style={{fontSize: '1.2rem', fontWeight: 'normal'}}>At Diana Drive Motors, we specialize in high-quality car maintenance and repair services. With years of experience, we are dedicated to keeping your vehicle in top shape.</p>
        </div>
      </div>
      
      <section className="about">
      </section>

      <section className="services">
        <h2 style={{fontSize: '2.5em', marginBottom: '15px',  textDecoration: 'underline' }}>Services</h2>
        <ul id="list">
          <li>WoF/CoF B repair</li>
          <li>Tyres</li>
          <li>Truck reliair and maintenance</li>
          <li>Air conditioning</li>
          <li>Engine Diagnosis</li>
          <li>Wheel Alignment</li>
          <li>All mechanical services</li>
        </ul>
      </section>
      
      <section className="gallery">
        <div className="image-grid">
          {images.map((img, index) => (
            <img key={index} src={img.src} alt={img.alt} className="gallery-img" />
          ))}
        </div>
      </section>
      
      <section className="contact">
        <h2 style={{ marginBottom: '15px' }}>Contact us</h2>
        <p><strong>Address:</strong> <a href="https://www.google.com/maps/place/Diana+Drive+Motors/@-36.7747676,174.7292696,17z/data=!3m1!4b1!4m6!3m5!1s0x6d0d3998b0998a23:0x9245dfb0d62304c0!8m2!3d-36.774772!4d174.7341405!16s%2Fg%2F1pycn7yr7?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'rgb(164, 199, 255)' }}>117 Diana Drive, Wairau Valley, Auckland 0627, New Zealand</a></p>
        <p><strong>Phone:</strong> <a href="tel:+6494440051" style={{ color: 'rgb(164, 199, 255)' }}>+64 9 444 0051</a></p>

        <h2 style={{marginTop: '30px', marginBottom: '15px'}}>Business hours</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {[
            { day: "Monday", hours: "8 am - 5:30 pm" },
            { day: "Tuesday", hours: "8 am - 5:30 pm" },
            { day: "Wednesday", hours: "8 am - 5:30 pm" },
            { day: "Thursday", hours: "8 am - 5:30 pm" },
            { day: "Friday", hours: "8 am - 5:30 pm" },
            { day: "Saturday", hours: "8 am - 1:00 pm" },
            { day: "Sunday", hours: "Closed" }
          ].map((item, index) => (
            <div key={index} style={{ display: 'flex', width: '300px', justifyContent: 'space-between' }}>
              <p style={{ fontWeight: 'bold', margin: 0 }}>{item.day}:</p>
              <p style={{ margin: 0 }}>{item.hours}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;