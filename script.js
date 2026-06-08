/* === [CAPÍTULO] BANCO DE DADOS DE PROCESSOS === */

/* --- [Seção] Descrições dos Artefatos --- */
const ARTIFACT_DESC = {
  "Memorando de Abertura": "Documento formal que comunica o início oficial dos trabalhos de auditoria.",
  "Entendimento Preliminar do Objeto": "Análise exploratória para levantamento de dados, normativos e processos organizacionais básicos.",
  "Primeira Aplicação de Testes": "Execução do primeiro ciclo de avaliação técnica e testes de controle e conformidade.",
  "Primeiro Relatório de Auditoria": "Relato formal das constatações, riscos e recomendações colhidas no primeiro ciclo.",
  "Segunda Aplicação de Testes": "Execução do segundo ciclo de exames substantivos e procedimentos de validação programados.",
  "Segundo Relatório de Auditoria": "Relato sistematizado das situações apuradas e evolução dos riscos no segundo ciclo.",
  "Terceira Aplicação de Testes": "Fase de testes complementares e validações finais sobre os pontos remanescentes.",
  "Terceiro Relatório de Auditoria": "Consolidação técnica final abrangendo os diagnósticos e conclusões dos ciclos de auditoria.",
  "Relatório Executivo": "Documento sumarizado com conclusões estratégicas direcionado à Alta Administração.",
  "Plano de Trabalho": "Guia operacional definindo escopo, prazos, equipes de trabalho e distribuição de responsabilidades.",
  "Ata de Reunião": "Registro formal que documenta o que foi discutido e acordado entre as partes.",
  "Mapeamento do Processo": "Representação estruturada das atividades, gargalos e interações no fluxo de trabalho auditado.",
  "Matriz de Riscos": "Ferramenta técnica para identificar e avaliar a probabilidade e o impacto de eventos adversos.",
  "Matriz de Controle": "Mapeamento dos mecanismos existentes para atenuar ou tratar os riscos de controle identificados.",
  "Matriz Testes de Controle": "Metodologia programada para testar a operacionalidade e eficácia dos controles internos.",
  "Programa de Auditoria": "Passo a passo técnico detalhado listando os procedimentos que a equipe executará em campo.",
  "Aplicação de Testes": "Execução técnica do Programa de Auditoria gerando registros e papéis de trabalho substantivos.",
  "Quadro de Achados": "Documento de classificação de inconformidades apontando a condição encontrada vs. o critério legal.",
  "Resposta ao Quadro de Achados": "Pronunciamento contendo a manifestação, justificativas ou defesa formal do gestor responsável.",
  "Relatório de Auditoria": "Documento final abrangente e analítico que formaliza todos os achados, análises e as conclusões.",
  "Sumário Executivo": "Documento conciso de nível estratégico contendo recomendações e painel de melhorias para a gestão.",
  "Plano de Ação": "Pacto corretivo detalhando tarefas, responsáveis e datas limites para sanar os achados.",
  "Definição de Materialidade": "Documento contendo o parâmetro e o limite financeiro crítico de relevância que guiará os exames.",
  "Estratégia Geral de Auditoria": "Planejamento que define a abordagem global, objetivos operacionais e a extensão dos trabalhos.",
  "Entendimento da Entidade/Ambiente": "Estudo e mapeamento preliminar do contexto financeiro e administrativo da unidade examinada.",
  "Entendimento Específicos das Contas": "Análise aprofundada dos sistemas contábil-financeiros e das contas patrimoniais prioritárias.",
  "Avaliação do Controle Interno": "Relatório que analisa o grau de segurança e integridade das práticas de controle interno da entidade.",
  "Requisições": "Solicitações técnicas formais para coleta de documentos, sistemas e relatórios complementares.",
  "Relatório de Comunicação de Distorções Relevantes": "Comunicação urgente à gestão informando distorções materiais ou erros graves de saldos na contabilidade.",
  "Revisão da Estratégia Geral de Auditoria": "Ajuste e refinamento estratégico das prioridades de análise pós-fechamento do exercício contábil.",
  "Distorções de Saldos Iniciais": "Relatório que analisa erros ou inconsistências de transição de saldos financeiros entre exercícios.",
  "Entrevistas": "Registros técnicos de oitivas e investigações com os envolvidos nos processos examinados.",
  "Representação Formal": "Notificação oficial enviada a instâncias superiores em caso de desvios, indícios de dano ao erário ou ilegalidade severa.",
  "Certificado de Auditoria": "Certificação formal emitindo opinião sobre a regularidade ou irregularidade das contas da unidade.",
  "Relatório Longo": "Relatório técnico que documenta detalhadamente as auditorias nas demonstrações financeiras anuais já encerradas.",
  "Envio do Relatório Longo e Certificado via Conecta TCU": "Transmissão eletrônica formal de toda a prestação de contas à corte de controle externo (TCU).",
  "Abertura pelo CNJ": "Comunicação oficial e termos de instauração da ação coordenada de controle de iniciativa do Conselho Nacional de Justiça.",
  "Relatório Final": "Relatório analítico consolidando o resultado dos trabalhos realizados no âmbito da Auditoria Coordenada.",
  "Envio das respostas ao CNJ": "Formalização do envio do posicionamento, relatórios e achados consolidados do Tribunal ao CNJ.",
  "Constituição do GTA": "Documento de designação e formalização do Grupo de Trabalho de Auditoria Integrada.",
  "Publicação da Portaria": "Instalação legal e publicação de portaria oficial de autorização dos trabalhos de auditoria.",
  "Relatório de Visita aos Regionais": "Relato técnico com observações colhidas nas auditorias e visitas executadas nos Tribunais Regionais.",
  "Ofício de abertura": "Notificação oficial direcionada aos Tribunais participantes informando a instalação dos exames.",
  "Reunião de abertura e cronograma": "Ata e documento acordado detalhando a data dos trabalhos, recursos necessários e etapas pactuadas.",
  "Recebimento dos relatórios": "Fase de acolhimento e validação de relatórios parciais entregues pelas subequipes ou regionais.",
  "Relatório Consolidado": "Relatório geral unificado sumarizando as conclusões de todas as frentes da Auditoria Integrada.",
  "Análise preliminar do Objeto": "Estudo prévio dos normativos e relatórios para embasamento inicial da atividade de consultoria técnica.",
  "Coleta e Análise de Dados": "Execução técnica de entrevistas, pesquisas e cruzamento de bases de dados operacionais do Tribunal.",
  "Elaboração dos Entregáveis": "Produção técnica dos guias, pareceres ou fluxos de melhoria.",
  "Relatório de Consultoria": "Documento final que expõe as conclusões, diagnósticos científicos e soluções da equipe de consultores.",
  "Solicitação de Informações": "Ofício formal requerendo relatórios operacionais para início das ações de monitoramento.",
  "Avaliação das Manifestações da Auditada": "Estudo técnico das justificativas e comprovações de cumprimento das recomendações enviadas pela unidade gestora.",
  "Relatório de Monitoramento": "Relatório contendo a evolução e o status do cumprimento de cada uma das recomendações expedidas pelo Tribunal.",
  "Apuração dos Benefícios das Recomendações": "Mensuração qualitativa e financeira dos impactos reais gerados pelas melhorias implantadas no Tribunal."
};

