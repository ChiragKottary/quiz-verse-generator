export interface QuizQuestion {
  id: string;
  question: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
}

export interface QuizSectionData {
  id: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
} 
export const htmlqqq: QuizSectionData ={
  "id": "html-questions",
  "title": "HTML Multiple Choice Questions",
  "description": "From basic to advanced, this set of HTML multiple-choice questions aims to test and refresh your HTML knowledge.",
  "questions": [
    {
      "id": "html-q1",
      "question": "A webpage displays a picture. What tag was used to display that picture?",
      "options": [
        { "id": "html-q1-a", "text": "`picture`" },
        { "id": "html-q1-b", "text": "`image`" },
        { "id": "html-q1-c", "text": "`img`" },
        { "id": "html-q1-d", "text": "`src`" }
      ],
      "correctOptionId": "html-q1-c",
      "explanation": "The `img` tag is used to embed an image in an HTML page."
    },
    {
      "id": "html-q2",
      "question": "<b> tag makes the enclosed text bold. What is other tag to make text bold?",
      "options": [
        { "id": "html-q2-a", "text": "`<strong>`" },
        { "id": "html-q2-b", "text": "`<dar>`" },
        { "id": "html-q2-c", "text": "`<black>`" }
      ],
      "correctOptionId": "html-q2-a",
      "explanation": "`<strong>` is used to indicate importance, which browsers typically render as bold."
    },
    {
      "id": "html-q3",
      "question": "Tags and text that are not directly displayed on the page are written in **\\_** section.",
      "options": [
        { "id": "html-q3-a", "text": "`<html>`" },
        { "id": "html-q3-b", "text": "`<head>`" },
        { "id": "html-q3-c", "text": "`<title>`" },
        { "id": "html-q3-d", "text": "`<body>`" }
      ],
      "correctOptionId": "html-q3-b",
      "explanation": "The `<head>` section contains metadata and links to external resources like CSS and JavaScript."
    },
    {
      "id": "html-q4",
      "question": "Which tag inserts a line horizontally on your web page?",
      "options": [
        { "id": "html-q4-a", "text": "`<hr>`" },
        { "id": "html-q4-b", "text": "`<line>`" },
        { "id": "html-q4-c", "text": "`<line direction='horizontal'>`" }
      ],
      "correctOptionId": "html-q4-a",
      "explanation": "`<hr>` is used to create a horizontal rule or line in a webpage."
    },
    {
      "id": "html-q5",
      "question": "What should be the first tag in any HTML document?",
      "options": [
        { "id": "html-q5-a", "text": "`<head>`" },
        { "id": "html-q5-b", "text": "`<title>`" },
        { "id": "html-q5-c", "text": "`<html>`" }
      ],
      "correctOptionId": "html-q5-c",
      "explanation": "The `<html>` tag is the root element of an HTML document."
    },
    {
      "id": "html-q6",
      "question": "Which tag allows you to add a row in a table?",
      "options": [
        { "id": "html-q6-a", "text": "`<td>` and `</td>`" },
        { "id": "html-q6-b", "text": "`<cr>` and `</cr>`" },
        { "id": "html-q6-c", "text": "`<th>` and `</th>`" },
        { "id": "html-q6-d", "text": "`<tr>` and `</tr>`" }
      ],
      "correctOptionId": "html-q6-d",
      "explanation": "`<tr>` is used to define a row in an HTML table."
    },
    {
      "id": "html-q7",
      "question": "How can you make a bulleted list?",
      "options": [
        { "id": "html-q7-a", "text": "`<list>`" },
        { "id": "html-q7-b", "text": "`<nl>`" },
        { "id": "html-q7-c", "text": "`<ul>`" },
        { "id": "html-q7-d", "text": "`<ol>`" }
      ],
      "correctOptionId": "html-q7-c",
      "explanation": "`<ul>` is used to create an unordered (bulleted) list."
    },
    {
      "id": "html-q8",
      "question": "How can you make a numbered list?",
      "options": [
        { "id": "html-q8-a", "text": "`<dl>`" },
        { "id": "html-q8-b", "text": "`<ol>`" },
        { "id": "html-q8-c", "text": "`<list>`" },
        { "id": "html-q8-d", "text": "`<ul>`" }
      ],
      "correctOptionId": "html-q8-b",
      "explanation": "`<ol>` is used to create an ordered (numbered) list."
    },
    {
      "id": "html-q9",
      "question": "How can you make an e-mail link?",
      "options": [
        { "id": "html-q9-a", "text": "`<a href='xxx@yyy'>`" },
        { "id": "html-q9-b", "text": "`<mail href='xxx@yyy'>`" },
        { "id": "html-q9-c", "text": "`<mail>xxx@yyy</mail>`" },
        { "id": "html-q9-d", "text": "`<a href='mailto:xxx@yyy'>`" }
      ],
      "correctOptionId": "html-q9-d",
      "explanation": "`mailto:` is used to create email links in HTML."
    },
    {
      "id": "html-q10",
      "question": "What is the correct HTML for making a hyperlink?",
      "options": [
        { "id": "html-q10-a", "text": "`<a href='http://mcqmate.com'>ICT Trends Quiz</a>`" },
        { "id": "html-q10-b", "text": "`<a name='http://mcqmate.com'>ICT Trends Quiz</a>`" },
        { "id": "html-q10-c", "text": "`<http://mcqmate.com</a>`" },
        { "id": "html-q10-d", "text": "`<a url='http://mcqmate.com'>ICT Trends Quiz</a>`" }
      ],
      "correctOptionId": "html-q10-a",
      "explanation": "`<a href>` is the correct way to create hyperlinks in HTML."
    },
    {
      "id": "html-q11",
      "question": "Choose the correct HTML tag to make a text italic",
      "options": [
        { "id": "html-q11-a", "text": "`<ii>`" },
        { "id": "html-q11-b", "text": "`<italics>`" },
        { "id": "html-q11-c", "text": "`<italic>`" },
        { "id": "html-q11-d", "text": "`<i>`" }
      ],
      "correctOptionId": "html-q11-d",
      "explanation": "`<i>` is used to make text italic in HTML."
    },
    {
      "id": "html-q12",
      "question": "Choose the correct HTML tag to make a text bold?",
      "options": [
        { "id": "html-q12-a", "text": "`<b>`" },
        { "id": "html-q12-b", "text": "`<bold>`" },
        { "id": "html-q12-c", "text": "`<bb>`" },
        { "id": "html-q12-d", "text": "`<bld>`" }
      ],
      "correctOptionId": "html-q12-a",
      "explanation": "`<b>` is used to make text bold in HTML."
    },
    {
      "id": "html-q13",
      "question": "What is the correct HTML for adding a background color?",
      "options": [
        { "id": "html-q13-a", "text": "`<body color='yellow'>`" },
        { "id": "html-q13-b", "text": "`<body bgcolor='yellow'>`" },
        { "id": "html-q13-c", "text": "`<background>yellow</background>`" },
        { "id": "html-q13-d", "text": "`<body background='yellow'>`" }
      ],
      "correctOptionId": "html-q13-b",
      "explanation": "`bgcolor` attribute is used to set background colors in older HTML versions."
    },
    {
      "id": "html-q14",
      "question": "Choose the correct HTML tag for the smallest size heading?",
      "options": [
        { "id": "html-q14-a", "text": "`<heading>`" },
        { "id": "html-q14-b", "text": "`<h6>`" },
        { "id": "html-q14-c", "text": "`<h1>`" },
        { "id": "html-q14-d", "text": "`<head>`" }
      ],
      "correctOptionId": "html-q14-b",
      "explanation": "`<h6>` represents the smallest heading in HTML."
    },
    {
      "id": "html-q15",
      "question": "What is the correct HTML tag for inserting a line break?",
      "options": [
        { "id": "html-q15-a", "text": "`<br>`" },
        { "id": "html-q15-b", "text": "`<lb>`" },
        { "id": "html-q15-c", "text": "`<break>`" },
        { "id": "html-q15-d", "text": "`<newline>`" }
      ],
      "correctOptionId": "html-q15-a",
      "explanation": "`<br>` is used for line breaks in HTML."
    },
    {
      "id": "html-q16",
      "question": "What does vlink attribute mean?",
      "options": [
        { "id": "html-q16-a", "text": "visited link" },
        { "id": "html-q16-b", "text": "virtual link" },
        { "id": "html-q16-c", "text": "very good link" },
        { "id": "html-q16-d", "text": "active link" }
      ],
      "correctOptionId": "html-q16-a",
      "explanation": "`vlink` specifies the color of visited links."
    },
    {
      "id": "html-q17",
      "question": "Which attribute is used to name an element uniquely?",
      "options": [
        { "id": "html-q17-a", "text": "class" },
        { "id": "html-q17-b", "text": "id" },
        { "id": "html-q17-c", "text": "dot" },
        { "id": "html-q17-d", "text": "all of above" }
      ],
      "correctOptionId": "html-q17-b",
      "explanation": "`id` uniquely identifies an HTML element."
    }
  ]
}