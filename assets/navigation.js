const chapters = [
  { title: "Part II – Introduction", file: "2_0_part_ii.html" },
  { title: "Mechanics", file: "2_1_mechanics.html" },
  { title: "More Mechanics", file: "2_2_more_mechanics.html" },
  { title: "Next Section", file: "3_0_next_section.html" },
  { title: "Subsection", file: "3_1_subsection.html" }
];

const nav = document.getElementById("main-nav");
const currentPath = window.location.pathname.split("/").pop();

chapters.forEach(chap => {
  const link = document.createElement("a");
  link.href = `${window.location.origin}/sphysix/chapters/${chap.file}`;
  link.textContent = chap.title;

  if (currentPath === chap.file) {
    link.classList.add("active");
  }

  // <li><a href="Karel.html">Karel</a></li>
  const item = document.createElement("li");
  item.appendChild(link);
  
  nav.appendChild(item);
});
