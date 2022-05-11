let allProjectBoxes = document.querySelectorAll('.projects-box');

allProjectBoxes.forEach((projectBox) => {
   projectBox.addEventListener('mouseenter', () => {
      // Darken & blur image
      let projectImg = projectBox.querySelector('.box-img');
      projectImg.classList.add('project-img-darken');
      projectImg.classList.remove('project-img-lighten');

      // Create Button
      let link = document.createElement('a');
      link.href = `projects.html#${projectBox.id}`;
      link.id = 'details-btn';
      link.classList.add('project-img-btn-show');
      let btn = document.createElement('button');
      btn.innerText = 'VIEW DETAILS';

      // Append Button (give time for possible duplicate buttons to be removed)
      setTimeout(() => {
      if (!document.getElementById('details-btn')) {
            projectBox.appendChild(link);
            link.appendChild(btn);
         }
      }, 151);
   });

   projectBox.addEventListener('mouseleave', () => {
      let projectImg = projectBox.querySelector('.box-img');

      // Reset image styles
      projectImg.classList.add('project-img-lighten');
      projectImg.classList.remove('project-img-darken');

      // Animate button hide
      let link = document.getElementById('details-btn');
      link.classList.remove('project-img-btn-show'); // Remove class that showed button
      link.classList.add('project-img-btn-hide');    // Add class to animate hiding button

      // Remove button
      setTimeout(() => {
         link.remove(); // Wait until animation is almost completed
      }, 150);
   });
});