/* --- [Seção] Estrutura Geral dos Processos de Auditoria --- */
const AUDIT_TYPES = {
  ordinaria: {
    title: "Auditoria Ordinária",
    phases: [
      {
        name: "Planejamento", icon: "fa-solid fa-compass-drafting", cls: "p0",
        steps: [
          {
            title: "Memorando de Abertura",
            desc: "Instalação formal do processo de auditoria ordinária.",
            fullDesc: "Sinaliza a ativação do fluxo operacional. A equipe técnica é designada e a minuta do Memorando de Abertura é encaminhada para aprovação, formalizando o início oficial dos trabalhos.",
            prazo: 1, artifact: "Memorando de Abertura"
          },
          {
            title: "Entendimento Preliminar do Objeto",
            desc: "Análise exploratória de normativos, dados e processos fundamentais.",
            fullDesc: "Coleta exaustiva de leis, instruções normativas, relatórios de gestões anteriores e dados operacionais da área para subsidiar o entendimento do escopo.",
            prazo: 6, artifact: "Entendimento Preliminar do Objeto"
          },
          {
            title: "Plano de Trabalho",
            desc: "Planejamento operacional contendo cronograma, recursos e distribuição de responsabilidades.",
            fullDesc: "A equipe desenvolve o roteiro macro da fiscalização, estipulando prazos detalhados e escopo geográfico/temporal. Passa por cadeia de aprovações da chefia até a SAU.",
            prazo: 4, artifact: "Plano de Trabalho"
          },
          {
            title: "Mapeamento do Processo",
            desc: "Identificação de fluxos de atividades e interações organizacionais da unidade.",
            fullDesc: "Modelagem das atividades correntes para localizar onde ocorrem as tomadas de decisões críticas, gargalos operacionais e fluxos de informações.",
            prazo: 8, artifact: "Mapeamento do Processo"
          },
          {
            title: "Matriz de Riscos",
            desc: "Avaliação técnica dos riscos envolvidos, probabilidade de ocorrência e impacto.",
            fullDesc: "Identificação sistemática dos riscos associados às etapas mapeadas, permitindo classificar e focar os testes nos pontos de maior vulnerabilidade.",
            prazo: 35, artifact: "Matriz de Riscos"
          },
          {
            title: "Matriz de Controle",
            desc: "Mapeamento dos mecanismos internos existentes de mitigação de riscos.",
            fullDesc: "Análise dos controles e travas preventivas que a unidade auditada possui para evitar a materialização dos riscos prioritários.",
            prazo: 35, artifact: "Matriz de Controle"
          },
          {
            title: "Matriz Testes de Controle",
            desc: "Planejamento metodológico dos testes para validar o funcionamento prático dos controles.",
            fullDesc: "Definição precisa do roteiro de testes que comprovará se os controles indicados pelos gestores funcionam na prática e de forma ininterrompida.",
            prazo: 12, artifact: "Matriz Testes de Controle"
          },
          {
            title: "Programa de Auditoria",
            desc: "Consolidação técnica final listando detalhadamente os exames aplicáveis.",
            fullDesc: "Roteiro técnico homologado pela SAU que serve como guia absoluto para que a equipe de campo execute as checagens e colete evidências com segurança jurídica.",
            prazo: 7, artifact: "Programa de Auditoria"
          }
        ]
      },
      {
        name: "Execução", icon: "fa-solid fa-gears", cls: "p1",
        steps: [
          {
            title: "Aplicação de Testes",
            desc: "Execução prática dos exames em campo coletando evidências.",
            fullDesc: "A equipe extrai amostras, realiza cálculos, cruza dados e confronta os registros da entidade com as normas operacionais.",
            prazo: 20, artifact: "Aplicação de Testes"
          },
          {
            title: "Quadro de Achados",
            desc: "Sistematização técnica das inconformidades e fragilidades normativas identificadas.",
            fullDesc: "Compilação preliminar das distorções de conformidade ou operacionais confrontando a Situação Encontrada (Condição) e o Critério Legal aplicável.",
            prazo: 20, artifact: "Quadro de Achados"
          },
          {
            title: "Resposta ao Quadro de Achados",
            desc: "Fase de contraditório onde o gestor auditado apresenta manifestações e provas.",
            fullDesc: "Envio formal das constatações para que o gestor possa elucidar fatos, justificar decisões tomadas ou comprovar ações saneadoras imediatas.",
            prazo: 15, artifact: "Resposta ao Quadro de Achados"
          }
        ]
      },
      {
        name: "Comunicação", icon: "fa-solid fa-file-contract", cls: "p2",
        steps: [
          {
            title: "Relatório de Auditoria",
            desc: "Emissão e publicação do diagnóstico final analítico e recomendações.",
            fullDesc: "Consolidação técnica que analisa as manifestações do gestor, expõe o diagnóstico completo e propõe recomendações de melhorias.",
            prazo: 15, artifact: "Relatório de Auditoria"
          },
          {
            title: "Sumário Executivo",
            desc: "Documento conciso focado na tomada de decisões pela Alta Administração.",
            fullDesc: "Resumo focado nas recomendações estruturais, benefícios financeiros estimados e impactos esperados para subsidiar a Presidência e Diretoria-Geral.",
            prazo: 2, artifact: "Sumário Executivo"
          }
        ]
      }
    ]
  },
  
  continua: {
    title: "Auditoria Contínua",
    phases: [
      {
        name: "Planejamento", icon: "fa-solid fa-compass-drafting", cls: "p0",
        steps: [
          {
            title: "Memorando de Abertura",
            desc: "Comunicação formal do início dos exames contínuos preventivos.",
            fullDesc: "Sinaliza a ativação do fluxo de auditoria sistêmica contínua para monitoramento preventivo de despesas ou atos administrativos.",
            prazo: 1, artifact: "Memorando de Abertura"
          },
          {
            title: "Entendimento Preliminar do Objeto",
            desc: "Estudo preliminar dos limites de conformidade operacional nos sistemas.",
            fullDesc: "Mapeamento das bases de dados, regras de validação nos sistemas e parâmetros regulatórios prioritários de auditoria contínua.",
            prazo: 20, artifact: "Entendimento Preliminar do Objeto"
          },
          {
            title: "Plano de Trabalho",
            desc: "Pactuação do plano de amostragem sistêmica e cruzamento de bases.",
            fullDesc: "Estruturação das rotinas automatizadas de cruzamento e prazos para as análises sistêmicas periódicas.",
            prazo: 4, artifact: "Plano de Trabalho"
          }
        ]
      },
      {
        name: "Execução", icon: "fa-solid fa-gears", cls: "p1",
        steps: [
          {
            title: "Primeira Aplicação de Testes",
            desc: "Primeiro ciclo de cruzamento de dados e verificação automatizada.",
            fullDesc: "Execução do primeiro lote de scripts e análises substantivas sobre as bases correntes do exercício.",
            prazo: 100, artifact: "Primeira Aplicação de Testes"
          },
          {
            title: "Primeiro Relatório de Auditoria",
            desc: "Consolidação das inconsistências encontradas no primeiro ciclo.",
            fullDesc: "Relatório técnico que formaliza as distorções preliminares identificadas no primeiro período avaliado.",
            prazo: 10, artifact: "Primeiro Relatório de Auditoria"
          },
          {
            title: "Segunda Aplicação de Testes",
            desc: "Segundo ciclo regular de auditoria contínua.",
            fullDesc: "Reexecução das rotinas de testes nas bases atualizadas para aferir se os desvios foram mitigados.",
            prazo: 100, artifact: "Segunda Aplicação de Testes"
          },
          {
            title: "Segundo Relatório de Auditoria",
            desc: "Consolidação do diagnóstico intermediário de evolução dos riscos.",
            fullDesc: "Relatório que analisa os resultados das rechecagens e evolução das anomalias apontadas anteriormente.",
            prazo: 10, artifact: "Segundo Relatório de Auditoria"
          },
          {
            title: "Terceira Aplicação de Testes",
            desc: "Terceiro ciclo anual de checagem sistêmica e validação.",
            fullDesc: "Último lote de rotinas preventivas de conformidade antes da consolidação do encerramento do exercício.",
            prazo: 100, artifact: "Terceira Aplicação de Testes"
          }
        ]
      },
      {
        name: "Comunicação", icon: "fa-solid fa-file-contract", cls: "p2",
        steps: [
          {
            title: "Terceiro Relatório de Auditoria",
            desc: "Relato final dos cruzamentos e evolução do comportamento de gastos.",
            fullDesc: "Consolida os achados e o status final das ocorrências tratadas e monitoradas ao longo de todo o ano.",
            prazo: 10, artifact: "Terceiro Relatório de Auditoria"
          },
          {
            title: "Relatório Executivo",
            desc: "Consolidação anual estratégica de conformidade contínua.",
            fullDesc: "Apresenta painéis consolidados, pontos de vulnerabilidade sistêmica sanados e recomendações de controle estruturantes.",
            prazo: 10, artifact: "Relatório Executivo"
          }
        ]
      }
    ]
  },

  coordenada: {
    title: "Auditoria Coordenada",
    phases: [
      {
        name: "Planejamento", icon: "fa-solid fa-compass-drafting", cls: "p0",
        steps: [
          {
            title: "Abertura pelo CNJ",
            desc: "Adesão formal e termo de instauração emitido pelo CNJ.",
            fullDesc: "Abertura do processo nacional de fiscalização coordenada promovida pelo CNJ envolvendo órgãos do Judiciário.",
            prazo: 2, artifact: "Abertura pelo CNJ"
          },
          {
            title: "Plano de Trabalho",
            desc: "Alinhamento operacional das frentes internas de auditoria.",
            fullDesc: "Definição do plano técnico detalhado para execução das frentes temáticas estipuladas no âmbito nacional do CNJ.",
            prazo: 5, artifact: "Plano de Trabalho"
          },
          {
            title: "Matriz de Riscos",
            desc: "Mapeamento dos fatores de risco para a auditoria nacional.",
            fullDesc: "Estruturação dos vetores de riscos operacionais e normativos conforme padrão estipulado pela coordenação nacional.",
            prazo: 15, artifact: "Matriz de Riscos"
          },
          {
            title: "Programa de Auditoria",
            desc: "Consolidação técnica das rotinas e checklists homologados.",
            fullDesc: "Elaboração dos scripts e questionários consolidados que orientarão os exames coordenados das regionais.",
            prazo: 5, artifact: "Programa de Auditoria"
          }
        ]
      },
      {
        name: "Execução", icon: "fa-solid fa-gears", cls: "p1",
        steps: [
          {
            title: "Aplicação de Testes",
            desc: "Trabalho de campo executando os exames padronizados.",
            fullDesc: "Análises técnicas detalhadas e conformidades em bases do Tribunal para atendimento direto dos checklists nacionais.",
            prazo: 30, artifact: "Aplicação de Testes"
          },
          {
            title: "Quadro de Achados",
            desc: "Identificação preliminar de inconformidades institucionais locais.",
            fullDesc: "Consolidação dos achados para apreciação e direito de manifestação preliminar do gestor.",
            prazo: 6, artifact: "Quadro de Achados"
          },
          {
            title: "Resposta ao Quadro de Achados",
            desc: "Manifestação e defesas justificadas enviadas pela unidade auditada.",
            fullDesc: "Acolhimento da defesa local do gestor visando validar a exatidão das constatações antes do relatório final.",
            prazo: 10, artifact: "Resposta ao Quadro de Achados"
          }
        ]
      },
      {
        name: "Comunicação", icon: "fa-solid fa-file-contract", cls: "p2",
        steps: [
          {
            title: "Relatório Final",
            desc: "Relato local contendo o diagnóstico pós-manifestações do auditado.",
            fullDesc: "Documento oficial do TSE reportando os achados e recomendações no âmbito do processo coordenado nacional.",
            prazo: 15, artifact: "Relatório Final"
          },
          {
            title: "Envio das respostas ao CNJ",
            desc: "Remessa e protocolo formal do relatório do TSE ao CNJ.",
            fullDesc: "Alimentação do sistema centralizado do CNJ com o resultado oficial das auditorias da corte.",
            prazo: 2, artifact: "Envio das respostas ao CNJ"
          }
        ]
      }
    ]
  },

  integrada: {
    title: "Auditoria Integrada",
    phases: [
      {
        name: "Planejamento", icon: "fa-solid fa-compass-drafting", cls: "p0",
        steps: [
          {
            title: "Constituição do GTA",
            desc: "Criação formal do Grupo de Trabalho de Auditoria Integrada.",
            fullDesc: "Designação oficial de servidores e equipe multidisciplinar de diferentes setores para compor o grupo operacional coordenador.",
            prazo: 15, artifact: "Constituição do GTA"
          },
          {
            title: "Publicação da Portaria",
            desc: "Emissão de portaria oficial e homologação de escopo pelo Diretor-Geral.",
            fullDesc: "Ato oficial e público instaurando as atividades e garantindo prerrogativas de acesso técnico à equipe de auditoria integrada.",
            prazo: 2, artifact: "Publicação da Portaria"
          },
          {
            title: "Relatório de Visita aos Regionais",
            desc: "Documentação preliminar das visitas exploratórias aos TREs.",
            fullDesc: "Compilação de boas práticas, gargalos regulamentares e mapeamento estrutural das realidades dos regionais envolvidos.",
            prazo: 5, artifact: "Relatório de Visita aos Regionais"
          },
          {
            title: "Ofício de abertura",
            desc: "Abertura formal enviada a todas as sedes regionais envolvidas.",
            fullDesc: "Instalação formal que requisita instalações e designa pontos de contatos de suporte técnico nos TREs.",
            prazo: 2, artifact: "Ofício de abertura"
          },
          {
            title: "Reunião de abertura e cronograma",
            desc: "Acordo de datas, alocação logística e recursos técnicos necessários.",
            fullDesc: "Documentação acordando prazos de exames específicos em cada uma das localidades e TREs participantes.",
            prazo: 2, artifact: "Reunião de abertura e cronograma"
          },
          {
            title: "Plano de Trabalho",
            desc: "Planejamento geral de amostragem regional e metodologias.",
            fullDesc: "Guia operacional que alinha as diferentes frentes do GTA para uniformidade de tratamento técnico nos TREs.",
            prazo: 5, artifact: "Plano de Trabalho"
          },
          {
            title: "Matriz de Riscos",
            desc: "Consolidação geral de riscos operacionais das frentes regionais.",
            fullDesc: "Categorização estruturada de riscos sistêmicos e processuais de TI, licitações ou pessoal.",
            prazo: 15, artifact: "Matriz de Riscos"
          },
          {
            title: "Matriz de Controle",
            desc: "Análise geral de controles sistêmicos e travas patrimoniais existentes.",
            fullDesc: "Consolidação de quais são os controles vigentes locais e se existem regras uniformes nos regionais.",
            prazo: 10, artifact: "Matriz de Controle"
          },
          {
            title: "Matriz Testes de Controle",
            desc: "Alinhamento dos testes padronizados de controle local.",
            fullDesc: "Roteiro padronizado que visa obter amostras homogêneas para validar as fragilidades nos regionais.",
            prazo: 5, artifact: "Matriz Testes de Controle"
          },
          {
            title: "Programa de Auditoria",
            desc: "Homologação do programa geral consolidado pela coordenação.",
            fullDesc: "Aprovação técnica formal do checklist consolidado que guiará todos os auditores do GTA em campo.",
            prazo: 5, artifact: "Programa de Auditoria"
          }
        ]
      },
      {
        name: "Execução", icon: "fa-solid fa-gears", cls: "p1",
        steps: [
          {
            title: "Aplicação de Testes",
            desc: "Execução simultânea de auditorias nas bases de dados dos regionais.",
            fullDesc: "Aplicação dos checklists integrados nos regionais, confrontando dados estaduais com normativos federais.",
            prazo: 30, artifact: "Aplicação de Testes"
          },
          {
            title: "Quadro de Achados",
            desc: "Consolidação regional estruturada de falhas identificadas.",
            fullDesc: "Consolida os achados sistêmicos comuns encontrados nas diversas regionais para resposta conjunta.",
            prazo: 5, artifact: "Quadro de Achados"
          },
          {
            title: "Resposta ao Quadro de Achados",
            desc: "Consolidação de manifestações enviadas pelas diretorias dos TREs.",
            fullDesc: "Fase de defesa das áreas gestoras locais fornecendo subsídios antes da relatoria final.",
            prazo: 5, artifact: "Resposta ao Quadro de Achados"
          },
          {
            title: "Recebimento dos relatórios",
            desc: "Fase de consolidação técnica de relatórios parciais.",
            fullDesc: "Sistematização de relatórios parciais das regionais em uma única matriz analítica unificada.",
            prazo: 15, artifact: "Recebimento dos relatórios"
          }
        ]
      },
      {
        name: "Comunicação", icon: "fa-solid fa-file-contract", cls: "p2",
        steps: [
          {
            title: "Relatório Consolidado",
            desc: "Narra o diagnóstico geral sistêmico da Auditoria Integrada.",
            fullDesc: "Produto unificado indicando as falhas sistêmicas no âmbito da Justiça Eleitoral e propondo padronizações nacionais.",
            prazo: 30, artifact: "Relatório Consolidado"
          },
          {
            title: "Sumário Executivo",
            desc: "Consolidação simplificada com propostas estruturais de atos normativos.",
            fullDesc: "Resumo focado em decisões gerenciais nacionais de TI, orçamentárias ou de pessoal para a Presidência.",
            prazo: 5, artifact: "Sumário Executivo"
          }
        ]
      }
    ]
  },

  pre_encerramento: {
    title: "Auditoria de Contas Pré-Encerramento",
    phases: [
      {
        name: "Planejamento", icon: "fa-solid fa-compass-drafting", cls: "p0",
        steps: [
          {
            title: "Memorando de Abertura",
            desc: "Instalação formal e designação de equipe de auditoria contábil.",
            fullDesc: "Comunicação formal marcando o início dos procedimentos preventivos de auditoria de fechamento patrimonial.",
            prazo: 1, artifact: "Memorando de Abertura"
          },
          {
            title: "Plano de Trabalho",
            desc: "Cronograma de exames focados nas contas patrimoniais do trimestre final.",
            fullDesc: "Roteiro operacional da equipe de campo de contas visando cobrir as contas de maior volatilidade antes do encerramento.",
            prazo: 7, artifact: "Plano de Trabalho"
          },
          {
            title: "Definição de Materialidade",
            desc: "Limites estatísticos de relevância financeira calculados sobre os recursos.",
            fullDesc: "Parâmetro matemático definindo o limite financeiro de desvio de saldo tolerável, que norteará os testes de contas.",
            prazo: 7, artifact: "Definição de Materialidade"
          },
          {
            title: "Estratégia Geral de Auditoria",
            desc: "Planejamento das frentes prioritárias e contas sob risco de fechamento.",
            fullDesc: "Roteiro geral estipulando exames substantivos focados em contas de almoxarifado, restos a pagar e adiantamentos.",
            prazo: 7, artifact: "Estratégia Geral de Auditoria"
          },
          {
            title: "Entendimento da Entidade/Ambiente",
            desc: "Mapeamento das regras de despesa e políticas contábeis vigentes.",
            fullDesc: "Análise das normas financeiras internas e políticas específicas adotadas pela unidade no encerramento.",
            prazo: 7, artifact: "Entendimento da Entidade/Ambiente"
          },
          {
            title: "Entendimento Específicos das Contas",
            desc: "Mapeamento de despesas, conciliações e controles patrimoniais correntes.",
            fullDesc: "Análise minuciosa de contas de depósitos, saldos de contratos de terceirização e sistemas de almoxarifado.",
            prazo: 7, artifact: "Entendimento Específicos das Contas"
          },
          {
            title: "Avaliação do Controle Interno",
            desc: "Auditoria na integridade dos sistemas financeiros e lançamentos.",
            fullDesc: "Mapeamento das vulnerabilidades e das rotinas internas de fechamento do setor financeiro.",
            prazo: 7, artifact: "Avaliação do Controle Interno"
          },
          {
            title: "Programa de Auditoria",
            desc: "Consolidação técnica final listando os procedimentos substantivos.",
            fullDesc: "Homologação do roteiro definitivo de exames contábeis visando evitar erros de restos a pagar e adiantamentos.",
            prazo: 15, artifact: "Programa de Auditoria"
          }
        ]
      },
      {
        name: "Execução", icon: "fa-solid fa-gears", cls: "p1",
        steps: [
          {
            title: "Aplicação de Testes",
            desc: "Execução prática de reconciliações bancárias e conferências de adiantamentos.",
            fullDesc: "Checagem de exatidão de saldos contratuais, testes de restos a pagar inscritos de forma irregular e almoxarifado.",
            prazo: 35, artifact: "Aplicação de Testes"
          },
          {
            title: "Requisições",
            desc: "Emissão de pedidos formais de documentos e balancetes parciais.",
            fullDesc: "Coleção de evidências diretas do setor de contabilidade para fundamentação dos desvios de saldo mapeados.",
            prazo: 10, artifact: "Requisições"
          },
          {
            title: "Entrevistas",
            desc: "Auditorias com os analistas contábeis para esclarecer lançamentos.",
            fullDesc: "Investigação técnica oral documentada visando compreender as causas e inconsistências de lançamentos de fechamento.",
            prazo: 2, artifact: "Entrevistas"
          },
          {
            title: "Relatório de Comunicação de Distorções Relevantes",
            desc: "Notificação urgente ao gestor financeiro para imediato ajuste contábil.",
            fullDesc: "Relatório enviado visando que a área contábil ajuste os lançamentos antes que os balanços anuais fechem.",
            prazo: 15, artifact: "Relatório de Comunicação de Distorções Relevantes"
          }
        ]
      }
    ]
  },

  pos_encerramento: {
    title: "Auditoria de Contas Pós-Encerramento",
    phases: [
      {
        name: "Planejamento", icon: "fa-solid fa-compass-drafting", cls: "p0",
        steps: [
          {
            title: "Plano de Trabalho",
            desc: "Planejamento dos exames anuais finais sobre as Demonstrações Contábeis.",
            fullDesc: "Definição do cronograma operacional para auditoria analítica dos balanços encerrados da corte.",
            prazo: 3, artifact: "Plano de Trabalho"
          },
          {
            title: "Definição de Materialidade",
            desc: "Cálculo estatístico final de materialidade sobre os balanços emitidos.",
            fullDesc: "Estipulação do limite matemático exato de erros de saldo para opinião de auditoria.",
            prazo: 3, artifact: "Definição de Materialidade"
          },
          {
            title: "Revisão da Estratégia Geral de Auditoria",
            desc: "Refinamento das contas contábeis de alto risco pós-fechamento no Siafi.",
            fullDesc: "Alinhamento estratégico final das contas de ativo, passivo e variações patrimoniais que necessitam de amostragem.",
            prazo: 3, artifact: "Revisão da Estratégia Geral de Auditoria"
          },
          {
            title: "Entendimento Específico das Contas",
            desc: "Análise minuciosa de saldos patrimoniais encerrados.",
            fullDesc: "Mapeamento das contas e lançamentos finais que foram efetuados para regularização de fechamento.",
            prazo: 3, artifact: "Entendimento Específico das Contas"
          },
          {
            title: "Matriz de Riscos",
            desc: "Mapeamento de riscos de distorção de saldos relevantes nas demonstrações.",
            fullDesc: "Vetorização de fragilidades que possam ensejar ressalvas no Certificado de Auditoria final das contas.",
            prazo: 3, artifact: "Matriz de Riscos"
          },
          {
            title: "Matriz de Controle",
            desc: "Análise sobre as travas e revisões exercidas pela contabilidade.",
            fullDesc: "Mapeia as práticas de conciliação final do fechamento patrimonial para subsidiar as análises substantivas.",
            prazo: 3, artifact: "Matriz de Controle"
          },
          {
            title: "Avaliação do Controle Interno",
            desc: "Auditoria analítica de integridade de sistemas financeiros.",
            fullDesc: "Consolida as deficiências de controle identificadas que afetaram diretamente o Siafi e os saldos patrimoniais.",
            prazo: 3, artifact: "Avaliação do Controle Interno"
          },
          {
            title: "Programa de Auditoria",
            desc: "Homologação do checklist de exames substantivos e testes anuais.",
            fullDesc: "Selo técnico da SAU validando o programa completo de auditoria das demonstrações financeiras consolidadas.",
            prazo: 3, artifact: "Programa de Auditoria"
          }
        ]
      },
      {
        name: "Execução", icon: "fa-solid fa-gears", cls: "p1",
        steps: [
          {
            title: "Distorções de Saldos Iniciais",
            desc: "Estudo analítico dos saldos de transição patrimonial.",
            fullDesc: "Checagem de consistência para garantir que os saldos de encerramento do ano anterior batem com a abertura deste exercício.",
            prazo: 3, artifact: "Distorções de Saldos Iniciais"
          },
          {
            title: "Aplicação de Testes",
            desc: "Execução de testes substantivos, validação de provisões e inventários.",
            fullDesc: "Análises técnicas detalhadas e profundas sobre balanços de estoque, provisões matemáticas, passivos judiciais e contratos.",
            prazo: 15, artifact: "Aplicação de Testes"
          },
          {
            title: "Requisições",
            desc: "Ofícios técnicos para fornecimento de balancetes finais detalhados.",
            fullDesc: "Requisição de documentos comprobatórios das conciliações anuais finais enviadas pela contabilidade local.",
            prazo: 5, artifact: "Requisições"
          },
          {
            title: "Entrevistas",
            desc: "Oitivas técnicas junto aos gestores de contabilidade do órgão.",
            fullDesc: "Questionamento direto para elucidação de lançamentos atípicos ocorridos no fechamento dos balanços.",
            prazo: 1, artifact: "Entrevistas"
          },
          {
            title: "Relatório de Comunicação de Distorções Relevantes",
            desc: "Formalização dos desvios patrimoniais identificados que não foram saneados.",
            fullDesc: "Envio formal das distorções mapeadas e não tratadas pela área contábil durante os exames anuais.",
            prazo: 10, artifact: "Relatório de Comunicação de Distorções Relevantes"
          },
          {
            title: "Representação Formal",
            desc: "Emissão de representação legal e comunicados de irregularidade, se necessário.",
            fullDesc: "Emissão de relatórios em caso de danos ao erário mapeados, fraudes materiais de saldo ou ilegalidades não saneadas.",
            prazo: 10, artifact: "Representação Formal"
          }
        ]
      },
      {
        name: "Relatório", icon: "fa-solid fa-file-contract", cls: "p2",
        steps: [
          {
            title: "Certificado de Auditoria",
            desc: "Emissão da opinião técnica conclusiva sobre as contas.",
            fullDesc: "Atestado oficial emitindo opinião técnica de regularidade plena, regularidade com ressalva ou irregularidade das contas.",
            prazo: 5, artifact: "Certificado de Auditoria"
          },
          {
            title: "Relatório Longo",
            desc: "Relato analítico e detalhado consolidado.",
            fullDesc: "Documento analítico que subsidia a prestação de contas anual obrigatória consolidada do órgão.",
            prazo: 15, artifact: "Relatório Longo"
          },
          {
            title: "Envio do Relatório Longo e Certificado via Conecta TCU",
            desc: "Transmissão formal eletrônica do resultado ao TCU.",
            fullDesc: "Protocolo formal e público das contas anuais e parecer técnico da SAU no sistema centralizado do TCU.",
            prazo: 1, artifact: "Envio do Relatório Longo e Certificado via Conecta TCU"
          }
        ]
      }
    ]
  },

  consultoria: {
    title: "Consultoria",
    phases: [
      {
        name: "Planejamento", icon: "fa-solid fa-compass-drafting", cls: "p0",
        steps: [
          {
            title: "Memorando de Abertura",
            desc: "Instalação formal da consultoria técnica.",
            fullDesc: "Ato formal instaurando a consultoria técnica para resolução de problema específico ou diagnóstico especializado solicitado pela gestão.",
            prazo: 1, artifact: "Memorando de Abertura"
          },
          {
            title: "Análise preliminar do Objeto",
            desc: "Estudo científico de leis e melhores práticas sobre a matéria.",
            fullDesc: "Levantamento acadêmico preliminar e de literatura administrativa sobre a matéria objeto da assessoria técnica.",
            prazo: 30, artifact: "Análise preliminar do Objeto"
          },
          {
            title: "Plano de Trabalho",
            desc: "Cronograma operacional e definição de produtos entregáveis.",
            fullDesc: "Estruturação das datas de reuniões de alinhamento, escopo técnico de análise e definição dos produtos funcionais acordados na consultoria.",
            prazo: 45, artifact: "Plano de Trabalho"
          }
        ]
      },
      {
        name: "Execução", icon: "fa-solid fa-gears", cls: "p1",
        steps: [
          {
            title: "Coleta e Análise de Dados",
            desc: "Pesquisas, cruzamentos e diagnósticos da unidade gestora.",
            fullDesc: "Processamento analítico de dados coletados das unidades demandantes visando embasamento científico das soluções sugeridas.",
            prazo: 50, artifact: "Coleta e Análise de Dados"
          },
          {
            title: "Elaboração dos Entregáveis",
            desc: "Produção de manuais, fluxogramas ou modelos propostos.",
            fullDesc: "Redação dos manuais, cartilhas ou modelos de processos recomendados para sanar as fragilidades administrativas mapeadas na unidade.",
            prazo: 40, artifact: "Elaboração dos Entregáveis"
          }
        ]
      },
      {
        name: "Comunicação", icon: "fa-solid fa-file-contract", cls: "p2",
        steps: [
          {
            title: "Relatório de Consultoria",
            desc: "Relato técnico com parecer científico final.",
            fullDesc: "Compilação de estudos que consolida a análise técnica, diagnósticos apurados e as soluções técnicas de mudança recomendadas.",
            prazo: 10, artifact: "Relatório de Consultoria"
          },
          {
            title: "Sumário Executivo",
            desc: "Apresentação focada de alto nível para a Direção-Geral.",
            fullDesc: "Apresentação executiva simplificada com conclusões e propostas estruturais de mudança organizacional enviada à Diretoria-Geral.",
            prazo: 4, artifact: "Sumário Executivo"
          }
        ]
      }
    ]
  },

  monitoramento_1: {
    title: "Monitoramento 1º Ciclo",
    phases: [
      {
        name: "Acompanhamento de Recomendações", icon: "fa-solid fa-compass-drafting", cls: "p0",
        steps: [
          {
            title: "Solicitação de Informações",
            desc: "Notificação oficial requerendo status das recomendações pendentes.",
            fullDesc: "Início formal do monitoramento local requisitando evidências físicas de cumprimento dos achados e determinações.",
            prazo: 15, artifact: "Solicitação de Informações"
          },
          {
            title: "Avaliação das Manifestações da Auditada",
            desc: "Estudo técnico das comprovações enviadas pelo setor.",
            fullDesc: "Análise técnica detalhada sobre as evidências, normativos internos e notas enviadas pela unidade para sanar as distorções.",
            prazo: 20, artifact: "Avaliação das Manifestações da Auditada"
          },
          {
            title: "Relatório de Monitoramento",
            desc: "Consolidação técnica do percentual de cumprimento.",
            fullDesc: "Relatório oficial que formaliza o status (cumprida, em cumprimento ou não cumprida) das recomendações emitas anteriormente.",
            prazo: 30, artifact: "Relatório de Monitoramento"
          }
        ]
      }
    ]
  },

  monitoramento_2: {
    title: "Monitoramento 2º Ciclo",
    phases: [
      {
        name: "Acompanhamento de Recomendações", icon: "fa-solid fa-compass-drafting", cls: "p0",
        steps: [
          {
            title: "Solicitação de Informações",
            desc: "Segunda cobrança formal de recomendações pendentes.",
            fullDesc: "Ofício de reiteração cobrando comprovação documental e status de cumprimento de pendências.",
            prazo: 15, artifact: "Solicitação de Informações"
          },
          {
            title: "Avaliação das Manifestações da Auditada",
            desc: "Exame das provas e justificativas adicionais apresentadas.",
            fullDesc: "Análise rigorosa do cumprimento de metas e sanamento de vulnerabilidades estruturais mapeadas na unidade.",
            prazo: 20, artifact: "Avaliação das Manifestações da Auditada"
          },
          {
            title: "Relatório de Monitoramento",
            desc: "Relato técnico com o status consolidado do segundo período.",
            fullDesc: "Consolidação do andamento geral das pendências e novas regularizações do segundo período avaliado.",
            prazo: 30, artifact: "Relatório de Monitoramento"
          },
          {
            title: "Sumário Executivo",
            desc: "Consolidação do grau de cumprimento global do órgão.",
            fullDesc: "Painel de nível estratégico reportando os benefícios e o nível de aderência da gestão.",
            prazo: 5, artifact: "Sumário Executivo"
          },
          {
            title: "Apuração dos Benefícios das Recomendações",
            desc: "Mensuração analítica de economias e melhorias operacionais geradas.",
            fullDesc: "Relatório de inteligência avaliando os ganhos qualitativos, econômicos e preventivos colhidos pelo Tribunal.",
            prazo: 5, artifact: "Apuração dos Benefícios das Recomendações"
          }
        ]
      }
    ]
  }
};

