// // Function to fetch translation JSON file
// async function fetchTranslations(lang) {
//   try {
//     const response = await fetch(`translation/${lang}.json`);
//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching translation file:", error);
//     return {};
//   }
// }

// // Function to update all content based on language
// async function updateLanguage(lang) {
//   const translations = await fetchTranslations(lang);

//   // Find all elements with data-key and update their text content
//   const elements = document.querySelectorAll("[data-key]");
//   elements.forEach((element) => {
//     const key = element.getAttribute("data-key");
//     if (translations[key]) {
//       element.textContent = translations[key];
//     }
//   });

//   // Adjust text direction for RTL languages (Arabic)
//   // document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
// }

// // Event Listener for Language Selection
// const languageSelector = document.getElementById("languageSelector");
// const selectedFlag = document.getElementById("selectedFlag");

// languageSelector.addEventListener("change", async (event) => {
//   const selectedOption = event.target.options[event.target.selectedIndex];
//   const selectedLang = event.target.value;
//   const flagSrc = selectedOption.getAttribute("data-flag");

//   // Update the flag and language
//   selectedFlag.src = flagSrc || "";
//   selectedFlag.alt = selectedOption.textContent.trim();

//   // Update the content language
//   await updateLanguage(selectedLang);
// });

// // Set Default Language on Page Load
// document.addEventListener("DOMContentLoaded", async () => {
//   const defaultLang = "en";

//   // Set the default language in the dropdown
//   languageSelector.value = defaultLang;

//   // Set the default flag
//   const defaultOption =
//     languageSelector.options[languageSelector.selectedIndex];
//   selectedFlag.src = defaultOption.getAttribute("data-flag");
//   selectedFlag.alt = defaultOption.textContent.trim();

//   // Update the content language
//   await updateLanguage(defaultLang);
// });

// Function to fetch translation JSON file
async function fetchTranslations(lang) {
  try {
    const response = await fetch(`translation/${lang}.json`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching translation file:", error);
    return {};
  }
}

// Function to update all content based on the selected language
async function updateLanguage(lang) {
  const translations = await fetchTranslations(lang);

  // Update all elements with a data-key attribute
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    if (translations[key]) {
      element.textContent = translations[key];
    }
  });

  // Update text direction for RTL languages
  // document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

// Function to handle language selection
function setLanguage(lang, flag, text) {
  const selectedFlag = document.getElementById("selectedFlag");
  const selectedLangText = document.getElementById("selectedLangText");

  // Update the selected language display
  selectedFlag.src = flag;
  selectedFlag.alt = text;
  selectedLangText.textContent = text;

  // Update the content language
  updateLanguage(lang);
}

// Event listener for dropdown interaction
document.addEventListener("DOMContentLoaded", () => {
  const selectedLanguage = document.getElementById("selectedLanguage");
  const languageDropdown = document.getElementById("languageDropdown");

  // Toggle dropdown visibility
  selectedLanguage.addEventListener("click", () => {
    languageDropdown.classList.toggle("visible");
  });

  // Handle language selection
  languageDropdown.addEventListener("click", (event) => {
    const listItem = event.target.closest("li");
    if (!listItem) return;

    const lang = listItem.getAttribute("data-lang");
    const flag = listItem.getAttribute("data-flag");
    const text = listItem.querySelector("span").textContent;

    // Set selected language
    setLanguage(lang, flag, text);

    // Hide the dropdown
    languageDropdown.classList.remove("visible");
  });

  // Set default language
  const defaultLang = "en";
  const defaultFlag = "https://flagcdn.com/w40/gb.png";
  const defaultText = "English";

  setLanguage(defaultLang, defaultFlag, defaultText);
});
