document.addEventListener("DOMContentLoaded", function () {
    const brightnessInput = document.getElementById("brightness");
    const colorOptions = document.querySelectorAll(".color-label");
    const lightCircle = document.getElementById("light-circle");

    brightnessInput.addEventListener("input", updateLight);
    colorOptions.forEach(colorOption => {
        colorOption.addEventListener("click", () => {
            const color = colorOption.style.backgroundColor;
            lightCircle.style.backgroundColor = color;
        });
    });

    function updateLight() {
        const brightnessValue = brightnessInput.value;
        lightCircle.style.boxShadow = `0px 0px 20px 0px rgba(0, 0, 0, ${brightnessValue / 100})`;
    }
});
