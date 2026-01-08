document.addEventListener("DOMContentLoaded", () => {
  const link = document.createElement("a");
  link.href = "index.html";
  link.innerText = "all the king’s men";

  // styling (kept minimal + unobtrusive)
  link.style.position = "fixed";
  link.style.top = "1rem";
  link.style.left = "1rem";
  link.style.fontFamily = "Libre Baskerville, serif";
  link.style.fontSize = "0.9rem";
  link.style.opacity = "0.6";
  link.style.textDecoration = "none";
  link.style.zIndex = "1000";

  // hover behavior
  link.addEventListener("mouseenter", () => {
    link.style.opacity = "0.9";
    link.style.textDecoration = "underline";
  });

  link.addEventListener("mouseleave", () => {
    link.style.opacity = "0.6";
    link.style.textDecoration = "none";
  });

  document.body.appendChild(link);
});

