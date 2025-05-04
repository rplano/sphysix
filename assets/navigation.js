const chapters = [
  { title: "2.0 Part II – Introduction", file: "2_0_part_ii.html" },
  { title: "2.1 Mechanics", file: "2_1_mechanics.html" },
  { title: "2.2 More Mechanics", file: "2_2_more_mechanics.html" },
  { title: "3.0 Next Section", file: "3_0_next_section.html" },
  { title: "3.1 Subsection", file: "3_1_subsection.html" }
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

  nav.appendChild(link);
});
