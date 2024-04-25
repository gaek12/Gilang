document.getElementById('member-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    var member = {
        name: name,
        email: email
    };

    var members = JSON.parse(localStorage.getItem('members')) || [];
    members.push(member);
    localStorage.setItem('members', JSON.stringify(members));
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
});
