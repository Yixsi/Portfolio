import { BsBootstrapFill, BsGit, BsTrello } from 'react-icons/bs';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { IoLogoNodejs, IoLogoReact, IoLogoJavascript } from 'react-icons/io';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiExpress, SiCss3, SiPostgresql, SiSequelize, SiRedux } from 'react-icons/si';
import Bait from '../../public/projects/Bait.jpg';
import Carvajal from '../../public/projects/carvajal.jpg';
import Dirty_Paws from '../../public/projects/Dirty_Paws.jpg';
import rym from '../../public/projects/rym.jpg';
import Portfolio from '../../public/projects/Portfolio.jpg';

export const projects = [
    {
        title: 'BAIT',
        rol: 'Full Stack Developer',
        description: 'Bait is a web application where end-users can find the best restaurant to eat based on the reviews of other users. Additionally, users or restaurant owners can create a restaurant that is not yet registered. If it has already been created, owners can claim their establishment by sending the appropriate documentation.',
        tasks: "In the back-end of the project, I developed the first version of the reviews model, CRUD routes, controllers, and middlewares. Then, in the front-end, I proposed a structure to work with ESLint and apply good coding practices. I also wrote a Git and GitHub guide to help the front-end team understand and apply the Git flow. Other tasks I performed included form validations, logic implementation, and communication with the back-end for the restaurant's menu components",
        image: Bait,
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
                <BsTrello key='11' title='Trello'/>,
                ],
        skills: 'Leadership, teamwork, attention to detail, assertive communication.',
        link: 'https://bait-one.vercel.app/'
    },
    {
        title: 'Dirty Paws',
        rol: 'Full Stack Developer',
        description: 'Dirty Paws is a web application where users can find relevant information about different dog breeds, including physical characteristics and temperaments.',
        tasks: 'I built the models and relations using Sequelize as the ORM and PostgreSQL for the data. I wrote the back-end in Node.js using Express to set up the server and serve the required information to the client. The front-end was built with a minimalist and modern design. It features a controlled form where users can add a new breed and receive success or error responses from the back-end.',
        image: Dirty_Paws,
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
        rol: 'Web Designer',
        description: 'This is an e-commerce platform for Carvajal Materiales - Hardware Store, where users can check available products and stock, as well as estimate the total cost of their purchases',
        tasks: 'I wrote the use cases and user stories and had control over the sprints and pending tasks. In the app, I designed most of the user interface with special attention to UX and the modern design expected by the client. I used Bootstrap to develop a fully responsive website',
        image: Carvajal,
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
        rol: 'Front-end Developer',
        description: 'This is an app that consumes the Rick and Morty API and allows the users to check all the charactes with a dynamic pagination and also enable users to add/delete characters from their favorites list.',
        tasks: 'I used a minimalistic but cool design to attract the target public. I used redux actions to request the data from the API and react to render the client interface. This project helped me understand the react components life cycle.',
        image: rym,
        techs: [<IoLogoReact key='1' title='ReactJS'/>,
                <SiCss3 key='2' title='CSS3'/>,
                <BsGit key='3' title='Git'/>,
                <AiFillGithub key='4' title='GitHub'/>,
                ],
        skills: 'Autonomy, organization, coding patterns.',
        link: 'https://github.com/Yixsi/RickAndMortyApp'
    },
    {
        title: 'My portfolio',
        rol: 'Developer',
        description: 'I used my portfolio as an opportunity to learn and apply the features of Next.js, such as server-side rendering, client-side rendering, page routing, SEO, among others.',
        tasks: 'I developed the entire portfolio from scratch, including selecting a color palette based on my favorite colors and implementing all the necessary features. The contact form is controlled and utilizes Nodemailer to send emails to my personal Gmail account',
        image: Portfolio,
        techs: [<TbBrandNextjs key='1' title='NextJS'/>,
                <IoLogoReact key='2' title='ReactJS'/>,
                <SiCss3 key='3' title='CSS3'/>,
                <AiFillHtml5 key='4' title='HTML5'/>,
                <BsGit key='5' title='Git'/>,
                <AiFillGithub key='9' title='GitHub'/>,
                ],
        skills: 'Leadership, design thinking,teamwork, organization.',
        link: 'https://github.com/Yixsi/Portfolio'
    },
]