const firstLoadImg = document.getElementById("loadFirstBtn");
const secondLoadImg = document.getElementById("loadSecondBtn");
const hideBtn = document.getElementById("hideBtn");

const firstBtnUrl = "https://api.pexels.com/v1/search?query=hamsters";
const secondBtnUrl = "https://api.pexels.com/v1/search?query=tigers";

//Taking first Btn Image

function displayFirstImage(firstBtnUrl) {
  fetch(firstBtnUrl, {
    headers: {
      Authorization: "I7rSWLGDHTiu0dKPti1enQwFKPn0BidVu926vHHq0ekHT1OZAFEWuCDO",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error came up!");
      }
    })
    .then((data) => {
      console.log(data);
      const row = document.getElementById("rowImg");

      const randomIndex = Math.floor(Math.random() * data.photos.length);
      const photo = data.photos[randomIndex];

      const newCol = document.createElement("div");
      newCol.classList.add("col", "col-12", "col-md-6");
      newCol.innerHTML = `
              <div class="card mb-4 shadow-sm h-100">
                <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary" id="hideBtn">Hide</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>`;

      row.appendChild(newCol);
    })

    //const imgUrl = data.photos[1].src.medium;
    //const imgElement = document.getElementById("imgElement");
    //imgElement.src = imgUrl;
    .catch((err) => {
      console.log(err);
    });
}

firstLoadImg.addEventListener("click", () => {
  displayFirstImage(firstBtnUrl);
});

function displaySecondImage(secondBtnUrl) {
  fetch(secondBtnUrl, {
    headers: {
      Authorization: "I7rSWLGDHTiu0dKPti1enQwFKPn0BidVu926vHHq0ekHT1OZAFEWuCDO",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error came up!");
      }
    })
    .then((data) => {
      console.log(data);
      const row = document.getElementById("rowImg");

      const randomIndex = Math.floor(Math.random() * data.photos.length);
      const photo = data.photos[randomIndex];

      const newCol = document.createElement("div");
      newCol.classList.add("col", "col-12", "col-md-6");
      newCol.innerHTML = `
              <div class="card mb-4 shadow-sm h-100">
                <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary" id="hideBtn">Hide</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>`;

      row.appendChild(newCol);
    })

    //const imgUrl = data.photos[1].src.medium;
    //const imgElement = document.getElementById("imgElement");
    //imgElement.src = imgUrl;
    .catch((err) => {
      console.log(err);
    });
}

/*secondLoadImg.addEventListener("click", () => {
  displaySecondImage(secondBtnUrl);
});*/

function hideImg() {
  const hideBtn = document.getElementById("hideBtn");
  hideBtn.addEventListener("click", () => {
    document.getElementById("rowImg").style.display = "none";
  });
}

hideImg();
