const footerHTML = `
  <footer class="bg-black border-t border-white/10">
    <div class="max-w-[1080px] mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex justify-center md:justify-start">
          <a href="/" class="flex items-center">
            <span class="text-xl font-light text-white">
              <span class="ghost-text text-white"><span>G</span><span>host</span></span><span class="bpa-text text-transparent bg-clip-text bg-gradient-to-r from-[#2E3BFF] to-[#00E5FF] ml-1">BPA</span>
            </span>
          </a>
        </div>
        <p class="mt-4 text-center text-sm text-white/50 md:mt-0">
          © 2024 Ghost BPA LLC. All rights reserved.
        </p>
        <div class="mt-4 flex justify-center space-x-6 md:mt-0">
          <a href="/privacy-policy.html" class="text-white/50 hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="/terms.html" class="text-white/50 hover:text-white transition-colors duration-200">
            Terms
          </a>
        </div>
      </div>
    </div>
  </footer>
`;

function initFooter() {
  // Create a container for the footer
  const footerContainer = document.createElement('div');
  footerContainer.innerHTML = footerHTML;
  
  // Append the footer to the end of the body
  document.body.appendChild(footerContainer.firstElementChild);
}

// Export the initialization function
window.initFooter = initFooter; 