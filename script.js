const historyList = [];
const maxHistory = 20;

function calculateBPM() {
    const input = document.getElementById("bpm-input").value;
    const bpm = parseFloat(input);

    if (isNaN(bpm) || bpm <= 0) {
        alert("Please enter a valid positive BPM.");
        return;
    }

    const slowBPM = (bpm * 0.75).toFixed(2);
    const fastBPM = (bpm / 0.75).toFixed(2);

    document.getElementById("slow-bpm").innerText = slowBPM;
    document.getElementById("fast-bpm").innerText = fastBPM;

    const entry = `Known: ${bpm.toFixed(2)} | Start/Loop: ${slowBPM} | End: ${fastBPM}`;
    historyList.unshift(entry);
    if (historyList.length > maxHistory) historyList.pop();

    updateHistory();
}

function updateHistory() {
    const list = document.getElementById("history-list");
    list.innerHTML = "";
    historyList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function clearAll() {
    document.getElementById("bpm-input").value = "";
    document.getElementById("slow-bpm").innerText = "";
    document.getElementById("fast-bpm").innerText = "";
    historyList.length = 0;
    updateHistory();
}
