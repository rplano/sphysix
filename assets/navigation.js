const baseurl = "/sphysix";  

const book = [
  {
    id: "0", title: "Experiments", file: "../experiments.html",
    subchapters: [
    ]
  },
  {
    id: "1", title: "Preface", file: "0_0_Preface.html",
    subchapters: [
      { title: "Welcome", file: "0_1_Welcome.html" },
      { title: "How To", file: "0_2_How_To.html" },
      { title: "Safety First", file: "0_3_Safety_First.html" }
    ]
  },
  {
    id: "2", title: "Smartphone", file: "1_0_Smartphone.html",
    subchapters: [
      { title: "Smartphone Sensors", file: "1_1_Sensors.html" },	
      { title: "Accessories", file: "1_2_Accessories.html" },
      { title: "Data Acquisition", file: "1_3_Data.html" },	
      { title: "How to Measure", file: "1_4_Measure.html" },
      { title: "Apps and Tools", file: "1_5_Apps.html" }
    ]
  },
  {
  id: "3", title: "Math", file: "2_0_Math.html",
  subchapters: [
    { title: "Data Sense", file: "2_1_Data.html" },
    { title: "Graph Stories", file: "2_2_Graphs.html" },
    { title: "Units & Scales", file: "2_3_Units.html" },
    { title: "Trust a Number", file: "2_4_Trust.html" },
    { title: "AI-Power", file: "2_5_AI.html" },
    { title: "Curiosity to Equation", file: "2_6_Equation.html" }
  ]
  },
{
  id: "4", title: "Physics", file: "3_0_Physics.html",
  subchapters: [
    { title: "Mechanics & Motion", file: "3_1_Mechanics.html" },
    { title: "Sound & Waves", file: "3_2_Sound.html" },
    { title: "Light, Optics & Vis.", file: "3_3_Optics.html" },
    { title: "Heat & Thermodyn.", file: "3_4_Heat.html" },
    { title: "Fluid Dynamics", file: "3_5_Fluids.html" },
    { title: "Electromagnetism", file: "3_6_Electromag.html" },
    { title: "Radioactivity", file: "3_7_Radioactivity.html" },
    { title: "Astronomy", file: "3_8_Astronomy.html" },
    { title: "Modern Physics", file: "3_9_Modern.html" }
  ]
},
{
  id: "5", title: "Sciences", file: "4_0_OtherScience.html",
  subchapters: [
    { title: "Chemistry", file: "4_1_Chemistry.html" },
    { title: "Biology", file: "4_2_Biology.html" },
    { title: "Biophysics", file: "4_3_Biophysics.html" },
    { title: "Environmental Physics", file: "4_4_Environmental.html" },
    { title: "Information Theory", file: "4_5_InfoTheory.html" }
  ]
}, 
{
  id: "6", title: "Special", file: "5_0_SpecialTopics.html",
  subchapters: [
    { title: "Lab Hacks", file: "5_1_LabHacks.html" },
    { title: "Creative Lab Technqs", file: "5_2_CreativeTech.html" },
    { title: "Optical Workbench", file: "5_3_OpticalWorkbench.html" },
    { title: "Advanced Projects", file: "5_4_AdvancedProjects.html" },
    { title: "Capstone Ideas", file: "5_5_CapstoneIdeas.html" }
  ]
},
{
  id: "7", title: "Beyond", file: "6_0_BeyondLab.html",
  subchapters: [
    { title: "Inquiry Extensions", file: "6_1_Inquiry.html" },
    { title: "Sharing Results", file: "6_2_Sharing.html" },
    { title: "Your Own Experiments", file: "6_3_YourExperiments.html" },
    { title: "Next Steps", file: "6_4_NextSteps.html" }
  ]
},
{
  id: "8", title: "Appendix", file: "A_Sensors.html",
  subchapters: [
    { title: "A. Sensor Specs", file: "A_Sensors.html" },
    { title: "B. AI Prompt Library", file: "B_Prompts.html" },
    { title: "C. Safety Guide by Topic", file: "C_Safety.html" },
    { title: "D. Suggested Equipment", file: "D_Equipment.html" },
    { title: "E. List of Experiments", file: "E_Experiments.html" },
    { title: "F. Glossary of Terms", file: "F_Glossary.html" },
    { title: "G. Index", file: "G_Index.html" }
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

if (currentFile === "" || currentFile === "index.html" || currentFile === "experiments.html") {
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
