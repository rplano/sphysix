const baseurl = "/sphysix";  

const book = [
  {
    id: "1", title: "I. Preface", file: "1_0_Preface.html",
    subchapters: [
      { title: "Welcome", file: "1_1_Welcome.html" },
      { title: "How To", file: "1_2_How_To.html" },
      { title: "Safety First", file: "1_3_Safety_First.html" }
    ]
  },
  {
    id: "2", title: "II. Introduction", file: "2_0_part_ii.html",
    subchapters: [
      { title: "Mechanics", file: "2_1_mechanics.html" },
      { title: "More Mechanics", file: "2_2_more_mechanics.html" }
    ]
  },
  {
    id: "3", title: "III. Physics", file: "3_0_next_section.html",
    subchapters: [
      { title: "Subsection", file: "3_1_subsection.html" }
    ]
  }
];
/*
const chapters = [
  { title: "Part II – Introduction", file: "2_0_part_ii.html" },
  { title: "Mechanics", file: "2_1_mechanics.html" },
  { title: "More Mechanics", file: "2_2_more_mechanics.html" },
  { title: "Next Section", file: "3_0_next_section.html" },
  { title: "Subsection", file: "3_1_subsection.html" }
];
*/
const nav = document.getElementById("main-nav");
//const currentPath = window.location.pathname.split("/").pop();
const currentFile = window.location.pathname.split("/").pop();

if (currentFile === "" || currentFile === "index.html") {
  // At index — show chapters
  book.forEach(chap => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `${baseurl}/chapters/${chap.file}`;
    a.textContent = chap.title;
    if (currentFile === chap.file) a.classList.add("active");
    li.appendChild(a);
    nav.appendChild(li);
  });
  
} else {
  // Inside a chapter — find matching parent
  const currentChapter = book.find(chap =>
    chap.file === currentFile || chap.subchapters.some(sub => sub.file === currentFile)
  );

  if (currentChapter) {
    currentChapter.subchapters.forEach(sub => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = `${baseurl}/chapters/${sub.file}`;
      a.textContent = sub.title;
      if (sub.file === currentFile) a.classList.add("active");
      li.appendChild(a);
      nav.appendChild(li);
    });
  }
}
  /*
  chapters.forEach(chap => {
    const item = document.createElement("li");
    const link = document.createElement("a");
  
    //link.href = `${window.location.origin}/sphysix/chapters/${chap.file}`;
    link.href = `${baseurl}/chapters/${chap.file}`;
    link.textContent = chap.title;

    if (currentPath === chap.file) {
      link.classList.add("active");
    }

    item.appendChild(link);
    nav.appendChild(item);
  });
}
*/
