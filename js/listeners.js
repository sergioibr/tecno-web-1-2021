const displays = []
const btnCharts = []
const modalCharts = []
const btnDisplays = []

students.forEach(({id}) => {
    modalCharts.push(document.getElementById(`chartModal${id}`))
    btnCharts.push(document.getElementById(`btnChart${id}`))
    btnDisplays.push(document.getElementById(`btnDisplay${id}`))
    displays.push(document.getElementById(`display${id}`))
})

let span = document.getElementsByClassName("close");

for (let i = 0; i < btnCharts.length; i++) {
    const btn = btnCharts[i];
    const btnDisplay = btnDisplays[i];

    if (btn) {
        btn.onclick = () => {
            modalCharts[i].style.display = "block";
        }
    }

    if (btnDisplay) {
        btnDisplay.onclick = () => {
            displays[i].style.display = "block";
        }
    }
}

for (let i = 0; i < span.length; i++) {
    const aSpan = span[i];
    aSpan.onclick = () => {
        modalCharts.forEach(modal => {
            if (modal) {
                modal.style.display = "none";
            }
        })
    
        displays.forEach(modal => {
            if (modal) {
                modal.style.display = "none";
            }
        })
    }
}


window.onclick = event => {
    modalCharts.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    });

    displays.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    })
}