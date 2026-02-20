const language = navigator.language;
const title = document.getElementById("title");
const where = document.getElementById("where");
const when = document.getElementById("when");
const welcome = document.getElementById("welcome");
const respondBy = document.getElementById("respondBy");
const messageLabel = document.getElementById("messageLabel");
const messageText = document.getElementById("messageText");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const hope = document.getElementById("hope");
if (language.startsWith("nl")) {
  document.title = "Uitnodiging voor Noah's vormselfeest";
  title.innerHTML = "Uitnodiging voor Noah's vormselfeest";
  where.innerHTML = 'Waar: <a href="https://www.google.com/maps/place/Heggli+G%C3%A5rd/@63.5231054,9.9463848,17z/data=!3m1!4b1!4m6!3m5!1s0x4612c98755fe6073:0xebd9c3e204aa67c5!8m2!3d63.523103!4d9.9489544!16s%2Fg%2F11mw02brc2?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Heggli Gård</a>';
  when.innerHTML = "Wanneer: 9. mei"
  welcome.innerHTML = "Jij bent om 14:00 uur welkom we serveren en warme maaltijd rond 14:30 uur en taart wat later op de naamidag.";
  respondBy.innerHTML = "Laat mij alstublieft vóór 1 mei weten of jij kunt komen."
  img1.alt = "Viss gevangen door Noah!";
  img2.alt = "Noah met suikerspin!";
  img3.alt = "Noah bovenop een houten toren!";
  img4.alt = "Noah tijdens een wandeling, op en steen!";
  messageText.textContent = "Jij kunt me hier je antwoord sturen. (Niet vergeten je naam er bij te zetten.):";
  hope.innerHTML = "Ik hoop dat jij kan koomen!"
} else if (language.startsWith("no")) {
  continue;
} else {
  document.title = "Invitation for Noah's Confirmation Party";
  title.innerHTML = "Invitation for Noah's Confirmation Party";
  where.innerHTML = 'Where: <a href="https://www.google.com/maps/place/Heggli+G%C3%A5rd/@63.5231054,9.9463848,17z/data=!3m1!4b1!4m6!3m5!1s0x4612c98755fe6073:0xebd9c3e204aa67c5!8m2!3d63.523103!4d9.9489544!16s%2Fg%2F11mw02brc2?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Heggli Gård</a>';
  when.innerHTML = "When: 9th of May"
  welcome.innerHTML = "You are welcome at 2 p.m. We will serve warm food at about 2:30 p.m., and cake a little later in the afternoon.";
  respondBy.innerHTML = "Please let me know if you can come by May 1st."
  img1.alt = "Fish caught by Noah!";
  img2.alt = "Noah with coton candy!";
  img3.alt = "Noah on top of a wooden tower!";
  img4.alt = "Noah on a hike on a rock!";
  messageText.textContent = "You can send me your answer here. (Don’t forget to add your name.):";
  hope.innerHTML = "I hope that you can come!"
}

