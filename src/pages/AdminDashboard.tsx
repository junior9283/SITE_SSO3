"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Dashboard Administrativo</h1>
      <p className="text-muted-foreground">Bem-vindo à área de administração da SSO3. Use o menu lateral para gerenciar o conteúdo do site.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Notícias</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Adicione, edite ou remova notícias do seu site.</p>
          </CardContent>
        </Card>
        {/* Adicionar mais cards para outras funcionalidades de gerenciamento de páginas */}
      </div>
    </div>
  );
};

export default AdminDashboard;