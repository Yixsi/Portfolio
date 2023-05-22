import { BsBootstrapFill, BsGit, BsTrello } from 'react-icons/bs';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { IoLogoNodejs, IoLogoJavascript } from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiCss3, SiPostgresql, SiSequelize, SiRedux } from 'react-icons/si';

export const projects = [
    {
        title: 'BAIT',
        role: 'Full Stack Developer',
        description: 'Bait is a web application where end-users can find the best restaurant to eat based on the reviews of other users.',
        tasks: "Backend: reviews model, routes CRUD, middlewares, controllers. Frontend: form validations, restaurants' menu components, logic and communication with the backend.",
        image: '/projects/baitapp.jpg',
        techs: [
                <IoLogoReact key='1' title='ReactJS'/>,
                <SiRedux key='2' title='Redux'/>,
                <IoLogoJavascript key='3' title='JavaScript'/>,
                <SiCss3 key='4' title='CSS3'/>,
                <IoLogoNodejs key='5' title='NodeJS'/>,
                <SiExpress key='6' title='Express'/>,
                <SiSequelize key='7' title='Sequelize'/>,
                <SiPostgresql key='8' title='PostgreSQL'/>,
                <BsGit key='9' title='Git'/>,
                <AiFillGithub key='10' title='GitHub'/>,
                <BsTrello key='11' title='Trello'/>,
                ],
        skills: 'Leadership, teamwork, attention to detail, assertive communication.',
        link: 'https://bait-one.vercel.app/'
    },
    {
        title: 'Dirty Paws',
        role: 'Full Stack Developer',
        description: 'Dirty Paws is a web application where users can find relevant information about different dog breeds, including physical characteristics and temperaments.',
        tasks: 'I built the models and relations using Sequelize as the ORM and PostgreSQL for the data. I wrote the back-end in Node.js using Express to set up the server and serve the required information to the client. The front-end was built with a minimalist and modern design. It features a controlled form where users can add a new breed and receive success or error responses from the back-end.',
        image: '/projects/dirtypaws.jpg',
        techs: [<IoLogoReact key='1' title='ReactJS'/>,
                <SiRedux key='2' title='Redux'/>,
                <IoLogoJavascript key='3' title='JavaScript'/>,
                <SiCss3 key='4' title='CSS3'/>,
                <IoLogoNodejs key='5' title='NodeJS'/>,
                <SiExpress key='6' title='Express'/>,
                <SiSequelize key='7' title='Sequelize'/>,
                <SiPostgresql key='8' title='PostgreSQL'/>,
                <BsGit key='9' title='Git'/>,
                <AiFillGithub key='10' title='GitHub'/>,
                ],
        skills: 'Autonomy, organization, dry code.',
        link: 'https://deploy-tau-sandy.vercel.app/'
    },
    {
        title: 'Carvajal Materiales',
        role: 'Web Designer',
        description: 'This is an e-commerce platform for Carvajal Materiales - Hardware Store, where users can check available products and stock, as well as estimate the total cost of their purchases',
        tasks: 'I wrote the use cases and user stories and had control over the sprints and pending tasks. In the app, I designed most of the user interface with special attention to UX and the modern design expected by the client. I used Bootstrap to develop a fully responsive website',
        image: '/projects/carvajal2.jpg',
        techs: [<IoLogoReact key='1' title='ReactJS'/>,
                <SiCss3 key='2' title='CSS3'/>,
                <BsBootstrapFill key='3' title='Bootstrap'/>,
                <AiFillHtml5 key='4' title='HTML5'/>,
                <BsGit key='5' title='Git'/>,
                <AiFillGithub key='9' title='GitHub'/>,
                ],
        skills: 'Leadership, design thinking,teamwork, organization.',
        link: 'https://github.com/Yixsi/App-web-CM-con-react'
    },
    {
        title: 'Rick and Morty',
        role: 'Front-end Developer',
        description: 'This is an app that consumes the Rick and Morty API and allows the users check more than a hundred characters and also add/delete characters from their favorites. Additionaly, they can use the search bar to find specific characters.',
        tasks: 'Web design, API requests,render information, dinamic pagination, redux and local states to control favorites.',
        image: '/projects/r&m.jpg',
        techs: [<IoLogoReact key='1' title='ReactJS'/>,
                <IoLogoJavascript key='2' title='JavaScript'/>,
                <SiCss3 key='3' title='CSS3'/>,
                <BsGit key='4' title='Git'/>,
                <AiFillGithub key='5' title='GitHub'/>,
                ],
        skills: 'Autonomy, organization, coding patterns.',
        link: 'https://github.com/Yixsi/RickAndMortyApp'
    },
    {
        title: 'My portfolio',
        role: 'Developer',
        description: 'I used my portfolio as an opportunity to learn and apply the features of Next.js, such as server-side rendering, client-side rendering, page routing, SEO, among others.',
        tasks: 'I developed the entire portfolio from scratch, including selecting a color palette based on my favorite colors and implementing all the necessary features. The contact form is controlled and utilizes Nodemailer to send emails to my personal Gmail account',
        image: '/projects/portfolio2.jpg',
        techs: [<TbBrandNextjs key='1' title='NextJS'/>,
                <IoLogoReact key='2' title='ReactJS'/>,
                <SiCss3 key='3' title='CSS3'/>,
                <AiFillHtml5 key='4' title='HTML5'/>,
                <BsGit key='5' title='Git'/>,
                <AiFillGithub key='9' title='GitHub'/>,
                ],
        skills: 'Leadership, design thinking, teamwork, organization.',
        link: 'https://github.com/Yixsi/Portfolio'
    },
]