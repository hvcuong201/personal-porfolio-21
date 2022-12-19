export const ProjectData = [
	{
		id: 1,
		title: 'Food Saver - Ecommerce Webapplication',
		idea: 'This is our Software Engineering - CTW final project, our professor assigned each team of 4 to pick a topic out of the potential topic list. The Food Saver stood out to me as an ecommerce application that allow registered food providers to sell their soon to expire food at a VERY low cost and users can buy these products as a mutual effort to combat global food waste.',
		about:
			'Designed a RESTful Backend Server that support CRUD operations for the registered food providers. Created the Fronted with Vue.js and communicate with the Backend using Axios. Achieved responsive and cohesive design using Bulma.',
		award: {
			title: 'Won the "Best Overall Project" category in the GSU Computer Science & Software Engineering Showcase 2022',
			link: 'https://csds.gsu.edu/2022/11/26/department-holds-computer-science-software-engineering-showcase/?fbclid=PAAabOwY1Ug-bs2H8bU9R3qwtGsTrqfqgh-Sj886Ck57DXiOgTjAQlKYcz3Y8'
		},
		tags: ['Django', 'Vue.js', 'Bulma'],
		github: 'https://github.com/hvcuong201/Food-Saver',
		image: require('../../assets/project-img/project3.png')
	},
	{
		id: 2,
		title: 'Artificial IntelliKid - HackGSU 2022',
		idea: 'Inspiring by an introduction to bitcoin website that we have seen before with slides, explanations, and demos, We made a website that introduces children to deep learning, AI, and IoT.',
		about:
			'The website aim to introduce Artificial Intelligence concepts to children. It explains deep learning from a very high level and then gets into some details about the math behind it without overwhelming kids. In the end it opens their minds to all the possibilities of the deep learning breakthrough.',
		award: {
			title: '1st Place in GSU CS Department Challenge #1',
			link: 'https://devpost.com/software/ai-challenge'
		},
		tags: ['Next.js', 'TensorFlow.js', 'Boostrap'],
		demo: 'https://hackathon-ai.vercel.app/',
		github: 'https://github.com/hvcuong201/hackathon-ai',
		image: require('../../assets/project-img/project4.png')
	},
	{
		id: 3,
		title: 'Beans - Online Retail Store Webapplication',
		idea: "For our Database Systems final project, our professor assigned us to design a database. I saw this as an opporturnity to create a webapplication powered with the database. It's also a way to cement my understanding in web development.",
		about:
			'An online retail store website that specializes in Beans!. On the customer-side, the website has some of the most basic features of an online retail store such as adding items to cart from the list of products displayed under Shop, and placing an order. For managers, it provides an Admin Dashboard that shows overall the order history, updating order status, reading customer feedbacks.',
		tags: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL'],
		github: 'https://github.com/hvcuong201/TeamHobo_CSC4710_FinalProject',
		image: require('../../assets/project-img/project1.png')
	},
	{
		id: 4,
		title: 'WhenToWork Automate Register Preference Bot',
		idea: "I got the idea for this project from working at my part-time job as a Student Assistant in EXLAB. Every week, employess have to log in WhenToWork.com to publish their prefered working hour for next week. Because of the website's design, a seemingly trivial task become time-consuming, and my boss has to regularly remind everyone to do so on the work group chat.",
		about:
			"With this application, a 'simple' task is truly become simple. It shortens the time for a task that usually takes 5 minutes into just under 10 seconds by utilizing Python SeleniumWebDriver and a neat Tkinter interface.",
		tags: ['Python', 'SeleniumWebDriver', 'Tkinter'],
		inprogress: 'https://docs.google.com/document/d/1G3RhG_5J1CC2L43nh8O4Vq5LRF8ZwQLO1SGcFwSYOoA/edit?usp=sharing',
		github: 'https://github.com/hvcuong201/whentowork-automate-bot',
		image: require('../../assets/project-img/project2.png')
	}
]
