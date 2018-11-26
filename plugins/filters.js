import Vue from 'vue'

Vue.filter('formatDate',  function(date) {
  const D = new Date(date)
  const y = D.getFullYear()
  const m = D.getMonth()
  const d = D.getDate()
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  return `${months[m]} ${d}, ${y}`
});