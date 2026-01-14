// Enhanced Demo Data
const demoData = {
    trainers: [
        {
            id: 1,
            name: "Mika Virtanen",
            location: "Kallio, Helsinki",
            specialties: ["Voimaharjoittelu", "Kehonrakennus", "Ravitsemus"],
            hourlyRate: 65,
            rating: 4.9,
            reviewCount: 87,
            experience: 8,
            bio: "Kokenut voimailuvalmentaja 8 vuoden kokemuksella. Erikoistunut voimaharjoitteluun ja kehonrakennukseen. Autan sinua saavuttamaan voima- ja lihastavoitteesi turvallisesti ja tehokkaasti.",
            certifications: ["NASM Certified", "Personal Trainer", "Nutrition Specialist"],
            availability: {
                "2026-01-15": ["09:00", "11:00", "14:00", "16:00"],
                "2026-01-16": ["10:00", "13:00", "15:00", "17:00"],
                "2026-01-17": ["08:00", "12:00", "14:00", "18:00"]
            },
            trending: true,
            recentlyBooked: 12,
            reviews: [
                { rating: 5, comment: "Loistava valmentaja! Mika on ammattitaitoinen ja motivoiva.", author: "Petri K.", date: "2026-01-05" },
                { rating: 5, comment: "Sain erinomaiset tulokset Mikan ohjauksessa. Suosittelen!", author: "Laura M.", date: "2025-12-20" }
            ]
        },
        {
            id: 2,
            name: "Emma Korhonen",
            location: "Eira, Helsinki",
            specialties: ["Jooga", "Meditaatio", "Venyttely"],
            hourlyRate: 55,
            rating: 4.8,
            reviewCount: 64,
            experience: 6,
            bio: "Joogaohjaaja ja meditaatio-opettaja 6 vuoden kokemuksella. Autan sinua löytämään sisäisen rauhan ja kehon tasapainon. Erityisosaamista stressinhallinnassa ja joustavuuden parantamisessa.",
            certifications: ["RYT 500", "Mindfulness Instructor", "Yoga Therapy"],
            availability: {
                "2026-01-15": ["08:00", "10:00", "15:00", "17:00"],
                "2026-01-16": ["09:00", "11:00", "16:00", "18:00"],
                "2026-01-17": ["07:00", "13:00", "15:00", "19:00"]
            },
            trending: false,
            recentlyBooked: 8,
            reviews: [
                { rating: 5, comment: "Emma on ihana! Joogatunnit ovat rauhallisia ja hyvin ohjattuja.", author: "Anna S.", date: "2026-01-03" },
                { rating: 4, comment: "Hyvä meditaatio-opettaja, suosittelen aloittelijoille.", author: "Mikko H.", date: "2025-12-28" }
            ]
        },
        {
            id: 3,
            name: "Jussi Nieminen",
            location: "Punavuori, Helsinki",
            specialties: ["Kestävyys", "Juoksu", "Polkupyöräily"],
            hourlyRate: 60,
            rating: 4.9,
            reviewCount: 92,
            experience: 5,
            bio: "Kestävyysurheilija ja valmentaja. Autan sinua saavuttamaan juoksutavoitteesi ja parantamaan kestävyyttäsi. Henkilökohtaiset harjoitusohjelmat juoksuun ja pyöräilyyn.",
            certifications: ["Running Coach", "Cycling Instructor", "Endurance Training"],
            availability: {
                "2026-01-15": ["06:00", "08:00", "17:00", "19:00"],
                "2026-01-16": ["07:00", "09:00", "18:00", "20:00"],
                "2026-01-17": ["06:00", "10:00", "16:00", "19:00"]
            },
            trending: true,
            recentlyBooked: 15,
            reviews: [
                { rating: 5, comment: "Jussi auttoi minua juoksemaan ensimmäisen puolimaratonini!", author: "Sanna L.", date: "2026-01-08" },
                { rating: 5, comment: "Erinomainen kestävyysvalmentaja. Tulokset näkyvät nopeasti.", author: "Timo R.", date: "2025-12-15" }
            ]
        },
        {
            id: 4,
            name: "Sara Lehtonen",
            location: "Töölö, Helsinki",
            specialties: ["Perusvoimaharjoittelu", "Liikkuvuus", "Kipu- ja vammaneuvola"],
            hourlyRate: 70,
            rating: 4.7,
            reviewCount: 45,
            experience: 10,
            bio: "Fysioterapeutti ja liikuntaneuvoja 10 vuoden kokemuksella. Autan sinua palautumaan vammoista ja parantamaan liikkuvuuttasi. Erityisosaaminen selkä- ja nivelongelmiin.",
            certifications: ["Physiotherapist", "Rehabilitation Specialist", "Pain Management"],
            availability: {
                "2026-01-15": ["10:00", "12:00", "14:00", "16:00"],
                "2026-01-16": ["09:00", "11:00", "15:00", "17:00"],
                "2026-01-17": ["08:00", "10:00", "13:00", "16:00"]
            },
            trending: false,
            recentlyBooked: 6,
            reviews: [
                { rating: 5, comment: "Sara auttoi minua toipumaan selkävammasta. Kiitos!", author: "Jari P.", date: "2026-01-01" },
                { rating: 4, comment: "Ammattitaitoinen fysioterapeutti, hyvät neuvot.", author: "Maria K.", date: "2025-12-22" }
            ]
        },
        {
            id: 5,
            name: "Tommi Rantanen",
            location: "Kamppi, Helsinki",
            specialties: ["CrossFit", "HIIT", "Toiminnallinen harjoittelu"],
            hourlyRate: 68,
            rating: 4.8,
            reviewCount: 73,
            experience: 7,
            bio: "CrossFit-valmentaja ja toiminnallisen harjoittelun asiantuntija. Korkean intensiteetin harjoitukset ja monipuoliset treenit. Autan sinua ylittämään rajasi ja saavuttamaan uusia tasoja.",
            certifications: ["CrossFit Level 2", "HIIT Specialist", "Functional Training"],
            availability: {
                "2026-01-15": ["07:00", "09:00", "18:00", "20:00"],
                "2026-01-16": ["06:00", "08:00", "17:00", "19:00"],
                "2026-01-17": ["07:00", "11:00", "18:00", "20:00"]
            },
            trending: true,
            recentlyBooked: 18,
            reviews: [
                { rating: 5, comment: "Tommi on huipputyyppi! CrossFit-tunnit ovat haastavia ja motivoivia.", author: "Ville T.", date: "2026-01-07" },
                { rating: 5, comment: "Paras HIIT-valmentaja Helsingissä!", author: "Kaisa A.", date: "2025-12-30" }
            ]
        },
        {
            id: 6,
            name: "Linda Saarinen",
            location: "Lauttasaari, Helsinki",
            specialties: ["Pilates", "Core-vahvuus", "Raskausliikunta"],
            hourlyRate: 58,
            rating: 4.9,
            reviewCount: 56,
            experience: 9,
            bio: "Pilates-ohjaaja erikoisosaamisella raskauden aikaiseen ja jälkeiseen liikuntaan. Turvallista ja tehokasta core-vahvistusta. Autan sinua rakentamaan vahvan keskivartalon ja parantamaan ryhtiä.",
            certifications: ["Pilates Instructor", "Pre/Postnatal Fitness", "Core Specialist"],
            availability: {
                "2026-01-15": ["09:00", "11:00", "14:00", "16:00"],
                "2026-01-16": ["10:00", "12:00", "15:00", "17:00"],
                "2026-01-17": ["09:00", "13:00", "15:00", "18:00"]
            },
            trending: false,
            recentlyBooked: 10,
            reviews: [
                { rating: 5, comment: "Linda on mahtava! Pilates-tunnit sopivat täydellisesti raskausaikaan.", author: "Johanna V.", date: "2026-01-04" },
                { rating: 5, comment: "Ammattitaitoinen ja kannustava ohjaaja.", author: "Riikka M.", date: "2025-12-18" }
            ]
        },
        {
            id: 7,
            name: "Antti Mäkinen",
            location: "Pasila, Helsinki",
            specialties: ["Nyrkkeilyvalmennus", "Kamppailulajit", "Kuntonyrkkeily"],
            hourlyRate: 62,
            rating: 4.7,
            reviewCount: 68,
            experience: 6,
            bio: "Nyrkkeilyvalmentaja ja kamppailulajien ohjaaja. Tehokasta koko kehon treeniä nyrkkeilyn ja kamppailulajien kautta. Sopii kaikille tasosta riippumatta - aloittelijasta kilpailijaan.",
            certifications: ["Boxing Coach", "Martial Arts Instructor", "Combat Fitness"],
            availability: {
                "2026-01-15": ["17:00", "18:00", "19:00", "20:00"],
                "2026-01-16": ["16:00", "17:00", "19:00", "21:00"],
                "2026-01-17": ["17:00", "18:00", "20:00", "21:00"]
            },
            trending: true,
            recentlyBooked: 14,
            reviews: [
                { rating: 5, comment: "Antti on huippu! Nyrkkeilytreenit ovat parasta mitä olen kokeillut.", author: "Matti J.", date: "2026-01-06" },
                { rating: 4, comment: "Hyvä valmentaja, haastavia treenejä.", author: "Emma L.", date: "2025-12-25" }
            ]
        },
        {
            id: 8,
            name: "Hanna Virtanen",
            location: "Espoo Keskus",
            specialties: ["Tanssiliikunta", "Zumba", "Aerobic"],
            hourlyRate: 52,
            rating: 4.8,
            reviewCount: 81,
            experience: 5,
            bio: "Tanssiliikuntaohjaaja ja Zumba-valmentaja. Hauskaa ja energistä liikuntaa musiikin tahtiin! Treenataan hymyillen ja nauttien - kuntoilu ei ole koskaan ollut näin hauskaa.",
            certifications: ["Zumba Instructor", "Dance Fitness", "Aerobics Certified"],
            availability: {
                "2026-01-15": ["17:00", "18:00", "19:00"],
                "2026-01-16": ["17:00", "18:00", "19:00"],
                "2026-01-17": ["17:00", "18:00", "19:00"]
            },
            trending: false,
            recentlyBooked: 9,
            reviews: [
                { rating: 5, comment: "Hanna on ihana! Zumba-tunnit ovat aina niin hauskoja.", author: "Sofia P.", date: "2026-01-02" },
                { rating: 5, comment: "Paras tanssiliikuntaohjaaja ikinä!", author: "Liisa K.", date: "2025-12-27" }
            ]
        },
        {
            id: 9,
            name: "Markus Leino",
            location: "Vantaa Tikkurila",
            specialties: ["Painonpudotus", "Liikuntaneuvonta", "Elämäntapaohjaus"],
            hourlyRate: 75,
            rating: 4.9,
            reviewCount: 94,
            experience: 12,
            bio: "Laillistettu ravitsemusterapeutti ja personal trainer. Erikoistunut painonhallintaan ja kokonaisvaltaiseen elämäntapamuutokseen. Yhdessä luomme kestävän suunnitelman, joka toimii juuri sinulle.",
            certifications: ["Nutritionist", "Weight Loss Specialist", "Lifestyle Coach", "Personal Trainer"],
            availability: {
                "2026-01-15": ["08:00", "10:00", "13:00", "15:00"],
                "2026-01-16": ["09:00", "11:00", "14:00", "16:00"],
                "2026-01-17": ["08:00", "12:00", "14:00", "17:00"]
            },
            trending: true,
            recentlyBooked: 20,
            reviews: [
                { rating: 5, comment: "Markus muutti elämäni! -15kg 4 kuukaudessa ja olo on parempi kuin koskaan.", author: "Tuomas H.", date: "2026-01-09" },
                { rating: 5, comment: "Ammattitaitoisin valmentaja mitä olen tavannut. Suosittelen lämpimästi!", author: "Nina S.", date: "2025-12-29" }
            ]
        },
        {
            id: 10,
            name: "Iida Heikkinen",
            location: "Kauniainen",
            specialties: ["Seniorikuntoilu", "Tasapainoharjoittelu", "Tuolijooga"],
            hourlyRate: 50,
            rating: 4.9,
            reviewCount: 52,
            experience: 8,
            bio: "Senioriliikuntaan erikoistunut ohjaaja. Turvallista ja iänmukaista liikuntaa ikääntyville. Parannetaan tasapainoa, liikkuvuutta ja elämänlaatua. Jokaiselle sopiva harjoitus löytyy!",
            certifications: ["Senior Fitness Specialist", "Balance Training", "Chair Yoga Instructor"],
            availability: {
                "2026-01-15": ["10:00", "11:00", "13:00", "14:00"],
                "2026-01-16": ["10:00", "11:00", "13:00", "14:00"],
                "2026-01-17": ["10:00", "11:00", "13:00", "14:00"]
            },
            trending: false,
            recentlyBooked: 7,
            reviews: [
                { rating: 5, comment: "Iida on loistava! Äitini on ihastunut tuolijoogaan.", author: "Kari M.", date: "2026-01-05" },
                { rating: 5, comment: "Ystävällinen ja kärsivällinen ohjaaja. Suosittelen!", author: "Maija L.", date: "2025-12-23" }
            ]
        }
    ],
    bookings: [
        {
            id: 1,
            trainerName: "Mika Virtanen",
            date: "2024-01-15",
            time: "14:00",
            status: "confirmed",
            price: 65
        }
    ]
};

