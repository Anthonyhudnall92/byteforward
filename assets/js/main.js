// ByteForward - Main JavaScript

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeApp()
})

// Initialize Application
function initializeApp() {
  initMobileNavigation()
  initSmoothScrolling()
  initContactForm()
  initScrollAnimations()
  initSecurityGrid()
  initNavbarScrollEffect()
}

// Mobile Navigation
function initMobileNavigation() {
  const hamburger = document.querySelector('.hamburger')
  const navMenu = document.querySelector('.nav-menu')
  const navLinks = document.querySelectorAll('.nav-link')

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active')
      navMenu.classList.toggle('active')
    })

    // Close mobile menu when clicking on a nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
      if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
      }
    })
  }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]')
  const heroButtons = document.querySelectorAll('.hero-buttons a[href^="#"]');

  [...navLinks, ...heroButtons].forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const navHeight = document.querySelector('.navbar').offsetHeight
        const targetPosition = targetSection.offsetTop - navHeight

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })
}

// Contact Form Handling
function initContactForm() {
  const contactForm = document.querySelector('.contact-form')

  if (contactForm) {
    // For Formspree, we validate first then allow submission
    contactForm.addEventListener('submit', function(e) {
      const inputs = this.querySelectorAll('input[required], textarea[required]')
      let isFormValid = true

      // Validate all required fields before submission
      inputs.forEach(input => {
        if (!validateField(input)) {
          isFormValid = false
        }
      })

      if (!isFormValid) {
        e.preventDefault()
        return false
      }

      // Show loading state for better UX
      const submitButton = this.querySelector('button[type="submit"]')
      submitButton.textContent = 'Sending...'
      submitButton.disabled = true
      
      // Allow form to submit normally to Formspree
      // Formspree will handle the redirect to thank-you page
    })

    // Add real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea')
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(this)
      })

      input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          validateField(this)
        }
      })
    })
  }
}

// Form Validation
function validateField(field) {
  const value = field.value.trim()
  const fieldName = field.name
  let isValid = true
  let errorMessage = ''

  // Remove existing error styling
  field.classList.remove('error')
  removeErrorMessage(field)

  switch (fieldName) {
  case 'name':
    if (value.length < 2) {
      isValid = false
      errorMessage = 'Name must be at least 2 characters long.'
    }
    break
  case 'email':
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      isValid = false
      errorMessage = 'Please enter a valid email address.'
    }
    break
  case 'message':
    if (value.length < 10) {
      isValid = false
      errorMessage = 'Message must be at least 10 characters long.'
    }
    break
  }

  if (!isValid) {
    field.classList.add('error')
    showErrorMessage(field, errorMessage)
  }

  return isValid
}

// Show Error Message
function showErrorMessage(field, message) {
  const errorElement = document.createElement('span')
  errorElement.className = 'error-message'
  errorElement.textContent = message
  errorElement.style.color = '#ff6b35'
  errorElement.style.fontSize = '0.875rem'
  errorElement.style.marginTop = '0.5rem'
  errorElement.style.display = 'block'

  field.parentNode.appendChild(errorElement)
}

// Remove Error Message
function removeErrorMessage(field) {
  const errorMessage = field.parentNode.querySelector('.error-message')
  if (errorMessage) {
    errorMessage.remove()
  }
}

// Handle Form Submission
function handleFormSubmission(form) {
  const inputs = form.querySelectorAll('input[required], textarea[required]')
  let isFormValid = true

  // Validate all required fields
  inputs.forEach(input => {
    if (!validateField(input)) {
      isFormValid = false
    }
  })

  if (isFormValid) {
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]')
    const originalText = submitButton.textContent
    submitButton.textContent = 'Sending...'
    submitButton.disabled = true

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      showSuccessMessage()
      form.reset()
      submitButton.textContent = originalText
      submitButton.disabled = false
    }, 2000)
  }
}

// Show Success Message
function showSuccessMessage() {
  const message = document.createElement('div')
  message.className = 'success-message'
  message.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #00ff88 0%, #00cc6a 100%);
            color: #ffffff;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-weight: 500;
            z-index: 10000;
            box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
            animation: slideInRight 0.5s ease-out;
        ">
            ✅ Message sent successfully! We'll get back to you soon.
        </div>
    `

  document.body.appendChild(message)

  // Remove message after 5 seconds
  setTimeout(() => {
    message.remove()
  }, 5000)
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1'
        entry.target.style.transform = 'translateY(0)'
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.service-card, .stat, .contact-item')
  animateElements.forEach(el => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    observer.observe(el)
  })
}

// Security Grid Animation
function initSecurityGrid() {
  const gridItems = document.querySelectorAll('.grid-item')

  if (gridItems.length > 0) {
    const currentIndex = 0

    setInterval(() => {
      // Remove active class from all items
      gridItems.forEach(item => item.classList.remove('active'))

      // Add active class to random items
      const numActive = Math.floor(Math.random() * 3) + 2 // 2-4 active items
      const activeIndices = []

      while (activeIndices.length < numActive) {
        const randomIndex = Math.floor(Math.random() * gridItems.length)
        if (!activeIndices.includes(randomIndex)) {
          activeIndices.push(randomIndex)
          gridItems[randomIndex].classList.add('active')
        }
      }
    }, 2000)
  }
}

// Navbar Scroll Effect
function initNavbarScrollEffect() {
  const navbar = document.querySelector('.navbar')
  let lastScrollY = window.scrollY

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      navbar.style.background = 'rgba(10, 10, 10, 0.98)'
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)'
    } else {
      navbar.style.background = 'rgba(10, 10, 10, 0.95)'
      navbar.style.boxShadow = 'none'
    }

    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 200) {
      navbar.style.transform = 'translateY(-100%)'
    } else {
      navbar.style.transform = 'translateY(0)'
    }

    lastScrollY = currentScrollY
  })
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function throttle(func, limit) {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Add CSS animations
const style = document.createElement('style')
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .form-group input.error,
    .form-group textarea.error {
        border-color: #ff6b35;
        box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2);
    }
`
document.head.appendChild(style)

// Error Handling
window.addEventListener('error', (e) => {
  console.error('ByteForward Error:', e.error)
})

// Performance Monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perf = performance.getEntriesByType('navigation')[0]
      console.log('ByteForward Load Time:', perf.loadEventEnd - perf.loadEventStart, 'ms')
    }, 0)
  })
}
