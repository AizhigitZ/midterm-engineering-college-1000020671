// Main JavaScript for Engineering College Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initFAQToggle();
    initFormValidation();
    initNavigation();
    initApplicationProgress();
});
// Enhanced FAQ Toggle Functionality
function initFAQToggle() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // Add ARIA attributes for accessibility
        question.setAttribute('aria-expanded', 'false');
        question.setAttribute('role', 'button');
        answer.setAttribute('aria-hidden', 'true');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items with smooth transitions
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    closeFAQItem(otherItem);
                }
            });
            
            // Toggle current item
            if (isActive) {
                closeFAQItem(item);
            } else {
                openFAQItem(item);
            }
        });
        
        // Keyboard accessibility
        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
            
            // Arrow key navigation between FAQs
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextItem = item.nextElementSibling;
                if (nextItem && nextItem.classList.contains('faq-item')) {
                    nextItem.querySelector('.faq-question').focus();
                }
            }
            
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevItem = item.previousElementSibling;
                if (prevItem && prevItem.classList.contains('faq-item')) {
                    prevItem.querySelector('.faq-question').focus();
                }
            }
        });
    });
}

// Helper functions for smooth FAQ transitions
function openFAQItem(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    item.classList.add('active');
    question.setAttribute('aria-expanded', 'true');
    answer.setAttribute('aria-hidden', 'false');
    
    // Smooth scroll to ensure the expanded answer is visible
    setTimeout(() => {
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
}

function closeFAQItem(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    item.classList.remove('active');
    question.setAttribute('aria-expanded', 'false');
    answer.setAttribute('aria-hidden', 'true');
}

// Close all FAQ items
function closeAllFAQs() {
    document.querySelectorAll('.faq-item.active').forEach(item => {
        closeFAQItem(item);
    });
}

// Helper functions for smooth FAQ transitions
function openFAQItem(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    item.classList.add('active');
    question.setAttribute('aria-expanded', 'true');
    answer.setAttribute('aria-hidden', 'false');
    
    // Smooth scroll to ensure the expanded answer is visible
    setTimeout(() => {
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);
}

function closeFAQItem(item) {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    
    item.classList.remove('active');
    question.setAttribute('aria-expanded', 'false');
    answer.setAttribute('aria-hidden', 'true');
}

// Close all FAQ items
function closeAllFAQs() {
    document.querySelectorAll('.faq-item.active').forEach(item => {
        closeFAQItem(item);
    });
}
// Navigation Active State
function initNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Contact Form Validation and Submission
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateContactForm()) {
                submitContactForm();
            }
        });
    }
    
    // Registration Form Validation
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateRegistrationForm()) {
                submitRegistrationForm();
            }
        });
    }
}

// Contact Form Validation
function validateContactForm() {
    let isValid = true;
    
    // Name validation
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    if (!name.value.trim()) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }
    
    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }
    
    // Subject validation
    const subject = document.getElementById('subject');
    const subjectError = document.getElementById('subjectError');
    if (!subject.value.trim()) {
        subjectError.style.display = 'block';
        isValid = false;
    } else {
        subjectError.style.display = 'none';
    }
    
    // Message validation
    const message = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (!message.value.trim()) {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }
    
    // Spam check validation
    const spamCheck = document.getElementById('spamCheck');
    const spamError = document.getElementById('spamError');
    if (spamCheck.value.trim() !== '7') {
        spamError.style.display = 'block';
        isValid = false;
    } else {
        spamError.style.display = 'none';
    }
    
    return isValid;
}

// Contact Form Submission
function submitContactForm() {
    // In a real application, this would send data to a server
    // For this demo, we'll just show a success message
    
    const successMessage = document.getElementById('contactSuccess');
    const form = document.getElementById('contactForm');
    
    // Show success message
    successMessage.style.display = 'block';
    
    // Reset form
    form.reset();
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
}

// Registration Form Section Navigation
function showSection(sectionNumber) {
    // Hide all sections
    document.querySelectorAll('.form-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Show selected section
    document.getElementById('section' + sectionNumber).style.display = 'block';
    
    // Update progress bar
    updateProgressBar(sectionNumber);
}

// Update Application Progress Bar
function updateProgressBar(sectionNumber) {
    const progressBar = document.querySelector('.progress-bar');
    let progress = 0;
    
    switch(sectionNumber) {
        case 1:
            progress = 0;
            break;
        case 2:
            progress = 50;
            break;
        case 3:
            progress = 100;
            break;
    }
    
    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', progress);
}

// Initialize Application Progress
function initApplicationProgress() {
    updateProgressBar(1);
}

// Enhanced Form Validation with Better UX
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateContactForm()) {
                submitContactForm();
            }
        });
        
        // Real-time validation for contact form
        initRealTimeValidation(contactForm);
    }
    
    // Registration Form Validation
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (validateRegistrationForm()) {
                submitRegistrationForm();
            }
        });
        
        // Real-time validation for registration form
        initRealTimeValidation(registrationForm);
    }
}