// App State
let currentUser = null;
let selectedTrainer = null;
let selectedDate = null;
let selectedTime = null;
let bookingCounter = 24;
let notificationCount = 0;
let demoInterval;
let favoriteTrainers = JSON.parse(localStorage.getItem('favoriteTrainers') || '[]');
let priceFilter = { min: 0, max: 100 };
let isLoading = false;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    showLoadingState();
    setTimeout(() => {
        loadFeaturedTrainers();
        loadAllTrainers();
        loadBookings();
        setupEventListeners();
        startDemoEffects();
        hideLoadingState();
    }, 1500);
    setTimeout(() => {
        if (!localStorage.getItem('fitconnect-demo-shown')) {
            openOnboardingModal();
            localStorage.setItem('fitconnect-demo-shown', 'true');
        }
    }, 2500);
});

// Navigation
function showSection(sectionId) {
    document.querySelectorAll('.app-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    // Update nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Find and activate corresponding nav item
    const navMap = {
        'home-screen': 0,
        'trainers-screen': 1,
        'bookings-screen': 2,
        'profile-screen': 3
    };
    const navItems = document.querySelectorAll('.nav-item');
    if (navMap[sectionId] !== undefined) {
        navItems[navMap[sectionId]].classList.add('active');
    }
    
    const titles = {
        'home-screen': 'FitConnect',
        'trainers-screen': 'Valmentajat',
        'bookings-screen': 'Omat Varaukset',
        'profile-screen': 'Profiili'
    };
    document.getElementById('current-screen').textContent = titles[sectionId] || 'FitConnect';
}

// Modal Management
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}
function showSuccess(title, message) {
    document.getElementById('success-title').textContent = title;
    document.getElementById('success-message').textContent = message;
    openModal('success-modal');
    createConfetti();
}

