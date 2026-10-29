import React, { useState } from "react";
import "./App.css";

const carsData = [
  {
    id: 1,
    name: "Nissan GT-R Nismo",
    category: "Supercar",
    price: 350,
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    desc: "Afsonaviy Twin-Turbo V6 dvigatelli va to'liq uzatish tizimiga ega yapon yirtqichi.\nGarajimizning eng tezkor hamda tajovuzkor sport karlaridan biri.",
    hp: "600 HP",
    speed: "315 km/h"
  },
  {
    id: 2,
    name: "Porsche 911 GT3 RS",
    category: "Track",
    price: 450,
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80",
    desc: "Treklarni zabt etish uchun yaratilgan mukammal aerodinamik poyga mashinasi.\nAtmosferali 4.0L dvigatel va unutilmas poyga poydevori hissi.",
    hp: "525 HP",
    speed: "296 km/h"
  },
  {
    id: 3,
    name: "Ford Mustang Shelby GT500",
    category: "Muscle",
    price: 280,
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=800&q=80",
    desc: "Kompressorli V8 dvigatelning hayqirig'i va amerika kuch-qudrati ramzi.\nYurakni larzaga keltiruvchi ovoz va fantastik tezlanish dinamikasi.",
    hp: "760 HP",
    speed: "290 km/h"
  },
  {
    id: 4,
    name: "Lamborghini Huracán EVO",
    category: "Supercar",
    price: 550,
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=800&q=80",
    desc: "Italiya dizayni hamda unikal V10 atmosferali motorning uyg'unligi.\nKo'chalarda barchaning e'tiborini tortuvchi neon xarakterdagi giperkar.",
    hp: "640 HP",
    speed: "325 km/h"
  },
  {
    id: 5,
    name: "Mercedes-AMG G 63",
    category: "SUV",
    price: 400,
    image: "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?auto=format&fit=crop&w=800&q=80",
    desc: "Afsonaviy Geländewagen — cheksiz quvvat va pretsedentiz darajadagi qulaylik.\nV8 Bi-Turbo motor har qanday yo'lda ustunlikni ta'minlaydi.",
    hp: "585 HP",
    speed: "220 km/h"
  },
  {
    id: 6,
    name: "BMW M5 Competition",
    category: "Sedan",
    price: 320,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    desc: "Biznes klass qulayligi va treklarga mos poyga xarakterining birikmasi.\nxDrive tizimi orqali drift va maksimal boshqaruv imkoniyati.",
    hp: "625 HP",
    speed: "305 km/h"
  },
  {
    id: 7,
    name: "Audi RS6 Avant",
    category: "Estate",
    price: 310,
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
    desc: "Dunyoning eng tezkor va agressiv dizaynga ega universal avtomobili.\nKundalik hayot uchun ham, katta tezlik va sayohatlar uchun ham mos.",
    hp: "600 HP",
    speed: "305 km/h"
  },
  {
    id: 8,
    name: "Dodge Challenger SRT Hellcat",
    category: "Muscle",
    price: 260,
    image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=800&q=80",
    desc: "Klassik amerika mashinasining zamonaviy super-kompressorli versiyasi.\nTutunli drayv va tekis yo'lda tengsiz tezlanish tajribasi.",
    hp: "717 HP",
    speed: "320 km/h"
  },
  {
    id: 9,
    name: "McLaren 720S",
    category: "Supercar",
    price: 600,
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80",
    desc: "Futzuristik uglerod toalali monokok korpus hamda yengil vaznli konstruksiya.\n0 dan 100 km/soatgacha atigi 2.9 sekundda tezlashuv xarakteri.",
    hp: "720 HP",
    speed: "341 km/h"
  },
  {
    id: 10,
    name: "Chevrolet Corvette Z06",
    category: "Sports",
    price: 300,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    desc: "Markaziy dvigatelli amerika giperkari — eng baland ovozli V8 atmosferik motor.\nEksklyuziv ko'rinish va poyga treklariga mos tayyorgarlik.",
    hp: "670 HP",
    speed: "314 km/h"
  }
];

export default function App() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [days, setDays] = useState(1);

  return (
    <div className="garage-container">
      <header className="garage-header">
        <div className="logo-box">
          <span className="garage-icon">⚙️</span>
          <h1>GARAGE <span>RENTALS</span></h1>
        </div>
        <div className="garage-status">
          <span className="status-dot"></span> GARAGE OPEN 24/7
        </div>
      </header>

      <main className="cars-grid">
        {carsData.map((car) => (
          <div key={car.id} className="car-card">
            <div className="card-image-wrapper">
              <img src={car.image} alt={car.name} />
              <span className="category-badge">{car.category}</span>
            </div>

            <div className="card-content">
              <h3 className="car-title">{car.name}</h3>
              <p className="car-info">{car.desc}</p>

              <div className="car-specs">
                <span>⚡ {car.hp}</span>
                <span>🏎️ {car.speed}</span>
              </div>

              <div className="card-footer">
                <div className="price-box">
                  <span className="price">${car.price}</span>
                  <span className="per-day">/ kun</span>
                </div>
                <button className="rent-btn" onClick={() => setSelectedCar(car)}>
                  IJARA
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {selectedCar && (
        <div className="modal-overlay" onClick={() => setSelectedCar(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCar(null)}>✕</button>
            
            <h2>{selectedCar.name}</h2>
            <img src={selectedCar.image} alt={selectedCar.name} className="modal-img" />

            <div className="modal-calc">
              <label>Ijara kunlari:</label>
              <input
                type="number"
                min="1"
                max="30"
                value={days}
                onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
              />
            </div>

            <div className="modal-total">
              Jami narx: <span>${selectedCar.price * days}</span>
            </div>

            <button 
              className="confirm-btn"
              onClick={() => {
                alert(`${selectedCar.name} ${days} kunga band qilindi!`);
                setSelectedCar(null);
              }}
            >
              TASDIQLASH
            </button>
          </div>
        </div>
      )}
    </div>
  );
}