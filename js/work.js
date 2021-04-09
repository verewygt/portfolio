var projects_json;

function loadProjects() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://julienzbinden.github.io/js/work.json", false);
    request.send(null);
    projects_json = JSON.parse(request.responseText);
}

function display() {
    loadProjects();
    var list = document.querySelector('.content');
    list.innerHTML = "";

    for (var i = 0; i < projects_json.projects[].length; i++) {
        var link = projects_json.projects[i].name.toLowercase.replace(" ", "-");
        var name = projects_json.projects[i].name;
        var date = projects_json.projects[i].date;
        var text = projects_json.projects[i].text;

        list.insertAdjacentHTML('afterend','<section class="project"><a class="link" href="' + link + '"></a><div class="project-box"><p class="date">' + date + '</p><h1 class="title">' + name + '</h1><div class="link-icon"></div><p class="text">' + text + '</p><div class="line-vertical"></div><div class="line-vertical"></div><div class="line-horizontal"></div></div><div class="image" style="background-image: url("https://julienzbinden.github.io/css/img/work/' + link + '");"></div></section>');
    }
}
