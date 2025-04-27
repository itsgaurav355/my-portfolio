// Make sure this function is correctly defined
function opentab(tabname) {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");
  
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }
  
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }
  
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// Initialize AOS animation library
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with custom settings for more dynamic feel
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true
    });
    
    // Initialize reveal animations
    const revealElements = document.querySelectorAll('.reveal');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const revealTop = element.getBoundingClientRect().top;
            
            if(revealTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on page load
    
    // Add animated shapes to sections
    const sections = document.querySelectorAll('#header, #about, #services, #portfolio, #contact');
    
    sections.forEach(section => {
        const bgShapes = document.createElement('div');
        bgShapes.className = 'bg-shapes';
        
        for (let i = 1; i <= 5; i++) {
            const shape = document.createElement('div');
            shape.className = `shape shape-${i}`;
            bgShapes.appendChild(shape);
        }
        
        section.appendChild(bgShapes);
    });
    
    // Create dynamic skill bars
    const skillData = [
        { name: "Flutter", percentage: 95 },
        { name: "Java", percentage: 95 },
        { name: "Python", percentage: 85 },
        { name: "React.js", percentage: 85 },
        { name: "Node.js", percentage: 95 },      
    ];
    
    // Find the skills list
    const skillsList = document.querySelector('#skills ul');
    
    if (skillsList) {
        // The skills are now handled in the HTML directly with the new structure
        // No need to programmatically generate them, so we can comment this out
        /*
        // Clear existing skills
        skillsList.innerHTML = '';
        
        // Create skill container
        const skillContainer = document.createElement('div');
        skillContainer.className = 'skill-container';
        
        // Add skills
        skillData.forEach((skill, index) => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item';
            skillItem.setAttribute('data-aos', 'fade-up');
            skillItem.setAttribute('data-aos-delay', (index * 100).toString());
            
            const skillName = document.createElement('div');
            skillName.className = 'skill-name';
            skillName.innerHTML = `${skill.name} <span>${skill.percentage}%</span>`;
            
            const skillBar = document.createElement('div');
            skillBar.className = 'skill-bar';
            
            const skillPercentage = document.createElement('div');
            skillPercentage.className = 'skill-percentage';
            
            skillBar.appendChild(skillPercentage);
            skillItem.appendChild(skillName);
            skillItem.appendChild(skillBar);
            skillContainer.appendChild(skillItem);
            
            // Use Intersection Observer to animate skill bars when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            skillPercentage.style.width = `${skill.percentage}%`;
                        }, 300);
                        observer.unobserve(skillItem);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(skillItem);
        });
        
        skillsList.appendChild(skillContainer);
        */
    }
    
    
    // Add 3D effect to service cards
    const serviceCards = document.querySelectorAll('.services-list div');
    serviceCards.forEach(card => {
        card.classList.add('card-3d');
        
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleY = (x - centerX) / 15; // Less extreme for smoother effect
            const angleX = (y - centerY) / -15;
            
            card.style.transform = `perspective(800px) rotateY(${angleY}deg) rotateX(${angleX}deg)`;
            card.style.boxShadow = `${angleY/2}px ${-angleX/2}px 20px rgba(0, 0, 255, 0.2)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
            card.style.boxShadow = '0px 0px 10px rgba(0, 0, 255, 0.1)';
            card.style.transition = 'all 0.5s ease';
        });
    });
    
    // Add glow effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.classList.add('glow-on-hover');
    });
    
    // Improved typing animation for header
    const headerTitle = document.querySelector('.header-text h1');
    if (headerTitle && !headerTitle.classList.contains('typing-animation-processed')) {
        headerTitle.classList.add('typing-animation-processed');
        
        // Let the animation classes work first, then apply typing effect
        setTimeout(() => {
            const originalText = headerTitle.innerHTML;
            headerTitle.innerHTML = `<span class="typing-animation">${originalText}</span>`;
        }, 1500);
    }
    
    // Parallax effect for header background
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        const scrollPosition = window.pageYOffset;
        
        if (scrollPosition <= header.offsetHeight) {
            const yPos = -(scrollPosition * 0.3);
            header.style.backgroundPosition = `center ${yPos}px`;
        }
    });
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle Contact Form Submission
    const contactForm = document.querySelector('#contact form');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzN3J_2qixxhKysk-ikyExTB9kB3olWUnhs3gkU5ebqw_qABpIsDNxlVODD11v4PFE/exec'; // <-- PASTE YOUR COPIED URL HERE

    if (contactForm && scriptURL !== 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') { // Check if URL is replaced
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            const formData = new FormData(contactForm);
            const name = formData.get('Name'); // Get name for personalized message

            // Provide visual feedback
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            fetch(scriptURL, { method: 'POST', body: formData })
                .then(response => response.json()) // Assuming Apps Script returns JSON
                .then(data => {
                    console.log('Success:', data);
                    submitButton.textContent = 'Message Sent!';
                    submitButton.style.background = '#00c853'; // Green for success

                    // Optional: Add a success message to the form
                    let successMsg = contactForm.querySelector('.form-success-msg');
                    if (!successMsg) {
                        successMsg = document.createElement('p');
                        successMsg.className = 'form-success-msg';
                        successMsg.style.color = '#00c853';
                        successMsg.style.marginTop = '15px';
                        successMsg.style.fontWeight = '500';
                        contactForm.appendChild(successMsg);
                    }
                    successMsg.textContent = `Thank you ${name || 'for your message'}! I'll get back to you shortly.`;
                    successMsg.style.display = 'block'; // Ensure it's visible

                    // Hide any previous error message
                    const errorMsg = contactForm.querySelector('.form-error-msg');
                    if (errorMsg) errorMsg.style.display = 'none';

                    contactForm.reset(); // Clear the form

                    // Reset button after a delay
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.textContent = originalButtonText;
                        submitButton.style.background = ''; // Reset background
                        if (successMsg) successMsg.style.display = 'none'; // Hide success message
                    }, 5000); // Keep success state for 5 seconds
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    submitButton.disabled = false;
                    submitButton.textContent = 'Submit Failed';
                    submitButton.style.background = '#dc3545'; // Red for error

                     // Optional: Add an error message to the form
                    let errorMsg = contactForm.querySelector('.form-error-msg');
                    if (!errorMsg) {
                        errorMsg = document.createElement('p');
                        errorMsg.className = 'form-error-msg';
                        errorMsg.style.color = '#dc3545';
                        errorMsg.style.marginTop = '15px';
                        errorMsg.style.fontWeight = '500';
                        contactForm.appendChild(errorMsg);
                    }
                    errorMsg.textContent = 'Oops! Something went wrong. Please try again.';
                    errorMsg.style.display = 'block'; // Ensure it's visible

                     // Hide any previous success message
                    const successMsg = contactForm.querySelector('.form-success-msg');
                    if (successMsg) successMsg.style.display = 'none';


                    // Reset button after a delay
                    setTimeout(() => {
                        submitButton.textContent = originalButtonText;
                        submitButton.style.background = ''; // Reset background
                         if (errorMsg) errorMsg.style.display = 'none'; // Hide error message
                    }, 5000); // Keep error state for 5 seconds
                });
        });
    } else if (scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') {
         console.warn("Contact form script URL not set in index.js. Form submission will not work.");
    }

    // Specially handle the about section image to remove inline styles
    const aboutImg = document.querySelector('#about .about-col-1 img');
    if (aboutImg) {
        aboutImg.removeAttribute('style');
    }
}); // End of DOMContentLoaded

// Add hover effects to tech stack items
document.addEventListener('DOMContentLoaded', function() {
    // Add animations to tech stack spans
    const techStackItems = document.querySelectorAll('.tech-stack span');
    techStackItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});