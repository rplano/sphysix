const chapters = [
  { title: "2.0 Part II", file: "2_0_part_ii.md" },
  { title: "2.1 Mechanics", file: "2_1_mechanics.md" },
  { title: "2.2 More Mechanics", file: "2_2_more_mechanics.md" },
];

const nav = document.getElementById("sidebar");
nav.innerHTML = chapters.map(ch =>
  `<a href="{{ site.baseurl }}/chapters/${ch.file.replace('.md', '.html')}">${ch.title}</a>`
).join("<br>");
