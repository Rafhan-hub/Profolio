document.addEventListener("DOMContentLoaded", function () {
    mapExperienceData();
});


function mapExperienceData() {

    let exp = [
        {
            "org": "Techease Solutions Pvt Ltd, Islamabad",
            "position": "Flutter Developer (Remote)",
            "duration": "Jan 2021 - Present",
            "technologies": [
                "Flutter",
                "Dart",
                "GitHub",
                "Firebase",
                "Google maps",
                "Push notifications",
                "Firebase auth",
                "Firebase messaging",
                "REST APIs",
                "Stripe - Payments",
                "Dart package"
            ],
            "details": [
                "Working with provider / getx state management",
                "Implementing MVVM / MVP architecture for the production-level application.",
                "Integrated payment gateways into flutter app with REST APIs",
                "Learned GitHub actions for CI / CD",
                "Implemented caching techniques for better UX",
                "Working on Google Maps integration, live markers, and enhancing user interaction features.",
                "Added features in huge code base with scalability in mind, along with other concepts of OOP and design pattern.",
                "Continuously optimizing the complex codebase and improving overall architecture.",
                "Managing local packages for custom components and ongoing API architecture maintenance.",
                "Currently handling keen operations for penetration testing",
                "Implemented caching techniques for better UX",
                "Consulted for better UI and UX for new design for both the mobile apps",
                "Keen discussion with stakeholders on how to improve the product overall"
            ]
        },
        {
            "org": "AppsKottage, Islamabad",
            "position": "Junior IOS Developer",
            "duration": "Mar 2020 - Jan 2021",
            "technologies": [
                "SwiftUI",
                "Firebase auth",
                "Firebase real-time",
                "REST APIs",
                "GitHub",
            ],
            "details": [
                "UI/UX",
                "Learned firebase real-time db",
                "Firebase authentication via phone number",
                "Social logins",
                "Push Notification",
                "MVC architecture based application",
                "Deployment on app store",
            ]
        }
    ];

    for (var i = 0; i < exp.length; i++) {
        var expCard = document.createElement("div");
        expCard.className = "exp-card";

        var expMetaDiv = document.createElement("div");
        expMetaDiv.className = "exp-meta";

        var orgName = document.createElement("h2");
        orgName.className = "heading2 exp-org";
        orgName.innerHTML = exp[i]["org"];

        var position = document.createElement("span");
        position.className = "label exp-position";
        position.innerHTML = exp[i]["position"];

        var session = document.createElement("p");
        session.className = "body2 exp-session";
        session.innerHTML = exp[i]["duration"];

        var technologiesHeading = document.createElement("span");
        technologiesHeading.className = "body2 exp-tech";
        technologiesHeading.innerHTML = "Technologies";

        var technologiesList = document.createElement("ul");
        technologiesList.className = "exp-tech-list";

        for (var k = 0; k < exp[i]["technologies"].length; k++) {
            var techName = document.createElement("li");
            techName.className = "body2 exp-tech-item";
            techName.innerHTML = exp[i]["technologies"][k];
            technologiesList.appendChild(techName);
        }
        expMetaDiv.appendChild(orgName);
        expMetaDiv.appendChild(position);
        expMetaDiv.appendChild(session);
        expMetaDiv.appendChild(technologiesHeading);
        expMetaDiv.appendChild(technologiesList);
        expCard.appendChild(expMetaDiv);

        var detailsList = document.createElement("ul");
        detailsList.className = "exp-detail";

        for (var k = 0; k < exp[i]["details"].length; k++) {
            var detail = document.createElement("li");
            detail.className = "body2 exp-detail-item";
            detail.innerHTML = exp[i]["details"][k];
            detailsList.appendChild(detail);
        }

        expCard.appendChild(detailsList);

        var experiences = document.getElementById("exp");
        experiences.appendChild(expCard);
    }
}