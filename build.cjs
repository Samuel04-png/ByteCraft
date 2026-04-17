const fs = require('fs');

const head = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bytecraft Technology | CCTV & Security Installation Zambia</title>
  <meta name="description" content="Professional CCTV, electric gate, alarm, and access control installation in Lusaka, Zambia. Free site assessment. Call Bytecraft Technology today.">
  <meta name="keywords" content="CCTV installation Lusaka, security systems Zambia, electric gate motor, access control, intruder alarm">
  <meta property="og:title" content="Bytecraft Technology">
  <meta property="og:description" content="Zambia's trusted physical security installation specialists.">

  <!-- Favicon Setup -->
  <link rel="apple-touch-icon" sizes="180x180" href="bytecraft_logo/favicon_io/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="bytecraft_logo/favicon_io/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="bytecraft_logo/favicon_io/favicon-16x16.png">
  <link rel="manifest" href="bytecraft_logo/favicon_io/site.webmanifest">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  
  <!-- AOS CSS -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
`;

const style = `<style>
    :root {
      --amber: #BA7517;
      --amber-light: #EF9F27;
      --dark-bg: #0D0F14;
      --dark-card: #141820;
      --dark-surface: #1C2230;
      --dark-border: #2A3040;
      --white: #FFFFFF;
      --off-white: #E8EAF0;
      --text-muted: #8A91A0;
      
      --font-display: 'Barlow Condensed', sans-serif;
      --font-body: 'DM Sans', sans-serif;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font-body); background-color: var(--dark-bg); color: var(--off-white); line-height: 1.7; overflow-x: hidden; }
    h1, h2, h3, h4, h5, h6, .font-display { font-family: var(--font-display); text-transform: uppercase; line-height: 1.1; }
    a { text-decoration: none; }
    ul { list-style: none; }

    /* Buttons & Utilities */
    .cta-btn {
      background: var(--amber); color: var(--white); font-family: var(--font-display); font-weight: 600; font-size: 14px;
      text-transform: uppercase; padding: 10px 22px; border-radius: 4px; border: none; cursor: pointer; transition: background 0.3s;
      display: inline-block; text-align: center;
    }
    .cta-btn:hover { background: var(--amber-light); }
    .btn-secondary {
      background: transparent; color: var(--amber); font-family: var(--font-display); font-weight: 600; font-size: 14px;
      text-transform: uppercase; padding: 10px 22px; border-radius: 4px; border: 1px solid var(--amber); cursor: pointer; transition: all 0.3s;
      display: inline-block; text-align: center;
    }
    .btn-secondary:hover { background: rgba(186, 117, 23, 0.1); }
    .section-label { font-size: 11px; color: var(--amber); letter-spacing: 0.15em; font-family: var(--font-body); text-transform: uppercase; margin-bottom: 8px; display: block; }
    .tag { display: inline-block; background: var(--dark-surface); color: var(--amber); font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; padding: 4px 8px; border-radius: 4px; }
    section { padding: 5rem 5%; }
    
    /* Nav */
    nav { position: fixed; top: 0; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1rem 5%; background: transparent; z-index: 1000; transition: background 0.3s, border-bottom 0.3s; }
    nav.scrolled { background: var(--dark-bg); border-bottom: 1px solid var(--dark-border); }
    .nav-logo img { height: 36px; }
    .nav-links { display: none; gap: 2rem; align-items: center; }
    .nav-links a { color: var(--text-muted); font-size: 14px; font-weight: 500; transition: color 0.3s; }
    .nav-links a:hover, .nav-links a.active { color: var(--white); }
    .nav-links a.active { border-bottom: 2px solid var(--amber); padding-bottom: 4px; }
    .nav-right { display: flex; align-items: center; gap: 1.5rem; }
    .nav-phone { display: none; color: var(--text-muted); font-size: 14px; }
    
    /* Mobile Menu */
    .mobile-menu-btn { display: flex; flex-direction: column; gap: 5px; cursor: pointer; z-index: 1100; }
    .mobile-menu-btn span { width: 25px; height: 3px; background: var(--amber); transition: 0.3s; }
    .mobile-nav { position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(13, 15, 20, 0.98); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 2rem; z-index: 1050; opacity: 0; pointer-events: none; transition: 0.3s; }
    .mobile-nav.open { opacity: 1; pointer-events: all; }
    .mobile-nav a { color: var(--white); font-size: 1.5rem; font-family: var(--font-display); }

    /* Hero */
    .hero { min-height: 100vh; display: grid; grid-template-columns: 1fr; align-items: center; position: relative; padding-top: 100px; gap: 3rem; background: url('images/hero_installation.jpg') no-repeat center center/cover; }
    .hero::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.65); z-index: 0; }
    .hero-content, .hero-card { position: relative; z-index: 1; }
    .hero-content { max-width: 600px; }
    .hero h1 { font-size: 44px; color: var(--white); font-weight: 800; line-height: 1.0; margin: 1rem 0; }
    .amber-line { width: 60px; height: 3px; background: var(--amber); margin-bottom: 1.5rem; }
    .hero p { font-size: 17px; color: var(--off-white); max-width: 480px; margin-bottom: 2rem; }
    .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
    
    /* Quick Contact Card */
    .contact-card { background: var(--dark-card); border: 1px solid var(--dark-border); border-radius: 8px; padding: 24px; width: 100%; max-width: 400px; margin: 0 auto; margin-top: 2rem; }
    .contact-card h3 { font-size: 18px; font-weight: 600; color: var(--white); margin-bottom: 0.5rem; }
    .contact-card p.sub { font-size: 13px; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.4; }
    .form-group { margin-bottom: 1rem; }
    .form-control { width: 100%; padding: 12px; background: var(--dark-bg); border: 1px solid var(--dark-border); color: var(--white); border-radius: 4px; font-family: var(--font-body); font-size: 14px; }
    .form-control:focus { border-color: var(--amber); outline: none; }
    .privacy-note { font-size: 11px; color: var(--text-muted); text-align: center; margin-top: 0.5rem; }

    /* Trust Stats */
    .trust-stats { background: var(--amber); padding: 3rem 5%; color: var(--dark-bg); }
    .stats-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; text-align: center; }
    .stat .num { font-size: 42px; font-weight: 800; }
    .stat .label { font-size: 13px; font-weight: 500; text-transform: uppercase; }

    /* Services */
    .section-title { font-size: 32px; font-weight: 700; color: var(--white); margin-bottom: 3rem; }
    .services-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
    .service-card { background: var(--dark-card); border: 1px solid var(--dark-border); border-radius: 8px; padding: 24px; transition: all 0.3s; }
    .service-card:hover { border-color: var(--amber); transform: translateY(-4px); }
    .service-icon { margin-bottom: 1rem; width: 28px; height: 28px; fill: none; stroke: var(--amber); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .service-card h3 { font-size: 20px; font-weight: 600; margin-bottom: 0.5rem; }
    .service-card p { font-size: 14px; color: var(--text-muted); margin-bottom: 1.5rem; line-height: 1.6; }
    .learn-more { color: var(--amber); font-size: 13px; font-weight: 500; }

    /* Who We Serve */
    .categories { background: var(--dark-surface); }
    .cat-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
    .cat-card { position: relative; border-radius: 8px; overflow: hidden; min-height: 220px; background-size: cover; background-position: center; }
    .cat-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%); }
    .cat-card .content { position: absolute; bottom: 0; left: 0; padding: 24px; }
    .cat-card h3 { font-size: 24px; font-weight: 700; margin-top: 8px; color: var(--white); }

    /* Why Us / Split */
    .split-section { display: grid; grid-template-columns: 1fr; gap: 3rem; padding: 0; }
    .split-img { min-height: 400px; background: url('images/technician_working.jpg') no-repeat center center/cover; border-left: 4px solid var(--amber); }
    .split-content { padding: 4rem 5%; }
    .feature-list { margin-top: 2rem; display: flex; flex-direction: column; gap: 1.5rem; }
    .feat-item { display: flex; align-items: flex-start; gap: 1rem; }
    .feat-dot { width: 8px; height: 8px; background: var(--amber); border-radius: 50%; margin-top: 8px; flex-shrink: 0; }
    .feat-text b { color: var(--white); font-size: 15px; display: block; margin-bottom: 4px; }
    .feat-text p { font-size: 14px; color: var(--text-muted); margin: 0; }

    /* Packages */
    .packages { background: #F4F5F7; color: var(--dark-bg); }
    .packages .section-title { color: var(--dark-bg); }
    .packages .section-label { color: var(--dark-bg); }
    .packages-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-top: 3rem; }
    .pkg-card { background: var(--white); border: 1px solid #DDE0E8; border-radius: 8px; padding: 2rem; display: flex; flex-direction: column; }
    .pkg-card.featured { background: var(--dark-bg); border: 2px solid var(--amber); color: var(--white); position: relative; }
    .badge { position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: var(--amber); color: var(--white); font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 12px; }
    .pkg-tag { font-size: 11px; font-weight: 600; color: var(--text-muted); margin-bottom: 0.5rem; letter-spacing: 0.05em; }
    .pkg-card h3 { font-size: 24px; margin-bottom: 0.5rem; }
    .pkg-price { font-size: 32px; font-weight: 700; font-family: var(--font-display); color: var(--amber); margin-bottom: 0.5rem; }
    .pkg-sub { font-size: 13px; color: var(--text-muted); margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid #DDE0E8; }
    .pkg-card.featured .pkg-sub { border-bottom-color: var(--dark-border); }
    .pkg-features { flex: 1; margin-bottom: 2rem; }
    .pkg-features li { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; font-size: 14px; }
    .pkg-features li::before { content: '✓'; color: var(--amber); font-weight: bold; }
    
    .pkg-btn { width: 100%; padding: 12px; text-align: center; border-radius: 4px; font-family: var(--font-display); font-weight: 600; font-size: 15px; text-transform: uppercase; cursor: pointer; transition: 0.3s; }
    .pkg-btn-outline { background: transparent; border: 1px solid var(--amber); color: var(--amber); }
    .pkg-btn-outline:hover { background: var(--amber); color: var(--white); }
    .pkg-btn-fill { background: var(--amber); border: 1px solid var(--amber); color: var(--white); }
    .pkg-btn-fill:hover { background: var(--amber-light); }

    .info-bar { margin-top: 3rem; display: flex; flex-direction: column; align-items: center; gap: 1.5rem; background: var(--amber); padding: 1.5rem; border-radius: 8px; text-align: center; color: var(--dark-bg); font-weight: 600; }
    .info-bar .cta-btn { background: var(--dark-bg); color: var(--white); }

    /* Projects Gallery */
    .gallery-grid { column-count: 1; column-gap: 1rem; margin-top: 2rem; }
    .gallery-item { break-inside: avoid; margin-bottom: 1rem; position: relative; border-radius: 8px; overflow: hidden; }
    .gallery-item img { width: 100%; display: block; }
    .gallery-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s; }
    .gallery-item:hover .gallery-overlay { opacity: 1; }
    .gallery-label { background: var(--amber); color: var(--white); padding: 6px 12px; font-size: 12px; font-weight: 600; border-radius: 4px; }

    /* Contact Section */
    .contact-section { display: grid; grid-template-columns: 1fr; gap: 4rem; }
    .contact-info h2 { font-size: 32px; color: var(--white); margin-bottom: 1rem; }
    .contact-info p { color: var(--text-muted); margin-bottom: 2rem; }
    .contact-list { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 3rem; }
    .contact-list div { display: flex; align-items: center; gap: 1rem; font-size: 15px; color: var(--off-white); }
    .contact-list span { color: var(--amber); }
    .wa-lrg-btn { display: block; width: 100%; text-align: center; background: #25D366; color: white; padding: 15px; border-radius: 4px; font-family: var(--font-display); font-weight: 700; font-size: 16px; text-transform: uppercase; margin-bottom: 1rem; }
    .wa-lrg-btn:hover { background: #20BA5A; }

    /* Footer */
    footer { background: #080A0E; padding: 4rem 5% 2rem; border-top: 1px solid var(--dark-border); }
    .ft-top { display: flex; flex-direction: column; gap: 2rem; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid var(--dark-border); padding-bottom: 2rem; text-align: center; }
    .ft-top img { height: 40px; }
    .ft-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem; }
    .ft-links a { color: var(--off-white); font-size: 14px; }
    .ft-links a:hover { color: var(--amber); }
    .ft-mid { text-align: center; color: var(--text-muted); font-size: 18px; font-weight: 500; font-family: var(--font-display); margin-bottom: 2rem; }
    .ft-bottom { display: flex; flex-direction: column; align-items: center; gap: 1rem; color: var(--text-muted); font-size: 13px; }
    .ft-bottom a { color: var(--amber); }

    @media(min-width: 768px) {
      .stats-grid { grid-template-columns: repeat(4, 1fr); }
      .services-grid { grid-template-columns: repeat(2, 1fr); }
      .cat-grid { grid-template-columns: repeat(2, 1fr); }
      .packages-grid { grid-template-columns: repeat(3, 1fr); }
      .gallery-grid { column-count: 2; }
      .split-section { grid-template-columns: 1fr 1fr; }
      .contact-section { grid-template-columns: 1fr 1fr; align-items: start; }
      .hero { grid-template-columns: 60% 40%; }
      .hero h1 { font-size: 72px; }
      .contact-card { margin-top: 0; }
      .info-bar { flex-direction: row; justify-content: space-between; text-align: left; }
      .wa-lrg-btn { width: auto; display: inline-block; }
      .ft-top { flex-direction: row; justify-content: space-between; text-align: left; }
      .ft-bottom { flex-direction: row; justify-content: space-between; }
    }
    
    @media(min-width: 1100px) {
      nav { padding: 1.5rem 5%; }
      .nav-links { display: flex; }
      .nav-phone { display: block; }
      .mobile-menu-btn { display: none; }
      .services-grid { grid-template-columns: repeat(3, 1fr); }
      .cat-grid { grid-template-columns: repeat(4, 1fr); }
      .gallery-grid { column-count: 3; }
      .section-title { font-size: 48px; }
    }
  </style>
</head>
<body>
`;

const navAndHero = `
  <nav id="navbar">
    <a href="#" class="nav-logo"><img src="bytecraft_logo/logo_text.png" alt="Bytecraft Technology Logo"></a>
    <div class="nav-links">
      <a href="#home" class="active">Home</a>
      <a href="#services">Services</a>
      <a href="#why-us">Why Us</a>
      <a href="#packages">Packages</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="nav-right">
      <div class="nav-phone">📞 +260 970 000 000</div>
      <a href="#contact" class="cta-btn">Get a Quote</a>
      <div class="mobile-menu-btn" onclick="toggleMenu()">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>

  <div class="mobile-nav" id="mobileMenu">
    <a href="#home" onclick="toggleMenu()">Home</a>
    <a href="#services" onclick="toggleMenu()">Services</a>
    <a href="#why-us" onclick="toggleMenu()">Why Us</a>
    <a href="#packages" onclick="toggleMenu()">Packages</a>
    <a href="#projects" onclick="toggleMenu()">Projects</a>
    <a href="#contact" onclick="toggleMenu()">Contact</a>
  </div>

  <section id="home" class="hero">
    <div class="hero-content" data-aos="fade-right">
      <span class="tag">Lusaka · Zambia</span>
      <h1>Professional<br>Security<br>Installation</h1>
      <div class="amber-line"></div>
      <p>CCTV, electric gates, alarms & access control — expertly installed for homes and businesses across Zambia.</p>
      <div class="hero-btns">
        <a href="#contact" class="cta-btn">Get a Free Quote</a>
        <a href="#services" class="btn-secondary">View Our Services</a>
      </div>
    </div>
    <div class="hero-card" data-aos="fade-left">
      <div class="contact-card">
        <h3>Free Site Assessment</h3>
        <p class="sub">We'll visit your property and quote within 24 hours.</p>
        <form id="heroForm" onsubmit="submitForm(event, 'heroForm')">
          <div class="form-group"><input type="text" id="h-name" class="form-control" placeholder="Name / Company" required></div>
          <div class="form-group"><input type="tel" id="h-phone" class="form-control" placeholder="Phone Number" required></div>
          <div class="form-group">
            <select id="h-service" class="form-control" required>
              <option value="" disabled selected>Service Needed</option>
              <option>CCTV</option><option>Gate Motor</option><option>Alarm</option>
              <option>Access Control</option><option>Full Package</option>
            </select>
          </div>
          <div class="form-group"><textarea id="h-msg" class="form-control" rows="3" placeholder="Message"></textarea></div>
          <button type="submit" class="cta-btn" style="width:100%;">Send via WhatsApp</button>
          <p class="privacy-note">We never share your details.</p>
        </form>
      </div>
    </div>
  </section>

  <section class="trust-stats">
    <div class="stats-grid">
      <div class="stat"><div class="num" data-target="50">0</div><div class="label">Installations Completed</div></div>
      <div class="stat"><div class="num" data-target="5">0</div><div class="label">Average Client Rating</div></div>
      <div class="stat"><div class="num" data-target="3">0</div><div class="label">Years in Zambia</div></div>
      <div class="stat"><div class="num" data-target="24">0</div><div class="label">Support & Maintenance</div></div>
    </div>
  </section>
`;

const servicesAndCategories = `
  <section id="services">
    <span class="section-label">What We Install</span>
    <h2 class="section-title">Complete Security Solutions</h2>
    <div class="services-grid">
      <div class="service-card" data-aos="fade-up">
        <svg class="service-icon" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
        <h3>CCTV & Surveillance</h3>
        <p>IP & analog cameras, NVR/DVR systems, night vision, remote mobile viewing.</p>
        <a href="#contact" class="learn-more">Learn more &rarr;</a>
      </div>
      <div class="service-card" data-aos="fade-up" data-aos-delay="100">
        <svg class="service-icon" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
        <h3>Electric Gate Systems</h3>
        <p>Sliding & swing gate motors, boom barriers, solar options, remote & app control.</p>
        <a href="#contact" class="learn-more">Learn more &rarr;</a>
      </div>
      <div class="service-card" data-aos="fade-up" data-aos-delay="200">
        <svg class="service-icon" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        <h3>Intruder Alarms</h3>
        <p>Motion sensors, door/window contacts, GSM & siren alerts, zone management.</p>
        <a href="#contact" class="learn-more">Learn more &rarr;</a>
      </div>
      <div class="service-card" data-aos="fade-up">
        <svg class="service-icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        <h3>Access Control</h3>
        <p>Biometric fingerprint, proximity cards, PIN keypads, time & attendance integration.</p>
        <a href="#contact" class="learn-more">Learn more &rarr;</a>
      </div>
      <div class="service-card" data-aos="fade-up" data-aos-delay="100">
        <svg class="service-icon" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
        <h3>Electric Fencing</h3>
        <p>Perimeter energizers, zone monitoring, integrated alarm triggering.</p>
        <a href="#contact" class="learn-more">Learn more &rarr;</a>
      </div>
      <div class="service-card" data-aos="fade-up" data-aos-delay="200">
        <svg class="service-icon" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        <h3>Intercoms & PA Systems</h3>
        <p>Video/audio intercoms, multi-apartment panels, IP-based integration.</p>
        <a href="#contact" class="learn-more">Learn more &rarr;</a>
      </div>
    </div>
  </section>

  <section class="categories">
    <span class="section-label" style="text-align: center;">Who We Serve</span>
    <h2 class="section-title" style="text-align: center;">Security For Every Client</h2>
    <div class="cat-grid">
      <div class="cat-card" style="background-image: url('images/residential.jpg');" data-aos="zoom-in">
        <div class="content"><span class="tag">Residential</span><h3>For Homeowners</h3></div>
      </div>
      <div class="cat-card" style="background-image: url('images/business.jpg');" data-aos="zoom-in" data-aos-delay="100">
        <div class="content"><span class="tag">Commercial</span><h3>For Businesses</h3></div>
      </div>
      <div class="cat-card" style="background-image: url('images/industrial.jpg');" data-aos="zoom-in" data-aos-delay="200">
        <div class="content"><span class="tag">Industrial</span><h3>For Logistics</h3></div>
      </div>
      <div class="cat-card" style="background-image: url('images/enterprise.jpg');" data-aos="zoom-in" data-aos-delay="300">
        <div class="content"><span class="tag">Enterprise</span><h3>For Government</h3></div>
      </div>
    </div>
  </section>
`;

const whyUsAndPackages = `
  <section id="why-us" class="split-section">
    <div class="split-img" data-aos="fade-right"></div>
    <div class="split-content" data-aos="fade-left">
      <span class="section-label">Why Choose Us</span>
      <h2 class="section-title">Zambia's Trusted Security Installers</h2>
      <p style="color: var(--text-muted); margin-bottom: 1rem;">Experience meets reliability. We take the guesswork out of physical security by delivering robust, tested systems installed to the highest industry standards.</p>
      <div class="feature-list">
        <div class="feat-item"><div class="feat-dot"></div><div class="feat-text"><b>Factory-trained technicians</b><p>Certified on Hikvision, Dahua, FAAC, ZKTeco, and DSC systems.</p></div></div>
        <div class="feat-item"><div class="feat-dot"></div><div class="feat-text"><b>Tier-1 equipment only</b><p>We use brands with proven reliability, not cheap alternatives.</p></div></div>
        <div class="feat-item"><div class="feat-dot"></div><div class="feat-text"><b>Free site assessment</b><p>We visit before we quote, every time.</p></div></div>
        <div class="feat-item"><div class="feat-dot"></div><div class="feat-text"><b>12-month installation warranty</b><p>All workmanship guaranteed.</p></div></div>
        <div class="feat-item"><div class="feat-dot"></div><div class="feat-text"><b>Post-install training</b><p>We show you exactly how to use your system.</p></div></div>
      </div>
    </div>
  </section>

  <section id="packages" class="packages">
    <img src="bytecraft_logo/logotext_dark.png" alt="Bytecraft Logo Dark" style="height: 30px; margin-bottom: 1rem;">
    <h2 class="section-title">Packages & Pricing</h2>
    <div class="packages-grid">
      <div class="pkg-card" data-aos="fade-up">
        <span class="pkg-tag">RESIDENTIAL</span>
        <h3>Starter Package</h3>
        <div class="pkg-price">K3,500+</div>
        <div class="pkg-sub">4 cameras + DVR + gate motor</div>
        <ul class="pkg-features">
          <li>4-camera CCTV system</li><li>DVR with 1TB storage</li><li>1 electric gate motor</li>
          <li>Remote mobile viewing</li><li>Free site assessment</li><li>6-month warranty</li>
        </ul>
        <a href="#contact" class="pkg-btn pkg-btn-outline">Get This Package</a>
      </div>
      <div class="pkg-card featured" data-aos="fade-up" data-aos-delay="100">
        <div class="badge">MOST POPULAR</div>
        <span class="pkg-tag">RESIDENTIAL / SME</span>
        <h3>Home Pro Package</h3>
        <div class="pkg-price">K9,500+</div>
        <div class="pkg-sub">8 cameras + NVR + gate + alarm</div>
        <ul class="pkg-features">
          <li>8-camera HD CCTV system</li><li>NVR with 2TB storage</li><li>Intruder alarm system</li>
          <li>Gate motor + 3 remotes</li><li>GSM mobile alerts</li><li>Free site assessment</li>
          <li>12-month warranty</li><li>Free annual service visit</li>
        </ul>
        <a href="#contact" class="pkg-btn pkg-btn-fill">Get This Package</a>
      </div>
      <div class="pkg-card" data-aos="fade-up" data-aos-delay="200">
        <span class="pkg-tag">COMMERCIAL</span>
        <h3>Business Package</h3>
        <div class="pkg-price">K18,000+</div>
        <div class="pkg-sub">Full perimeter + access control</div>
        <ul class="pkg-features">
          <li>16+ camera commercial CCTV</li><li>Access control (biometric)</li><li>Electric fence + alarm</li>
          <li>Staff time & attendance</li><li>Boom barrier option</li><li>Priority 24/7 support</li>
          <li>Custom SLA agreement</li>
        </ul>
        <a href="#contact" class="pkg-btn pkg-btn-outline">Get This Package</a>
      </div>
    </div>
    
    <div class="info-bar" data-aos="fade-up">
      <div>Enterprise & government projects are custom scoped.<br>Contact us for a tailored quotation.</div>
      <a href="https://wa.me/260970000000" target="_blank" class="cta-btn">WhatsApp Us Now</a>
    </div>
  </section>
`;

const galleryAndContact = `
  <section id="projects">
    <span class="section-label">Gallery</span>
    <h2 class="section-title">Recent Installations</h2>
    <div class="gallery-grid">
      <div class="gallery-item" data-aos="fade-up"><img src="images/cctv_install_1.jpg" alt="Project 1"><div class="gallery-overlay"><span class="gallery-label">CCTV Install — Lusaka</span></div></div>
      <div class="gallery-item" data-aos="fade-up"><img src="images/gate_motor_1.jpg" alt="Project 2"><div class="gallery-overlay"><span class="gallery-label">Gate Auto — Woodlands</span></div></div>
      <div class="gallery-item" data-aos="fade-up"><img src="images/alarm_system_1.jpg" alt="Project 3"><div class="gallery-overlay"><span class="gallery-label">Alarm Panel Setup</span></div></div>
      <div class="gallery-item" data-aos="fade-up"><img src="images/access_control_1.jpg" alt="Project 4"><div class="gallery-overlay"><span class="gallery-label">Biometric System</span></div></div>
      <div class="gallery-item" data-aos="fade-up"><img src="images/technician_working_2.jpg" alt="Project 5"><div class="gallery-overlay"><span class="gallery-label">Server Rack Assembly</span></div></div>
    </div>
    <p style="color: var(--text-muted); font-size: 14px; text-align: center; margin-top: 2rem;">Every installation is photographed and documented. Ask us for a full portfolio.</p>
  </section>

  <section id="contact" class="contact-section">
    <div class="contact-info" data-aos="fade-right">
      <h2>Get Your Free Site Assessment</h2>
      <p>We visit your property, assess your security needs, and provide a full written quote — at no cost to you.</p>
      <div class="contact-list">
        <div><span>📍</span> Lusaka, Zambia</div>
        <div><span>📞</span> +260 970 000 000</div>
        <div><span>💬</span> WhatsApp: +260 970 000 000</div>
        <div><span>✉️</span> info@bytecrafttech.com</div>
        <div><span>🌐</span> bytecrafttech.com</div>
      </div>
      <a href="https://wa.me/260970000000" target="_blank" class="wa-lrg-btn">Chat With Us on WhatsApp</a>
      <p style="font-size: 13px; color: var(--text-muted);">We typically respond within 2 hours.</p>
    </div>
    
    <div class="contact-card" style="margin:0; width:100%; max-width:none;" data-aos="fade-left">
      <h3>Request Site Survey</h3>
      <p class="sub">Fill out the details to get started.</p>
      <form id="contactForm" onsubmit="submitForm(event, 'contactForm')">
        <div class="form-group"><input type="text" id="c-name" class="form-control" placeholder="Name / Company" required></div>
        <div class="form-group"><input type="tel" id="c-phone" class="form-control" placeholder="Phone Number" required></div>
        <div class="form-group">
          <select id="c-service" class="form-control" required>
            <option value="" disabled selected>Service Needed</option>
            <option>CCTV</option><option>Gate Motor</option><option>Alarm</option>
            <option>Access Control</option><option>Full Package</option>
          </select>
        </div>
        <div class="form-group"><textarea id="c-msg" class="form-control" rows="4" placeholder="Message"></textarea></div>
        <button type="submit" class="cta-btn" style="width:100%;">Send via WhatsApp</button>
      </form>
    </div>
  </section>
`;

const footerAndScripts = `
  <footer>
    <div class="ft-top">
      <img src="bytecraft_logo/logo2.png" alt="Bytecraft Icon">
      <div class="ft-links">
        <a href="#home">Home</a><a href="#services">Services</a><a href="#why-us">Why Us</a>
        <a href="#packages">Packages</a><a href="#contact">Contact</a>
      </div>
      <div class="ft-links">
        <a href="#">FB</a><a href="#">IG</a><a href="#">LI</a>
      </div>
    </div>
    <div class="ft-mid">Security, Engineered. · Lusaka, Zambia</div>
    <div class="ft-bottom">
      <div>&copy; 2025 Bytecraft Technology. All rights reserved.</div>
      <div>A sister company of <a href="https://byteandberry.com" target="_blank">Byte & Berry</a></div>
    </div>
  </footer>

  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    // AOS Init
    AOS.init({ duration: 600, once: true });

    // Mobile Menu Toggle
    function toggleMenu() {
      document.getElementById('mobileMenu').classList.toggle('open');
    }

    // Scroll Navbar effect & Active Links
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('navbar');
      if (window.scrollY > 80) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');

      // Update active nav link
      let current = '';
      document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === \`#\${current}\`) {
          a.classList.add('active');
        }
      });
    });

    // Form Submission to WhatsApp
    function submitForm(e, formId) {
      e.preventDefault();
      const prefix = formId === 'heroForm' ? 'h' : 'c';
      const name = document.getElementById(prefix + '-name').value;
      const phone = document.getElementById(prefix + '-phone').value;
      const service = document.getElementById(prefix + '-service').value;
      const msg = document.getElementById(prefix + '-msg').value;

      const text = \`Hi Bytecraft, I'd like a free site assessment.%0A%0AName: \${name}%0APhone: \${phone}%0AService: \${service}%0AMessage: \${msg}\`;
      window.open('https://wa.me/260970000000?text=' + text, '_blank');
    }

    // Counter Animation
    const counters = document.querySelectorAll('.num');
    let counted = false;
    window.addEventListener('scroll', () => {
      const statsSection = document.querySelector('.trust-stats');
      if (!statsSection) return;
      const sectionPos = statsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight;

      if(sectionPos < screenPos && !counted) {
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          if (target === 5 || target === 3) return counter.innerText = target + (target===5?'★':'+');
          
          const updateCount = () => {
            const count = +counter.innerText.replace('+','').replace('★','');
            const inc = target / 20;
            if(count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 40);
            } else {
              counter.innerText = target + '+';
            }
          };
          updateCount();
        });
        counted = true;
      }
    });
  </script>
</body>
</html>
`;

fs.writeFileSync('index.html', head + style + navAndHero + servicesAndCategories + whyUsAndPackages + galleryAndContact + footerAndScripts);
console.log('Successfully built index.html');
