/* 
 * Main scripts file for the timetable website.
 * Assignment 5, CSCI 1170, Winter 2022
 * Starter code provided by Dr. Raghav V. Sampangi
 */

let searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click",search)
  /*
    This assignment solution contains code re-used from A4 in this course. 
    This code is used with Prof. Raghav Sampangi's permission. 
    This code is used as a starting point for my solution for A5.
    */
function search()
{
    let mainContent = document.getElementsByClassName("container")
    // Clear main every time there is a search
    mainContent[0].innerHTML = ""
    // declare variables that store the word being used to search
    let searchBar = document.getElementById("search-keywords").value
    let keyWord = searchBar.trim()
    keyWord = keyWord.toLowerCase()
   
    // if input is empty output this 
    if (keyWord == "")
    {
        console.log("the search keyword is empty.")
        let para = document.createElement("p")
        let noCourse = document.createTextNode("the search keyword is empty.")
        para.appendChild(noCourse)
        mainContent[0].appendChild(para)
    }
    // If user inputted something 
    else
    {
        let btns = document.querySelectorAll(".submit");
        // remove the class from every element 
        for(let i = 0;i < btns.length;i++)
        {
            btns[i].classList.remove("submit")
        }
        for (let i = 0;i < courseInfo.length;i++)
        {
            let courseCode = courseInfo[i].code.toLowerCase()
            let courseName = courseInfo[i].name.toLowerCase()
            let courseData = courseName+ " "+courseCode 
            if (courseData.includes(keyWord))
            {
                // Add courses
                createCourse(courseInfo[i])
                console.log("found")
            }
            else
            {
                // if the course is not found
                console.log("not found")
            }
        }
    }
    // if nothing is found then output this
    if (mainContent[0].innerHTML == "")
    {
        let para = document.createElement("p")
        let noCourse = document.createTextNode("Sorry! No course exists with this course code or name")
        para.appendChild(noCourse)
        mainContent[0].appendChild(para)
    }
}



/*
This assignment solution contains code re-used from A4 in this course. 
This code is used with Prof. Raghav Sampangi's permission. 
This code is used as a starting point for my solution for A5.
*/
function createCourse(course){
    //Declaring elements that will contain the text content in each section 
    let mainContent = document.getElementsByClassName("container")
    let mainContainer = document.createElement("section");
    let firstHead = document.createElement("h4")
    let secondHead = document.createElement("p")
    let para0 = document.createElement("p")
    let em0 = document.createElement("em")
    let para1 = document.createElement("p")
    let em1 = document.createElement("em")
    let para2 = document.createElement("p")
    let btn = document.createElement("button")
  
    //Declaring the text in text nodes that will be appended to the element nodes 
    let h1Name = document.createTextNode(course.code+": "+course.name)
    let h2Name = document.createTextNode(course.prof)
    let pLoc = document.createTextNode("Location: "+ course.location +" (schedule: "+course.schedule +")")
    let pEnroll = document.createTextNode("Current enrollment: "+ course.currEnroll
    +"(max: "+course.maxEnroll +")")
    let pInfo = document.createTextNode(course.info)
    let btnContent = document.createTextNode("Sign up for course")
  
    // Appending text nodes to their element nodes 
    firstHead.appendChild(h1Name)
    secondHead.appendChild(h2Name)
    em0.appendChild(pEnroll)
    para0.appendChild(em0)
    em1.appendChild(pLoc)
    para1.appendChild(em1)
    para2.appendChild(pInfo)
    btn.appendChild(btnContent)
  
    // Appending block elements to the container element(section)
    mainContainer.appendChild(firstHead)
    mainContainer.appendChild(secondHead)
    mainContainer.appendChild(para0)
    mainContainer.appendChild(para1)
    mainContainer.appendChild(para2)
    mainContainer.appendChild(btn)
  
    // Setting attributes of the container and button that need to be styled
    mainContainer.setAttribute('class','content')
    btn.setAttribute('class','sign-up')
    btn.addEventListener("click",function () { signUp(course) })
    secondHead.setAttribute("class","secHead")
    para0.setAttribute("class","course-info")
    para1.setAttribute("class","course-offering-info")
    para2.setAttribute("class","course-summary")
  
    // Adding section to the webpage(Main section)
    mainContent[0].appendChild(mainContainer)
    // Declaring a variable that contains a list of each button in the sections

}



// Function that adds a course to the course selection bag section
function signUp(course)
{
    console.log("works") 
    let courseBag = document.getElementsByClassName("course-selection-bag")
    let pTag = document.createElement("p")
    let courseText = document.createTextNode( course.code +": "+course.name)
    pTag.appendChild(courseText)
    courseBag[0].appendChild(pTag)
}