


const fullBody = document.getElementById("TheBody");
let lastSelectedIdx;
let latestDescButton;


/*
  Items below pertain to light-mode/dark-mode toggle. 
*/
var dayMode = false;

const swapper = document.getElementById("modeSwitch");
const mainButtons = document.getElementsByClassName("mButton");

function swapScreen() {

    if (dayMode) {

        modeSwitch.src = "/Showcase Site/BaseIcons/MoonIcon.png";

        dayMode = false;

        fullBody.style.backgroundColor = "#000000";
        fullBody.style.color = "#ffffff";

        // Base colors of all Projects
        const projects = document.getElementsByClassName("A_Project");
        for (let index = 0; index < projects.length; index++) {
            projects[index].style.backgroundColor = "#000000";
            projects[index].style.borderColor = "#ffffff";
        }

        // Sets the main three button colors
        for (let buttonIdx = 0; buttonIdx < mainButtons.length; buttonIdx++) {
            mainButtons[buttonIdx].style.color = "#ffffff";
            mainButtons[buttonIdx].style.borderColor = "#ffffff";
            if (lastSelectedIdx != buttonIdx) {
                mainButtons[buttonIdx].style.backgroundColor = "#000000";
            } else {
                mainButtons[buttonIdx].style.backgroundColor = "#878787";
            }
        }

        // Sets border colors for projects
        document.documentElement.style.setProperty('--borderColorStart', 'rgba(255, 255, 255, 0.3)');
        document.documentElement.style.setProperty('--borderColorEnd', 'rgba(255, 255, 255, 0.8)');

        document.documentElement.style.setProperty('--globalBackgroundColor', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--globalLineColor', 'rgb(255, 255, 2550)');

    } else {

        modeSwitch.src = "/Showcase Site/BaseIcons/SunIcon.png";

        dayMode = true;

        fullBody.style.backgroundColor = "#ffffff";
        fullBody.style.color = "#000000";

        // Base colors of all Projects
        const projects = document.getElementsByClassName("A_Project");
        for (let index = 0; index < projects.length; index++) {
            projects[index].style.backgroundColor = "#ffffff";
            projects[index].style.borderColor = "#000000";
        }

        // Sets the main three button colors
        for (let buttonIdx = 0; buttonIdx < mainButtons.length; buttonIdx++) {
            mainButtons[buttonIdx].style.color = "#000000";
            mainButtons[buttonIdx].style.borderColor = "#000000";
            if (lastSelectedIdx != buttonIdx) {
                mainButtons[buttonIdx].style.backgroundColor = "#ffffff";
            } else {
                mainButtons[buttonIdx].style.backgroundColor = "#878787";
            }
        }

        // Sets colors for animated borders on projects
        document.documentElement.style.setProperty('--borderColorStart', 'rgba(0, 0, 0, 0.3)');
        document.documentElement.style.setProperty('--borderColorEnd', 'rgba(0, 0, 0, 0.8)');

        document.documentElement.style.setProperty('--globalBackgroundColor', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--globalLineColor', 'rgb(0, 0, 0)');

    }



    // Ensures Last selected button remains visually selected.
    mainButtons[lastSelectedIdx].style.backgroundColor = "#878787";

}



function toggleSection(index) {

    lastSelectedIdx = index;

    /*
      Changes visible section
    */

    if (index == 0) {
        document.getElementById("All_CS").style.display = 'block';
        document.getElementById("All_Design").style.display = 'none';
        document.getElementById("Other").style.display = 'none';
    }
    if (index == 1) {
        document.getElementById("All_CS").style.display = 'none';
        document.getElementById("All_Design").style.display = 'block';
        document.getElementById("Other").style.display = 'none';
    }
    if (index == 2) {
        document.getElementById("All_CS").style.display = 'none';
        document.getElementById("All_Design").style.display = 'none';
        document.getElementById("Other").style.display = 'block';
    }

    /*
      Clarifies selected button
    */
    for (let buttonIdx = 0; buttonIdx < mainButtons.length; buttonIdx++) {
        if (index != buttonIdx) {
            if (dayMode == false) {
                mainButtons[buttonIdx].style.backgroundColor = "#000000";
                mainButtons[buttonIdx].style.color = "#ffffff";
                mainButtons[buttonIdx].style.borderColor = "#ffffff";
            } else {
                mainButtons[buttonIdx].style.backgroundColor = "#ffffff";
                mainButtons[buttonIdx].style.color = "#000000";
                mainButtons[buttonIdx].style.borderColor = "#000000";
            }
        } else {
            mainButtons[buttonIdx].style.backgroundColor = "#878787";
        }
    }
}

function hoverColor(buttonIdx) {

    if (dayMode == false) {
        mainButtons[buttonIdx].style.backgroundColor = "#303030";
    } else {
        mainButtons[buttonIdx].style.backgroundColor = "#cccccc";
    }
    // Ensures Last selected button remains visually selected.
    mainButtons[lastSelectedIdx].style.backgroundColor = "#878787";

}

function returnColor(buttonIdx) {
    if (dayMode == false) {
        mainButtons[buttonIdx].style.backgroundColor = "#000000";
    } else {
        mainButtons[buttonIdx].style.backgroundColor = "#ffffff";
    }

    // Ensures Last selected button remains visually selected.
    mainButtons[lastSelectedIdx].style.backgroundColor = "#878787";
}

/*
  Implementation of buttons under projects. 
*/

let clicks = 0;

function toggleDescVisibility(theID) {

    const targetClass = theID.substring(0, 7);

    let allDescriptionsHere = document.getElementById(targetClass.substring(0, 3) + '_All');

    let descList = document.getElementsByClassName(targetClass);
    for (index = 0; index < descList.length; index++) {

        // If the current description matches the clicked id...
        let currentDesc = descList[index];
        if (theID == currentDesc.id) {

            if (currentDesc.style.display == 'none') {
                allDescriptionsHere.style.display = 'flex';
                currentDesc.style.display = 'flex';
            } else {
                allDescriptionsHere.style.display = 'none';
                currentDesc.style.display = 'none';
            }
        } else {
            currentDesc.style.display = 'none';
        }
    }
}

function showPopup(imageId) {
    const thePopup = document.getElementById("popup_Container");
    const popupImage = document.getElementById("popup_Image");
    const theImage = document.getElementById(imageId);

    popupImage.addEventListener('click', function () {
        document.getElementById("popup_Container").style.display = 'none';
        document.getElementById("popup_Image").src = '';
    });

    thePopup.style.display = 'grid';
    popupImage.src = theImage.src;

    popupImage.style.width = 'fit-content';
    popupImage.style.maxWidth = '400px';
    popupImage.style.height = 'auto';

}



