# Ghost BPA Website

This is the official website for Ghost BPA, currently under construction.

## Setup

This is a static website hosted on GitHub Pages with:
- HTML5
- Tailwind CSS via CDN
- No Jekyll processing
- Custom domain: ghostbpa.com

## Development

To test locally, simply open the index.html file in your browser.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. 

## Formspree Implementation

The contact form uses Formspree.io for form submissions with enhanced security and spam protection:

1. Create an account at [Formspree.io](https://formspree.io/) if you don't have one
2. Create a new form in your dashboard
3. Replace the placeholder in index.html:
   ```html
   <form id="contactForm" action="https://formspree.io/f/your-form-id" method="POST">
   ```
   with your actual form ID:
   ```html
   <form id="contactForm" action="https://formspree.io/f/xabcdefg" method="POST">
   ```

### Form Security Features
- Google reCAPTCHA v2 integration with dark theme
- Client-side validation for required fields
- Anti-spam timestamp validation
- Formspree's built-in honeypot protection
- Success/error message handling
- Loading states during submission

### Form Fields
- Name (required)
- Email (required)
- Subject (dropdown, required)
- Message (required)

The form is fully styled to match the site's dark theme and provides clear feedback to users during the submission process.

## Formspree Implementation

The contact form in the modal uses Formspree.io for form submissions. To set it up:

1. Create an account at [Formspree.io](https://formspree.io/) if you don't have one
2. Create a new form in your dashboard
3. Replace the placeholder in index.html:
   ```html
   <form id="contactForm" action="https://formspree.io/f/your-form-id" method="POST">
   ```
   with your actual form ID:
   ```html
   <form id="contactForm" action="https://formspree.io/f/xabcdefg" method="POST">
   ```
4. The form is already set up with fields for name, email, company, and message
5. You'll receive email notifications for new submissions
6. Form submissions can also be viewed in your Formspree dashboard
7. For testing, use the Formspree test mode to avoid using up your monthly submission quota 