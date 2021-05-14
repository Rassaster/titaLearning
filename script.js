const closeBtn = document.querySelector("#closeBtn");
const eCommerceCircle = document.querySelector("#eCommerceCircle");
const uxuiCircle = document.querySelector("#uxuiCircle");
const paidMediaCircle = document.querySelector("#paidMediaCircle");
const projectsCircle = document.querySelector("#projectsCircle");
const titaLearningCircle = document.querySelector("#titaLearningCircle");
const eCommerceContent = document.querySelector("#eCommerceContent");
const uxuiContent = document.querySelector("#uxuiContent");
const paidMediaContent = document.querySelector("#paidMediaContent");
const projectsContent = document.querySelector("#projectsContent");
const titaLearningContent = document.querySelector("#titaLearningContent");

// Functions
const removeClass = (nodeElement, className) => {
  nodeElement.classList.remove(className);
};
const addClass = (nodeElement, className) => {
  nodeElement.classList.add(className);
};
const closeFullScreenOverlay = () => {
  addClass(eCommerceContent, "fullScreenOverlay_zero");
  addClass(uxuiContent, "fullScreenOverlay_zero");
  addClass(paidMediaContent, "fullScreenOverlay_zero");
  addClass(projectsContent, "fullScreenOverlay_zero");
  addClass(titaLearningContent, "fullScreenOverlay_zero");
  addClass(closeBtn, "fullScreenOverlay_zero");
}

// Max. view of Content Containers
eCommerceCircle.addEventListener("click", () => {
  removeClass(eCommerceContent, "fullScreenOverlay_zero");
  removeClass(closeBtn, "fullScreenOverlay_zero");
});
uxuiCircle.addEventListener("click", () => {
  removeClass(uxuiContent, "fullScreenOverlay_zero");
  removeClass(closeBtn, "fullScreenOverlay_zero");
});
paidMediaCircle.addEventListener("click", () => {
  removeClass(paidMediaContent, "fullScreenOverlay_zero");
  removeClass(closeBtn, "fullScreenOverlay_zero");
});
projectsCircle.addEventListener("click", () => {
  removeClass(projectsContent, "fullScreenOverlay_zero");
  removeClass(closeBtn, "fullScreenOverlay_zero");
});
titaLearningCircle.addEventListener("click", () => {
  removeClass(titaLearningContent, "fullScreenOverlay_zero");
  removeClass(closeBtn, "fullScreenOverlay_zero");
});
// Close Content Container
closeBtn.addEventListener("click", () => {
  addClass(closeBtn, "fullScreenOverlay_zero");
  closeFullScreenOverlay();
});
if (eCommerceContent) {
  document.addEventListener("keyup", event => {
    if (event.keyCode === 27) {
      closeFullScreenOverlay();
    }
  });
}