import {
  activityListAllYear,
  activityListSummer,
  activityListWinter,
  relaxationActivities,
} from "./dataList.js";

(() => {
  const winterButton = document.querySelector("#winterButton");
  const summerButton = document.querySelector("#summerButton");
  const activityText = document.querySelector(".box__activity");
  const relaxationText = document.querySelector(".box__relaxation");

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

  function rotateActivities(loopCount, activities, textElement) {
    if (loopCount > 0) {
      const randomIndexForActivity = Math.floor(
        Math.random() * activities.length
      );
      const randomIndexForRelaxation = Math.floor(
        Math.random() * relaxationActivities.length
      );

      textElement.innerHTML = activities[randomIndexForActivity];
      relaxationText.innerHTML = relaxationActivities[randomIndexForRelaxation];

      setTimeout(() => {
        rotateActivities(loopCount - 1, activities, textElement);
      }, 50);
    }
  }
})();
