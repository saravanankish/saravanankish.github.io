const url_contact = "https://ek49t7.deta.dev/contact"; // My api to send mail
const xhr = new XMLHttpRequest();

// Function to calculate age dynamically from DOB
const calculateAge = () => {
    var dob = new Date('05/30/2001')
    var month_difference = Date.now() - dob.getTime();
    var age_date = new Date(month_difference);
    var year = age_date.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
}

// Function to add Image Card in project section dynamically
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

// Function to validate Phone Number in contact form
const validatePhoneNumber = (number) => {
    return (/^[0-9]{10}$/).test(number)
}

// Function to validate Email Id in contact form
const validateEmail = (email) => {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

// My list of project data
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
]

// Pre-defined success and error message for form submit action
alerts = {			
    success: 
    "<div class='form-group' >\
        <div class='alert alert-success alert-dismissible' role='alert'> \
            <button type='button' class='close' data-dismiss='alert' aria-label='Close' onclick='return closeInfo()' > \
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-x-lg' viewBox='0 0 16 16'> \
                    <path fill-rule='evenodd' d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z'/> \
                    <path fill-rule='evenodd' d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z'/> \
                </svg>\
            </button> \
            <strong>Message Sent!</strong> We'll be in touch as soon as possible\
        </div>\
    </div>",
    
    
    error: 
    "<div class='form-group' >\
        <div class='alert alert-danger alert-dismissible' role='alert'> \
            <button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
                <i class='ion-ios-close-empty' ></i> \
            </button> \
            <strong>Error!</strong> Sorry, an error occurred. Try again.\
        </div>\
    </div>"
    
};

// Function to shuffle the project array data
const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var rand = Math.floor(Math.random() * (i + 1));
        [array[i], array[rand]] = [array[rand], array[i]]
    }
}

// To show the calculated age in the about me section
document.querySelector('.age').innerHTML = `${calculateAge()} years`;

// To close the open section
document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('body').classList.remove('section-show');
    document.querySelector('body').classList.add('section-close');
    document.querySelector('.section.active').classList.remove('active');
})

// To open an section from home page
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

// To filter the projects based on the type of projects in projects section
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

// To send the response of the form to my email id 
document.querySelector('#contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(e.path[0][0].value)
    let form = e.path[0];
    let name = form[0].value;
    let phone = form[1].value;
    let email = form[2].value;
    let comment = form[3].value;
    console.log(name, phone, email, comment)
    if(!validateEmail(email)) {
        document.querySelector('#error-email').innerHTML = 'Please enter a valid email address.'
        return;
    }else{
        document.querySelector('#error-email').innerHTML = ''
    }
    if(!validatePhoneNumber(phone)) {
        document.querySelector('#error-phone').innerHTML = 'Please enter a valid number with 10 digits.'
        return;
    }else{
        document.querySelector('#error-phone').innerHTML = ''
    }
    xhr.open("POST", url_contact);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(`name=${name}&mail=${email}&number=${phone}&comment=${comment}`);
    document.querySelector('#contact-form-result').innerHTML = alerts.success   
    document.querySelector('#contact-form').reset();
})

// Function to close the form info section
const closeInfo = () => {
    document.querySelector('#contact-form-result').innerHTML = '';
}
