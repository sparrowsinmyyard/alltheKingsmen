document.addEventListener("DOMContentLoaded", () => {
  const link = document.createElement("a");
  link.href = "index.html";
  link.innerText = "all the king’s men";

  // styling (kept minimal + unobtrusive)
  link.style.position = "fixed";
  link.style.top = "1.5rem";
  link.style.left = "1.5rem";
  link.style.fontFamily = "Libre Baskerville, serif";
  link.style.fontSize = "1.2rem";
  link.style.opacity = "0.9";
  link.style.color = "#0a0a0a";          // NOT blue geez
  link.style.textDecoration = "none";
  link.style.zIndex = "1000";

  // hover behavior
  link.addEventListener("mouseenter", () => {
    link.style.opacity = "0.9";
  });

  link.addEventListener("mouseleave", () => {
    link.style.opacity = "0.6";
  });

  document.body.appendChild(link);
});

