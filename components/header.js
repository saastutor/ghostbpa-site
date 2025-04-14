// Create header HTML string
const headerHTML = `
  <header class="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
    <div class="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <a href="/" class="flex items-center">
              <span class="text-xl font-light text-white">
                <span class="ghost-text text-white"><span>G</span><span>host</span></span><span class="bpa-text text-transparent bg-clip-text bg-gradient-to-r from-[#2E3BFF] to-[#00E5FF] ml-1">BPA</span>
              </span>
            </a>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-6">
          <a href="/#tech-stack" class="text-white/70 hover:text-white transition-colors duration-200">
            Tools
          </a>
          <a href="/#contact" class="border border-white/20 hover:bg-white/10 text-white font-light py-2 px-6 rounded-full transition-colors">
            Contact Us
          </a>
          <a href="https://github.com/stevenfage" target="_blank" rel="noopener noreferrer" class="text-white/70 hover:text-white transition-colors duration-200">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        <div class="md:hidden">
          <button type="button" id="mobileMenuButton" class="text-white/70 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <!-- Mobile menu -->
      <div id="mobileMenu" class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="/#tech-stack" class="block px-3 py-2 rounded-md text-base font-light text-white border border-white/20 hover:bg-white/10">Tools</a>
          <a href="/#contact" class="block px-3 py-2 rounded-md text-base font-light text-white border border-white/20 hover:bg-white/10">Contact Us</a>
          <a href="https://github.com/stevenfage" target="_blank" rel="noopener noreferrer" class="block px-3 py-2 rounded-md text-base font-light text-white hover:bg-white/10">
            <div class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
              GitHub
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>
`;

// Function to initialize header
function initHeader() {
  // Insert header at the start of the body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Initialize mobile menu functionality
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
}

// Export the initialization function
window.initHeader = initHeader; 