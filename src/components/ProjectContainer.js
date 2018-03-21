import React, { Component } from "react";
import ProjectComponent from './ProjectComponent';
import mixitup from 'mixitup';


class ProjectContainer extends Component {

    render() {
    return (
        <div id="portfoliolist">
            <ul id="filters" className="clearfix">
                <li>
                <span className="filter active" data-filter=".ux, .javascript">All</span>
                </li>
                <li>
                <span className="filter" data-filter=".ux">UX</span>
                </li>
                <li>
                <span className="filter" data-filter=".javascript">JavaScript</span>
                </li>
            </ul>
            {this.projects.map(data => <ProjectComponent key={data.projectName} data={data}></ProjectComponent> )}
        </div>
    );
  }
  
  projects = [
    {
      projectName: 'taskLee',
      type: 'javascript',
      overview: 'Dishes is a collection of recipes from chefs who own or manage a culinary establishment (restaurant, food bus, etc). These recipes are provided for everyday cooks (apprentices) to gain access to culinary experts who may otherwise be inaccessible. The aim of this application is to develop a connection between chefs and their followers in hopes that it gives the chef’s business more exposure.',
      role: 'Developer',
      client: 'Personal Project',
      targetAudience: 'The audience is a simple split between persons who have their own establishments (Chefs) and everyone else (Apprentices). Apprentices are potential patrons of the chefs businesses if they enjoy the experience of their recipes.',
      targetAudienceImage: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a049995b450100001652600_Target%20Audience%402x.png',
      personas: [
        {
          name: 'Michelle The Vegan',
          image: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a049a157e1de90001c94f42_Apprentice%402x.png',
          age: 28,
          occupation: 'Nurse',
          education: 'Bachelors',
          origin: 'America',
          about: 'After working a typical shift, taking care of others, I enjoy taking care of myself by eating healthy and working out. I don’t eat meat and I feel like there aren’t many recipes that cater to my lifestyle. My boyfriend, a meat eater who is from an island in the Caribbean, proposed to me recently which has me spending more time learning my way around the kitchen, in hopes to create meals that we both can enjoy',
          scenario: 'text of scenario',
          flow: 'image of flow'
        }
      ],
      competitionText: 'After combing through the app stores reviewing and talking to others about their favorite recipe apps, the top 4 listed below stood out as the most reputable competitors. Analyzing features and technical aspects of these apps allowed me to identify some key areas for a successful recipe application.',
      competitionImage: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a049e3fb45010000165295b_Competitors%402x-p-1600.png',
      takeAwayFromCompetition: 'My content strategy started by asking the question, "how can I make a connection between the apprentices and the chefs, to not only desire to try their recipe, but to support their business?" After studying competitors and conducting interviews, the one consistent theme was ‘cultural interest’. Recognizing this, I knew culture had to have a significant presence to increase the emotional connection, along with beautiful photography and verbiage.',
      priorityFeatures: 'Of all the MVP features, chef validation and copyrighting recipes would be the most challenging, but most important. Chef validation would quickly allow for us to verify who the chef is and if he or she has an established business with a good reputation. This would help customers to feel reassured that the chef they are taking a recipe from are experienced professionals.',
      priorityGraph: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a049fb8a0a01700018b0411_Feature%20Prioritization%402x.png',
      informationArchitectureGraph: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a049e829ea3b90001b8250a_Information%20Architecture%402x.png',
      sketches: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a04a1d1d9441d0001bc4ef1_Sketches.png',
      wireframes: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a04a26fb450100001653013_Wireframes%402x-p-1600.png',
      iteration: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a04a32bd9441d0001bc50ef_Iteration%402x-p-1600.png',
      logo: 'image',
      takeaway: 'speech'
    },
    {
      projectName: 'test',
      type: 'ux',
      overview: 'Dishes is a collection of recipes from chefs who own or manage a culinary establishment (restaurant, food bus, etc). These recipes are provided for everyday cooks (apprentices) to gain access to culinary experts who may otherwise be inaccessible. The aim of this application is to develop a connection between chefs and their followers in hopes that it gives the chef’s business more exposure.',
      role: 'Developer',
      client: 'Personal Project',
      targetAudience: 'The audience is a simple split between persons who have their own establishments (Chefs) and everyone else (Apprentices). Apprentices are potential patrons of the chefs businesses if they enjoy the experience of their recipes.',
      targetAudienceImage: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a049995b450100001652600_Target%20Audience%402x.png',
      personas: [
        {
          name: 'Michelle The Vegan',
          image: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a049a157e1de90001c94f42_Apprentice%402x.png',
          age: 28,
          occupation: 'Nurse',
          education: 'Bachelors',
          origin: 'America',
          about: 'After working a typical shift, taking care of others, I enjoy taking care of myself by eating healthy and working out. I don’t eat meat and I feel like there aren’t many recipes that cater to my lifestyle. My boyfriend, a meat eater who is from an island in the Caribbean, proposed to me recently which has me spending more time learning my way around the kitchen, in hopes to create meals that we both can enjoy',
          scenario: 'text of scenario',
          flow: 'image of flow'
        }
      ],
      competitionText: 'After combing through the app stores reviewing and talking to others about their favorite recipe apps, the top 4 listed below stood out as the most reputable competitors. Analyzing features and technical aspects of these apps allowed me to identify some key areas for a successful recipe application.',
      competitionImage: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a049e3fb45010000165295b_Competitors%402x-p-1600.png',
      takeAwayFromCompetition: 'My content strategy started by asking the question, "how can I make a connection between the apprentices and the chefs, to not only desire to try their recipe, but to support their business?" After studying competitors and conducting interviews, the one consistent theme was ‘cultural interest’. Recognizing this, I knew culture had to have a significant presence to increase the emotional connection, along with beautiful photography and verbiage.',
      priorityFeatures: 'Of all the MVP features, chef validation and copyrighting recipes would be the most challenging, but most important. Chef validation would quickly allow for us to verify who the chef is and if he or she has an established business with a good reputation. This would help customers to feel reassured that the chef they are taking a recipe from are experienced professionals.',
      priorityGraph: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a049fb8a0a01700018b0411_Feature%20Prioritization%402x.png',
      informationArchitectureGraph: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a049e829ea3b90001b8250a_Information%20Architecture%402x.png',
      sketches: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a04a1d1d9441d0001bc4ef1_Sketches.png',
      wireframes: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a04a26fb450100001653013_Wireframes%402x-p-1600.png',
      iteration: 'https://daks2k3a4ib2z.cloudfront.net/59ffb51fcd54e70001a47dcd/5a04a32bd9441d0001bc50ef_Iteration%402x-p-1600.png',
      logo: 'image',
      takeaway: 'speech'
    }
  ];
}


export default ProjectContainer;



