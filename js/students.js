const studentsContainer = document.getElementById("students-container");

students.forEach((student) => {
  // STUDENT CARD WITH INFO
  studentsContainer.innerHTML += `
        <section class="student">
            <div class="card">
                <div class="card-image">
                    <img src=${student.src} alt="">
                </div>
                <div class="card-text">
                    <span class="date">${student.profession}</span>
                    <h2>${student.name}</h2>
                    <p>
                        ${student.message}
                    </p>
                </div>
                <div class="card-stats">
                    <div class="stat" title="CV">
                        <a href=${
                          student.pdf
                        } download target="_blank" title="CV">
                            <i class="material-icons">picture_as_pdf</i>
                            <p title="CV">CV</p>
                        </a>
                    </div>
                    <div class="stat border" title="PRO">
                        <a id="btnChart${student.id}" title="CHART">
                            <i class="material-icons">pie_chart</i>
                            <p title="CHART">CHART</p>
                        </a>
                    </div>
                    <div class="stat">
                        <a id="btnDisplay${student.id}" title="PLAYLIST">
                            <i class="material-icons">play_circle_filled</i>
                            <p title="PLAYLIST">PLAY</p>
                        </a>
                    </div>
                </div>
            </div>
            <!-- The Modal -->
            <div id="chartModal${student.id}" class="modal">
                <!-- Modal content -->
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close">&times;</span>
                        <h2>Skills</h2>
                    </div>
                    <div class="modal-body">
                        <canvas id="chart${student.id}"></canvas>
                        <!-- <p>Some text in the Modal Body</p>
                        <p>Some other text...</p> -->
                    </div>
                    <div class="modal-footer">
                        <!-- <h3>Modal Footer</h3> -->
                    </div>
                </div>
            </div>
            <div id="display${student.id}" class="modal">
                <!-- Modal content -->
                <div class="modal-content">
                    <div class="modal-header">
                        <span class="close">&times;</span>
                        <h2>My PlayList</h2>
                    </div>
                    <div class="modal-body">
                        <h2><i class="material-icons">play_circle_filled</i> Videos <i
                                class="material-icons">play_circle_filled</i></h2>
                        <div class="container">
                            ${student.videos.map(
                              (url) => `<iframe src=${url}></iframe>`
                            )}
                        </div>
                        <h2><i class="material-icons">audiotrack</i> Audios <i class="material-icons">audiotrack</i></h2>
                        <div class="container">
                            ${student.audios.map((audio) => {
                              return `
                                <div class="audio">
                                <h4>${audio.name} - ${audio.artist}</h4>
                                <audio controls src=${audio.url}></audio>
                            </div>`;
                            })}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <!-- <h3>Modal Footer</h3> -->
                    </div>
                </div>
            </div>
        </section>
    `;
});
