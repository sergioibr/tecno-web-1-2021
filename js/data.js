const alfa = 0.8

const students = [
    {
        id: "octavio",
        name: "Octavio Antelo",
        profession: "Software Developer",
        message:
            "Estudiante de 9no semestre Ingeniería Informática; actual Trainee en Sofía Avícola; Auxiliar de Catedra 2019-2020; Cursos de Inglés CAI Avanzado.",
        src: "assets/profile/octavio.jpeg",
        pdf: "assets/cvs/octavio.pdf",
        videos: [
            "https://www.youtube.com/embed/vvT-Yu6ljaw",
            "https://www.youtube.com/embed/TjYluNsjvBw",
            "https://www.youtube.com/embed/8aUR-Bi4rzI",
        ],
        audios: [
            {
                artist: "Kendrick Lamar",
                url: "assets/musics/uoeno.mp3",
                name: "U.O.E.N.O (Black Hippy Remix) ScHoolboy Q, Ab-Soul & Jay Rock",
            },
            {
                artist: "Kendrick Lamar",
                url: "assets/musics/control.mp3",
                name: "Control (Only Kendrick Verse)",
            },
            {
                artist: "Kendrick Lamar",
                url: "assets/musics/weup.mp3",
                name: "We Up ft. 50 cent",
            },
        ],
        chart: {
            // The type of chart we want to create
            type: "pie",
            // The data for our dataset
            data: {
                labels: ["Nodejs", "Java", "Laravel", "Angular", "Asp.Net", "Flutter"],
                datasets: [
                    {
                        label: "MESES TRABAJANDO",
                        backgroundColor: [
                            `rgba(239, 99, 37,${alfa})`,
                            `rgba(  5,101, 74,${alfa})`,
                            `rgba(  3,110, 56,${alfa})`,

                            `rgba(  0,169,237,${alfa})`,
                            `rgba( 20, 58,131,${alfa})`,
                            `rgba(224, 34, 18,${alfa})`,

                            `rgba(  2, 97,103,${alfa})`,
                            `rgba(236,131,174,${alfa})`,
                            // `rgba(215,  1,  9,${alfa})`,
                        ],
                        // borderColor: 'rgb(255, 99, 132)',
                        data: [ 25, 25, 5, 10, 15, 20],
                    },
                ],
            },
            // Configuration options go here
            options: {
                display: true,
                responsive: true,
            },
        },
    },
    {
        id: "sergio",
        name: "Sergio Bueno",
        profession: "Network Engineer",
        message:
            "22 años, estudiante de Ingeniería en Redes y Telecomunicaciones; CCNA 1; Profesor dos años de Computación en Centro Líder; Auxiliar de Catedra 2019-2020; Auxiliar de Cómputo 2021.",
        src: "assets/profile/sergio.jpeg",
        pdf: "assets/cvs/sergio.pdf",
        videos: [
            "https://www.youtube.com/embed/mRCOc33Id-o",
            "https://www.youtube.com/embed/700IJM5ND7U",
            "https://www.youtube.com/embed/yOQfPN0XBGs",
        ],
        audios: [
            {
                artist: "C Tangana",
                url: "assets/musics/2-Nada.mp3",
                name: "Nada",
            },
            {
                artist: "C Tangana",
                url: "assets/musics/3-Bolsas.mp3",
                name: "Bolsas",
            },
            {
                artist: "C Tangana",
                url: "assets/musics/4-Drama.mp3",
                name: "Drama",
            },
        ],
        chart: {
            type: "radar",
            data: {
                labels: [
                    "Arduino",
                    "GNS3",
                    "VMware",
                    "Cisco Packet Tracer",
                    "Python",
                    "Dart",
                    "HTML/CSS",
                ],
                datasets: [
                    {
                        fill: true,
                        label: "Knownledge",
                        data: [70, 90, 90, 75, 60, 40, 50, 20],
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        borderColor: "rgb(255, 99, 132)",
                        pointBackgroundColor: "rgb(255, 99, 132)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgb(255, 99, 132)",
                    },
                ],
            },
            options: {
                elements: {
                    line: { tension: 0, borderWidth: 3 },
                },
            },
        },
    },
    {
        id: "milena",
        name: "Milena Mollinedo",
        profession: "Software Developer",
        message:
            "Junior Programmer con experiencia en pequeños y cortos proyectos. Estudiante activa de la Universidad Autónoma Gabriel René Moreno de 8vo semestre de la carrera de Ing. Informática.",
        src: "assets/profile/milena.jpeg",
        pdf: "assets/cvs/milena.pdf",
        videos: [
            "https://www.youtube.com/embed/XTZHCzwTYS0",
            "https://www.youtube.com/embed/_Ldlz79gRiI",
            "https://www.youtube.com/embed/48PrdKWVvdQ",
        ],
        audios: [
            {
                artist: "Ariana Grande",
                url: "assets/musics/7rings.mp3",
                name: "7 Rings",
            },
            {
                artist: "Ariana Grande",
                url: "assets/musics/godGirl.mp3",
                name: "God is a woman",
            },
            {
                artist: "Ariana Grande",
                url: "assets/musics/thankx.mp3",
                name: "Thank U Next",
            },
        ],
        chart: {
            type: "doughnut",
            data: {
                labels: [
                    "AWS",
                    "GCP",
                    "FIREBASE MLKIT",
                    "AZURE",
                    "ALAN AI",
                    "HEROKU",
                    "TENSORFLOW",
                ],
                datasets: [
                    {
                        label: "My First Dataset",
                        data: [80, 60, 90, 85, 65, 75, 80],
                        backgroundColor: [
                            `rgba(239, 99, 37,${alfa})`,
                            `rgba(  5,101, 74,${alfa})`,
                            `rgba(  3,110, 56,${alfa})`,

                            `rgba(  0,169,237,${alfa})`,
                            `rgba( 20, 58,131,${alfa})`,
                            `rgba(224, 34, 18,${alfa})`,
                            `rgba(236,131,174,${alfa})`,
                        ],
                    },
                ],
            },
        },
    },
];