// Real-time validation with better UX
function initRealTimeValidation(form) {
    const inputs = form.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        // Validate on input change
        input.addEventListener('input', function() {
            validateSingleField(this);
        });
        
        // Validate on blur (when user leaves the field)
        input.addEventListener('blur', function() {
            validateSingleField(this);
        });
        
        // Clear validation on focus
        input.addEventListener('focus', function() {
            clearFieldValidation(this);
        });
    });
}

// Validate single field with better UX - FIXED FOR EMPTY FIELDS
function validateSingleField(field, isSubmission = false) {
    const errorElement = document.getElementById(field.id + 'Error');
    
    // Clear previous validation
    clearFieldValidation(field);
    
    let isValid = true;
    let errorMessage = '';
    
    // Check if field is required and empty
    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required.';
    }
    // Only validate content if field is not empty (or if it's submission time)
    else if (field.value.trim() || isSubmission) {
        // Field-specific validation
        switch(field.type) {
            case 'email':
                isValid = validateEmail(field.value);
                errorMessage = 'Please enter a valid email address.';
                break;
                
            case 'tel':
                isValid = validatePhone(field.value);
                errorMessage = 'Please enter a valid phone number.';
                break;
                
            case 'password':
                if (field.id === 'password') {
                    isValid = field.value.length >= 8;
                    errorMessage = 'Password must be at least 8 characters long.';
                } else if (field.id === 'confirmPassword') {
                    const password = document.getElementById('password');
                    isValid = field.value === password.value;
                    errorMessage = 'Passwords do not match.';
                }
                break;
                
            case 'text':
                if (field.id === 'spamCheck') {
                    isValid = field.value.trim() === '7';
                    errorMessage = 'Please answer the simple math question correctly.';
                }
                break;
                
            case 'date':
                isValid = field.value.length > 0;
                errorMessage = 'Please select a date.';
                break;
                
            case 'select-one':
                isValid = field.value.length > 0;
                errorMessage = 'Please select an option.';
                break;
        }
    }
    
    // Radio buttons validation
    if (field.name === 'studyMode' && isSubmission) {
        const studyModeSelected = document.querySelector('input[name="studyMode"]:checked');
        isValid = studyModeSelected !== null;
        errorMessage = 'Please select your preferred study mode.';
    }
    
    // Checkbox validation (for terms agreement)
    if (field.type === 'checkbox' && field.hasAttribute('required') && isSubmission) {
        isValid = field.checked;
        errorMessage = 'You must agree to the terms and conditions.';
    }
    
    // Apply validation state
    if (!isValid) {
        showFieldError(field, errorMessage);
        return false;
    } else if (field.value.trim()) { // Only show success if field has content
        showFieldSuccess(field);
    }
    
    return isValid;
}

// Show field error state
function showFieldError(field, message) {
    field.classList.add('is-invalid');
    field.classList.remove('is-valid');
    
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // Add subtle animation
        errorElement.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            errorElement.style.animation = '';
        }, 500);
    }
    
    // Add focus to first invalid field
    if (!field.classList.contains('has-been-focused')) {
        field.focus();
        field.classList.add('has-been-focused');
    }
}

// Show field success state
function showFieldSuccess(field) {
    field.classList.add('is-valid');
    field.classList.remove('is-invalid');
    
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Clear field validation
function clearFieldValidation(field) {
    field.classList.remove('is-invalid', 'is-valid');
    
    const errorElement = document.getElementById(field.id + 'Error');
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Validation helpers
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[^\d+]/g, ''));
}

// Enhanced Contact Form Validation - FIXED FOR EMPTY FIELDS
function validateContactForm() {
    let isValid = true;
    const requiredFields = ['name', 'email', 'subject', 'message', 'spamCheck'];
    
    // Validate all required fields
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !validateSingleField(field, true)) { // Pass true for submission validation
            isValid = false;
        }
    });
    
    return isValid;
}

