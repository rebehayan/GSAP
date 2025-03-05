export const Frame = () => {
  const currentState = sessionStorage.getItem("src");
  const frame = document.querySelector("iframe");
  if (currentState) {
    frame.setAttribute("src", currentState);
  }
};
