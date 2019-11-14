import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
// import "bootstrap/dist/css/bootstrap.css";
import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";
import { Link } from 'react-router-dom';
import * as widgets from "surveyjs-widgets";
import "../style/survey.scss";
import { checkServerIdentity } from "tls";
import PathWay from "./PathWayCard";
import { BrowserRouter as Router, Route } from "react-router-dom";

Survey.StylesManager.applyTheme("default");

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class StudentsSurvey extends Component {
  json = {
    title: "Student Servey",
    showProgressBar: "top",
    pages: [
      {
        //page one
        elements: [
          {
            "type": "radiogroup",
            "name": "position",
            "title": "Choose your grade?...",
            "isRequired": true,
            "colCount": 0,
            "choices": ["1|9th grade", "2|10th grade", "3|11th grade", "4|12 grade", "5|High School Graduated"]
          },
          {
            type: "dropdown",
            "isRequired": true,
            renderAs: "select2",
            choicesByUrl: {
              url: "https://restcountries.eu/rest/v1/all"
            },
            name: "countries",
            title: "Please select the country you are from:"
          },
          {
            type: "rating",
            name: "satisfaction",
            isRequired: true,
            title: "How is your experience with school system?",
            mininumRateDescription: "Not Satisfied",
            maximumRateDescription: "Completely satisfied"
          },
          {
            name: "date",
            type: "datepicker",
            inputType: "date",
            title: "Date when school started:",
            dateFormat: "mm/dd/yy",
            isRequired: true
          }  
        ]
      },
      // page 2
      {
        questions: [
          {
            type: "matrix",
            name: "Quality",
            isRequired: true,
            title:
              "Please indicate if you agree or disagree with the following statements",
            columns: [
              {
                value: 1,
                text: "Strongly Disagree"
              },
              {
                value: 2,
                text: "Disagree"
              },
              {
                value: 3,
                text: "Neutral"
              },
              {
                value: 4,
                text: "Agree"
              },
              {
                value: 5,
                text: "Strongly Agree"
              }
            ],
            rows: [
              {
                isRequired: true,
                value: "easy",
                text: "Easy to talk to a teacher"
              },
              {
                isRequired: true,
                value: "Good communication",
                text: "Good communication with school board"
              },
              {
                isRequired: true,
                value: "Access to advisor",
                text: "Have access to school advisor"
              },
              {
                isRequired: true,
                value: "goals after graduation",
                text: "School talk about goals after graduation"
              }
            ]
          },
          {
            type: "rating",
            name: "recommend friends",
            isRequired: true,
            title:
              "How likely are you to recommend another student or friend to come to your school?",
            mininumRateDescription: "Will not recommend",
            maximumRateDescription: "I will recommend"
          },
          {
            type: "comment",
            isRequired: true,
            name: "suggestions",
            title: "What would you need to be successful?"
          }
        ]
      },
      {
            //page 3
        questions: [
          {
            type: "radiogroup",
            isRequired: true,
            name: "price to competitors",
            title: "What program would you be more interested",
            choices: [
              "Mentorship",
              "Coding",
              "Scholarship",
              "Not sure"
            ]
          },
          {
            type: "radiogroup",
            name: "After Graduation",
            isRequired: true,
            title: "What are you planning on doing after High School",
            choices: [
              "Go to college",
              "Find a good job",
              "Not sure"
            ]
          },
          {
            type: "text",
            isRequired: true,
            name: "email",
            title:
              'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
          }
        ]
      },
    ],
    completedHtml: `<div><h1>Thank you for completing the survey!</h1><br> <a href="/pathWay">Click for Resuls</a></div>`
  };

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! ");
  }
  
  render() {
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Counselor Survey</h2>
        </div>
        <div className="surveyjs">
          <Survey.Survey
            model={model}
            onComplete={() => console.log("Hello")}
            onValueChanged={this.onValueChanged}
          />
        </div>
      </div>
    );
  }
}

export default StudentsSurvey;

