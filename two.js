const calculateResutsButton = document.getElementById("calculate-results");

const dayInput = document.getElementById("day-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");

function areInputsValid() {
  if (
    dayInput.value >= 1 &&
    dayInput.value <= 31 &&
    monthInput.value >= 1 &&
    monthInput.value <= 12 &&
    yearInput.value >= 1 &&
    yearInput.value <= 2023
  ) {
    if (monthInput.value == 2 && dayInput.value > 28) {
      if (yearInput.value % 4 == 0 && dayInput.value == 29) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}

calculateResutsButton.addEventListener("click", () => {
  if (areInputsValid()) {
    if (document.getElementById("p-error")) {
      document.getElementById("p-error").remove();
    }
    console.log("all inputs valid, perform calculations");
    const selectedDate = new Date(
      yearInput.value,
      monthInput.value - 1,
      dayInput.value
    );

    let moment1 = moment(new Date().toLocaleString());
    let moment2 = moment(selectedDate.toLocaleString());

    let differenceInDuration = moment.duration(moment1.diff(moment2));

    let years = differenceInDuration.years();
    let months = differenceInDuration.months();
    let days = differenceInDuration.days();

    document.getElementById("year-output").textContent = years;
    document.getElementById("month-output").textContent = months;
    document.getElementById("day-output").textContent = days;

    // 18 -12 == 6 ,, 18 - 23 --
  } else {
    let pError = document.createElement("p");
    pError.style.color = "red";
    pError.setAttribute("id", "p-error");
    pError.textContent = "Error in inputs";
    if (!document.getElementById("p-error")) {
      document.getElementById("error-div").append(pError);
    }
  }
});
// what is a cdn in web ddevelopement
