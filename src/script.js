
function redirectToPage() {
    window.location.href = "next.html"; // Replace with your target page URL
}

  // Function to open the side navigation
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// Function to close the side navigation
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Checkbox-info
document.addEventListener('DOMContentLoaded', () => {
    const infoBox = document.getElementById('info-box');

    // Info content for each checkbox
    const infoContent = {
        option1: `<div class="info-content"> <h2 class="info-content-heading">Heading 1</h2>Information for Option One.'Information for Option One.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rerum ipsum hic culpa qui illum, blanditiis mollitia minima sint laboriosam fugit provident numquam ullam, amet sit quae ducimus? Deleniti veritatis autem culpa suscipit vitae, eius delectus corrupti accusamus perspiciatis repellat vel, a optio expedita, modi ipsum harum quisquam voluptate dignissimos?</div>`,
        option2: `<div class="info-content"> <h2 class="info-content-heading">Heading 2</h2>Information for Option Two.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rerum ipsum hic culpa qui illum, blanditiis mollitia minima sint laboriosam fugit provident numquam ullam, amet sit quae ducimus? Deleniti veritatis autem culpa suscipit vitae, eius delectus corrupti accusamus perspiciatis repellat vel, a optio expedita, modi ipsum harum quisquam voluptate dignissimos?</div>`,
        option3:`<div class="info-content"><h2 class="info-content-heading">Heading 3</h2>Information for Option Three.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rerum ipsum hic culpa qui illum, blanditiis mollitia minima sint laboriosam fugit provident numquam ullam, amet sit quae ducimus? Deleniti veritatis autem culpa suscipit vitae, eius delectus corrupti accusamus perspiciatis repellat vel, a optio expedita, modi ipsum harum quisquam voluptate dignissimos?</div>`,
        option4:`<div class="info-content"><h2 class="info-content-heading">Heading 4</h2>Information for Option Four.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rerum ipsum hic culpa qui illum, blanditiis mollitia minima sint laboriosam fugit provident numquam ullam, amet sit quae ducimus? Deleniti veritatis autem culpa suscipit vitae, eius delectus corrupti accusamus perspiciatis repellat vel, a optio expedita, modi ipsum harum quisquam voluptate dignissimos?</div>`,
    };

    // Default content when no checkboxes are selected
    const defaultContent = `<div class="default-content"><h2 class="info-content-heading">Main Heading</h2>Please select an option to see the information.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, rerum ipsum hic culpa qui illum, ? 
    <div class="svg-container">
  <svg class="svg-icon" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="*/asset/pie-chart.svg">
    <!-- SVG content here -->
  </svg>
  <svg class="svg-icon" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- SVG content here -->
  </svg>
  <svg class="svg-icon" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- SVG content here -->
  </svg>
  <svg class="svg-icon" width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- SVG content here -->
  </svg>
</div>
    </div>`;

    function updateInfoBox() {
        let content = '';

        // Collect selected info
        document.querySelectorAll('.form input[type="checkbox"]:checked').forEach((checkbox) => {
            content += `<p>${infoContent[checkbox.id]}</p>`;
        });

        // If no checkboxes are selected, show default content
        if (!content) {
            content = `<p>${defaultContent}</p>`;
        }

        // Update the info box content
        infoBox.innerHTML = content;
    }
 
    document.querySelectorAll('.form input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('change', updateInfoBox);
    });
    updateInfoBox();
});
 

// SUbmit Button

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.button'),
        loader = document.querySelector('.loader'),
        check = document.querySelector('.check');
    
    btn.addEventListener('click', function () {
      loader.classList.add('active');    
    });
   
    loader.addEventListener('animationend', function() {
      check.classList.add('active'); 
    });
  });
  


  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.button');
    const loader = document.querySelector('.loader');
    const check = document.querySelector('.check');
    const infoBox = document.getElementById('info-box');

    btn.addEventListener('click', function () {
        loader.classList.add('active'); 

        // Fetch data from backend
        fetch('/api/get-info')  // Replace with your actual endpoint URL
            .then(response => response.json())
            .then(data => {
                loader.classList.remove('active');
                check.classList.add('active'); 
                
                // Assume backend returns { option1: "Backend Info for Option One" }
                if (data.option1) {
                    document.getElementById('option1').checked = true;
                    updateInfoBoxWithBackendData(data);
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                loader.classList.remove('active');
            });
    });

    function updateInfoBoxWithBackendData(data) {
        let content = '';

        // Add the fetched data to the info box
        content += `<div class="info-content"> <h2 class="info-content-heading">Heading 1</h2>${data.option1}</div>`;

        // Update the info box content
        infoBox.innerHTML = content;
    }
});


