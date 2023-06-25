    // Set ARIA roles using JavaScript
    const heading = document.getElementById('portfolio-heading');
    heading.setAttribute('role', 'heading');
    heading.setAttribute('aria-level', '1');

    const navigation = document.getElementById('portfolio-navigation');
    navigation.setAttribute('role', 'navigation');

    const aboutSection = document.getElementById('about');
    const aboutHeading = aboutSection.querySelector('h2');
    aboutHeading.setAttribute('role', 'heading');
    aboutHeading.setAttribute('aria-level', '2');

    const profileImage = aboutSection.querySelector('img');
    profileImage.setAttribute('role', 'img');

    const projectsSection = document.getElementById('projects');
    const projectsHeading = projectsSection.querySelector('h2');
    projectsHeading.setAttribute('role', 'heading');
    projectsHeading.setAttribute('aria-level', '2');

    const projectList = projectsSection.querySelector('ul');
    projectList.setAttribute('role', 'list');

    const projectItems = projectList.querySelectorAll('li');
    projectItems.forEach(item => item.setAttribute('role', 'listitem'));
  