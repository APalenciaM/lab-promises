// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;

  }, (error) => console.log(error));


  setTimeout(() => {
    getLastInstruction();
  }, 1000);


// Iteration 1 - using callbacks
  function getLastInstruction() {
    getInstruction("mashedPotatoes", 5, (step6) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
      document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
    }, (error) => console.log(error));

  }


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`

  });

  obtainInstruction('steak', 1)
  .then( (step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

  });

  obtainInstruction('steak', 2)
  .then( (step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`

  });

  obtainInstruction('steak', 3)
  .then( (step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`

  });

  obtainInstruction('steak', 4)
  .then( (step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`

  });

  obtainInstruction('steak', 5)
  .then( (step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`

  });

  obtainInstruction('steak', 6)
  .then( (step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`

  });

  obtainInstruction('steak', 7)
  .then( (step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`

  });

  obtainInstruction('steak', 8)
  .then( (step8) => {
    document.querySelector("#steak").innerHTML += `<li>${step8}</li>`

  }).then(    document.querySelector("#steakImg").removeAttribute("hidden"));

// Iteration 3 using async/await
  makeBrocoli();
  async function makeBrocoli() {
    for (let index = 0; index <= 8; index++) {
      await obtainInstruction('broccoli', index)
      .then( (step) => {
        document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
      });
    }
    
    await obtainInstruction('broccoli', 8)
    .then( (step) => {
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`
    });
  }
