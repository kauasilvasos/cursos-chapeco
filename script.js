/* --- script.js --- */
const grid = document.getElementById('coursesGrid');

// Elementos do Modal
const modalOverlay = document.getElementById('courseModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const body = document.body;

// Elementos Internos do Modal para preencher
const modalTitle = document.getElementById('modalTitle');
const modalBadge = document.getElementById('modalBadge');
const modalSalary = document.getElementById('modalSalary');
const modalModules = document.getElementById('modalModules');
const modalOpportunities = document.getElementById('modalOpportunities');
const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

// --- 1. GERAÇÃO DOS CARDS ---
function criarCard(curso, index) {
    const delay = index * 50; 
    
    // Gera lista de itens visíveis no card (resumida)
    const listaItensHTML = curso.itens.slice(0, 4).map(item => 
        `<li><i class="ph-bold ph-check-circle check-icon"></i> ${item}</li>`
    ).join('');

    // Adiciona o index no botão para sabermos qual curso abrir
    return `
        <article class="course-card" data-category="${curso.categoria}" style="animation-delay: ${delay}ms">
            <div class="card-header">
                <span class="badge">${curso.badge}</span>
                <img src="${curso.imagem}" alt="${curso.titulo}" loading="lazy">
            </div>
            <div class="card-body">
                <h3 class="course-title">${curso.titulo}</h3>
                <p class="course-subtitle">Principais Tópicos:</p>
                <ul class="features-list">
                    ${listaItensHTML}
                </ul>
            </div>
            <div class="card-footer">
                <button onclick="abrirModal(${index})" class="btn btn-info" title="Ver Detalhes, Salário e Grade">
                    <i class="ph-bold ph-plus"></i>
                </button>
                <a href="https://wa.me/seunumero?text=Olá, tenho interesse no curso de ${curso.titulo}" class="btn btn-whatsapp" target="_blank">
                    <i class="ph-bold ph-whatsapp-logo"></i>
                    Matricule-se
                </a>
            </div>
        </article>
    `;
}

function carregarCursos(filtro = 'todos') {
    grid.innerHTML = '';
    
    let cursosFiltrados = listaCursos;
    if (filtro !== 'todos') {
        cursosFiltrados = listaCursos.filter(curso => curso.categoria === filtro);
    }

    // Precisamos manter o índice original do array principal para o modal funcionar corretamente
    // Então, ao invés de map direto no filtrado, vamos iterar sobre a lista principal e checar
    
    const html = listaCursos.map((curso, index) => {
        if (filtro === 'todos' || curso.categoria === filtro) {
            return criarCard(curso, index);
        }
        return '';
    }).join('');

    if (html.trim().length > 0) {
        grid.innerHTML = html;
    } else {
        grid.innerHTML = `<p style="text-align:center; width:100%; color:#64748b; font-size:1.2rem; padding: 2rem;">Nenhum curso encontrado.</p>`;
    }
}

// --- 2. LÓGICA DO MODAL ---

window.abrirModal = function(index) {
    const curso = listaCursos[index];

    // Preencher Título e Badge
    modalTitle.textContent = curso.titulo;
    modalBadge.textContent = curso.badge;
    modalSalary.textContent = curso.salario || "Consulte";

    // Preencher Módulos (Aulas)
    modalModules.innerHTML = (curso.modulos || []).map(mod => `
        <div class="module-item">
            <i class="ph-bold ph-book-open-text module-icon"></i>
            <span>${mod}</span>
        </div>
    `).join('');

    // Preencher Oportunidades (Grid)
    modalOpportunities.innerHTML = (curso.oportunidades || []).map(opp => `
        <div class="opp-card">
            <i class="ph-duotone ph-briefcase opp-icon"></i>
            <span>${opp}</span>
        </div>
    `).join('');

    // Atualizar Link do WhatsApp no Modal
    modalWhatsappBtn.href = `https://wa.me/seunumero?text=Olá, vi os detalhes do curso de ${curso.titulo} e quero me inscrever!`;

    // Mostrar Modal
    modalOverlay.classList.add('active');
    body.style.overflow = 'hidden'; // Trava o scroll da página
}

function fecharModal() {
    modalOverlay.classList.remove('active');
    body.style.overflow = 'auto'; // Destrava o scroll
}

// Event Listeners
closeModalBtn.addEventListener('click', fecharModal);

// Fechar ao clicar fora
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        fecharModal();
    }
});

// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        fecharModal();
    }
});

// --- 3. FILTROS ---
window.filterCourses = function(categoria) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        // Lógica visual simples para manter o botão ativo
        if (event && event.target === btn) {
            btn.classList.add('active');
        }
    });
    carregarCursos(categoria);
}

// Inicializa
document.addEventListener('DOMContentLoaded', () => {
    carregarCursos();
});