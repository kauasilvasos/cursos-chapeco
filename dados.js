/* --- dados.js --- */
const listaCursos = [
    // --- GESTÃO & ADMINISTRAÇÃO ---
    {
        titulo: "Auxiliar Administrativo",
        categoria: "gestao",
        badge: "Admin",
        imagem: "assets/CursoAuxiliarAdministrativo.jpg",
        itens: ["Escrita Fiscal e Contábil", "Departamento Pessoal", "Recursos Humanos", "Administração Financeira"],
        // Novos Dados para o Modal
        salario: "R$ 1.800 - R$ 2.500",
        modulos: ["Rotinas Administrativas (16h)", "Gestão de Documentos Digitais", "Excel para Administrativo", "Comunicação Empresarial", "Noções de Contabilidade"],
        oportunidades: ["Auxiliar de Escritório", "Assistente Adm.", "Recepcionista", "Apoio Logístico"]
    },
    {
        titulo: "Analista de Recursos Humanos",
        categoria: "gestao",
        badge: "RH",
        imagem: "assets/CursoAnalistaDeSistemasHumanos.png", 
        itens: ["Recrutamento e Seleção", "Legislação Trabalhista", "Liderança", "Departamento Pessoal"],
        salario: "R$ 3.200 - R$ 4.500",
        modulos: ["Psicologia Organizacional", "Cálculo de Folha de Pagamento", "Benefícios e Cargos", "Treinamento e Desenvolvimento", "eSocial na Prática"],
        oportunidades: ["Analista de RH", "Headhunter", "Consultor de RH", "Gestor de Pessoas"]
    },
    {
        titulo: "Analista Financeiro",
        categoria: "gestao",
        badge: "Finanças",
        imagem: "assets/CursoAnalistaFinanceiro.png",
        itens: ["Análise de Investimentos", "Fluxo de Caixa", "Controle de Custos", "Planejamento"],
        salario: "R$ 3.500 - R$ 5.000",
        modulos: ["Matemática Financeira", "Análise de Balanços", "Gestão de Tributos", "Controladoria", "Mercado de Capitais"],
        oportunidades: ["Analista Financeiro", "Tesoureiro", "Controller", "Consultor Financeiro"]
    },
    {
        titulo: "Secretariado Executivo",
        categoria: "gestao",
        badge: "Gestão",
        imagem: "assets/CursoSecretariadoExcecutivo.jpg",
        itens: ["Organizar Agendas", "Gestão de Documentos", "Redação Empresarial", "Suporte Executivo"],
        salario: "R$ 2.200 - R$ 3.800",
        modulos: ["Etiqueta Corporativa", "Gestão de Viagens e Eventos", "Ferramentas Digitais", "Inglês Instrumental", "Técnicas de Arquivamento"],
        oportunidades: ["Secretária Executiva", "Assistente Pessoal", "Recepcionista Bilíngue", "Assessor(a)"]
    },
    {
        titulo: "Operador de Caixa",
        categoria: "gestao",
        badge: "Financeiro",
        imagem: "assets/CursoOperadorDeCaixa.jpg",
        itens: ["Abertura e Fechamento", "Controle Financeiro", "Atendimento ao Cliente", "Sistemas de Frente de Caixa"],
        salario: "R$ 1.600 - R$ 2.000",
        modulos: ["Matemática Básica", "Identificação de Cédulas", "Prevenção de Perdas", "Sistemas PDV", "Excelência no Atendimento"],
        oportunidades: ["Caixa de Supermercado", "Caixa de Loja", "Atendente de Lotérica", "Frente de Caixa"]
    },
    {
        titulo: "Logística",
        categoria: "gestao",
        badge: "Operacional",
        imagem: "assets/CursoLogistica.jpg",
        itens: ["Gestão de Estoque", "Expedição", "Supply Chain", "Operação Logística"],
        salario: "R$ 2.000 - R$ 3.500",
        modulos: ["Compras e Estoque (16h)", "Armazenagem e Distribuição", "Custos Logísticos", "Transportes e Frotas", "Supply Chain Management"],
        oportunidades: ["Assistente de Logística", "Almoxarife", "Expedidor", "Analista de Suprimentos"]
    },
    {
        titulo: "Desenvolvimento Profissional",
        categoria: "gestao",
        badge: "Carreira",
        imagem: "assets/CursoDesenvolvimentoProficionalEPessoal.jpg",
        itens: ["Oratória", "Marketing Pessoal", "Inteligência Emocional", "Liderança"],
        salario: "Aumento de 20-30%",
        modulos: ["Comunicação Assertiva", "Gestão do Tempo", "Resolução de Conflitos", "Imagem Pessoal", "Networking"],
        oportunidades: ["Líder de Equipe", "Gerente", "Supervisor", "Empreendedor"]
    },
    
    // --- TECNOLOGIA & INOVAÇÃO ---
    {
        titulo: "Analista de TI e Sistemas",
        categoria: "tecnologia",
        badge: "Infra",
        imagem: "assets/CursoAnalistaDeTiESistemas.jpg",
        itens: ["Infraestrutura", "Suporte Técnico", "Redes", "SQL e Banco de Dados"],
        salario: "R$ 3.000 - R$ 4.500",
        modulos: ["Hardware e Montagem", "Redes de Computadores", "Sistemas Operacionais (Linux/Windows)", "Virtualização", "Segurança da Informação"],
        oportunidades: ["Suporte Técnico N1/N2", "Admin de Redes", "Analista de Infra", "Técnico de Campo"]
    },
    {
        titulo: "Programador Full Stack",
        categoria: "tecnologia",
        badge: "Dev",
        imagem: "assets/CursoProgramador.jpg",
        itens: ["Lógica de Programação", "C# e .NET", "Banco de Dados SQL", "Desenvolvimento Web"],
        salario: "R$ 3.500 - R$ 6.000",
        modulos: ["Algoritmos e Lógica", "HTML5, CSS3 e JS", "C# Avançado", "SQL Server", "Git e GitHub", "Projetos Reais"],
        oportunidades: ["Dev Júnior", "Dev Back-end", "Dev Front-end", "Freelancer"]
    },
    {
        titulo: "Desenvolvedor Mobile",
        categoria: "tecnologia",
        badge: "Mobile",
        imagem: "assets/CursoDesenvolvedorDeAplicativos.jpg",
        itens: ["Android e iOS", "UI/UX Design", "React Native / Ionic", "Publicação nas Lojas"],
        salario: "R$ 4.000 - R$ 7.000",
        modulos: ["Lógica Mobile", "Interface do Usuário", "Consumo de APIs", "Banco de Dados Local", "Deploy na Play Store"],
        oportunidades: ["Dev Mobile", "Dev Android", "Dev iOS", "Criador de Apps"]
    },
    {
        titulo: "Desenvolvedor de Games",
        categoria: "tecnologia",
        badge: "Jogos",
        imagem: "assets/CursoDesenvolvedorDeGames.jpg",
        itens: ["Unity / Unreal", "Modelagem 3D Básica", "Roteiro de Jogos", "C# para Games"],
        salario: "R$ 3.000 - R$ 5.500",
        modulos: ["Game Design Document", "Física de Jogos", "Animação de Personagens", "Inteligência Artificial em Games", "Level Design"],
        oportunidades: ["Game Dev", "Level Designer", "Tester de Jogos", "Indie Developer"]
    },
    {
        titulo: "Inteligência Artificial (IA)",
        categoria: "tecnologia",
        badge: "Inovação",
        imagem: "assets/CursoInteligenciaArtificial.jpg",
        itens: ["ChatGPT e Midjourney", "Automação", "Engenharia de Prompt", "IA para Negócios"],
        salario: "R$ 4.000 - R$ 8.000",
        modulos: ["Fundamentos de IA", "IA Generativa de Texto", "IA Generativa de Imagem", "Automação com Python e IA", "Ética na IA"],
        oportunidades: ["Especialista em IA", "Analista de Dados", "Automação", "Produtor de Conteúdo"]
    },
    {
        titulo: "Manutenção de Celulares",
        categoria: "tecnologia",
        badge: "Técnico",
        imagem: "assets/CursoManutençãoDeCelularesEEquipamentos.jpg",
        itens: ["Troca de Telas", "Reparo em Placas", "Software e Desbloqueio", "Solda BGA"],
        salario: "R$ 2.500 - R$ 5.000",
        modulos: ["Eletrônica Básica", "Desmontagem Segura", "Diagnóstico de Defeitos", "Microsoldagem", "Gestão de Assistência"],
        oportunidades: ["Técnico de Celular", "Dono de Assistência", "Técnico de Tablet", "Comprador de Peças"]
    },

    // --- INFORMÁTICA & DADOS ---
    {
        titulo: "Informática Essencial",
        categoria: "tecnologia",
        badge: "Básico",
        imagem: "assets/CursoInformatica.jpg",
        itens: ["Windows 11", "Pacote Office Básico", "Internet e Segurança", "Digitação"],
        salario: "Requisito Básico",
        modulos: ["Introdução ao PC", "Navegação Segura", "Word: Documentos", "Excel: Planilhas Simples", "E-mail Corporativo"],
        oportunidades: ["Auxiliar Adm.", "Recepção", "Qualquer cargo de escritório"]
    },
    {
        titulo: "Informática Kids",
        categoria: "tecnologia",
        badge: "Kids",
        imagem: "assets/CursoInformaticaParaCriancas.jpg",
        itens: ["Introdução à Tecnologia", "Segurança Online", "Ferramentas Escolares", "Lógica Básica"],
        salario: "Educativo",
        modulos: ["Computador Divertido", "Internet Segura", "Criando Slides", "Editor de Texto", "Jogos Educativos"],
        oportunidades: ["Desenvolvimento Cognitivo", "Apoio Escolar"]
    },
    {
        titulo: "Informática Sênior",
        categoria: "tecnologia",
        badge: "3ª Idade",
        imagem: "assets/CursoInformaticaParaTerceiraIdade.jpg",
        itens: ["Uso do Smartphone", "Redes Sociais", "Banco Online", "Chamadas de Vídeo"],
        salario: "Pessoal",
        modulos: ["Perdendo o Medo", "WhatsApp e Facebook", "Segurança Bancária", "Compras Online", "Youtube e Lazer"],
        oportunidades: ["Inclusão Digital", "Autonomia"]
    },
    {
        titulo: "Pacote Office Completo",
        categoria: "gestao",
        badge: "Essencial",
        imagem: "assets/CursoPactoesOffice.png",
        itens: ["Word Avançado", "Excel Intermediário", "PowerPoint", "Outlook"],
        salario: "R$ 1.800 - R$ 2.800",
        modulos: ["Formatação ABNT no Word", "Fórmulas Essenciais Excel", "Apresentações de Impacto", "Gestão de E-mails", "Integração Office"],
        oportunidades: ["Secretariado", "Assistente Adm.", "Estagiário", "Auxiliar de Escritório"]
    },
    {
        titulo: "Excel Avançado",
        categoria: "gestao",
        badge: "Dados",
        imagem: "assets/CursoExcelAvançado.png",
        itens: ["Tabelas Dinâmicas", "VBA e Macros", "Dashboards", "Fórmulas Complexas"],
        salario: "R$ 3.000 - R$ 4.500",
        modulos: ["Funções Lógicas (SE, E, OU)", "PROCV e PROCX", "Tabelas e Gráficos Dinâmicos", "Introdução ao VBA", "Tratamento de Dados"],
        oportunidades: ["Analista de Dados", "Analista Financeiro", "Planejamento", "Gestão"]
    },
    {
        titulo: "Power BI",
        categoria: "gestao",
        badge: "BI",
        imagem: "assets/CursoPowerBi.png",
        itens: ["Business Intelligence", "DAX", "Visualização de Dados", "ETL"],
        salario: "R$ 4.000 - R$ 6.500",
        modulos: ["Conexão com Fontes de Dados", "Power Query (ETL)", "Modelagem de Dados", "Linguagem DAX", "Storytelling com Dados"],
        oportunidades: ["Analista de BI", "Cientista de Dados Jr", "Analista de Negócios"]
    },
    {
        titulo: "Excel com Power BI",
        categoria: "gestao",
        badge: "Expert",
        imagem: "assets/CursoExcelComPowerBL.png",
        itens: ["Integração Excel-BI", "Análise Avançada", "Automação", "Relatórios"],
        salario: "R$ 4.500 - R$ 7.000",
        modulos: ["Excel como Database", "Migração para Power BI", "Relatórios Cruzados", "Automação de KPIs", "Dashboards Executivos"],
        oportunidades: ["Especialista em Reporting", "Consultor de Dados", "Gestor de Informação"]
    },

    // --- DESIGN & MARKETING ---
    {
        titulo: "Web Designer",
        categoria: "design",
        badge: "Web",
        imagem: "assets/CursoWebDesigner.jpg",
        itens: ["HTML e CSS", "WordPress", "Layouts Responsivos", "Figma Básico"],
        salario: "R$ 2.500 - R$ 4.000",
        modulos: ["Estrutura Web", "Estilização com CSS", "WordPress e Elementor", "Criação de Landing Pages", "Hospedagem e Domínio"],
        oportunidades: ["Web Designer", "Criador de Sites", "Freelancer", "Agência Digital"]
    },
    {
        titulo: "Designer Gráfico",
        categoria: "design",
        badge: "Criativo",
        imagem: "assets/CursoDesignGrafico.jpg",
        itens: ["Photoshop", "Illustrator", "CorelDraw", "Identidade Visual"],
        salario: "R$ 2.200 - R$ 3.500",
        modulos: ["Teoria das Cores", "Tratamento de Imagem", "Criação de Vetores", "Design para Social Media", "Fechamento de Arquivos"],
        oportunidades: ["Designer Gráfico", "Arte Finalista", "Social Media", "Diretor de Arte Jr"]
    },
    {
        titulo: "Marketing e Vendas",
        categoria: "marketing",
        badge: "Vendas",
        imagem: "assets/CursoMarketingEVendas.jpg",
        itens: ["Tráfego Pago", "Copywriting", "Funil de Vendas", "Redes Sociais"],
        salario: "R$ 2.500 + Comissões",
        modulos: ["Marketing Digital 360", "Gerenciador de Anúncios (Meta)", "Google Ads Básico", "Técnicas de Persuasão", "CRM e Vendas"],
        oportunidades: ["Gestor de Tráfego", "Social Media", "Vendedor", "Analista de Marketing"]
    },

    // --- SAÚDE ---
    {
        titulo: "Auxiliar Médico",
        categoria: "saude",
        badge: "Clínico",
        imagem: "assets/CursoAuxiliarMedico.jpg",
        itens: ["Atendimento Clínico", "Triagem", "Primeiros Socorros", "Ética Médica"],
        salario: "R$ 1.800 - R$ 2.600",
        modulos: ["Anatomia Básica", "Sinais Vitais", "Instrumentação Básica", "Humanização no Atendimento", "Normas da ANVISA"],
        oportunidades: ["Clínicas Médicas", "Hospitais", "Consultórios", "Laboratórios"]
    },
    {
        titulo: "Atendente de Farmácia",
        categoria: "saude",
        badge: "Farma",
        imagem: "assets/CursoAtendenteDeFarmacia.jpg",
        itens: ["Farmacologia", "Leitura de Receita", "Dispensação", "SNGPC"],
        salario: "R$ 1.600 - R$ 2.200",
        modulos: ["Classes Farmacológicas", "Medicamentos Controlados", "Cosméticos e Perfumaria", "Técnicas de Vendas", "Primeiros Socorros na Farmácia"],
        oportunidades: ["Balconista de Farmácia", "Auxiliar de Farmácia Hospitalar", "Drogarias"]
    },
    {
        titulo: "Recepcionista na Saúde",
        categoria: "saude",
        badge: "Saúde",
        imagem: "assets/CursoRecepcionistaDaSaúde.jpg",
        itens: ["Agendamento", "Convênios Médicos", "Prontuário Eletrônico", "TISS/TUSS"],
        salario: "R$ 1.500 - R$ 2.000",
        modulos: ["Faturamento Médico Básico", "Guias de Convênio", "Atendimento Telefônico", "Organização de Arquivos", "Sigilo Paciente"],
        oportunidades: ["Recepcionista Hospitalar", "Secretária de Clínica", "Atendente de Laboratório"]
    }
];