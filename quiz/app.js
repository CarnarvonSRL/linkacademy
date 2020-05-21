
var quiz = {
    title: 'My quiz',
    questions: [
      {
        text: "Inside which HTML element do we put the JavaScript?",
        responses: [
           { text: "<js>" },
           { text: "<script>", correct: true },
           { text: "<javascript>" },
           { text: "<scripting>" }
        ]
      }, {
        text: "The external JavaScript file must contain the <script> tag.",
        responses: [
           { text: "True" },
           { text: "False", correct: true },
        ]
      } , {
        text: "Where is the correct place to insert a JavaScript?",
        responses: [
           { text: "The <body> section  " },
           { text: "Both the <head> section and the <body> section are correct  ", correct: true },
           { text: "The <head> section" },
        ]
      } ,{
        text: "How do you create a function in JavaScript?",
        responses: [
           { text: "function = myFunction()" },
           { text: "function:myFunction()"},
           { text: "function myFunction()", correct: true },
        ]
      } ,{
        text: "How to write an IF statement in JavaScript?",
        responses: [
           { text: "if (i == 5)", correct: true },
           { text: "if i = 5 then"},
           { text: "if i = 5", },
        ]
      } ,{
        text: "How to insert a comment that has more than one line?",
        responses: [
           { text: "<!--This comment has more than one line-->" },
           { text: "//This comment has more than one line//"},
           { text: "/*This comment has more than one line*/", correct: true },
        ]
      } ,{
        text: "How does a WHILE loop start?",
        responses: [
           { text: "while i = 1 to 10" },
           { text: "while (i <= 10; i++)"},
           { text: "while (i <= 10)", correct: true },
        ]
      },{
        text: "JavaScript is the same as Java.",
        responses: [
           { text: "True"},
           { text: "False", correct: true },
        ]
      },{
        text: "How can you add a comment in a JavaScript?",
        responses: [
           { text: "//This is a comment", correct: true },
           { text: "'This is a comment"},
           { text: "<!--This is a comment-->"},
        ]
      },{
        text: "Is JavaScript case-sensitive?",
        responses: [
           { text: "No" },
           { text: "Yes", correct: true },
        ]
      }
    ]
  };
        
  new Vue({
    el: '#app',
    data: {
      quiz: quiz,

      questionIndex: 0,

      userResponses: Array(quiz.questions.length).fill(false)
    },
    methods: {
      next: function() {
        this.questionIndex++;
      },
      prev: function() {
        this.questionIndex--;
      },
      score: function() {
        return this.userResponses.filter(function(val) { return val }).length;
      }
    }
  });