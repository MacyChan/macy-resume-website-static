anychart.onDocumentReady(function () {

  var data = [
    { "x": "Python", "value": 250, category: "Programming-Language" },
    { "x": "R", "value": 250, category: "Programming-Language" },
    { "x": "JAVA", "value": 200, category: "Programming-Language" },
    { "x": "C#", "value": 180, category: "Programming-Language" },
    { "x": "HTML", "value": 230, category: "Programming-Language" },
    { "x": "SQL", "value": 250, category: "Programming-Language" },
    { "x": "jQuery", "value": 180, category: "Programming-Language" },
    { "x": "AngularJS", "value": 180, category: "Programming-Language" },
    { "x": "Aspx", "value": 100, category: "Programming-Language" },
    { "x": "VisualBasic", "value": 100, category: "Programming-Language" },
    { "x": ".Net framework", "value": 100, category: "Programming-Language" },
    { "x": "Java Springboot", "value": 100, category: "Programming-Language" },
    { "x": "Final Cut Pro", "value": 100, category: "Programming-Language" },
    { "x": "English", "value": 200, category: "Speaking-Lanuage" },
    { "x": "Cantonese", "value": 120, category: "Speaking-Lanuage" },
    { "x": "Mandarin", "value": 150, category: "Speaking-Lanuage" },
    { "x": "Japanese", "value": 120, category: "Speaking-Lanuage" },
    { "x": "GreatCommunicator", "value": 100, category: "Soft-Skill" },
    { "x": "TeamPlayer", "value": 120, category: "Soft-Skill" },
    { "x": "ProjectManagement", "value": 150, category: "Soft-Skill" },
    { "x": "Self-initiative", "value": 150, category: "Soft-Skill" },
    { "x": "YearsOfExperience", "value": 100, category: "Soft-Skill" },
    { "x": "Agile", "value": 100, category: "Soft-Skill" },
    { "x": "FullStack", "value": 100, category: "Soft-Skill" },
  ];

  // create a tag cloud chart
  var chart = anychart.tagCloud(data);

  // set the chart title
  // chart.title('Macy\'s Word Cloud')
  // set array of angles, by which words will be placed
  chart.angles([0])
  // enable color range
  chart.colorRange(true);
  // set color range length
  chart.colorRange().length('80%');
  // set background color
  chart.background("343a40 0");

  // display chart
  chart.container("wordcloud2");
  chart.draw();


});

(function () {
  function ac_add_to_head(el) {
    var head = document.getElementsByTagName('head')[0];
    head.insertBefore(el, head.firstChild);
  }
  function ac_add_link(url) {
    var el = document.createElement('link');
    el.rel = 'stylesheet'; el.type = 'text/css'; el.media = 'all'; el.href = url;
    ac_add_to_head(el);
  }
  function ac_add_style(css) {
    var ac_style = document.createElement('style');
    if (ac_style.styleSheet) ac_style.styleSheet.cssText = css;
    else ac_style.appendChild(document.createTextNode(css));
    ac_add_to_head(ac_style);
  }

  //ac_add_style(document.getElementById("ac_style_skillset-wordmap").innerHTML);
  //ac_add_style(".anychart-embed-skillset-wordmap{width:600px;height:450px;}");



})();


