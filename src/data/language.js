const translations = {
    en: {

    },
    es: {

    },
    cat: {

    }
}

const languageSelectop = document.querySelector("select");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if(language == "es"){
        console.log(language);
    }else if(language == "cat"){
        console.log(language)
    }else if(language == "en"){
        console.log(language)
    }1
}