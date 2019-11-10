import { Component, OnInit } from '@angular/core';

// import { fa } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJava, faUbuntu, faPython, faJs, faAngular, faNodeJs } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sambaumohl-com';

  debateCases = [
    {
      title: "Public Forum Beedev Meme Casefile",
      time: "November-December 2018",
      resolution: "The United States federal government should impose price controls on the pharmaceutical industry.",
      caseUrl: "../assets/debate/beedev/beedev2.docx",
      checksumUrl: "../assets/debate/beedev/checksum.txt"
    },
    {
      title: "Lincoln-Douglas Casefile",
      time: "September-October 2019",
      resolution: "Universities ought not use standardized tests for undergraduate admissions decisions.",
      caseUrl: "../assets/debate/standardized/CollegeBoardOutfmymind.docx",
      checksumUrl: "../assets/debate/fossil-fuels/checksum.txt"
    },
    {
      title: "Lincoln-Douglas Casefile",
      time: "November-December 2019",
      resolution: "The United States ought to eliminate subsidies for fossil fuels.",
      caseUrl: "../assets/debate/fossil-fuels/CoalBad.docx",
      checksumUrl: "../assets/debate/standardized/checksum.txt"
    },
    {
      title: "Lincoln-Douglas Casefile",
      time: "March 2020",
      resolution: "Predictive Policing is injust.",
      caseUrl: "../assets/debate/ppolicing/policing.docx",
      checksumUrl: "../assets/debate/ppolicing/checksum.txt"
    }
  ]

  skills = [
    {
      icon: faHtml5,
      name: "HTML"
    },
    {
      icon: faCss3Alt,
      name: "CSS"
    },
    {
      icon: faJs,
      name: "Javascript"
    },
    {
      icon: faJava,
      name: "Java"
    },
    {
      icon: faPython,
      name: "Python"
    },
    {
      icon: faUbuntu,
      name: "Linux"
    },
    {
      icon: faAngular,
      name: "Angular"
    },
    {
      icon: faNodeJs,
      name: "Node.js"
    }
  ]

  resumeProjects = [
    {
      title: "MyMICDS.net",
      description: "An all-in-one platform for MICDS student life.",
      projectUrl: "https://mymicds.net",
      sourceUrl: "https://github.com/MyMICDS/"
    },
    {
      title: "Email-Saver",
      description: "A Python script that uses IMAP to download your emails and attachments with one command.",
      sourceUrl: "https://github.com/MeMeBigProgrammer/Email-Saver"
    }
  ]

}