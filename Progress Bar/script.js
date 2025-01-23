
const progress = document.getElementById("progress");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progressSteps = document.querySelectorAll(".progress-step .fa-solid");
const statusTexts = document.querySelectorAll(".progress-step .status");

let currentStep = 1;

const next = () => {
    // //move by one, going for the next step
  currentStep++;
  refresh();
};

const prev = () => {
    // //for moving backwards, one step behind
  currentStep--;
  if (currentStep < 1) currentStep = 1;
  refresh();
};

    // //if current step value is greater then all progress step
// //then set value to total length of progress steps


const refresh = () => {
  // Update step icons and subtitles
  progressSteps.forEach((step, index) => {
    
//     //disable next buttton if current step value is greater than all steps
    const status = statusTexts[index];
    if (index < currentStep) {
      step.classList.add("active");
      status.textContent = "Completed";
    } else {
      step.classList.remove("active");
      status.textContent = "Pending";
    }
  });
  

  // Update progress bar width
  const activeCount = document.querySelectorAll(".fa-solid.active").length;
  const totalSteps = progressSteps.length;
  const progressWidth = ((activeCount - 1) / (totalSteps - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  // Disable buttons if necessary
  
// //disabled prev button if current step value is 1
  prevBtn.classList.toggle("disabled", currentStep === 1);
  nextBtn.classList.toggle("disabled", currentStep === totalSteps);
};
