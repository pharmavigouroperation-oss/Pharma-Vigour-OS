/**
 * ============================================================================
 * PHARMAVIGOUR OPERATIONS - CORE APPLICATION SCRIPT
 * Enterprise SaaS JavaScript Architecture
 * Version: 1.0.0
 * ============================================================================
 */

'use strict';

/**
 * Main Application Controller
 * Handles global events, accessibility enhancements, and core utilities.
 */
class PharmaVigourApp {
    constructor() {
        this.initTime = performance.now();
        this.init();
    }

    /**
     * Bootstrap the application
     */
    init() {
        this.bindEvents();
        this.setupAccessibility();
        this.setupSmoothScroll();
        this.preventFormResubmission();
        this.initializePerformanceMonitoring();
    }

    /**
     * Bind global event listeners
     */
    bindEvents() {
        // Global error handling for enterprise resilience
        window.addEventListener('error', this.handleGlobalError.bind(this));
        window.addEventListener('unhandledrejection', this.handlePromiseRejection.bind(this));
    }

    /**
     * Intelligent Focus Ring Management
     * Only show focus outlines when navigating via keyboard (tabbing)
     * Hide them when clicking with a mouse for a cleaner UI
     */
    setupAccessibility() {
        document.body.addEventListener('mousedown', () => {
            document.body.classList.add('using-mouse');
        });

        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'Tab') {
                document.body.classList.remove('using-mouse');
            }
        });
    }

    /**
     * Initialize smooth scrolling for all anchor links pointing to IDs
     */
    setupSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
        
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();
                    
                    // Account for fixed glass header height (approx 80px)
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update URL hash without jumping
                    history.pushState(null, null, targetId);
                }
            });
        });
    }

    /**
     * Security and UX: Prevent form resubmission on page refresh / back button
     */
    preventFormResubmission() {
        if (window.history && window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
    }

    /**
     * Monitor application load performance and log to console in development
     * Can be hooked to a backend analytics endpoint in the future
     */
    initializePerformanceMonitoring() {
        window.addEventListener('load', () => {
            const loadTime = performance.now() - this.initTime;
            
            // Only log in non-production environments (simulated check)
            const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
            
            if (isLocalhost) {
                console.info(`[PharmaVigour System] Application initialized in ${Math.round(loadTime)}ms`);
            }
        });
    }

    /**
     * Global standard error handler
     * @param {ErrorEvent} event 
     */
    handleGlobalError(event) {
        console.error('[PharmaVigour System Error] Uncaught Exception:', {
            message: event.message,
            file: event.filename,
            line: event.lineno
        });
        // Future: Send to Sentry, Datadog, or custom logging API
    }

    /**
     * Global promise rejection handler
     * @param {PromiseRejectionEvent} event 
     */
    handlePromiseRejection(event) {
        console.error('[PharmaVigour System Error] Unhandled Promise Rejection:', event.reason);
        // Future: Send to Sentry, Datadog, or custom logging API
    }
}

// --------------------------------------------------------------------------
// APPLICATION INITIALIZATION
// --------------------------------------------------------------------------

// Ensure DOM is fully constructed before initializing the application
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.PharmaApp = new PharmaVigourApp();
    });
} else {
    window.PharmaApp = new PharmaVigourApp();
}

