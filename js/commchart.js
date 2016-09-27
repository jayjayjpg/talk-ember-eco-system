 
var chart = c3.generate({
    bindto: '#chart',
    x: 'x',
    data: {
        url: '/data/stats.csv'
    }
});
