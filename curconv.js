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
      const regep=new RegExp("/^[a-z]{3}$/");
      if(regep.test(crone) && regep.test(crtwo)){
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
    else{
      alert("Input not in required format");
    }
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
      const regep=new RegExp("/^[a-z]{3}$/");
      if(regep.test(crone) && regep.test(crtwo)){
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
    else{
      alert("Input not in required format");
    }
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
      const regep=new RegExp("/^[a-z]{3}$/");
      const regat=new RegExp("/^[0-9]$/")
      if(regep.test(crone) && regep.test(crtwo) && regat.test(camt)){
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
    else{
      alert("Input not in required format");
    }
    }
  });
});
