export const showMoreButton = (numberOfPosts, button) => {
  // Button show more functionality

  button.addEventListener("click", (e) => {
    const elementList = [
      ...document.querySelectorAll(".main-posts-container .post-container"),
    ];
    console.log(elementList);

    for (let i = numberOfPosts; i < numberOfPosts + 5; i++) {
      setTimeout(() => {
        if (elementList[i]) {
          elementList[i].style.display = "flex";
        }
      }, 500);
    }

    numberOfPosts += 5;

    if (numberOfPosts >= elementList.length) {
      event.target.classList.add("loaded");
    }
  });
};
