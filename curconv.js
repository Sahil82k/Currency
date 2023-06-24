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
      let datacr
    try {
      const convdata = await fetch(urlconv);
<<<<<<< HEAD
       datacr = await convdata.json();
=======
      const datacr = await convdata.json();
      const crval=Object.values(datacr);
      const fi=document.querySelector('#final')
      fi.textContent(crval[1]);
      console.log(crval[1]);
>>>>>>> 36540781f138371e3b9e40e39cb8f7fff7a68d31
    } catch {
      console.log("an error ocurred");
    }
      const crval=Object.values(datacr);
      let final=crval[1];
      const fi=document.querySelector('#final')
      fi.textContent=final;
  });
});
