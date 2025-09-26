"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Nossos Serviços Especializados
        </h1>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          A SSO3 oferece uma gama completa de serviços em segurança e saúde no trabalho, garantindo a conformidade legal e o bem-estar dos seus colaboradores.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {/* Apoio técnico especializado */}
        <Card>
          <CardHeader>
            <CardTitle>Apoio Técnico Especializado</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Suporte em processos trabalhistas envolvendo insalubridade, periculosidade e condições de trabalho.</li>
              <li>Análise detalhada de laudos: Revisão técnica para contestação ou validação de informações periciais.</li>
              <li>Elaboração de quesitos técnicos: Desenvolvimento de perguntas estratégicas para embasar a defesa ou requerimentos.</li>
              <li>Acompanhamento de perícias: Presença em perícias judiciais e extrajudiciais para assegurar a correta aplicação das normas.</li>
              <li>Emissão de pareceres técnicos: Relatórios técnicos detalhados para subsidiar decisões e estratégias jurídicas.</li>
              <li>Atuação para empresas e trabalhadores: Suporte especializado para garantir direitos e conformidade com a legislação.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Elaboração de PMOC */}
        <Card>
          <CardHeader>
            <CardTitle>Elaboração de PMOC</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Plano de Manutenção, Operação e Controle.</li>
              <li>Obrigatório para ambientes climatizados: Atende à legislação (Lei 13.589/2018) para sistemas de ar-condicionado acima de 60.000 BTUs.</li>
              <li>Inspeção e diagnóstico técnico: Avaliação das condições dos equipamentos para garantir eficiência e segurança.</li>
              <li>Definição de rotinas de manutenção: Planejamento de ações preventivas e corretivas para prolongar a vida útil dos sistemas.</li>
              <li>Conformidade com normas da ANVISA e Vigilância Sanitária: Redução de riscos à saúde e melhoria da qualidade do ar.</li>
              <li>Documentação completa: Registro de procedimentos e controles exigidos por órgãos fiscalizadores.</li>
              <li>Suporte técnico especializado: Equipe qualificada para elaboração e implementação do plano.</li>
            </ul>
          </CardContent>
        </Card>

        {/* PCMSO / Saúde */}
        <Card>
          <CardHeader>
            <CardTitle>PCMSO / Saúde Ocupacional</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">Nossa empresa oferece serviços especializados para a elaboração e implementação do PCMSO, garantindo que sua empresa esteja em conformidade com as diretrizes da NR7. Nossos serviços incluem:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Avaliação de Riscos Ocupacionais: Identificação e classificação dos riscos presentes no ambiente de trabalho.</li>
              <li>Exames Médicos Ocupacionais: Realização de exames admissionais, periódicos e demissionais, além de outros específicos conforme a necessidade.</li>
              <li>Implementação de Medidas Preventivas: Desenvolvimento de estratégias para reduzir ou eliminar riscos ocupacionais.</li>
              <li>Elaboração do Relatório Analítico: Apresentação e discussão dos resultados com a gestão da empresa para garantir a adoção de medidas eficazes.</li>
            </ul>
            <Accordion type="single" collapsible className="w-full mt-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-primary">Exames Médicos Ocupacionais Realizados</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Admissional / Periódico / Retorno ao trabalho / Demissional / Mudança de risco ocupacional (função).</li>
                    <li>Exame clínico;</li>
                    <li>Acuidade visual (Snellen / Ishihara);</li>
                    <li>Teste de Romberg;</li>
                    <li>Audiometria;</li>
                    <li>ECG - Eletrocardiograma;</li>
                    <li>EEG - Eletroencefalograma;</li>
                    <li>Espirometria;</li>
                    <li>Raio-X;</li>
                    <li>Exames laboratoriais em geral: Hemograma completo, Glicemia, TGO, TGP, Gama GT, Exames de urina, VDRL.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* eSocial SST */}
        <Card>
          <CardHeader>
            <CardTitle>eSocial SST</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">Quem é obrigado a enviar eventos para SST no eSocial é o empregador, a cooperativa, o Órgão Gestor de Mão de Obra, o sindicato de trabalhadores avulsos e os órgãos públicos em relação aos seus empregados contratados pelo regime da CLT. Além disso, as empresas que possuem funcionários registrados em sua empresa também estão obrigadas a enviar essas informações.</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>S-2210 (Comunicação de Acidente de Trabalho): Comunica acidentes de trabalho, independentemente de afastamento, até o primeiro dia útil após a ocorrência.</li>
              <li>S-2220 (Monitoramento da Saúde do Trabalhador): Detalha o monitoramento da saúde dos trabalhadores, incluindo avaliações clínicas e exames complementares.</li>
              <li>S-2240 (Condições Ambientais do Trabalho – Agentes Nocivos): Registra as condições ambientais de trabalho para trabalhadores expostos a agentes nocivos.</li>
              <li>O evento S-2221 (Exame Toxicológico do Motorista Profissional) não faz parte dos eventos principais da quarta fase, mas é relevante para empresas que empregam motoristas profissionais.</li>
            </ul>
          </CardContent>
        </Card>

        {/* PGR - Programa de Gerenciamento de Riscos */}
        <Card>
          <CardHeader>
            <CardTitle>PGR - Programa de Gerenciamento de Riscos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">Nossa empresa oferece serviços especializados na implementação do Programa de Gerenciamento de Riscos (PGR), conforme estabelecido pela Norma Regulamentadora 1 (Nr1).</p>
            <p className="mb-4 text-muted-foreground">O PGR é uma ferramenta essencial para a gestão dinâmica de riscos ocupacionais, abrangendo não apenas riscos físicos, químicos e biológicos, mas também ergonômicos, psicossociais e de acidentes.</p>
            <Accordion type="single" collapsible className="w-full mt-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold text-primary">O que é?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Documento que avalia os agentes ambientais no ambiente de trabalho e determina se há exposição a riscos que possam gerar direito à aposentadoria especial.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-semibold text-primary">Objetivo</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Garantir conformidade com a legislação previdenciária e proteger a saúde dos trabalhadores.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-semibold text-primary">Principais Avaliações</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Identificação de agentes físicos, químicos e biológicos</li>
                    <li>Medições técnicas conforme normas regulamentadoras</li>
                    <li>Análise do impacto da exposição no colaborador</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-semibold text-primary">Benefícios</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Atendimento à legislação previdenciária</li>
                    <li>Redução de riscos trabalhistas e previdenciários</li>
                    <li>Segurança e saúde para os trabalhadores</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Laudo de Insalubridade */}
        <Card>
          <CardHeader>
            <CardTitle>Laudo de Insalubridade</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Realizado por um profissional habilitado, conforme a Norma Regulamentadora NR-15.</li>
              <li>Define se o trabalhador tem direito ao adicional de insalubridade e em qual grau (10%, 20% ou 40%).</li>
              <li>Fundamentado em medições ambientais e análise de atividades.</li>
              <li>Essencial para garantir segurança e conformidade com a legislação trabalhista.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Laudo de Periculosidade */}
        <Card>
          <CardHeader>
            <CardTitle>Laudo de Periculosidade</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Identificação de atividades que expõem trabalhadores a risco elevado de vida.</li>
              <li>Baseado na Norma Regulamentadora NR-16 e legislação vigente.</li>
              <li>Define o direito ao adicional de periculosidade (30% sobre o salário-base).</li>
              <li>Aplicável a atividades com inflamáveis, explosivos, eletricidade e outros agentes de risco.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Treinamentos das Normas Regulamentadoras (Nrs) */}
        <Card>
          <CardHeader>
            <CardTitle>Treinamentos das Normas Regulamentadoras (NRs)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Capacitação obrigatória: Treinamentos conforme exigências do Ministério do Trabalho para segurança e saúde no trabalho.</li>
              <li>Conteúdo atualizado: Aulas teóricas e práticas alinhadas às últimas revisões das NRs.</li>
              <li>Treinamentos oferecidos:
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>NR 01 – Disposições gerais e gestão de riscos ocupacionais.</li>
                  <li>NR 05 – CIPA – Comissão Interna de Prevenção de Acidentes.</li>
                  <li>NR 06 – Equipamentos de Proteção Individual (EPI).</li>
                  <li>NR 10 – Segurança em instalações e serviços com eletricidade.</li>
                  <li>NR 11 – Transporte, movimentação e armazenamento de materiais.</li>
                  <li>NR 12 – Segurança no trabalho com máquinas e equipamentos.</li>
                  <li>NR 17 – Ergonomia no ambiente de trabalho.</li>
                  <li>NR 18 – Segurança na construção civil.</li>
                  <li>NR 20 – Segurança em inflamáveis e combustíveis.</li>
                  <li>NR 33 – Segurança em espaços confinados.</li>
                  <li>NR 35 – Trabalho em altura.</li>
                </ul>
              </li>
              <li>Treinamentos presenciais e online: Flexibilidade para atender empresas e trabalhadores de diversos setores.</li>
              <li>Certificação válida: Emissão de certificados conforme exigências legais.</li>
              <li>Instrutores qualificados: Profissionais especializados para oferecer aprendizado eficiente e aplicado à realidade do trabalho.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;