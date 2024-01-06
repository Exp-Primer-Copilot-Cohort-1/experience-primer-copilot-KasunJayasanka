function skillsMember() {
  var member = document.getElementById('member');
  var skills = document.getElementById('skills');
  var memberVal = member.value;
  if (memberVal == 'member') {
    skills.style.display = 'block';
  } else {
    skills.style.display = 'none';
  }
}