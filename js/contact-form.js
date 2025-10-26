/**
 * ZBull-X Technologies - Contact Form Validation
 * Handles form validation and submission
 */

(function() {
    'use strict';
    
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    const formGroups = contactForm.querySelectorAll('.form-group');
    const formSuccess = document.getElementById('formSuccess');
    
    /**
     * Validate individual field
     */
    function validateField(field) {
        const formGroup = field.closest('.form-group');
        const value = field.value.trim();
        let isValid = true;
        
        // Reset error state
        formGroup.classList.remove('error');
        
        // Check if field is required
        if (field.hasAttribute('required') && value === '') {
            isValid = false;
        }
        
        // Email validation
        if (field.type === 'email' && value !== '') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
            }
        }
        
        // Phone validation (optional, basic format check)
        if (field.type === 'tel' && value !== '') {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
            }
        }
        
        // Select validation
        if (field.tagName === 'SELECT' && field.hasAttribute('required')) {
            if (value === '' || value === null) {
                isValid = false;
            }
        }
        
        // Add error class if invalid
        if (!isValid) {
            formGroup.classList.add('error');
        }
        
        return isValid;
    }
    
    /**
     * Validate entire form
     */
    function validateForm() {
        let isValid = true;
        
        const fields = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
        
        fields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    /**
     * Add real-time validation on blur
     */
    formGroups.forEach(group => {
        const field = group.querySelector('input, select, textarea');
        if (field) {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            // Remove error on input
            field.addEventListener('input', function() {
                if (group.classList.contains('error')) {
                    group.classList.remove('error');
                }
            });
        }
    });
    
    /**
     * Handle form submission
     */
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            // Scroll to first error
            const firstError = contactForm.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Submit form (using FormSubmit)
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                formSuccess.classList.add('show');
                contactForm.reset();
                
                // Scroll to success message
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Hide success message after 10 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 10000);
                
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again or contact us directly at info@zbullx.com');
        })
        .finally(() => {
            // Reset button state
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        });
    });
    
    /**
     * Character counter for message field (optional enhancement)
     */
    const messageField = document.getElementById('message');
    if (messageField) {
        const maxLength = 1000;
        const counter = document.createElement('div');
        counter.style.cssText = 'font-size: 0.875rem; color: var(--neutral-gray); margin-top: 0.25rem; text-align: right;';
        counter.textContent = `0 / ${maxLength} characters`;
        
        messageField.setAttribute('maxlength', maxLength);
        messageField.parentElement.appendChild(counter);
        
        messageField.addEventListener('input', function() {
            const length = this.value.length;
            counter.textContent = `${length} / ${maxLength} characters`;
            
            if (length > maxLength * 0.9) {
                counter.style.color = '#dc2626';
            } else {
                counter.style.color = 'var(--neutral-gray)';
            }
        });
    }
    
    /**
     * Auto-save form data to localStorage (optional feature)
     */
    const STORAGE_KEY = 'zbl_contact_form_data';
    
    // Load saved data on page load
    function loadFormData() {
        try {
            const savedData = localStorage.getItem(STORAGE_KEY);
            if (savedData) {
                const data = JSON.parse(savedData);
                
                Object.keys(data).forEach(key => {
                    const field = contactForm.querySelector(`[name="${key}"]`);
                    if (field && field.type !== 'submit') {
                        field.value = data[key];
                    }
                });
            }
        } catch (e) {
            console.error('Error loading form data:', e);
        }
    }
    
    // Save form data on input
    function saveFormData() {
        try {
            const formData = new FormData(contactForm);
            const data = {};
            
            formData.forEach((value, key) => {
                if (key !== '_honey' && key !== '_captcha' && key !== '_next') {
                    data[key] = value;
                }
            });
            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving form data:', e);
        }
    }
    
    // Clear saved data on successful submission
    function clearFormData() {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (e) {
            console.error('Error clearing form data:', e);
        }
    }
    
    // Load saved data
    loadFormData();
    
    // Save data on input (debounced)
    let saveTimeout;
    contactForm.addEventListener('input', function() {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(saveFormData, 500);
    });
    
    // Clear saved data on successful submission
    contactForm.addEventListener('submit', function() {
        setTimeout(clearFormData, 1000);
    });
    
})();

