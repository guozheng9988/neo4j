$(function(){
  $.get('http://192.168.17.136:8088/graph', function(result) {//接口
    var style = [
      { selector: 'node[label = "actor"]',  css: {'background-color': '#6FB1FC', 'content': 'data(title)','color':"#0b2aef","font-size":"16px"}},
      { selector: 'node[label = "Movie"]',  css: {'background-color': '#F5A45D', 'content': 'data(title)','color':"#ef0b42","font-size":"16px"}},
      { selector: 'edge', css: {'content': 'data(relationship)', 'target-arrow-shape': 'triangle','color':"#f1c607","font-size":"12px"}} 
    ];

    var cy = cytoscape({
      container: document.getElementById('cy'),
      style: style,
      layout: { name: 'cose', fit: false },      
      elements: result.elements
    });
  }, 'json');  
});

