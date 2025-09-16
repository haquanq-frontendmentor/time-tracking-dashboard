const trackingFilterOptions = document.querySelectorAll(".tracking-filter__input") as NodeListOf<HTMLInputElement>;
const hourTexts = document.querySelectorAll(".tracking__hours") as NodeListOf<HTMLElement>;
const prevTexts = document.querySelectorAll(".tracking__hours-old") as NodeListOf<HTMLElement>;

trackingFilterOptions.forEach((input) => {
    input.addEventListener("change", () => {
        const selectDaily = input.value === "daily";
        const selectWeekly = input.value === "weekly";
        const selectMonthly = input.value === "monthly";

        const toggle = (element: HTMLElement) => {
            element.querySelector(".daily")?.setAttribute("data-show", String(selectDaily));
            element.querySelector(".weekly")?.setAttribute("data-show", String(selectWeekly));
            element.querySelector(".monthly")?.setAttribute("data-show", String(selectMonthly));
        };

        hourTexts.forEach(toggle);
    });
});
