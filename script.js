var students = [
    {
        ra: 12345,
        nome: "Marcelo",
        nota: 10,
    },
    {
        ra: 67890,
        nome: "Alexandre",
        nota: 5,
    },
    {
        ra: 24680,
        nome: "Silvia",
        nota: 9,
    },
    {
        ra: 13579,
        nome: "Carlos",
        nota: 10,
    },
    {
        ra: 12121,
        nome: "Mario",
        nota: 4,
    },
]

function generateRow(st){
    return `<tr>
                <td>${st.ra}</td>
                <td>${st.nome}</td>
                <td>${st.nota}</td>
            <tr>`
}

window.onload = function(){
    // -------------MAP----------------
    var table = document.getElementById("table_body")
    // for(var i=0; i<students.length; i++){
    //     table.innerHTML+= generateRow(students[i])
    // }
    
    var newStudents = students.map( generateRow)
    console.log(newStudents)
    for(var i=0; i<newStudents.length; i++){
        table.innerHTML += newStudents[i]
    }
// ---------FILTER------------------

    var studentsFiltered = students.filter( filterStudent)
    var studentsFilteredMap = studentsFiltered.map( generateRow)
    function filterStudent(st){
        return st.nota <=6
    }
    
    var table2 = document.getElementById("table_body2")
    for(var i=0; i<studentsFilteredMap.length; i++){
        table2.innerHTML += studentsFilteredMap[i]
    }

    //-------SORT---------
    var studentsCopy = students.slice() // gera uma cópia do original
    studentsCopy.sort( compareStudentsByName) // ordena pelas notas
    function compareStudentsByName(a, b) {
        return a.nome.localeCompare(b.nome);
        }

    var studentsSortMap = studentsCopy.map (generateRow) //mapeamento de aluno para TR

    var table3 = document.getElementById("table_body3")// busca a tabela 3
    for(var i=0; i<studentsSortMap.length; i++){//preenche a tabela 3
        table3.innerHTML += studentsSortMap[i]
    }

    //--------REDUCE------
    var totalNota = students.reduce( (a ,b) => a + b.nota, 0)

    var totalNotaElement = document.getElementById("table_body4")
    totalNotaElement.textContent ="Total: " + totalNota

    //--------SPREAD-------
    var students2 = [
        ...students,
        {
            ra: 34343,
            nome: "Vitor",
            nota: 10,
        },
        {
            ra: 56565,
            nome: "José Pedro",
            nota: 9,
        },
        {
            ra: 78787,
            nome: "Guilherme",
            nota: 8,
        }
    ]

    var lista2 = students2.map (generateRow)

    var table5 = document.getElementById("table_body5")
    for(var i=0; i<lista2.length; i++){
        table5.innerHTML += lista2[i]
    }
}