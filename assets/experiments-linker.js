document.addEventListener("DOMContentLoaded", () => {
  const currentFile = window.location.pathname.split("/").pop();
  //console.log("currentFile: "+currentFile);
  if (currentFile === "experiments.html") {
	
  const experimentList = document.querySelectorAll("strong"); // adjust selector if needed

  const prefixToFile = {
	MECH: "3_1_Mechanics.html",
	WAVE: "3_2_Sound.html",
	OPTI: "3_3_Optics.html",
	HEAT: "3_4_Heat.html",
	FLUID: "3_5_Fluids.html",
	EMAG: "3_6_Electromag.html",
	NUCL: "3_7_Radioactivity.html",
	ASTR: "3_8_Astronomy.html",
	MODP: "3_9_Modern.html",
	CHEM: "4_1_Chemistry.html",
	BIO: "4_2_Biology.html",
	BIOP: "4_3_Biophysics.html",
	ENVP: "4_4_Environmental.html",
	INFO: "4_5_InfoTheory.html"
  };

  const codePattern = /([A-Z]+-\d{2})/g; // match MECH-01, OPT-02, etc.	
	  
  experimentList.forEach(el => {
    const html = el.innerHTML;
    const match = html.match(codePattern); //(/\*\*(\w+-\d+)\*\*/); // matches **MECH-01** etc.
    //console.log("html: "+html);
    //console.log("match: "+match);

    if (match && match.length > 0) {
	const code = match[0];
	const prefix = code.split("-");
	//console.log("prefix: "+prefix);
	const targetFile = prefixToFile[prefix[0]];
	//console.log("targetFile: "+targetFile);
		
	  if (targetFile) {
	    const link = `<a href="chapters/${targetFile}#${code}"><strong>${code}</strong></a>`;
	    el.innerHTML = html.replace(code, link);
	  }
    }
	 
  });
  }
});

