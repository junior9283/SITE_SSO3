"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Entre em Contato
        </h1>
        <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Estamos prontos para atender às suas necessidades em segurança e saúde no trabalho. Fale conosco!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        <Card className="flex flex-col items-center p-6 text-center">
          <MapPin className="h-12 w-12 text-blue-600 mb-4" />
          <CardTitle className="mb-2">Endereço</CardTitle>
          <CardContent className="text-muted-foreground p-0">
            <p>Rua Dr. Orestes Prata Tibery, 2240</p>
            <p>Bairro Jardim Primaveril, CEP 79603-030</p>
            <p>Aos fundos do supermercado Nova Estrela</p>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center p-6 text-center">
          <Phone className="h-12 w-12 text-blue-600 mb-4" />
          <CardTitle className="mb-2">Telefone / WhatsApp</CardTitle>
          <CardContent className="text-muted-foreground p-0">
            <p>(18) 99723-7297</p>
            <p>(18) 99697-9899</p>
          </CardContent>
        </Card>

        <Card className="flex flex-col items-center p-6 text-center">
          <Mail className="h-12 w-12 text-blue-600 mb-4" />
          <CardTitle className="mb-2">Email</CardTitle>
          <CardContent className="text-muted-foreground p-0">
            <p>contato@sso3.com.br (Exemplo)</p>
            <p>Seu email aqui</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;