/* === [CAPÍTULO] ESTADO GLOBAL DA APLICAÇÃO === */

let currentProcessKey = 'ordinaria';
let currentPhaseIndex = 0; // Controlado pelo setAuditProcess de forma dinâmica
let dark = false;
let prazosChartInstance = null;


/* === [CAPÍTULO] LÓGICA DE INTERFACE E EVENTOS === */

/* --- [Seção] Renderizar Processos na Sidebar Primária --- */
function renderPrimarySidebar() {
  const container = document.getElementById('sidebar-processes-container');
  if (!container) return;
  container.innerHTML = Object.keys(AUDIT_TYPES).map(key => `
    <button class="audit-tab ${key === currentProcessKey ? 'active' : ''}" onclick="setAuditProcess('${key}')" aria-label="Processo: ${AUDIT_TYPES[key].title}">
      ${AUDIT_TYPES[key].title}
    </button>
  `).join('');
}

/* --- [Seção] Gerenciamento do Processo de Auditoria --- */
function setAuditProcess(processKey) {
  currentProcessKey = processKey;
  
  // Se for um monitoramento de ciclo único, força exibição em "Ver todas as fases" (-1)
  if (processKey === 'monitoramento_1' || processKey === 'monitoramento_2') {
    currentPhaseIndex = -1;
  } else {
    currentPhaseIndex = 0; // Seleciona por padrão a primeira fase de trabalho (Planejamento)
  }

  const tabs = document.querySelectorAll('.audit-tab');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('onclick').includes(processKey)) {
      tab.classList.add('active');
    }
  });

  renderMainArea();
}

