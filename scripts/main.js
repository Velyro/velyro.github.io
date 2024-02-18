const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/dage-impaled-with-lightning.png") {
    myImage.setAttribute("src", "images/hero-blocking-malgor's-attack-against-dage.png");
  } else {
    myImage.setAttribute("src", "images/dage-impaled-with-lightning.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `This is Velyro's AQW Wiki Test Page, ${myName}`;
    }
  }  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `This is Velyro's AQW Wiki Test Page, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  