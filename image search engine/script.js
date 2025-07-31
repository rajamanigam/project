const accessKey = "jA7W10DcTgmXJo7hsR-i4CT9NVmOo2HgFZ2O5iI-Mmg";

const searchForm = document.getElementById("search");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  if (page === 1) {
    searchResult.innerHTML = "";
  }
  if (!results || results.length === 0) {
    searchResult.innerHTML = "<p>No images found.</p>";
    return;
  }
  results.forEach((result) => {
    const img = document.createElement("img");
    img.src = result.urls.small;
    img.alt = result.alt_description || keyword;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(img);
    searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