/* --- [Seção] Gerenciamento Interno das Fases --- */
function setPhase(idx) {
  currentPhaseIndex = idx;
  const buttons = document.querySelectorAll('.phase-btn');
  buttons.forEach(b => b.classList.remove('active'));
  
  const targetBtn = document.querySelector(`.phase-btn[data-phase="${idx}"]`);
  if (targetBtn) targetBtn.classList.add('active');
  
  renderMainAreaContent();
}

/* --- [Seção] Renderização de Painel Principal --- */
function renderMainArea() {
  const processData = AUDIT_TYPES[currentProcessKey];
  const mainArea = document.getElementById('main-area');
  if (!mainArea) return;

  if (!processData.phases) {
    mainArea.innerHTML = `
      <div class="empty-state anim">
        <i class="fa-solid fa-person-digging"></i>
        <h2>Fluxo em mapeamento</h2>
        <p>Os processos detalhados para <strong>${processData.title}</strong> serão inseridos em breve.</p>
      </div>
    `;
    if (prazosChartInstance) {
      prazosChartInstance.destroy();
      prazosChartInstance = null;
    }
    return;
  }

  renderMainAreaContent();
}

/* --- [Seção] Montagem da Timeline e do Gráfico (Content Area) --- */
function renderMainAreaContent() {
  const processData = AUDIT_TYPES[currentProcessKey];
  const mainArea = document.getElementById('main-area');
  if (!mainArea) return;

  // Resolução segura da fase ativa (null quando no modo "Ver todas as fases" / -1)
  const phase = currentPhaseIndex === -1 ? null : processData.phases[currentPhaseIndex];

  let currentSteps = [];
  let displayPhaseName = "";
  let displayPhaseIcon = "";
  let displayPhaseCls = "";

  const totalStepsCount = processData.phases.reduce((acc, p) => acc + p.steps.length, 0);
  const isMonitoramento = (currentProcessKey === 'monitoramento_1' || currentProcessKey === 'monitoramento_2');

  if (currentPhaseIndex === -1) {
    // Modo "Ver todas as fases": concatena as etapas de todas as subfases do processo ativo
    currentSteps = processData.phases.flatMap(p => p.steps.map(s => ({ ...s, phaseCls: p.cls })));
    displayPhaseName = "Visão Completa do Processo";
    displayPhaseIcon = "fa-solid fa-circle-nodes";
    displayPhaseCls = "p1";
  } else {
    // Modo específico de fase selecionada
    currentSteps = phase.steps.map(s => ({ ...s, phaseCls: phase.cls }));
    displayPhaseName = phase.name;
    displayPhaseIcon = phase.icon;
    displayPhaseCls = phase.cls;
  }

  // Calcular o prazo da fase em exibição (Micro)
  const phaseDays = currentSteps.reduce((acc, step) => acc + step.prazo, 0);

  // Calcular o prazo global acumulado de todo o processo (Macro)
  const globalDays = processData.phases.reduce((sumPhase, p) => {
    return sumPhase + p.steps.reduce((sumStep, s) => sumStep + s.prazo, 0);
  }, 0);

  mainArea.innerHTML = `
    <div class="main-container">
      
      <!-- Cabeçalho de Fase -->
      <div class="phase-header anim">
        <div class="phase-title">
          <div class="phase-icon ${displayPhaseCls}"><i class="${displayPhaseIcon}"></i></div>
          <div>
            <div class="phase-name">${currentPhaseIndex === -1 ? processData.title : displayPhaseName}</div>
            <div class="phase-sub">${currentPhaseIndex === -1 ? 'Visão integrada contínua de todas as fases' : 'Fase individual ativa'} · Fluxo completo contendo ${currentSteps.length} etapas e marcos operacionais.</div>
          </div>
        </div>
      </div>

      <div class="cols-grid">
        
        <!-- Sidebar Secundária (Fases) -->
        <div class="sidebar-secondary anim">
          <div class="col-header"><i class="fa-solid fa-layer-group"></i> Fases</div>
          
          <!-- Botões das Fases Normais (Omitidos em Monitoramentos por possuírem apenas ciclo unificado) -->
          ${!isMonitoramento ? processData.phases.map((p, idx) => `
            <button class="phase-btn ${idx === currentPhaseIndex ? 'active' : ''}" data-phase="${idx}" onclick="setPhase(${idx})" aria-label="Fase ${p.name}">
              <span class="phase-dot" style="background-color: var(--phase${idx+1})"></span>
              <span>${p.name}</span>
              <span class="phase-steps-count">${p.steps.length}</span>
            </button>
          `).join('') : ''}
          
          <!-- Botão "Ver todas as fases" (Sempre fixado na última posição) -->
          <button class="phase-btn ${currentPhaseIndex === -1 ? 'active' : ''}" data-phase="-1" onclick="setPhase(-1)" aria-label="Visualizar todas as fases de forma integrada">
            <i class="fa-solid fa-circle-nodes"></i>
            <span>Ver todas as fases</span>
            <span class="phase-steps-count">${totalStepsCount}</span>
          </button>
        </div>

        <!-- Coluna de Processos (Linha do Tempo) -->
        <div>
          <div class="col-header"><i class="fa-solid fa-timeline"></i> Linha do Tempo do Fluxo</div>
          <div class="timeline">
            ${currentSteps.map((step, si) => {
              const isFirstStep = (si === 0);
              const isLastStep = (si === currentSteps.length - 1);
              
              // Calcular numeração contínua/absoluta das etapas
              let absoluteNumber = si + 1;
              if (currentPhaseIndex !== -1) {
                let previousStepsCount = 0;
                for (let i = 0; i < currentPhaseIndex; i++) {
                  previousStepsCount += processData.phases[i].steps.length;
                }
                absoluteNumber = previousStepsCount + si + 1;
              }

              return `
                <div class="step-card anim anim-d${Math.min(si+1,5)}"
                     onclick="openStepModal(${si})"
                     aria-label="Etapa ${absoluteNumber}: ${step.title}"
                     role="button" tabindex="0"
                     onkeydown="if(event.key==='Enter')openStepModal(${si})">
                  <div class="step-num">
                    <span class="step-badge ${step.phaseCls}">Etapa ${absoluteNumber}</span>
                    ${isFirstStep ? `<span class="start-badge">Início</span>` : ''}
                    ${isLastStep ? `<span class="conclusion-badge">Conclusão</span>` : ''}
                    <span class="duration-badge"><i class="fa-regular fa-clock"></i> ${step.prazo} ${step.prazo === 1 ? 'dia' : 'dias'}</span>
                  </div>
                  <div class="step-title">${step.title}</div>
                  <div class="step-desc">${step.desc}</div>
                  <div class="step-card-footer"><i class="fa-solid fa-book-open"></i> Explorar Detalhes</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Coluna de Resumo de Prazos e Gráfico -->
        <div>
          <div class="col-header"><i class="fa-solid fa-chart-pie"></i> Painel de Prazo</div>
          <div class="chart-card anim anim-d2">
            <div class="chart-card-kpis">
              ${isMonitoramento ? `
                <!-- KPI Único para processos de ciclo unificado de monitoramento -->
                <div class="kpi-block">
                  <span class="chart-label">Prazo Total do Monitoramento</span>
                  <h2 class="chart-total-value">${globalDays} <span class="chart-days-text">${globalDays === 1 ? 'dia' : 'dias'}</span></h2>
                </div>
              ` : `
                <!-- KPI Global (Macro) -->
                <div class="kpi-block">
                  <span class="chart-label">Prazo Total do Processo</span>
                  <h2 class="chart-total-value">${globalDays} <span class="chart-days-text">${globalDays === 1 ? 'dia' : 'dias'}</span></h2>
                </div>
                <!-- KPI de Fase (Micro) se aplicável -->
                ${currentPhaseIndex !== -1 ? `
                  <div class="kpi-block kpi-block--secondary">
                    <span class="chart-label">Esforço desta Fase (${displayPhaseName})</span>
                    <h2 class="chart-total-value">${phaseDays} <span class="chart-days-text">${phaseDays === 1 ? 'dia' : 'dias'}</span></h2>
                  </div>
                ` : `
                  <div class="kpi-block kpi-block--secondary">
                    <span class="chart-label">Esforço Selecionado (Ciclo Completo)</span>
                    <h2 class="chart-total-value">${globalDays} <span class="chart-days-text">${globalDays === 1 ? 'dia' : 'dias'}</span></h2>
                  </div>
                `}
              `}
            </div>
            <div class="chart-body">
              <canvas id="prazosChart"></canvas>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  // Processar dados do gráfico horizontal de barras simples
  const chartLabels = currentSteps.map((s, idx) => {
    let absoluteNum = idx + 1;
    if (currentPhaseIndex !== -1) {
      let prevCount = 0;
      for (let i = 0; i < currentPhaseIndex; i++) {
        prevCount += processData.phases[i].steps.length;
      }
      absoluteNum = prevCount + idx + 1;
    }
    return `Etapa ${absoluteNum}`;
  });
  const chartData = currentSteps.map(s => s.prazo);
  renderPrazosChart(chartLabels, chartData);
}

