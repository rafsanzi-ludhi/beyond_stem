<h1><i>beyond</i> STEM - Learning Tool📚 - Full stack MVP </h1>
Week 5 Project Alpha at La Fosse
 
![Screenshot of the logo with Github bg color.](client/images/logo-github.jpeg)

## [Demo](https://main--beyondstem.netlify.app/index.html)

## Engaging Minds: Educational Cards for History.

**Overview**

This project is a team-built educational tool designed to re-engage students in non-STEM subjects across a network of secondary schools. It represents a culmination of the skills and tools we’ve learned on the course, including full-stack development, user experience design, Agile collaboration, and technical documentation.

⸻

**Challenge**

The Hive group of schools is seeing decreased student interest and retention in non-STEM subjects. Our mission is to create a fun, educational digital solution that puts student enjoyment at the centre of the learning experience.

**Stakeholder Insights**

The planning and design of the application was underpinned by the summary of a wide variety of stakeholder statements from students, teachers, to parents, and leadership.

- <em>Students</em> feel overwhelmed by repetitive lessons and struggle to retain information.
- <em>Teachers</em> report reduced lesson frequency and superficial subject coverage.
- <em>Parents</em> see a drop in engagement and enjoyment.
- <em>Leaders</em> want to support holistic education and critical thinking across all subjects.

**Our Solution**

An interactive, game-based web app focused on delivering non-STEM knowledge in fun, bite-sized formats. Students progress through historical fact cards with a short description and image. Some of these facts are from the realm of the weird and wonderful because we think the teenage engagement with media is driven by curiosity, creativity, and the thrill of discovering something unexpected. Whether it’s a bizarre historical fact, an unexplained mystery, or an oddly satisfying video, young people are naturally drawn to the "strange" because it breaks the routine and sparks imagination and conversation.

**Key Features**

    •   🔒 User authentication (signup/login)
    •   🧠 Fact-based learning game mechanics
    •   💾 Persistent data via a relational database
    •   🌐 Responsive frontend and deployed full-stack app

**Backlog Items**

    •   💬 Multiple-choice quizzes
    •   📊 Score tracking and feedback
    •   👩‍🏫 Admin and review access for teachers and parents.
    •   🌍 Extend to other non-STEM subjects.

⸻

**Installation - Learning Flow**

To run the beyond STEM project locally, follow these steps:

**Clone the Repository**

    •   git clone git@github.com:rafsanzi-ludhi/beyond_stem.git
    •   cd beyond_stem

**Install Dependencies**

    •  npm install
    •  cd server

**Create Environment Variables**

Inside the server folder, create a .env file:

    •  PORT=3000
    •  DB_URL='Your Databse URL'

**Start the Backend Server**

    •  npm run dev

The backend should now be running at http://localhost:3000.

**Using the App**

    •   Sign up / log in
    •   Browse bite-sized historical facts
    •   Explore the game-based learning experience

**Development Tools, Methods and Technologies**

This project's aim was to integrate all core Lafosse course topics:

- • ✅ Agile methodologies & version control (Git & GitHub)
- • ✅ UX design principles and wireframing
- • ✅ Frontend development (HTML, CSS, JavaScript)
- • ✅ Backend development (Express, Node.js)
- • ✅ MVC architecture implementation
- • ✅ Database design and integration (SQL)

**Technical Architecture**

    •   Frontend: HTML, CSS, JavaScript
    •   Backend: Node.js, Express
    •   Database: SQL
    •   Auth: Basic auth with hashed passwords
    -   Testing: Jest, Supertest
    •   Deployment: Render/Netlify
    •   Version Control: Git + GitHub, following feature branch workflow

**Style Guide**

    •   Naming: camelCase for JavaScript, snake_case for SQL
    •   Design: Accessible colour palette, readable fonts, intuitive navigation

**Sorces**

- img (/beyond_stem/client/homePage.html) https://storyset.com/

⸻

**Deliverables**

    •   ✅ Stakeholder & solution analysis
    •   ✅ Database schema (ERD)
    •   ✅ Wireframes & UI mock-ups
    •   ✅ Deployed MVP of the educational tool
    •   ✅ End-of-project team presentation

⸻

**API**

    GET '/' - Entry endpoint
    GET '/history' - get all history facts from database
    GET '/history/id' - get fact with specific id from database
    POST '/history' - create new fact in the database
    PATCH '/history/id' - update fact with specific id
    DELETE '/history/id' - delete fact with specific id

⸻

**Testing**

    •   Automated test coverage target: 60%+
    •   Automated test coverage actual: 78%
    •   Tests written with Jest and Supertest

**Resources**

    •   Lafosse Curriculum
    •   Writing Great READMEs
    •   Git Flow Guide

⸻

**What We’ve Learned**
The <i>Beyond</i>STEM team initially struggled with version control. Code conflicts, overwritten files, and unclear Git workflows were at times slowing the progress and created confusion. We have learned the importance of maintaining clear commit habits, consistent branching, and regular updates.

From user-centred design to full-stack development and project delivery, this project reflects our growth in:

    •   Communication and collaboration
    •   Agile project planning
    •   Writing maintainable, testable and scalable code
    •   Connecting frontend to backend with real dataerrors
    •   Making something fun that really works!

The <i>Beyond</i>STEM team 👏

- [Ubong](https://github.com/sfxmaudu)
- [Bobby](https://github.com/bbm2910)
- [Khavan](https://github.com/gitKhavan)
- [Raf](https://github.com/rafsanzi-ludhi)
- [Alex](https://github.com/abittmann)
