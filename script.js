const mallaCurricular = [
    { sem: "I", ramos: [
        { id: "bio_gen", nombre: "Biología y genética", req: [] },
        { id: "qui_org", nombre: "Química orgánica y general", req: [] },
        { id: "mat", nombre: "Matemáticas", req: [] },
        { id: "dis_prof", nombre: "Disciplina y profesión de enfermería", req: [] },
        { id: "sal_soc", nombre: "Salud y sociedad", req: [] },
        { id: "edu_enf", nombre: "Educación y enfermería", req: [] },
        { id: "cfg1", nombre: "CFG I", req: [] }
    ]},
    { sem: "II", ramos: [
        { id: "ana", nombre: "Anatomía", req: [] },
        { id: "bioq", nombre: "Bioquímica del metabolismo humano", req: ["qui_org"] },
        { id: "fisica", nombre: "Física", req: ["mat"] },
        { id: "histo", nombre: "Histología y embriología", req: [] },
        { id: "sal_amb", nombre: "Salud, medio ambiente y sustentabilidad", req: ["sal_soc"] },
        { id: "bases_cuid", nombre: "Bases del cuidado de enfermería", req: ["dis_prof"] },
        { id: "ing1", nombre: "Inglés I", req: [] }
    ]},
    { sem: "III", ramos: [
        { id: "fisio_gen", nombre: "Fisiología general", req: ["fisica", "bio_gen", "ana"] },
        { id: "farma1", nombre: "Farmacología I", req: [] },
        { id: "psico", nombre: "Psicología general y del desarrollo", req: [] },
        { id: "sal_pub1", nombre: "Salud pública y epidemiología I", req: ["sal_amb"] },
        { id: "edu_sal", nombre: "Educación para la salud", req: ["edu_enf"] },
        { id: "ing2", nombre: "Inglés II", req: ["ing1"] },
        { id: "gen_sal", nombre: "Enfermería, salud y género", req: ["sal_soc"] }
    ]},
    { sem: "IV", ramos: [
        { id: "fisio_sis", nombre: "Fisiología de sistemas", req: ["histo", "fisio_gen", "bioq"] },
        { id: "farma2", nombre: "Farmacología II", req: ["farma1"] },
        { id: "fisiopat", nombre: "Fisiopatología general", req: ["fisio_gen"] },
        { id: "micro", nombre: "Microbiología", req: ["bio_gen"] },
        { id: "sal_pub2", nombre: "Salud pública y epidemiología II", req: ["sal_pub1"] },
        { id: "cuid_apl", nombre: "Cuidados de enfermería aplicados", req: ["bases_cuid"] },
        { id: "ing3", nombre: "Inglés III", req: ["ing2"] }
    ]},
    { sem: "V", ramos: [
        { id: "adult1", nombre: "Enfermería de la adultez y vejez I", req: ["farma2", "cuid_apl"] },
        { id: "sal_ocu", nombre: "Enfermería en salud ocupacional", req: ["sal_pub2"] },
        { id: "etica", nombre: "Ética en salud", req: ["cuid_apl"] },
        { id: "invest_cuanti", nombre: "Investigación en salud y metodologías cuantitativas", req: ["sal_pub2"] },
        { id: "edu_inter1", nombre: "Educación interprofesional y práctica colaborativa I", req: [] }
    ]},
    { sem: "VI", ramos: [
        { id: "adult2", nombre: "Enfermería de la adultez y vejez II", req: ["adult1", "micro"] },
        { id: "emerg", nombre: "Enfermería en emergencias sanitarias y desastres", req: ["sal_pub2"] },
        { id: "ment1", nombre: "Enfermería en salud mental I", req: ["farma2", "edu_sal"] },
        { id: "invest_cuali", nombre: "Metodología en investigación cualitativas", req: ["etica", "sal_soc"] },
        { id: "gest1", nombre: "Gestión y liderazgo en salud I", req: ["cuid_apl"] },
        { id: "cfg2", nombre: "CFG II", req: [] }
    ]},
    { sem: "VII", ramos: [
        { id: "ninez1", nombre: "Enfermería de la niñez y adolescencia I", req: ["psico", "farma2", "cuid_apl"] },
        { id: "aps_comp", nombre: "Enfermería en cuidados complejos en APS", req: ["adult2", "ment1", "etica"] },
        { id: "ment2", nombre: "Enfermería en salud mental II", req: ["farma2", "cuid_apl"] },
        { id: "proy1", nombre: "Proyecto de investigación I", req: ["invest_cuali"] },
        { id: "gest2", nombre: "Gestión y liderazgo en salud II", req: ["gest1"] },
        { id: "cfg3", nombre: "CFG III", req: [] }
    ]},
    { sem: "VIII", ramos: [
        { id: "ninez2", nombre: "Enfermería de la niñez y adolescencia II", req: ["micro", "ninez1"] },
        { id: "criticos", nombre: "Enfermería en cuidados críticos y urgencias", req: ["ninez1", "adult2"] },
        { id: "final_vida", nombre: "Enfermería en cuidados al final de la vida", req: ["etica", "ninez1"] },
        { id: "proy2", nombre: "Proyecto de Investigación II", req: ["proy1"] },
        { id: "edu_inter2", nombre: "Educación interprofesional y práctica colaborativa II", req: ["edu_inter1"] }
    ]},
    { sem: "IX", ramos: [
        { id: "prac_aps", nombre: "Práctica profesional en atención primaria de salud", req: ["ninez2", "criticos", "final_vida", "proy2"] },
        { id: "electivo", nombre: "Formación profesional electiva", req: ["ninez2", "criticos", "final_vida", "proy2"] }
    ]},
    { sem: "X", ramos: [
        { id: "prac_hosp", nombre: "Práctica profesional en atención hospitalaria", req: ["ninez2", "criticos", "final_vida", "proy2"] },
        { id: "prac_urg", nombre: "Práctica profesional en unidades de urgencias", req: ["ninez2", "criticos", "final_vida", "proy2"] }
    ]}
];

let aprobados = JSON.parse(localStorage.getItem('ramosAprobados')) || [];

function renderMalla() {
    const container = document.getElementById('malla');
    container.innerHTML = '';

    mallaCurricular.forEach(semestre => {
        const semDiv = document.createElement('div');
        semDiv.className = 'semestre';
        semDiv.innerHTML = `<div class="semestre-titulo">Semestre ${semestre.sem}</div>`;

        semestre.ramos.forEach(ramo => {
            const ramoDiv = document.createElement('div');
            const estaAprobado = aprobados.includes(ramo.id);
            const requisitosCumplidos = ramo.req.every(r => aprobados.includes(r));
            
            ramoDiv.className = `ramo ${estaAprobado ? 'aprobado' : (requisitosCumplidos ? '' : 'bloqueado')}`;
            ramoDiv.id = ramo.id;
            ramoDiv.textContent = ramo.nombre;
            
            ramoDiv.onclick = () => {
                if (!requisitosCumplidos && !estaAprobado) {
                    alert(`Debes aprobar primero los pre-requisitos.`);
                    return;
                }
                toggleRamo(ramo.id);
            };
            semDiv.appendChild(ramoDiv);
        });
        container.appendChild(semDiv);
    });
}

function toggleRamo(id) {
    if (aprobados.includes(id)) {
        aprobados = aprobados.filter(item => item !== id);
    } else {
        aprobados.push(id);
    }
    localStorage.setItem('ramosAprobados', JSON.stringify(aprobados));
    renderMalla();
}

renderMalla();
