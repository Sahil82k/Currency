document.addEventListener("DOMContentLoaded", () => {
  const conve = document.querySelector("#conv");
  conve.addEventListener("click", async (e) => {
    e.preventDefault();
    //getting values
    const crone = document.querySelector("#cco").value;
    const crtwo = document.querySelector("#cct").value;
    if (crone === "" || crtwo === "") {
      alert("Currency Codes can't be empty");
    } else {
      const urlconv =
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" +
        crone +
        "/" +
        crtwo +
        ".json";
      let datacr;
      try {
        const convdata = await fetch(urlconv);
        datacr = await convdata.json();
      } catch {
        alert("an error ocurred");
      }
      const crval = Object.values(datacr);
      let final = crval[1];
      const fi = document.querySelector("#final");
      fi.textContent = final;
    }
  });

  const show = document.querySelector("#button-addon2");
  show.addEventListener("click", async (e) => {
    e.preventDefault();
    //getting values
    const crone = document.querySelector("#cco").value;
    const crtwo = document.querySelector("#cct").value;
    const cdate = document.querySelector("#dt").value;
    if (crone === "" || crtwo === "" || cdate === "") {
      alert("Some fields can't be empty");
    } else {
      const urlconv =
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/" +
        cdate +
        "/currencies/" +
        crone +
        "/" +
        crtwo +
        ".json";
      let datacr;
      try {
        const convdata = await fetch(urlconv);
        datacr = await convdata.json();
      } catch {
        alert("an error ocurred");
      }
      const crval = Object.values(datacr);
      let final = crval[1];
      const fi = document.querySelector("#final");
      fi.textContent = final;
    }
  });

  const calc = document.querySelector("#cal");
  calc.addEventListener("click", async (e) => {
    e.preventDefault();
    //getting values
    const crone = document.querySelector("#cco").value;
    const crtwo = document.querySelector("#cct").value;
    const camt = document.querySelector("#amt").value;
    const cdate = document.querySelector("#dt").value;
    if (crone === "" || crtwo === "" || camt === "") {
      alert("Some fields can't be empty");
    } else 
    {
      let urlconv;
      if(cdate=="")
      {
      urlconv =
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" +
        crone +
        "/" +
        crtwo +
        ".json";
      }
      else{
        urlconv =
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/" +
        cdate +
        "/currencies/" +
        crone +
        "/" +
        crtwo +
        ".json";
      }
      let datacr;
      try {
        const convdata = await fetch(urlconv);
        datacr = await convdata.json();
      } catch {
        alert("an error ocurred");
      }
      const crval = Object.values(datacr);
      let final = crval[1];
      final = final * camt;
      const fi = document.querySelector("#final");
      fi.textContent = final;
    }
  });
});
