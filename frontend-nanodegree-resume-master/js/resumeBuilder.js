

//BACKGROUND INFORMATION
var bio ={
				"name" : "Sonam Sinha ",
				"role" : "Web Developer",
				"message" : " Welcome ",
				"contactInfo" : {
					"mobile" : "9936769511",
					"email" : "way2sonam@gmail.com",
					"github" : "sonamsinha",
					"linkedin" : "https://www.linkedin.com/pub/sonam-sinha/88/2a8/aa4",
					"location" : "Chicago, Illinois "
				},
				"bioPic" : "images/son.jpg",
				"skills" : ["Awesomeness", "Java", "Javascript", "SQL Database", "HTML and CSS"]
};

bio.display = function(){
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);

	var formattedContacts =HTMLmobile.replace("%data%", bio.contactInfo.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
	var github = HTMLgithub.replace("%data%", bio.contactInfo.github);
	var location1  = HTMLlocation.replace("%data%", bio.contactInfo.location);
	$("#topContacts").append(formattedContacts)
		.append(formattedEmail)
		.append(github)
		.append(location1);

	$("#footerContacts").append(formattedContacts)
		.append(formattedEmail)
		.append(github)
		.append(location1);


	var pic= HTMLbioPic.replace("%data%", bio.bioPic);
	var welMsg = HTMLWelcomeMsg.replace("%data%", bio.message);
	$("#header").append(pic);
	$("#header").append(welMsg);


	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		bio.skills.forEach(function(skill){
			var formattedSkills = HTMLskills.replace("%data%",skill);
			$("#skills").append(formattedSkills);
		});
	
	}
	$("#header").prepend(formattedHeaderRole);
	$("#header").prepend(formattedName);

};

bio.display();

//WORK
var work = { 
	"jobs" :[
		{
			 "employer" : "Neiu Counselling Services ",
			 "title" : "Front desk support ",
			 "date" : "May,2015 - Present",
			 "location" : " Chicago, Illinois ",
			 "description" : " Working on Titanium 9 to schedule appointment and maintaining client files. ",
			 "url" : "http://www.neiu.edu/university-life/health-and-counseling/counseling-services"
		}
	]	
};


work.display = function(){  
				work.jobs.forEach(function(job){
					$("#workExperience").append(HTMLworkStart);

					var formattedEmp = HTMLworkEmployer.replace("%data%",job.employer).replace('#',job.url);
					var formattedWorkTitle = HTMLworkTitle.replace("%data%",job.title);
					var formattedEmployerTitle = formattedEmp + formattedWorkTitle; 
					var formattedDate = HTMLworkDates.replace("%data%",job.date);
					var formattedCity = HTMLworkLocation .replace("%data%",job.location);
					var formattedDescription = HTMLworkDescription.replace("%data%",job.description);

					$(".work-entry:last").append(formattedEmployerTitle);
					$(".work-entry:last").append(formattedDate );
					$(".work-entry:last").append(formattedCity );
					$(".work-entry:last").append(formattedDescription );    
	
				});
};

work.display();

//PROJECTS
var projects = {
    "projects": [
        {
            "title": "Bank Database Management System ",
            "url": "https://github.com/sonamsinha/dbms ",
            "date": "April, 2015 ",
            "description": "The purpose of this project is to create a database management system for a bank. Oracle 11g has been used as the underlying database. The DDL and DML statements  have been written using Oracle PL/SQL developer. This project intends to provide a simplistic approach towards designing a database for a banking system. ",

            "images": [
                "images/dbms_project.png"
            ]
        },
        {
            "title": "Summer Project (Java Code) ",
            "url": "https://github.com/sonamsinha/Java-code/tree/master/projects ",
            "date": "May, 2015 ",
            "description": " The aim of this project is to keep practicing java coding and learn more about data structures. I will be adding more codes to it. ",
            "images": [
                "images/binary tree.png "
            ]
        },
        {
        	"title": "Portfolio",
            "url": "https://github.com/sonamsinha/front-enddev_udacity/tree/master/portfolio/framework ",
            "date": "May, 2015 ",
            "description": " The aim of this project is to build a portfolio page for the job purpose. ",
            "images": [
                "images/portfolio.png"
            ]
        }
    ]
};

projects.display = function(){
	projects.projects.forEach(function(project){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",project.title).replace('#',project.url);
		var formattedDates = HTMLprojectDates.replace("%data%",project.date);
		var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);


		if(project.images.length > 0){
			project.images.forEach(function(image){
				var formattedImages = HTMLprojectImage.replace("%data%",image);
				$(".project-entry:last").append(formattedImages);
			});
		}	
	});	
};

projects.display();

//EDUCATION
var education = { 
		"schools" :[
				{ 
					"name" : "Banaras Hindu University ",
					"degree": "Bachelors Of Science(Botany hons.)",
					"graduation" : "2008 - 2011 ",
					"majors": ["Botany "],
					"location" : "Varanasi, Uttar Pradesh, India",
					"url" : "http://www.bhu.ac.in/"
				},
				{
					"name" : "Northeastern Illinois University ",
					"degree" : "Bachelors Of Computer Science",
					"graduation" : "2014 - present ",
					"majors": ["Information Technology "],						"location" : "Chicago, Illinois",
					"url" :"http://www.neiu.edu/"

				}
		],
		"onlineCourses" :[
					{
						"title" : "Front end web developer ",
						"school" : "Udacity ",
						"dates" : "May, 2015",
						"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
					}
		]
};

education.display = function(){
		education.schools.forEach(function(school){
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%",school.name).replace('#',school.url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",school.degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",school.graduation);
        	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",school.location);

        	$(".education-entry:last").append(formattedSchoolName);
        	$(".education-entry:last a").append(formattedSchoolDegree);
        	$(".education-entry:last").append(formattedSchoolLocation);
        	$(".education-entry:last").append(formattedSchoolDates);

        	school.majors.forEach(function(major){
        		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",major);
            	$(".education-entry:last").append(formattedSchoolMajor);
        	});
		});
		
		if (education.onlineCourses.length > 0) {

			/*for(olCourses in education.onlineCourses){*/
			education.onlineCourses.forEach(function(olCourses){
				var formattedTitle = HTMLonlineTitle.replace("%data%",olCourses.title).replace('#',olCourses.url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",olCourses.school);
            	var formattedDates = HTMLonlineDates.replace("%data%",olCourses.dates);	
            	$(".education-entry:last").append(HTMLonlineClasses);
				$(".education-entry:last").append(formattedTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedDates);
				$(".education-entry:last").append('<br>');
			});
		}

};

education.display(); 	

//INTERNATIONALIZE NAME
var name = "Sonam Sinha";
function inName(name){
	var name = name.trim().split(" ");
    console.log(name);
    name[1]= name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + 
    		  name[0].slice(1).toLowerCase(); 

    return name[0] + " " +name[1];
}
$("#main").append(internationalizeButton);
			  
// WHERE I LIVED AND WORKED
$("#mapDiv").append(googleMap);















