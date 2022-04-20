// Execute the function "printResume" when form is submitted
document.forms[0].addEventListener("submit", function printResume(e) {
  e.preventDefault();
// Creating the variables to print the information to a new window
  let nameVal = document.getElementById("name").value;
  let jobApply = document.getElementById("jobApplyFor").value;
  let address = document.getElementById("Address").value;
  let city = document.getElementById("City").value;
  let state = document.getElementById("State").value;
  let zip = document.getElementById("Zip").value;
  let phone = document.getElementById("Phone").value;
  let email = document.getElementById("Email").value;
  let portfolio = document.getElementById("Portfolio").value;
  let social = document.getElementById("Social").value;
  let skill1 = document.getElementById("skillOne").value;
  let skill2 = document.getElementById("skillTwo").value;
  let skill3 = document.getElementById("skillThree").value;
  let codeSkill1 = document.getElementById("codingSkillOne").value;
  let codeSkill2 = document.getElementById("codingSkillTwo").value;
  let eduBG = document.getElementById("eduBG").value;
  let startJob1 = document.getElementById("startJob1").value;
  let endJob1 = document.getElementById("endJob1").value;
  let startJob2 = document.getElementById("startJob2").value;
  let endJob2 = document.getElementById("endJob2").value;
  let startJob3 = document.getElementById("startJob3").value;
  let endJob3 = document.getElementById("endJob3").value;
  let jobDesc1 = document.getElementById("references").value;
  let jobDesc2 = document.getElementById("references2").value;
  let jobDesc3 = document.getElementById("references3").value;
  function showOutputInWindow() {
      myText = ("<html>\n<link rel='stylesheet' href='projectCSS.css'>\n<head>\n<title>Job Application for " + nameVal + "</title><section class='header'><h2> " + nameVal + "</h2>\n")
      myText += ("<p>" + address + ", " + city + ", " + state + " " + zip + " * " + phone + " * " + email + "</p>\n");
      myText += ("<p>Twitter Handle: " + social + " * LinkedIn URL: " + portfolio + "</p></section>\n");
      myText += ("<body><h3>" + jobApply + "</h3>\n" + "<p>1. " + skill1 + "</p>\n");
      myText += ("<p>2. " + skill2 + "</p>\n" + "<p>3. " + skill3 + "</p>\n\n\n");
      myText += ("<h3>Coding Skills</h3>\n\n<p>1. " + codeSkill1 + "</p>\n<p>2. " + codeSkill2 + "\n\n");
      myText += ("<h3>Education: </h3>\n<p>1.  " + eduBG + "</p>\n\n");
      myText += ("<h3>Previous Employment: </h3>\n<p>1. Start: " + startJob1 + ", End: " + endJob1 + "</p>\n");
      myText += ("<p>2. Start: " + startJob2 + ", End: " + endJob2 + "</p>\n");
      myText += ("<p>3. Start: " + startJob3 + ", End: " + endJob3 + "</p>\n");
      myText += ("\n<h3>References</h3>\n<p>Job 1: " + jobDesc1 + ".</p>\n<p>Job 2: " + jobDesc2 + ".</p>\n<p>Job 3: " + jobDesc3 + ".</p>")
      myText += ("</body>\n</html>");

      flyWindow = window.open('about:blank', 'myPop');
      flyWindow.document.write(myText);
}
  showOutputInWindow();
});