// Data Loading
function loadFeaturedTrainers() {
    const container = document.getElementById('featured-trainers');
    const featured = demoData.trainers.slice(0, 2);
    container.innerHTML = featured.map(trainer => `
        <div class="trainer-card" onclick="openTrainerProfile(${trainer.id})">
            <div class="trainer-image">
                <img src="${getTrainerAvatar(trainer.name)}" alt="${trainer.name}" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="trainer-badge">Suositus</div>
                <button class="favorite-btn ${isFavorite(trainer.id) ? 'active' : ''}" onclick="toggleFavorite(${trainer.id})" aria-label="Lisää suosikkeihin">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="trainer-info">
                <div class="trainer-header">
                    <div>
                        <div class="trainer-name">${trainer.name}</div>
                        <div class="trainer-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${trainer.location}
                        </div>
                    </div>
                    <div class="trainer-rating">
                        <i class="fas fa-star"></i>
                        ${trainer.rating}
                    </div>
                </div>
                <div class="trainer-specialties">
                    ${trainer.specialties.map(specialty => `
                        <span class="specialty-tag">${specialty}</span>
                    `).join('')}
                </div>
                <div class="trainer-footer">
                    <div>
                        <span class="trainer-price">${trainer.hourlyRate}€</span>
                        <span class="price-label">per tunti</span>
                    </div>
                    <button class="btn btn-primary" onclick="event.stopPropagation(); openTrainerProfile(${trainer.id})">
                        Näytä
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function loadAllTrainers() {
    const container = document.getElementById('all-trainers');
    renderTrainers(demoData.trainers, container);
}

function loadBookings() {
    const container = document.getElementById('bookings-list');
    if (demoData.bookings.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--gray);">
                <i class="fas fa-calendar-times" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>Ei tulevia varauksia</p>
                <button class="btn btn-primary" onclick="showSection('trainers-screen')" style="margin-top: 1rem;">
                    Etsi Valmentaja
                </button>
            </div>
        `;
        return;
    }
    container.innerHTML = demoData.bookings.map(booking => `
        <div class="trainer-card">
            <div class="trainer-info">
                <div class="trainer-header">
                    <div>
                        <div class="trainer-name">${booking.trainerName}</div>
                        <div class="trainer-location">
                            <i class="fas fa-calendar"></i>
                            ${new Date(booking.date).toLocaleDateString('fi-FI')} klo ${booking.time}
                        </div>
                    </div>
                    <div style="background: rgba(16,185,129,0.12); color: var(--success); padding: 0.25rem 0.5rem; border-radius: 12px; font-size: 0.8rem; font-weight: 600;">
                        Vahvistettu
                    </div>
                </div>
                <div class="trainer-footer">
                    <div>
                        <span class="trainer-price">${booking.price}€</span>
                        <span class="price-label">maksettu</span>
                    </div>
                    <button class="btn btn-outline">
                        Peruuta
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Trainer Profile
function openTrainerProfile(trainerId) {
    const trainer = demoData.trainers.find(t => t.id === trainerId);
    if (!trainer) return;
    selectedTrainer = trainer;
    document.getElementById('trainer-modal-name').textContent = trainer.name;
    document.getElementById('trainer-modal-content').innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <img src="${getTrainerAvatar(trainer.name)}" alt="${trainer.name}" style="width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 1rem; display: block;">
            <h3>${trainer.name}</h3>
            <p style="color: var(--gray);">${trainer.location}</p>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: bold; color: var(--accent);">${trainer.rating}</div>
                <div style="font-size: 0.8rem; color: var(--gray);">Arvosana</div>
            </div>
            <div style="text-align: center;">
                <div style="font-size: 1.5rem; font-weight: bold; color: var(--primary);">${trainer.experience}+</div>
                <div style="font-size: 0.8rem; color: var(--gray);">Vuotta</div>
            </div>
        </div>
        <div style="margin-bottom: 1rem;">
            <strong>Erityisalueet:</strong>
            <div class="trainer-specialties" style="margin-top: 0.5rem;">
                ${trainer.specialties.map(specialty => `
                    <span class="specialty-tag">${specialty}</span>
                `).join('')}
            </div>
        </div>
        <div style="margin-bottom: 1rem;">
            <strong>Sertifikaatit:</strong>
            <p style="color: var(--gray); margin-top: 0.25rem;">${trainer.certifications.join(', ')}</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <strong>Kuvaus:</strong>
            <p style="color: var(--gray); margin-top: 0.25rem;">${trainer.bio}</p>
        </div>
        <div style="margin-bottom: 1.5rem;">
            <strong>Hinta:</strong>
            <div style="font-size: 1.5rem; font-weight: bold; color: var(--success); margin-top: 0.25rem;">
                ${trainer.hourlyRate}€/tunti
            </div>
        </div>
        
        <!-- Reviews Section -->
        <div style="margin-bottom: 1.5rem;">
            <strong style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                <span>Arvostelut (${trainer.reviewCount})</span>
                <span style="color: var(--accent); font-size: 0.9rem;">
                    <i class="fas fa-star"></i> ${trainer.rating}
                </span>
            </strong>
            <div style="max-height: 300px; overflow-y: auto;">
                ${trainer.reviews.map(review => `
                    <div class="review-card">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                            <div>
                                <div style="font-weight: 600; margin-bottom: 0.25rem;">${review.author}</div>
                                <div style="color: var(--accent); font-size: 0.9rem;">
                                    ${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                                </div>
                            </div>
                            <div style="font-size: 0.8rem; color: var(--gray);">${new Date(review.date).toLocaleDateString('fi-FI')}</div>
                        </div>
                        <p style="color: var(--gray); font-size: 0.9rem; line-height: 1.5;">${review.comment}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <button class="btn btn-primary btn-block" onclick="openBookingModal(${trainer.id})" aria-label="Varaa aika valmentajalta ${trainer.name}">
            <i class="fas fa-calendar-plus"></i>
            Varaa Aika
        </button>
    `;
    openModal('trainer-profile-modal');
}

// Booking System
function openBookingModal(trainerId) {
    const trainer = demoData.trainers.find(t => t.id === trainerId);
    if (!trainer) return;
    selectedTrainer = trainer;
    document.getElementById('booking-modal-content').innerHTML = `
        <div style="text-align: center; margin-bottom: 1rem;">
            <h3>Varaa aika - ${trainer.name}</h3>
            <p style="color: var(--gray);">Valitse päivä ja aika</p>
        </div>
        <div class="calendar">
            <div class="calendar-header">
                <button class="btn btn-outline" style="padding: 0.5rem;"><i class="fas fa-chevron-left"></i></button>
                <strong>Tammikuu 2024</strong>
                <button class="btn btn-outline" style="padding: 0.5rem;"><i class="fas fa-chevron-right"></i></button>
            </div>
            <div class="calendar-grid">
                ${Object.keys(trainer.availability).slice(0, 3).map(date => {
                    const day = new Date(date).getDate();
                    return `
                        <div class="calendar-day available" onclick="selectDate('${date}')">
                            ${day}
                        </div>
                    `;
                }).join('')}
                ${Array.from({length: 4}, (_, i) => `
                    <div class="calendar-day booked">
                        ${16 + i}
                    </div>
                `).join('')}
            </div>
        </div>
        <div id="time-slots-container" style="display: none;">
            <h4 style="margin-bottom: 0.5rem;">Valitse aika:</h4>
            <div class="time-slots" id="time-slots">
                <!-- Time slots will be loaded here -->
            </div>
        </div>
        <div id="booking-form" style="display: none;">
            <div class="form-group">
                <label>Nimesi</label>
                <input type="text" class="form-input" placeholder="Syötä nimesi" required>
            </div>
            <div class="form-group">
                <label>Sähköpostisi</label>
                <input type="email" class="form-input" placeholder="sahkoposti@example.com" required>
            </div>
            <div class="form-group">
                <label>Puhelinnumerosi</label>
                <input type="tel" class="form-input" placeholder "+358 40 123 4567">
            </div>
            <button class="btn btn-primary btn-block" onclick="confirmBooking()">
                <i class="fas fa-credit-card"></i>
                Vahvista Varaus
            </button>
        </div>
    `;
    closeModal('trainer-profile-modal');
    openModal('booking-modal');
}

function selectDate(date) {
    selectedDate = date;
    const trainer = selectedTrainer;
    const timeSlots = trainer.availability[date] || [];
    document.querySelectorAll('.calendar-day').forEach(day => {
        day.classList.remove('selected');
    });
    event.target.classList.add('selected');
    document.getElementById('time-slots-container').style.display = 'block';
    document.getElementById('time-slots').innerHTML = timeSlots.map(time => `
        <div class="time-slot available" onclick="selectTime('${time}')">
            ${time}
        </div>
    `).join('');
}

function selectTime(time) {
    selectedTime = time;
    document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    event.target.classList.add('selected');
    document.getElementById('booking-form').style.display = 'block';
}

function confirmBooking() {
    // Show loading state
    const submitBtn = event.target;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Vahvistetaan...';
    submitBtn.disabled = true;
    
    // Simulate API call with random success/failure
    setTimeout(() => {
        const success = Math.random() > 0.1; // 90% success rate
        
        if (success) {
            demoData.bookings.push({
                id: demoData.bookings.length + 1,
                trainerName: selectedTrainer.name,
                date: selectedDate,
                time: selectedTime,
                status: 'confirmed',
                price: selectedTrainer.hourlyRate
            });
            bookingCounter++;
            document.getElementById('booking-counter').textContent = bookingCounter;
            closeModal('booking-modal');
            showSuccess('Varaus Vahvistettu!', `Olet varannut ajan valmentajalta ${selectedTrainer.name} ${new Date(selectedDate).toLocaleDateString('fi-FI')} klo ${selectedTime}. Saat vahvistuksen sähköpostiisi.`);
            selectedTrainer = null;
            selectedDate = null;
            selectedTime = null;
            loadBookings();
            showDemoNotification(`Uusi varaus vahvistettu`, 'success');
        } else {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            closeModal('booking-modal');
            handleBookingError('server');
        }
    }, 1500);
}

// Authentication
function openLoginModal() {
    openModal('login-modal');
}
function loginAsCustomer() {
    currentUser = { type: 'customer', name: 'Demo Asiakas' };
    closeModal('login-modal');
    showSuccess('Tervetuloa!', 'Olet nyt kirjautunut asiakkaana. Voit alkaa etsiä valmentajia ja tehdä varauksia.');
}
function loginAsTrainer() {
    currentUser = { type: 'trainer', name: 'Demo Valmentaja' };
    closeModal('login-modal');
    showSuccess('Tervetuloa Valmentaja!', 'Olet nyt kirjautunut valmentajana. Voit hallita profiiliasi ja saatavillaoloasi.');
}

// Onboarding
function openOnboardingModal() {
    document.getElementById('onboarding-content').innerHTML = `
        <div style="padding: 1rem 0;">
            <div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; margin: 0 auto 1rem;">
                <i class="fas fa-dumbbell"></i>
            </div>
            <h3 style="margin-bottom: 1rem;">Aloitetaan matkasi!</h3>
            <p style="color: var(--gray); margin-bottom: 2rem;">Tämä demo näyttää FitConnectin parhaat ominaisuudet</p>
            <div style="text-align: left; margin-bottom: 2rem;">
                <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                    <div style="background: var(--primary); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">1</div>
                    <span>Selaa valmentajia ja tutki heidän profiilejaan</span>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                    <div style="background: var(--primary); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">2</div>
                    <span>Tee demo-varaus nähdäksesi prosessin</span>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                    <div style="background: var(--primary); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">3</div>
                    <span>Kokeile erilaisia demo-ilmoituksia</span>
                </div>
            </div>
            <button class="btn btn-primary btn-block" onclick="closeModal('onboarding-modal'); startDemoWalkthrough()">
                Aloita Demo
            </button>
        </div>
    `;
    openModal('onboarding-modal');
}

// Demo Effects
function startDemoEffects() {
    demoInterval = setInterval(() => {
        bookingCounter += Math.floor(Math.random() * 3);
        document.getElementById('booking-counter').textContent = bookingCounter;
        if (Math.random() > 0.7) {
            const notifications = [
                { message: "Uusi valmentaja liittyi palveluun!", type: "info" },
                { message: "Jussi Nieminen on nyt saatavilla huomenna", type: "success" },
                { message: "Emma Korhonen alennus -10% tällä viikolla", type: "promo" }
            ];
            const notification = notifications[Math.floor(Math.random() * notifications.length)];
            showDemoNotification(notification.message, notification.type);
        }
    }, 8000);
}

function showDemoNotification(message, type) {
    notificationCount++;
    const notification = document.createElement('div');
    notification.className = 'demo-notification';
    notification.innerHTML = `
        <div style="display: flex; align-items: flex-start;">
            <div style="background: ${type === 'success' ? 'var(--success)' : type === 'promo' ? 'var(--accent)' : 'var(--primary)'}; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 0.75rem; flex-shrink: 0;">
                <i class="fas ${type === 'success' ? 'fa-check' : type === 'promo' ? 'fa-percent' : 'fa-info'}"></i>
            </div>
            <div>
                <div style="font-weight: 600; margin-bottom: 0.25rem;">${message}</div>
                <div style="font-size: 0.8rem; color: var(--gray);">Juuri nyt</div>
            </div>
        </div>
    `;
    document.body.appendChild(notification);
    document.getElementById('notification-bell').style.color = 'var(--accent)';
    setTimeout(() => {
        notification.classList.add('hiding');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);
        const animation = confetti.animate([
            { top: '0px', opacity: 1, transform: `rotate(0deg) scale(1)` },
            { top: '100vh', opacity: 0, transform: `rotate(${Math.random() * 360}deg) scale(0)` }
        ], {
            duration: 1000 + Math.random() * 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
        });
        animation.onfinish = () => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        };
    }
}

function startDemoWalkthrough() {
    setTimeout(() => {
        showDemoNotification("Tervetuloa FitConnectiin! Aloitetaan tutustuminen.", "info");
    }, 1000);
    setTimeout(() => {
        showDemoNotification("Selaa valmentajia napsauttamalla Valmentajat-välilehteä", "info");
    }, 4000);
}

// Event Listeners
function setupEventListeners() {
    document.getElementById('search-input').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        filterTrainers(searchTerm);
    });
    setTimeout(() => {
        if (!currentUser) {
            loginAsCustomer();
        }
    }, 1000);
}

// Search/Filter functionality
function filterTrainers(searchTerm) {
    const filtered = demoData.trainers.filter(trainer => {
        return trainer.name.toLowerCase().includes(searchTerm) ||
               trainer.location.toLowerCase().includes(searchTerm) ||
               trainer.specialties.some(s => s.toLowerCase().includes(searchTerm));
    });
    
    const container = document.getElementById('all-trainers');
    if (filtered.length === 0) {
        showEmptyState(container, `Ei hakutuloksia haulle "${searchTerm}"`, 'search');
        return;
    }
    
    renderTrainers(filtered, container);
}

// Filter modal (placeholder)
function openFilterModal() {
    document.getElementById('filter-modal-content').innerHTML = `
        <h3 style="margin-bottom: 1.5rem;">Suodata valmentajia</h3>
        
        <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.75rem;">Hinta (€/tunti)</label>
            <div style="display: flex; gap: 1rem; align-items: center;">
                <input type="number" id="min-price" value="${priceFilter.min}" placeholder="Min" class="form-input" style="width: 80px;">
                <span>-</span>
                <input type="number" id="max-price" value="${priceFilter.max}" placeholder="Max" class="form-input" style="width: 80px;">
            </div>
            <input type="range" min="0" max="100" value="${priceFilter.max}" id="price-range" style="width: 100%; margin-top: 0.5rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--gray); margin-top: 0.25rem;">
                <span>0€</span>
                <span>100€</span>
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.75rem;">Erikoisalat</label>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${['Voimaharjoittelu', 'Jooga', 'Kestävyys', 'CrossFit', 'Pilates', 'Nyrkkeilyvalmennus', 'Tanssiliikunta', 'Painonpudotus'].map(spec => `
                    <button class="specialty-tag" style="cursor: pointer;" onclick="toggleSpecialtyFilter('${spec}')">
                        ${spec}
                    </button>
                `).join('')}
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.75rem;">Arvosana</label>
            <div style="display: flex; gap: 0.5rem;">
                ${[5, 4.5, 4, 3.5, 3].map(rating => `
                    <button class="btn btn-outline" style="padding: 0.5rem 1rem;" onclick="filterByRating(${rating})">
                        ${rating}+ <i class="fas fa-star" style="color: var(--accent); font-size: 0.8rem;"></i>
                    </button>
                `).join('')}
            </div>
        </div>
        
        <div style="display: flex; gap: 0.5rem;">
            <button class="btn btn-outline" style="flex: 1;" onclick="resetFilters()">
                Tyhjennä
            </button>
            <button class="btn btn-primary" style="flex: 2;" onclick="applyFilters()">
                Käytä suodattimia
            </button>
        </div>
    `;
    openModal('filter-modal');
}

// Loading States
function showLoadingState() {
    isLoading = true;
    const container = document.getElementById('featured-trainers');
    if (container) {
        container.innerHTML = Array.from({length: 2}, () => `
            <div class="skeleton-card">
                <div class="skeleton skeleton-image"></div>
                <div style="padding: 1rem;">
                    <div class="skeleton skeleton-text" style="width: 60%; margin-bottom: 0.5rem;"></div>
                    <div class="skeleton skeleton-text" style="width: 40%; margin-bottom: 1rem;"></div>
                    <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem;">
                        <div class="skeleton skeleton-text" style="width: 30%; height: 24px;"></div>
                        <div class="skeleton skeleton-text" style="width: 30%; height: 24px;"></div>
                    </div>
                    <div class="skeleton skeleton-text" style="width: 50%;"></div>
                </div>
            </div>
        `).join('');
    }
}

function hideLoadingState() {
    isLoading = false;
}

function showLoadingSpinner(container) {
    container.innerHTML = `
        <div style="text-align: center; padding: 3rem;">
            <div class="spinner"></div>
            <p style="color: var(--gray); margin-top: 1rem;">Ladataan...</p>
        </div>
    `;
}

// Favorites System
function toggleFavorite(trainerId) {
    event.stopPropagation();
    const index = favoriteTrainers.indexOf(trainerId);
    if (index > -1) {
        favoriteTrainers.splice(index, 1);
        showDemoNotification('Poistettu suosikeista', 'info');
    } else {
        favoriteTrainers.push(trainerId);
        showDemoNotification('Lisätty suosikkeihin!', 'success');
    }
    localStorage.setItem('favoriteTrainers', JSON.stringify(favoriteTrainers));
    loadAllTrainers();
    loadFeaturedTrainers();
}

function isFavorite(trainerId) {
    return favoriteTrainers.includes(trainerId);
}

// Price Filtering
function applyFilters() {
    const minPrice = parseInt(document.getElementById('min-price').value) || 0;
    const maxPrice = parseInt(document.getElementById('max-price').value) || 100;
    priceFilter = { min: minPrice, max: maxPrice };
    
    const filtered = demoData.trainers.filter(trainer => 
        trainer.hourlyRate >= minPrice && trainer.hourlyRate <= maxPrice
    );
    
    closeModal('filter-modal');
    
    const container = document.getElementById('all-trainers');
    if (filtered.length === 0) {
        showEmptyState(container, 'Ei valmentajia valitulla hinta-alueella', 'filter');
        return;
    }
    
    renderTrainers(filtered, container);
    showDemoNotification(`${filtered.length} valmentajaa löytyi`, 'success');
}

function resetFilters() {
    priceFilter = { min: 0, max: 100 };
    closeModal('filter-modal');
    loadAllTrainers();
    showDemoNotification('Suodattimet tyhjennetty', 'info');
}

function filterByRating(minRating) {
    const filtered = demoData.trainers.filter(trainer => trainer.rating >= minRating);
    closeModal('filter-modal');
    renderTrainers(filtered, document.getElementById('all-trainers'));
    showDemoNotification(`${filtered.length} valmentajaa (${minRating}+ tähteä)`, 'success');
}

function toggleSpecialtyFilter(specialty) {
    event.target.classList.toggle('active');
}

// Enhanced Empty States
function showEmptyState(container, message, type = 'default') {
    const icons = {
        search: 'fa-search',
        filter: 'fa-filter',
        bookings: 'fa-calendar-times',
        default: 'fa-inbox'
    };
    const icon = icons[type] || icons.default;
    
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">
                <i class="fas ${icon}"></i>
            </div>
            <h3 style="margin-bottom: 0.5rem;">${message}</h3>
            <p style="color: var(--gray); margin-bottom: 1.5rem;">Kokeile muuttaa hakuehtoja tai suodattimia</p>
            <button class="btn btn-primary" onclick="resetFilters(); showSection('trainers-screen')">
                Näytä kaikki valmentajat
            </button>
        </div>
    `;
}

// Error Handling
function handleBookingError(error) {
    const errorMessages = {
        network: 'Verkkovirhe. Tarkista internet-yhteytesi.',
        timeout: 'Pyyntö aikakatkaistiin. Yritä uudelleen.',
        server: 'Palvelinvirhe. Yritä myöhemmin uudelleen.',
        validation: 'Tarkista tietosi ja yritä uudelleen.',
        default: 'Jotain meni pieleen. Yritä uudelleen.'
    };
    
    const message = errorMessages[error] || errorMessages.default;
    
    showErrorModal('Varaus epäonnistui', message);
}

function showErrorModal(title, message) {
    document.getElementById('error-modal-title').textContent = title;
    document.getElementById('error-modal-message').textContent = message;
    openModal('error-modal');
}

// Get trainer avatar URL
function getTrainerAvatar(name) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=667eea&color=fff&size=200&bold=true`;
}

// Render trainers helper
function renderTrainers(trainers, container) {
    container.innerHTML = trainers.map(trainer => `
        <div class="trainer-card" onclick="openTrainerProfile(${trainer.id})">
            <div class="trainer-image">
                <img src="${getTrainerAvatar(trainer.name)}" alt="${trainer.name}" style="width: 100%; height: 100%; object-fit: cover;">
                ${trainer.trending ? '<div class="trainer-badge">Trendaa</div>' : ''}
                <button class="favorite-btn ${isFavorite(trainer.id) ? 'active' : ''}" onclick="toggleFavorite(${trainer.id})" aria-label="Lisää suosikkeihin">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="trainer-info">
                <div class="trainer-header">
                    <div>
                        <div class="trainer-name">
                            ${trainer.name}
                            ${trainer.trending ? '<span class="trending-badge">+' + trainer.recentlyBooked + ' var.</span>' : ''}
                        </div>
                        <div class="trainer-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${trainer.location}
                        </div>
                    </div>
                    <div class="trainer-rating">
                        <i class="fas fa-star"></i>
                        ${trainer.rating}
                        <span style="color: var(--gray); font-size: 0.8rem;">(${trainer.reviewCount})</span>
                    </div>
                </div>
                <div class="trainer-specialties">
                    ${trainer.specialties.map(specialty => `
                        <span class="specialty-tag">${specialty}</span>
                    `).join('')}
                </div>
                <div class="trainer-footer">
                    <div>
                        <span class="trainer-price">${trainer.hourlyRate}€</span>
                        <span class="price-label">per tunti</span>
                    </div>
                    <button class="btn btn-primary" onclick="event.stopPropagation(); openTrainerProfile(${trainer.id})">
                        Varaa
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Calendar helper - get current date
function getCurrentDate() {
    const now = new Date();
    return now.toISOString().split('T')[0];
}

function isPastDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
}

function getAvailabilityCount(trainer, date) {
    return trainer.availability[date] ? trainer.availability[date].length : 0;
}
