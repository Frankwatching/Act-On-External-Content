//agenda
contentIndex.appendChild( agendaOverlay );
contentIndex.appendChild( agendaAcademyContainer );

//headlines
contentIndex.appendChild( headlinesOverlay );
contentIndex.appendChild( headlinesContainer );
headlinesContainer.appendChild( headlineTable );
headlineTable.appendChild( headlineTbody );
headlineTbody.appendChild( headlineTr1 );
headlineTbody.appendChild( headlineTr2 );
headlineTbody.appendChild( headlineTr3 );
headlineTbody.appendChild( headlineTr4 );
headlineTbody.appendChild( headlineTr5 );
headlineTbody.appendChild( headlineTr6 );
//headlineTbody.appendChild( headlineTr7 );
headlineTr1.appendChild( headlines1Td1 );
headlineTr1.appendChild( headlines1Td2 );
headlineTr1.appendChild( headlines1Td3 );
headlineTr2.appendChild( headlines2Td1 );
headlineTr2.appendChild( headlines2Td2 );
headlineTr2.appendChild( headlines2Td3 );
headlineTr3.appendChild( headlines3Td1 );
headlineTr3.appendChild( headlines3Td2 );
headlineTr3.appendChild( headlines3Td3 );
headlineTr4.appendChild( headlines4Td1 );
headlineTr4.appendChild( headlines4Td2 );
headlineTr4.appendChild( headlines4Td3 );
headlineTr5.appendChild( headlines5Td1 );
headlineTr5.appendChild( headlines5Td2 );
headlineTr5.appendChild( headlines5Td3 );
headlineTr6.appendChild( headlines6Td1 );
headlineTr6.appendChild( headlines6Td2 );
headlineTr6.appendChild( headlines6Td3 );
// headlineTr7.appendChild( headlines7Td1 );
// headlineTr7.appendChild( headlines7Td2 );
// headlineTr7.appendChild( headlines7Td3 );
headlines1Td2.appendChild( phl1 );
headlines2Td2.appendChild( phl2 );
headlines3Td2.appendChild( phl3 );
headlines4Td2.appendChild( phl4 );
headlines5Td2.appendChild( phl5 );
headlines6Td2.appendChild( phl6 );
//headlines7Td2.appendChild( phl7 );
phl1.appendChild( hl1 );
phl2.appendChild( hl2 );
headlines2Td3.appendChild( shl2b );
phl3.appendChild( hl3 );
phl4.appendChild( hl4 );
phl5.appendChild( hl5 );
headlines5Td3.appendChild( shl5b );
phl6.appendChild( hl6 );
//phl7.appendChild( hl7 );

//artikelGroot
contentIndex.appendChild( artikelenGrootContainer );
artikelenGrootContainer.appendChild(artikelenGrootContainerContent);

//productItemKlein
contentIndex.appendChild( productItemKleinContainer );
productItemKleinContainer.appendChild( productItemKleinContainerContent );

//Vacatures klein
contentIndex.appendChild(vacatureContainer);
vacatureContainer.appendChild(vacatureContainerContent);

//Themanieuwsbrieven
contentIndex.appendChild(themaContainer);
themaContainer.appendChild(themaContainerContent);

//downloadItemKlein
contentIndex.appendChild( downloadItemKleinContainer );
downloadItemKleinContainer.appendChild( downloadItemKleinContainerContent );


//Marketing
contentIndex.appendChild(marketingContainer);
marketingContainer.appendChild(marketingContainerContent);

//Business Channel
contentIndex.appendChild(channelContainer);
channelContainer.appendChild(channelContainerContent);

//Menu, let op volgorde
contentFeed.appendChild( choices );

// Create img element
const imgElement = document.createElement('img');
imgElement.src = 'https://www.frankwatching.com/app/uploads/2023/01/FW-logo.png'; // Add your image URL here
imgElement.style.width = 'auto'; 
imgElement.style.height = '30px'; 
imgElement.style.margin = '5px 5px'; 

// Create select element
const selectMenu = document.createElement('select');
selectMenu.id = 'selectMenu';


// Define options
const options = [
  { value: 'hideall', text: 'Selecteer content voor nieuwsbrief' },
  { value: 'headlinesContainer', text: 'Blog Headlines' },
  { value: 'artikelenGrootContainer', text: 'Blog' },
  { value: 'productItemKleinContainer', text: 'Academy' },
  { value: 'agendaAcademyContainer', text: 'Academy Agenda' },
  { value: 'downloadItemKleinContainer', text: 'Kennisbank' },
  { value: 'vacatureContainer', text: 'Jobs' },
  { value: 'themaContainer', text: 'Themanieuwsbrieven' },
  { value: 'marketingContainer', text: 'Marketing' },
  //{ value: 'channelContainer', text: 'BC' },
    // Add other options as needed
];

// Add options to select element
options.forEach(option => {
  const optionElement = document.createElement('option');
  optionElement.value = option.value;
  optionElement.textContent = option.text;
  selectMenu.appendChild(optionElement);

});
choices.appendChild(imgElement);



function handleSelectChange(containerId) {
    // Hide all containers and overlays
    headlinesContainer.style.display = "none";
    headlinesOverlay.style.display = "none";
    artikelenGrootContainer.style.display = "none";
    productItemKleinContainer.style.display = "none";
    agendaOverlay.style.display = "none";
    agendaAcademyContainer.style.display = "none";
    downloadItemKleinContainer.style.display = "none";
    vacatureContainer.style.display = "none";
    marketingContainer.style.display = "none";
    themaContainer.style.display = "none";
    channelContainer.style.display = "none";
    switchListForm.style.display = "none";


    // Array of container IDs where you want to apply the extra style
    const containerIdsArray = [
     // "channelContainer", 
      "artikelenGrootContainer", 
      "productItemKleinContainer",
      "agendaAcademyContainer", 
      "channelContainer",
      "downloadItemKleinContainer",
      "vacatureContainer", 
      "marketingContainer", 
      "themaContainer", 
    //  "productItemHeadlineContainer"
    ];

    // Show the selected container
    const selectedContainer = document.getElementById(containerId);
    if (selectedContainer) {
      selectedContainer.style.display = "block";

       // Check if the selectedContainer ID is in the containerIdsArray
      if (containerIdsArray.includes(containerId)) {
        // Apply the additional style
        switchListForm.style.display = "block";
      }

    } 
    
    if (selectedContainer == 'hideall') {
        contentIndex.style.display = "block";
    } 

    // Show the selected overlay if it exists
    const overlayId = containerId + 'Overlay';
    const selectedOverlay = document.getElementById(overlayId);
    if (selectedOverlay) {
      selectedOverlay.style.display = "block";
    }
  
    // Reset the class names for all buttons
    // ... (the same class name resetting logic as before)
  }

  
// Event listener for select change
selectMenu.addEventListener('change', function(event) {
    const selectedOption = event.target.value;
    if (selectedOption !== 'default') {
      handleSelectChange(selectedOption);
    }
  });

contentIndex.appendChild(selectMenu);
choices.appendChild( selectMenu );


//switchListFormDiv.appendChild(selectMenu);
//switchListFormDiv.appendChild( selectMenu );
