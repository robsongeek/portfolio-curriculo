function writingLetters() {
  function activeLetter(element) {
    const arryText = element.innerHTML.split("");
    //   console.log(arryText);
    element.innerHTML = "";
    arryText.forEach((letter, index) => {
      setTimeout(() => {
        element.innerHTML += letter;
      }, 75 * index);
    });
  }

  const title = document.querySelector(".typing");
  // console.log(title);

  activeLetter(title);
}
writingLetters();

function menuMobile() {
  const activeMenu = document.querySelector(".fa-bars");
  // console.log(activeMenu);
  const navMenu = document.querySelector("header .primary_navigation");
  // console.log(navMenu);
  activeMenu.addEventListener("click", () => {
    activeMenu.classList.toggle("fa-times");
    navMenu.classList.toggle("activated");
  });
}
menuMobile();

function function_alert() {
  alert(
    "Sorry!!, the procedure to download the CV is not available at the moment."
  );
}

function myResume() {
  const divExperience = document.querySelectorAll(".experience_content div");
  // console.log(divExperience);

  const divEducation = document.querySelectorAll(".education_content div");
  // console.log(divEducation);

  const liExperience = document.querySelectorAll(".experience_content ul li");
  // console.log(liExperience);

  const liEducation = document.querySelectorAll(".education_content ul li");
  // console.log(liEducation);

  divExperience[0].classList.add("active");
  liExperience[0].classList.add("active");
  divEducation[0].classList.add("active");
  liEducation[0].classList.add("active");

  function slideShowExperience(index) {
    divExperience.forEach((div) => {
      div.classList.remove("active");
    });

    liExperience.forEach((button) => {
      button.classList.remove("active");
    });

    divExperience[index].classList.add("active");
    liExperience[index].classList.add("active");
  }

  function slideShowEducation(index) {
    divEducation.forEach((div) => {
      div.classList.remove("active");
    });

    liEducation.forEach((button) => {
      button.classList.remove("active");
    });

    divEducation[index].classList.add("active");
    liEducation[index].classList.add("active");
  }

  liExperience.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShowExperience(index);
    });
  });

  liEducation.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShowEducation(index);
    });
  });
}

myResume();

function slideShowProjects() {
  const buttonGeneral = document.querySelectorAll(".project_models ul li");
  // console.log(buttonGeneral);

  const listAll = document.querySelectorAll(".project_storage ul li");
  // console.log(listAll);

  const buttonAll = document.querySelectorAll(".project_models .all");
  // console.log(buttonAll);

  function removeClick(index) {
    buttonGeneral.forEach((item) => {
      item.classList.remove("active");
    });
    buttonGeneral[index].classList.add("active");
  }

  buttonGeneral.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeClick(index);
    });
  });

  function showList(list, button = "all") {
    list.forEach((item) => {
      item.classList.remove("active");
    });

    if (button == "website") {
      list[0].classList.add("active");
      list[1].classList.add("active");
      
    }
    if (button == "javascript") {
      list[2].classList.add("active");
      list[3].classList.add("active");
      list[4].classList.add("active");
      
    }
    if (button == "java") {
      list[5].classList.add("active");
      list[6].classList.add("active");
      list[7].classList.add("active");
    }
    if (button == "all") {
      list[0].classList.add("active");
      list[1].classList.add("active");
      list[2].classList.add("active");
      list[3].classList.add("active");
      list[4].classList.add("active");
      list[5].classList.add("active");
      list[6].classList.add("active");
      list[7].classList.add("active");
    }
  }

  buttonGeneral.forEach((item) => {
    item.addEventListener("click", (e) => {
      let currentButton = e.target;
      if (currentButton.classList.contains("all")) {
        showList(listAll);
      }
      if (currentButton.classList.contains("website")) {
        showList(listAll, "website");
      }
      if (currentButton.classList.contains("javascript")) {
        showList(listAll, "javascript");
      }
      if (currentButton.classList.contains("java")) {
        showList(listAll, "java");
      }
    });
  });
}

slideShowProjects();

function update_year(){
let year_current = new Date;
// console.log(year_current);
document.querySelector('.year').innerHTML = year_current.getFullYear();
}

update_year();
