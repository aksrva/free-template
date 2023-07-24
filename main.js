function init() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("title").innerText = data.title;
      document.getElementById("logo").innerText = data.title;
      document.getElementById("heading").innerText = data.title;
      let cards = document.getElementById("cards");
      document
        .getElementById("vector")
        .setAttribute("src", "./images/" + data.hero_vector);
      document
        .getElementById("call")
        .setAttribute("href", "tel:+91" + data.mobile);
      document
        .getElementById("whatsapp")
        .setAttribute(
          "href",
          "https://wa.me/91" +
            data.mobile +
            "?text=Hi, I have an inquiry aboutthe product."
        );
      let card = ``;
      for (let img of data.images) {
        card += `
        <div class="card">
        <div class="card__img">
          <img src="./images/${img}" alt="" />
        </div>
        <div class="card__btn">
          <a href="tel:+91${data.mobile}" class="free__btn"
            ><ion-icon name="call"></ion-icon
          ></a>
          <a
            href="https://wa.me/91${data.whatsapp}?text=Hi, I have an inquiry."
            class="free__btn"
            ><ion-icon name="logo-whatsapp"></ion-icon
          ></a>
        </div>
      </div>
        `;
      }
      cards.innerHTML = card;
    });
}
init();
