function generateMainHTML(htmlManager, htmlEngineer, htmlIntern) {

    return `<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
        <!-- Font Awesome-->
        <script src="https://kit.fontawesome.com/c140bf22f6.js" crossorigin="anonymous"></script>
    
        <!--Google Font-->
        <link href="https://fonts.googleapis.com/css?family=Crete+Round&display=swap" rel="stylesheet">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    
        <!--my CSS-->
        <style>
            .header {
                font-family: 'Crete Round', serif;
                font-size: 35px;
                width: 100%;
                height: auto;
                padding: 20px;
                position: absolute;
                text-align: center;
            }
    
            .manager {
                font-family: 'Crete Round', serif;
                font-size: 20px;
                margin-top: 150px;
                padding: 10px;
            }
    
            .engineer {
                font-family: 'Crete Round', serif;
                font-size: 20px;
                margin-top: 30px;
                padding: 10px;
            }
    
            .intern {
                font-family: 'Crete Round', serif;
                font-size: 20px;
                margin-top: 30px;
                padding: 10px;
            }
    
            #cardM {
                box-shadow: goldenrod 4px 1px 20px 4px;
            }
    
            #cardE {
                box-shadow: #009999 4px 1px 20px 4px;
            }
    
            #cardI {
                box-shadow: #4da6ff 4px 1px 20px 4px;
            }
    
            .cardTitle {
                font-family: 'Crete Round', serif;
                font-size: 18px;
            }
    
            .cardContent {
                font-family: 'Crete Round', serif;
                font-size: 16px;
                margin: 8px;
            }
    
            a {
            color: #e6f7ff;
            }
    
    
    
        </style>
    
        <title>Team Profile</title>
    </head>
    
    <body>
        <section class="content">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-12 header text-white bg-dark mb-3">
                        Our Team
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    ${htmlManager}
                </div>
                <div class="row justify-content-center">
                    ${htmlEngineer}
                </div>
                <div class="row justify-content-center">  
                    ${htmlIntern}
                </div>
            </div>
    
        </section>
    
    
    
        <section class="scripts">
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"
                integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
                integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
                crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
                integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
                crossorigin="anonymous"></script>
        </section>
    </body>
    
    </html>`};


function generateManagerHTML(data) {
    return `<div class="col-sm-3 manager">
                <div id="cardM" class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header cardTitle">${data.name}
                    <br>
                    <i class="fas fa-user-tie"></i>
                    Manager
                    </div>
                    <div class="card-body bg-warning cardContent">
                    <p class="card-text bg-warning mb-3">ID: ${data.id}</p>
                    <p class="card-text bg-warning mb-3">Email: <a href= "mailto: ${data.email}"> ${data.email}</a></p>
                    <p class="card-text bg-warning mb-3">Office Number: ${data.officeNumber}</p>
                    </div>
                </div>
            </div>`
};

function generateEngineerHTML(data) {
    return `<div class="col-sm-3 engineer">
                <div id="cardE" class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header cardTitle">${data.name}
                    <br>
                    <i class="fas fa-user-astronaut"></i>
                    Engineer
                    </div>
                    <div class="card-body bg-info cardContent">
                    <p class="card-text bg-info mb-3">ID: ${data.id}</p>
                    <p class="card-text bg-info mb-3">Email: <a href="mailto: ${data.email}"> ${data.email}</a></p>
                    <p class="card-text bg-info mb-3">Github: <a href="https://github.com/${data.github}" target="blank">
                        https://github.com/${data.github}</a></p>
                    </div>
                </div>
            </div>`
};

function generateInternHTML(data) {
    return `<div class="col-sm-3 intern">
                <div id="cardI" class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header cardTitle">${data.name}
                    <br>
                    <i class="fas fa-user-graduate"></i>
                    Intern
                    </div>
                    <div class="card-body bg-primary cardContent">
                    <p class="card-text bg-primary mb-3">ID: ${data.id}</p>
                    <p class="card-text bg-primary mb-3">Email: <a href="mailto: ${data.email}"> ${data.email}</a></p>
                    <p class="card-text bg-primary mb-3">School: ${data.school}</p>
                    </div>
                </div>
            </div>`
};



module.exports = { generateMainHTML: generateMainHTML, generateManagerHTML: generateManagerHTML, generateEngineerHTML: generateEngineerHTML, generateInternHTML: generateInternHTML };