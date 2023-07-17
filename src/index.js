const age1 = document.getElementById('age1');
const age2 = document.getElementById('age2');
const startedAgo = document.getElementById('startedAgo');
function update() {
    age1.innerText = `, если быть точным, мне ${fromDate(2011, 10, 11)} лет`;
    age2.innerText = ` Ей ровно ${fromDate(2008, 10, 20)} лет.`;
    startedAgo.innerText = fromDate(2017, 9, 1);
    requestAnimationFrame(update);
}
requestAnimationFrame(update);

function fromDate(year, month, day) {
    return ((Date.now() - Date.UTC(year, month, day)) / (1000 * 3600 * 24 * 365)).toFixed(7);
}