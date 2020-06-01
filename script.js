/*
d3.select();
d3.selectAll();

d3.select('h1').style('color', 'red')
    .attr('class', 'heading')
    .text('Update h1 tag');

d3.select('body').append('p').text('First Paragraph');
d3.select('body').append('p').text('Second Paragraph');
d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color', 'blue');
*/

var dataset = [1, 2, 3, 4, 5];

d3.select('body')
    .selectAll('p')
    .data(dataset)
    .enter()
    .append('p')
    //.text('D3 is awesome!!');
    .text(function(d) { return d; });