// Enhanced Registration Form Validation - FIXED FOR EMPTY FIELDS
function validateRegistrationForm() {
    let isValid = true;
    const currentSection = getCurrentSection();
    
    // Validate current section only
    const sectionFields = getSectionFields(currentSection);
    
    // Validate all fields in current section
    sectionFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field && !validateSingleField(field, true)) { // Pass true for submission validation
            isValid = false;
        }
    });
    
    // Special validation for study mode radio buttons (only on section 2)
    if (currentSection === 2) {
        const studyModeSelected = document.querySelector('input[name="studyMode"]:checked');
        if (!studyModeSelected) {
            const studyModeError = document.getElementById('studyModeError');
            if (studyModeError) {
                studyModeError.style.display = 'block';
                studyModeError.textContent = 'Please select your preferred study mode.';
                
                // Add animation to radio buttons container
                const radioContainer = studyModeError.closest('.mb-3') || studyModeError.previousElementSibling;
                if (radioContainer) {
                    radioContainer.style.animation = 'shake 0.5s ease-in-out';
                    setTimeout(() => {
                        radioContainer.style.animation = '';
                    }, 500);
                }
            }
            isValid = false;
        } else {
            const studyModeError = document.getElementById('studyModeError');
            if (studyModeError) {
                studyModeError.style.display = 'none';
            }
        }
    }
    
    // Special validation for terms agreement (only on section 3)
    if (currentSection === 3) {
        const agreeTerms = document.getElementById('agreeTerms');
        if (agreeTerms && !agreeTerms.checked) {
            const agreeTermsError = document.getElementById('agreeTermsError');
            if (agreeTermsError) {
                agreeTermsError.style.display = 'block';
                agreeTermsError.textContent = 'You must agree to the terms and conditions.';
                
                // Add animation to checkbox
                agreeTerms.style.animation = 'shake 0.5s ease-in-out';
                setTimeout(() => {
                    agreeTerms.style.animation = '';
                }, 500);
            }
            isValid = false;
        } else if (agreeTerms) {
            const agreeTermsError = document.getElementById('agreeTermsError');
            if (agreeTermsError) {
                agreeTermsError.style.display = 'none';
            }
        }
    }
    
    // If validation fails, scroll to first error
    if (!isValid) {
        scrollToFirstError();
    }
    
    return isValid;
}

// Helper function to scroll to first error
function scrollToFirstError() {
    const firstError = document.querySelector('.is-invalid');
    if (firstError) {
        firstError.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center',
            inline: 'nearest'
        });
        
        // Focus on the first error field
        setTimeout(() => {
            firstError.focus();
        }, 500);
    }
}

// Helper functions
function getCurrentSection() {
    const sections = document.querySelectorAll('.form-section');
    for (let i = 1; i <= sections.length; i++) {
        if (sections[i-1].style.display !== 'none') {
            return i;
        }
    }
    return 1;
}

function getSectionFields(sectionNumber) {
    const fieldMap = {
        1: ['fullName', 'email', 'phone', 'birthDate', 'address', 'city', 'state', 'zipCode'],
        2: ['program', 'intake', 'education'],
        3: ['password', 'confirmPassword', 'agreeTerms']
    };
    
    return fieldMap[sectionNumber] || [];
}

// Enhanced form submission with loading states
function submitContactForm() {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.innerHTML = '<i class="bi bi-arrow-repeat spinner"></i> Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        const successMessage = document.getElementById('contactSuccess');
        
        // Show success message
        successMessage.style.display = 'block';
        successMessage.style.animation = 'fadeInUp 0.5s ease-out';
        
        // Reset form
        form.reset();
        
        // Clear all validation states
        form.querySelectorAll('.is-valid, .is-invalid').forEach(field => {
            field.classList.remove('is-valid', 'is-invalid');
        });
        
        form.querySelectorAll('.error-message').forEach(error => {
            error.style.display = 'none';
        });
        
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        
    }, 1500);
}

function submitRegistrationForm() {
    const form = document.getElementById('registrationForm');
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.innerHTML = '<i class="bi bi-arrow-repeat spinner"></i> Submitting Application...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        const successMessage = document.getElementById('successMessage');
        
        // Hide form and show success message
        form.style.display = 'none';
        successMessage.style.display = 'block';
        successMessage.style.animation = 'fadeInUp 0.5s ease-out';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
    }, 2000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFormValidation();
    initFAQToggle();
    initNavigation();
    initApplicationProgress();
});
// Enhanced Accessibility Features
document.addEventListener('keydown', function(e) {
    // Close FAQ items with Escape key
    if (e.key === 'Escape') {
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});