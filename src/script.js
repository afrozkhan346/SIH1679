// const scriptRunner = require('child_process'); // Ensure this is at the top
// const fs = require('fs'); // Declare fs at the top to avoid potential issues with scope

function redirectToPage() {
  window.location.href = "next.html"; // Replace with your target page URL
}

// const scriptRunner = require('child_process');
// const fs = require('fs');

// function runScript() {
//   const command = "powershell -File ./Scripts/compare.ps1";
//   console.log(command);


//   scriptRunner.exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Execution error: ${error}`);
//       return;
//     }
//     document.getElementById("reportTag").textContent = stdout; // Ensure this updates correctly in Electron

//     fs.readFile('./Scripts/result.txt', 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log(data);
//     });
//   });
// }


function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Consolidated DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  const infoBox = document.getElementById('info-box');
  const btn = document.querySelector('.button');
  const loader = document.querySelector('.loader');
  const check = document.querySelector('.check');

  // Information content
  const infoContent = {
    option1: `<div class="info-content"> <h2 class="info-content-heading">Heading 1</h2>Information for Option One...</div>`,
    option2: `<div class="info-content"> <h2 class="info-content-heading">Heading 2</h2>Information for Option Two...</div>`,
    option3: `<div class="info-content"><h2 class="info-content-heading">Heading 3</h2>Information for Option Three...</div>`,
    option4: `<div class="info-content"><h2 class="info-content-heading">Heading 4</h2>Information for Option Four...</div>`,
  };

  const defaultContent = `<div class="default-content"><h2 class="info-content-heading">Main Heading</h2>Please select an option to see the information.</div>`;

  function updateInfoBox() {
    let content = '';
    document.querySelectorAll('.form input[type="checkbox"]:checked').forEach((checkbox) => {
      content += `<p>${infoContent[checkbox.id]}</p>`;
    });
    if (!content) {
      content = `<p>${defaultContent}</p>`;
    }
    infoBox.innerHTML = content;
  }

  document.querySelectorAll('.form input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', updateInfoBox);
  });
  updateInfoBox();

  btn.addEventListener('click', function () {
    loader.classList.add('active');
    fetch('/api/get-info')
      .then(response => response.json())
      .then(data => {
        loader.classList.remove('active');
        check.classList.add('active');
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
    content += `<div class="info-content"> <h2 class="info-content-heading">Heading 1</h2>${data.option1}</div>`;
    infoBox.innerHTML = content;
  }
});
