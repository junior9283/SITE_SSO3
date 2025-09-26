"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, AirVent, Stethoscope, FileText, ClipboardList, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                SSO3: Sua Parceira em Segurança e Saúde Ocupacional
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl">
                Oferecemos soluções especializadas para garantir a conformidade da sua empresa com a legislação e proteger a saúde dos seus trabalhadores.
              </p>
              <div className="space-x-4">
                <Link to="/services">
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-gray-100">
                    Nossos Serviços
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Entre em Contato
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Nossas Áreas de Atuação
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os pilares dos nossos serviços, desenhados para atender às necessidades de empresas e trabalhadores.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card className="flex flex-col items-center p-6 text-center">
                  <ShieldCheck className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="mb-2">Apoio Técnico Especializado</CardTitle>
                  <CardDescription>
                    Suporte em processos trabalhistas, análise de laudos e acompanhamento de perícias.
                  </CardDescription>
                </Card>
                <Card className="flex flex-col items-center p-6 text-center">
                  <AirVent className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="mb-2">Elaboração de PMOC</CardTitle>
                  <CardDescription>
                    Plano de Manutenção, Operação e Controle para ambientes climatizados.
                  </CardDescription>
                </Card>
                <Card className="flex flex-col items-center p-6 text-center">
                  <Stethoscope className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="mb-2">PCMSO / Saúde Ocupacional</CardTitle>
                  <CardDescription>
                    Avaliação de riscos, exames médicos e implementação de medidas preventivas.
                  </CardDescription>
                </Card>
                <Card className="flex flex-col items-center p-6 text-center">
                  <FileText className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="mb-2">PGR - Gerenciamento de Riscos</CardTitle>
                  <CardDescription>
                    Implementação do Programa de Gerenciamento de Riscos (PGR) conforme NR1.
                  </CardDescription>
                </Card>
                <Card className="flex flex-col items-center p-6 text-center">
                  <ClipboardList className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="mb-2">Laudos Técnicos</CardTitle>
                  <CardDescription>
                    Laudos de Insalubridade e Periculosidade para conformidade legal.
                  </CardDescription>
                </Card>
                <Card className="flex flex-col items-center p-6 text-center">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="mb-2">Treinamentos NR's</CardTitle>
                  <CardDescription>
                    Capacitação obrigatória em diversas Normas Regulamentadoras.
                  </CardDescription>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;