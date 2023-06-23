document.addEventListener("DOMContentLoaded", () => {
  const conve = document.querySelector("#conv");
  conve.addEventListener("click", async (e) => {
    e.preventDefault();
    //getting values
    const crone = document.querySelector("#cco").value;
    const crtwo = document.querySelector("#cct").value;
    const urlconv =
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/" +
      crone +
      "/" +
      crtwo +
      ".json";
    try {
      const convdata = await fetch(urlconv);
      const datacr = await convdata.json();
      const crval=Object.values(datacr);
      const fi=document.querySelector('#final')
      fi.textContent(crval[1]);
      console.log(crval[1]);
    } catch {
      console.log("an error ocurred");
    }
  });
});
