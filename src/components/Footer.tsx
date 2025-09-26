"use client";

import React from "react";
import { MadeWithDyad } from "./made-with-dyad";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background py-6 mt-12">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SSO3 - Assessoria em segurança e saúde no trabalho - LTDA. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            CNPJ: 44.536.583/0001-45
          </p>
          <p className="text-sm text-muted-foreground">
            Rua Dr. Orestes Prata Tibery, 2240, Bairro Jardim Primaveril, CEP 79603-030.
          </p>
          <Link to="/admin" className="text-xs text-muted-foreground hover:underline mt-2 block">
            Área Administrativa
          </Link>
        </div>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;