document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove 'active' from all nav items
            navItems.forEach(i => i.classList.remove('active'));
            // Add 'active' to clicked nav item
            item.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));

            // Show selected tab content
            const tabId = item.getAttribute('data-tab');
            const selectedContent = document.getElementById(`${tabId}-content`);
            if (selectedContent) {
                selectedContent.classList.add('active');
            }
        });
    });






    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
  
    // Optional overlay if you want to darken background
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
  
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
  
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
  
  





});
