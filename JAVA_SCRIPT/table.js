const students = [
    {
        sn: 1,
        fname: "Kajol",
        lname: "Rajput",
        age: 27,
        status: "Active" 
    },
    {
        sn: 2,
        fname: "Kshitij",
        lname: "Bhare",
        age: 19,
        status: "Active" 
    },
    {
        sn: 3,
        fname: "Ujjwal",
        lname: "Mahajan",
        age: 19,
        status: "Active" 
    },
    {
        sn: 4,
        fname: "Vikas",
        lname: "Khoje",
        age: 21,
        status: "Active" 
    },
    {
        sn: 5,
        fname: "Om",
        lname: "Bhadange",
        age: 27,
        status: "Inactive" 
    },
]


let rows = students.map(student => {
    const tcolor = student.status === 'Inactive'? 'red' : 'green';
    return `<tr>
        <td>${student.sn}</td>
        <td>${student.fname}</td>
        <td>${student.lname}</td>
        <td>${student.age}</td>
        <td style="color: ${tcolor}; fount-weight: bold">${student.status}</td>
    </tr>`
}).join('');



document.getElementById('tdata').innerHTML = rows;