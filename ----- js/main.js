     1	// ======================
     2	// Navigation & Scroll
     3	// ======================
     4	
     5	// Hamburger Menu Toggle
     6	const hamburger = document.getElementById('hamburger');
     7	const navMenu = document.getElementById('navMenu');
     8	
     9	hamburger.addEventListener('click', () => {
    10	    hamburger.classList.toggle('active');
    11	    navMenu.classList.toggle('active');
    12	});
    13	
    14	// Close menu when clicking nav links
    15	const navLinks = document.querySelectorAll('.nav-link');
    16	navLinks.forEach(link => {
    17	    link.addEventListener('click', () => {
    18	        hamburger.classList.remove('active');
    19	        navMenu.classList.remove('active');
    20	    });
    21	});
    22	
    23	// Navbar Scroll Effect
    24	const navbar = document.getElementById('navbar');
    25	window.addEventListener('scroll', () => {
    26	    if (window.scrollY > 100) {
    27	        navbar.classList.add('scrolled');
    28	    } else {
    29	        navbar.classList.remove('scrolled');
    30	    }
    31	});
    32	
    33	// Active Nav Link on Scroll
    34	const sections = document.querySelectorAll('section');
    35	
    36	window.addEventListener('scroll', () => {
    37	    let current = '';
    38	    sections.forEach(section => {
    39	        const sectionTop = section.offsetTop;
    40	        const sectionHeight = section.clientHeight;
    41	        if (window.scrollY >= sectionTop - 100) {
    42	            current = section.getAttribute('id');
    43	        }
    44	    });
    45	
    46	    navLinks.forEach(link => {
    47	        link.classList.remove('active');
    48	        if (link.getAttribute('href') === `#${current}`) {
    49	            link.classList.add('active');
    50	        }