/* --- [Seção] Gerenciamento e Repintura do Gráfico --- */
function renderPrazosChart(labels, data) {
  const ctx = document.getElementById('prazosChart');
  if (!ctx) return;

  if (prazosChartInstance) {
    prazosChartInstance.destroy();
  }

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#94A3B8' : '#4A5B6E';
  const gridColor = isDark ? '#334155' : '#E1EAF2';
  const barColor = isDark ? '#3399FF' : '#0073E6';

  prazosChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Dias',
        data: data,
        backgroundColor: barColor,
        borderRadius: 4,
        borderSkipped: false,
        barThickness: 10
      }]
    },
    options: {
      indexAxis: 'y', // Orientação horizontal das barras
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              return ` ${context.raw} ${context.raw === 1 ? 'dia' : 'dias'}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: textColor, font: { family: 'Source Sans 3', size: 10 } }
        },
        y: {
          grid: { display: false },
          ticks: { color: textColor, font: { family: 'Source Sans 3', size: 10 } }
        }
      }
    }
  });
}


/* === [CAPÍTULO] COMPONENTES FLUTUANTES E UTILITÁRIOS === */

/* --- [Seção] Gerenciamento das Janelas Modais --- */
function openStepModal(si) {
  const processData = AUDIT_TYPES[currentProcessKey];
  let currentSteps = [];
  let activePhaseName = "";
  let absoluteNumber = si + 1;

  if (currentPhaseIndex === -1) {
    currentSteps = processData.phases.flatMap(p => p.steps.map(s => ({ ...s, phaseName: p.name })));
    activePhaseName = currentSteps[si].phaseName;
    absoluteNumber = si + 1;
  } else {
    const phase = processData.phases[currentPhaseIndex];
    currentSteps = phase.steps;
    activePhaseName = phase.name;
    
    // Calcular numeração absoluta para manter coerência com o cartão clicado
    let previousStepsCount = 0;
    for (let i = 0; i < currentPhaseIndex; i++) {
      previousStepsCount += processData.phases[i].steps.length;
    }
    absoluteNumber = previousStepsCount + si + 1;
  }

  const step = currentSteps[si];

  document.getElementById('modal-title-text').textContent = step.title;
  document.getElementById('modal-subtitle').textContent = `${activePhaseName} · Etapa ${absoluteNumber}`;

  document.getElementById('modal-body').innerHTML = `
    <div>
      <div class="modal-section-title"><i class="fa-solid fa-align-left"></i> Entendendo a Etapa</div>
      <div class="modal-desc">${step.fullDesc}</div>
    </div>
    <div>
      <div class="modal-section-title"><i class="fa-solid fa-folder-open"></i> Artefato Produzido</div>
      <div class="modal-tags">
        <span class="modal-tag"><i class="fa-solid fa-file-invoice"></i> ${step.artifact}</span>
        <span class="modal-tag"><i class="fa-regular fa-clock"></i> Prazo estimado de ${step.prazo} ${step.prazo === 1 ? 'dia' : 'dias'}</span>
      </div>
    </div>
    <div>
      <div class="modal-section-title"><i class="fa-solid fa-cloud-arrow-down"></i> Modelo de Referência</div>
      <div class="modal-template-placeholder" title="Recurso em desenvolvimento">
        <i class="fa-solid fa-file-arrow-down"></i>
        <div>
          <strong>Baixar Modelo de ${step.artifact}</strong>
          <p>O arquivo de modelo (.docx / .pdf) estará disponível para download em breve.</p>
        </div>
        <span class="placeholder-status-tag">Em breve</span>
      </div>
    </div>
  `;

  document.getElementById('modal-backdrop').classList.add('open');
  document.getElementById('modal-box').setAttribute('aria-label', step.title);
}

function closeModal(e) {
  if (e.target === document.getElementById('modal-backdrop')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modal-backdrop').classList.remove('open');
}

document.addEventListener('keydown', e => { 
  if (e.key === 'Escape') closeModalDirect(); 
});

/* --- [Seção] Gerenciamento das Tooltips --- */
let tooltipTimer;
function showTooltip(e, name, click = false) {
  clearTimeout(tooltipTimer);
  const tt = document.getElementById('tooltip');
  if (!tt) return;
  const desc = ARTIFACT_DESC[name] || "Documento pertinente a esta etapa do fluxo.";
  document.getElementById('tooltip-title').textContent = name;
  document.getElementById('tooltip-body').textContent = desc;
  
  const rect = e.currentTarget.getBoundingClientRect();
  let top = rect.bottom + 8;
  let left = rect.left;
  
  if (left + 280 > window.innerWidth) left = window.innerWidth - 290;
  if (top + 100 > window.innerHeight) top = rect.top - 110;
  
  tt.style.top = top + 'px';
  tt.style.left = left + 'px';
  tt.classList.add('show');
  tt.setAttribute('aria-hidden', 'false');
  
  if (!click) { 
    tooltipTimer = setTimeout(hideTooltip, 4000); 
  }
}

function hideTooltip() {
  const tt = document.getElementById('tooltip');
  if (tt) {
    tt.classList.remove('show');
    tt.setAttribute('aria-hidden', 'true');
  }
}

document.addEventListener('click', e => {
  if (!e.target.closest('.artifact-card')) hideTooltip();
});

/* --- [Seção] Exportação de Dados para JSON --- */
function exportPhase() {
  const process = AUDIT_TYPES[currentProcessKey];
  if (!process.phases) return;
  
  let exportSteps = [];
  let exportName = "";

  if (currentPhaseIndex === -1) {
    exportSteps = process.phases.flatMap(p => p.steps);
    exportName = "Completo";
  } else {
    const phase = process.phases[currentPhaseIndex];
    exportSteps = phase.steps;
    exportName = phase.name;
  }
  
  const summary = {
    Apresentacao: `Processo de ${process.title} - TSE`,
    Fase: exportName,
    Etapas: exportSteps.map((s, si) => ({
      Numero: si + 1,
      Titulo: s.title,
      Descricao: s.fullDesc,
      Artefatos_Gerados: s.artifact,
      Prazo: s.prazo
    })),
    GeradoEm: new Date().toLocaleString('pt-BR')
  };
  
  const el = document.createElement('a');
  el.href = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(summary, null, 2));
  el.download = `Estrutura_${currentProcessKey}_${exportName.toLowerCase()}.json`;
  el.click();
}

/* --- [Seção] Alternador de Temas --- */
function toggleTheme() {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : '');
  document.getElementById('theme-label').textContent = dark ? 'Modo Claro' : 'Modo Escuro';
  document.getElementById('theme-icon').className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-circle-half-stroke';
  
  // Atualizar as cores de visualização do gráfico de prazos
  if (AUDIT_TYPES[currentProcessKey].phases) {
    const processData = AUDIT_TYPES[currentProcessKey];
    let currentSteps = [];
    if (currentPhaseIndex === -1) {
      currentSteps = processData.phases.flatMap(p => p.steps);
    } else {
      currentSteps = processData.phases[currentPhaseIndex].steps;
    }
    const chartLabels = currentSteps.map((s, idx) => `Etapa ${idx + 1}`);
    const chartData = currentSteps.map(s => s.prazo);
    renderPrazosChart(chartLabels, chartData);
  }
}


/* === [CAPÍTULO] INICIALIZAÇÃO DA SPA === */

renderPrimarySidebar();
setAuditProcess('ordinaria');