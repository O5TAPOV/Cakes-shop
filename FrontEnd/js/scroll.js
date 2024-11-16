function scrollToSection(sectionID)
{
    const section = document.getElementById(sectionID);

    if(section) section.scrollIntoView({behavior: 'smooth', block: 'start'});
    else console.error(`Element with OD "${sectionID} not found."`)
}