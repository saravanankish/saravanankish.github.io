const calculateAge = () => {
    var dob = new Date('05/30/2001')
    var month_difference = Date.now() - dob.getTime();
    var age_date = new Date(month_difference);
    var year = age_date.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
}

const getImageCard = (row) => {
    var projects = document.querySelector('#project-items');
    var item = document.createElement('div');
    item.classList.add('item');
    item.dataset.groups = row.type;
    var inner = document.createElement('div');
    inner.classList.add('inner');
    var img = document.createElement('img');
    img.src = row.image;
    var caption = document.createElement('div');
    caption.classList.add('caption');
    var captionInner = document.createElement('div');
    captionInner.classList.add('caption-inner');
    var h4 = document.createElement('h4');
    var text = document.createTextNode(row.name);
    h4.appendChild(text);
    var p = document.createElement('p');
    var desc = document.createTextNode(row.description);
    p.appendChild(desc);
    captionInner.appendChild(h4);
    captionInner.appendChild(p);
    var links = document.createElement('ul');
    links.classList.add('links');
    if(row.code !== '') {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = row.code;
        a.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
            </svg>
        `
        li.appendChild(a);
        links.appendChild(li);
    }
    if(row.site !== '') {        
        var li2 = document.createElement('li');
        var a2 = document.createElement('a');
        a2.href = row.site;
        a2.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
            </svg>
        `
        li2.appendChild(a2);
        links.appendChild(li2);
    }
    if(row.site !== '' || row.code !== '')
        captionInner.appendChild(links);
    caption.appendChild(captionInner);
    inner.appendChild(img);
    inner.appendChild(caption);
    item.appendChild(inner);
    projects.appendChild(item);
}

const projects = [
    {
        name: 'RF Remote',
        description: 'A prototype of remote which uses RF waves to transfer data. It can overcome the disadvantage of the classic IR remotes. Uses RF transmitter and receiver, ht12e and ht12d.',
        code: '',
        site: '',
        type: 'hardware',
        image: './static/images/RF.jpg'
    },
    {
        name: 'Fishermen Alert System',
        description: 'It alerts the fishermen crossing the border. It is developed without the help of an GPS modules thus it does not require connectivity and it is a stand alone device running on battery. Uses MPU6050, arduino.',
        code: '',
        site: '',
        type: 'hardware',
        image: './static/images/fisher.jpg',
    },
    {
        name: 'Obstacle avoiding robot',
        description: 'A simple autonomous obstacle avoiding robot. Made using arduino, motor, chassis, ultrasonic sensor.',
        code: '',
        site: '',
        type: 'hardware',
        image: './static/images/obstacle.jpeg',
    },
    {
        name: 'Traffic sign classification system',
        description: 'It is machine learning project on classifying traffic sign from the images. It has an accuracy of about 95% and trained on German Traffic signs dataset. It can classify traffic signs from known 43 classes.',
        code: 'https://github.com/saravanankish/GRIP-tasks/blob/main/Task_5_Traffic_Sign_Classification.ipynb',
        type: 'software',
        site: '',
        image: './static/images/traffic.jpg',
    },
    {
        name: 'Hotel Management system',
        description: 'It is a software made using python to manage hotels. It helps in all aspects like billing, ticket booking, food ordering, advertising the hotel through mail, customer support, mailing the bill and so on. It is basically a model of 5 star hotel management system.',
        code: '',
        type: 'software',
        site: '',
        image: './static/images/hotel.PNG',
    },
    {
        name: 'MSL company website',
        description: 'Created a website for a lab products company named MSL scientific and equipments using django, HTML, CSS and javascript.',
        code: '',
        type: 'web',
        site: 'https://msl-scientific.herokuapp.com/',
        image: './static/images/msl.png',
    },
    {
        name: 'GEE-Travels website',
        description: 'Created a website for a travels company named GEE Travels located in coimbatore using HTML, CSS and javascript',
        site: 'https://geetravels.github.io/',
        code: 'https://github.com/saravanankish/kannan_cabs',
        type: 'web',
        image: './static/images/gee.png',
    },
    {
        name: 'Fantasy dress application',
        description: 'Created an e-commerce dress application for Virtusa Neural Hack Season 5 competition. The tech-stack used was React and Spring Boot',
        code: 'https://github.com/saravanankish/fantasy-dress',
        type: 'web',
        image: './static/images/fantasy-dress.jpg',
    },
    {
        name: 'Chat App UI',
        description: 'A online chat app UI design using React framework',
        site: 'https://saravanankish.github.io/chatApp',
        code: 'https://github.com/saravanankish/chatApp',
        type: 'web',
        image: './static/images/chat-app.png',
    },
    {
        name: 'Sorting Algorithms Visualizer',
        description: 'A sorting algorithm visualizer built purely on HTML, JAVASCRIPT and CSS. It has visualization of three algorithms Bubble Sort, Selection Sort, Merge Sort with adjustable speed of animation and size of array ',
        site: 'https://saravanankish.github.io/Sorting-Visualizer/',
        code: 'https://github.com/saravanankish/Sorting-Visualizer',
        type: 'web',
        image: './static/images/sort-visualizer.png',
    },
    // {
    //     name: '',
    //     description: '',
    //     code: '',
    //     type: '',
    //     image: '',
    // },
    // {
    //     name: '',
    //     description: '',
    //     code: '',
    //     type: '',
    //     image: '',
    // },
    // {
    //     name: '',
    //     description: '',
    //     code: '',
    //     type: '',
    //     image: '',
    // },
    // {
    //     name: '',
    //     description: '',
    //     code: '',
    //     type: '',
    //     image: '',
    // },
    // {
    //     name: '',
    //     description: '',
    //     code: '',
    //     type: '',
    //     image: '',
    // },
    // {
    //     name: '',
    //     description: '',
    //     code: '',
    //     type: '',
    //     image: '',
    // },
]

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
}

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('body').classList.remove('section-show');
    document.querySelector('body').classList.add('section-close');
    document.querySelector('.section.active').classList.remove('active');
})

document.querySelectorAll('.home-navbar > ul > li > a[data-section]').forEach(ele => ele.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.dataset.section)
    document.querySelector('#project-items').innerHTML = '';
    if(document.querySelector(`#${e.target.dataset.section}`)){
        document.querySelector('body').classList.remove('section-close');
        document.querySelector('body').classList.add('section-show');
        document.querySelector(`#${e.target.dataset.section}`)?.classList?.add('active');
        if(e.target.dataset.section === 'projects') {
            let filterTag = document.querySelector('.filters > ul > li > a.active').dataset.group
            if(filterTag === 'all'){
                shuffleArray(projects);
                projects.forEach(ele => getImageCard(ele));
            }else{
                let displayProjects = projects.filter(ele => ele.type === filterTag)
                shuffleArray(displayProjects);
                displayProjects.forEach(ele => getImageCard(ele));
            }
        }
    }
}));

document.querySelectorAll('.filters > ul > li > a').forEach(ele => ele.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.filters > ul > li > a.active').classList.remove('active');
    e.target.classList.add('active');
    let filterTag = e.target.dataset.group;
    let items = document.querySelectorAll('.item');
    let projectsDiv = document.querySelector('#project-items');
    if(filterTag !== 'all') {
        let displayProjects = projects.filter(ele => ele.type === filterTag);
        projectsDiv.innerHTML = '';
        displayProjects.forEach(ele => getImageCard(ele));
    }else {
        projectsDiv.innerHTML = '';
        projects.forEach(ele => getImageCard(ele));
    }
}))

document.querySelector('.age').innerHTML = `${calculateAge()} years`;