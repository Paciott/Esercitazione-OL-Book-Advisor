const input = document.querySelector("#site-search");
const searchBtn = document.querySelector(".search-btn");
const list = document.querySelector(".list");
let errorP = document.createElement("p");
const loader = document.querySelector(".loader");
errorP.classList.add("error-paragraph");
input.value = "";

const getData = async () => {
  let inputValue = input.value.trim().toLowerCase().split(" ").join("");
  loader.classList.toggle("hidden");
  try {
    const res = await fetch(
      `https://openlibrary.org/subjects/${inputValue}.json`
    );

    const object = await res.json();
    if (object.work_count !== 0) {
      loader.classList.toggle("hidden");
      const works = object.works;
      for (work of works) {
        createCard(work);
      }
    } else {
      loader.classList.toggle("hidden");
      errorP.innerText = "No match found.";
      document.body.appendChild(errorP);
    }
  } catch (e) {
    errorP.innerText = "No match found.";
    document.body.appendChild(errorP);
  }
  input.value = "";
};

const getDescription = async (key) => {
  try {
    const res = await fetch(`https://openlibrary.org${key}.json`);
    let specs = await res.json();
    if (specs && specs.description && specs.description.value) {
      return specs.description.value;
    } else if (specs && specs.description) {
      return specs.description;
    } else {
      return "No description avaliable.";
    }
  } catch (e) {
    console.log("ERROR!", e);
  }
};

const createCard = async (work) => {
  let newLi = document.createElement("li");
  list.appendChild(newLi);
  newLi.classList.add("list-item");
  let h3 = document.createElement("h3");
  h3.innerText = work.title;
  h3.classList.add("h3");
  newLi.appendChild(h3);

  let author = document.createElement("span");
  author.innerText = work.authors[0].name;
  author.classList.add("author");
  newLi.appendChild(author);

  const readMore = document.createElement("button");
  readMore.innerText = "Show More";
  readMore.classList.add("read-more");
  newLi.appendChild(readMore);

  const descriptionP = document.createElement("p");
  descriptionP.classList.add("description-paragraph");
  readMore.addEventListener("click", async () => {
    if (readMore.innerText === "Show More") {
      let description = await getDescription(work.key);
      descriptionP.innerText = description;
      newLi.appendChild(descriptionP);
      readMore.innerText = "Show Less";
    } else {
      descriptionP.remove();
      readMore.innerText = "Show More";
    }
  });
};

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  list.innerText = "";
  errorP.innerText = "";
  getData();
});
