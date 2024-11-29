import {
  activityListAllYear,
  activityListSummer,
  activityListWinter,
  relaxationActivities,
  booksToRead,
} from "./dataList.js";

(() => {
  const winterButton = document.querySelector("#winterButton");
  const summerButton = document.querySelector("#summerButton");
  const bookButton = document.querySelector("#bookButton");
  const activityText = document.querySelector(".box__activity");
  const relaxationText = document.querySelector(".box__relaxation");
  const bookTeaxt = document.querySelector(".box__book");

  const combinedWinterActivities = [
    ...activityListWinter,
    ...activityListAllYear,
  ];
  const combinedSummerActivities = [
    ...activityListSummer,
    ...activityListAllYear,
  ];

  winterButton.addEventListener("click", () => {
    const loopCount = Math.floor(
      Math.random() * combinedWinterActivities.length
    );
    rotateActivities(loopCount, combinedWinterActivities, activityText);
  });

  summerButton.addEventListener("click", () => {
    const loopCount = Math.floor(
      Math.random() * combinedSummerActivities.length
    );
    rotateActivities(loopCount, combinedSummerActivities, activityText);
  });

  bookButton.addEventListener("click", () => {
    const loopCount = Math.floor(Math.random() * booksToRead.length);
    rotateBooks(loopCount);
  });

  function rotateBooks(loopCount) {
    if (loopCount > 0) {
      const randomIndexOfbook = Math.floor(Math.random() * booksToRead.length);

      bookTeaxt.innerHTML = booksToRead[randomIndexOfbook];
      bookTeaxt.style.display = "block";

      setTimeout(() => {
        rotateBooks(loopCount - 1);
      });
    }
  }

  function rotateActivities(loopCount, activities, textElement) {
    if (loopCount > 0) {
      const randomIndexForActivity = Math.floor(
        Math.random() * activities.length
      );
      const randomIndexForRelaxation = Math.floor(
        Math.random() * relaxationActivities.length
      );
      textElement.innerHTML = activities[randomIndexForActivity];
      textElement.style.display = "block";
      relaxationText.innerHTML = relaxationActivities[randomIndexForRelaxation];
      relaxationText.style.display = "block";

      setTimeout(() => {
        rotateActivities(loopCount - 1, activities, textElement);
      }, 50);
    }
  }
})();
