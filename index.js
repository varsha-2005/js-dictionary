const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("res");
const sound = document.getElementById("sound");
const btn = document.getElementById("inpbtn");

btn.addEventListener("click", async () => {
    let ip = document.getElementById("inp").value;
    try {
        const response = await fetch(`${url}${ip}`);
        const data = await response.json();
        console.log(data);

        result.innerHTML = `
            <div class="word">
                <h3>${ip}</h3>
                <button id="sbtn" onclick="playsound()"><i class="fa-solid fa-volume-high"></i></button>
            </div>
            <div class="det">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="mean">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="exp">${data[0].meanings[0].definitions[0].example || ""}</p>`;
        
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        console.log(sound);
    } 
    catch (error) {
        result.innerHTML = `<h3>Could not find the word</h3>`;
    }
});

function playsound() {
    sound.play();
}
