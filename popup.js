const nftSectionHtml = (name, image) => {
  const nftSection = document.getElementById("nft");

  const header = document.createElement('h3');
  const headerText = document.createTextNode(name);
  header.appendChild(headerText);
  nftSection.appendChild(header);

  const img = document.createElement('img');
  img.setAttribute('src', image);
  nftSection.appendChild(img);
}


function fetchAssets(event) {
  event.preventDefault();
  const form = event.target;
  const address = form.elements.address.value;
  fetch(`https://mynft-api.herokuapp.com/assets/${address}`, {
    mode: "no-cors",
  }).then((response) => response.json()
    .then((data) => {
        console.log(data);
        const nft = data[0].nfts[0];
        nftSectionHtml(nft.name, nft.imageUrl);
      })
    .catch((error) => {
        console.log(error);
      })
  );
}

const form = document.getElementById("addressForm");
form.addEventListener("submit", fetchAssets);
