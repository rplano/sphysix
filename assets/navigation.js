// Define your chapter structure
const chapters = [
  { title: "2.0 Part II – Introduction", file: "2_0_part_ii.html" },
  { title: "2.1 Mechanics", file: "2_1_mechanics.html" },
  { title: "2.2 More Mechanics", file: "2_2_more_mechanics.html" },
  { title: "3.0 Next Section", file: "3_0_next_section.html" },
  { title: "3.1 Subsection", file: "3_1_subsection.html" }
];

// Build the navigation HTML
const sidebar = document.getElementById("sidebar");

if (sidebar) {
  const list = document.createElement("ul");
  chapters.forEach(chap => {
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `${window.location.origin}/sphysix/chapters/${chap.file}`;
    link.textContent = chap.title;
    item.appendChild(link);
    list.appendChild(item);
  });
  sidebar.appendChild(list);
}
