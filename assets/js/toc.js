(function() {
  'use strict';

  const mainContent = document.querySelector('.page-main-content');
  const tocList = document.getElementById('toc-list');
  
  if (!mainContent || !tocList) return;

  // Get all headings from the main content (excluding .no-toc)
  const allHeadings = mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const headings = Array.from(allHeadings).filter(h => !h.classList.contains('no-toc'));
  
  if (headings.length === 0) {
    tocList.innerHTML = '<p style="opacity: 0.6; font-size: 0.85em;">No headings found</p>';
    return;
  }

  // Build nested TOC structure
  const tocRoot = document.createElement('ul');
  let currentLevel = 0;
  let currentList = tocRoot;
  const stack = [];

  headings.forEach((heading, index) => {
    // Ensure heading has an ID
    if (!heading.id) {
      heading.id = 'heading-' + index;
    }

    const level = parseInt(heading.tagName.substring(1));
    const text = heading.textContent.trim();
    const id = heading.id;

    // Create list item
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + id;
    a.textContent = text;
    
    // Smooth scroll on click
    a.addEventListener('click', function(e) {
      e.preventDefault();
      heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Update active state
      document.querySelectorAll('#toc-list a').forEach(link => {
        link.classList.remove('active');
      });
      a.classList.add('active');
      
      // Update URL hash
      history.pushState(null, null, '#' + id);
    });
    
    li.appendChild(a);

    // Handle nesting based on heading levels
    if (level > currentLevel) {
      // Going deeper - create nested list
      const newList = document.createElement('ul');
      if (currentList.lastElementChild) {
        currentList.lastElementChild.appendChild(newList);
      } else {
        currentList.appendChild(li);
        return;
      }
      stack.push({ level: currentLevel, list: currentList });
      currentList = newList;
      currentLevel = level;
    } else if (level < currentLevel) {
      // Going back up - find the right parent level
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        const parent = stack.pop();
        currentList = parent.list;
        currentLevel = parent.level;
      }
    }
    
    currentList.appendChild(li);
    currentLevel = level;
  });

  tocList.appendChild(tocRoot);

  // Highlight current section based on scroll position
  const observerOptions = {
    rootMargin: '-80px 0px -80% 0px',
    threshold: 0
  };

  let activeHeading = null;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        activeHeading = id;
        
        // Update active link
        document.querySelectorAll('#toc-list a').forEach(link => {
          link.classList.remove('active');
        });
        
        const activeLink = document.querySelector(`#toc-list a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  // Observe all headings
  headings.forEach(heading => {
    observer.observe(heading);
  });

  // Set initial active state from URL hash or first heading
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const link = document.querySelector(`#toc-list a[href="#${hash}"]`);
    if (link) {
      link.classList.add('active');
    }
  } else if (headings.length > 0) {
    const firstLink = document.querySelector('#toc-list a');
    if (firstLink) {
      firstLink.classList.add('active');
    }
  }
})();
