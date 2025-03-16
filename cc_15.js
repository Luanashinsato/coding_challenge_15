// Task 1: Creating the Base Structure
document.addEventListener("DOMContentLoaded", () => {
    const riskDashboard = document.getElementById("riskDashboard"); // Selecting the riskDashboard container
    console.log("Risk Dashboard Loaded"); // Printing "Risk Dashboard Loaded" to the console
});

// Task 2: Adding Risk Items Dynamically
// Writing a function to create and add a new risk card to the dashboard 
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard"); // Assigning a class "riskCard"
    riskCard.innerHTML = `
            <p><strong>Risk:</strong> ${riskName}</p>
            <p><strong>Level:</strong> ${riskLevel}</p>
            <p><strong>Department:</strong> ${department}</p>
        `;
    
    // Task 3: Removing Risk Items
    // Creating a resolve button to remove the card 
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", (event) => {
        riskDashboard.removeChild(riskCard); // // Adding an event listener for the click event 
    });

    // Task 4: Categorizing Risks by Level
    // Modifying addRiskItem to apply different background colors based on risk level
    if (riskLevel === "High") {
        riskCard.style.backgroundColor = "#e07575"; // Red if high 
    } else if (riskLevel === "Medium") {
        riskCard.style.backgroundColor = "#f2e2a2"; // Yellow if medium 
    } else if (riskLevel === "Low") {
        riskCard.style.backgroundColor = "#b0e8a9"; // Green if low 
    }

    riskDashboard.appendChild(riskCard); // Appending the card to the riskDashboard
    riskCard.appendChild(resolveButton); // Appending the resolve button to the dashboard 
}

// Allowing users to input a new risk using the HTML form 
document.getElementById("riskForm").addEventListener("submit", (event) => {
    event.preventDefault();
    // Getting input values from the form
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
    addRiskItem(riskName, riskLevel, department); // Adding the new risk item to the dashboard
    document.getElementById("riskForm").reset(); // Reseting the form fields
});

// Task 5: Implementing Bulk Updates
// Adding a button to increase all risk levels
const increaseRiskButton = document.createElement("button");
increaseRiskButton.textContent = "Increase Risk Levels";
increaseRiskButton.addEventListener("click", (event) => {
    const riskCards = document.querySelectorAll(".riskCard"); // Selecting all risk cards
    riskCards.forEach((card) => {
        const levelElement = card.querySelector("p:nth-child(2)"); // Geting the level paragraph
        let currentLevel = levelElement.textContent.split(": ")[1]; // Extracting the risk level
        
        if (currentLevel === "Low") {
            levelElement.textContent = "Level: Medium"; // Changing from Low to Medium
            card.style.backgroundColor = "#f2e2a2";
        } else if (currentLevel === "Medium") {
            levelElement.textContent = "Level: High"; // Changing from Medium to High
            card.style.backgroundColor = "#e07575";
        } // High remains unchanged
    });
});

document.getElementById("riskDashboard").appendChild(increaseRiskButton); // Appending the button to the dashboard

// Test cases
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Employee Retention", "Low", "HR");