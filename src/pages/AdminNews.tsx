"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Edit } from 'lucide-react';
import { useSession } from '@/components/SessionContextProvider'; // Importação adicionada

interface NewsItem {
  id: string;
  created_at: string;
  title: string;
  content: string;
  author_id: string;
}

const AdminNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingNewsId, setEditingNewsId] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  const { user } = useSession();

  const fetchNews = async () => {
    const { data, error } = await supabase.from('news').select('*').order('created_at', { ascending: false });
    if (error) {
      toast({
        title: "Erro ao buscar notícias",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setNews(data || []);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Erro",
        description: "Você precisa estar logado para adicionar/editar notícias.",
        variant: "destructive",
      });
      return;
    }

    if (editingNewsId) {
      const { error } = await supabase
        .from('news')
        .update({ title, content, author_id: user.id })
        .eq('id', editingNewsId);
      if (error) {
        toast({
          title: "Erro ao atualizar notícia",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sucesso",
          description: "Notícia atualizada com sucesso.",
        });
        setIsDialogOpen(false);
        setEditingNewsId(null);
      }
    } else {
      const { error } = await supabase
        .from('news')
        .insert({ title, content, author_id: user.id });
      if (error) {
        toast({
          title: "Erro ao adicionar notícia",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sucesso",
          description: "Notícia adicionada com sucesso.",
        });
        setIsDialogOpen(false);
      }
    }
    setTitle('');
    setContent('');
    fetchNews();
  };

  const handleEdit = (newsItem: NewsItem) => {
    setTitle(newsItem.title);
    setContent(newsItem.content);
    setEditingNewsId(newsItem.id);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta notícia?')) {
      const { error } = await supabase.from('news').delete().eq('id', id);
      if (error) {
        toast({
          title: "Erro ao excluir notícia",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Sucesso",
          description: "Notícia excluída com sucesso.",
        });
        fetchNews();
      }
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Gerenciar Notícias</h1>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => { setTitle(''); setContent(''); setEditingNewsId(null); setIsDialogOpen(true); }}>
            Adicionar Nova Notícia
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingNewsId ? 'Editar Notícia' : 'Adicionar Nova Notícia'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título da notícia"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">Conteúdo</label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Conteúdo da notícia"
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit">{editingNewsId ? 'Salvar Alterações' : 'Adicionar Notícia'}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <div className="grid gap-4">
        {news.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <p className="text-sm text-muted-foreground">Publicado em: {new Date(item.created_at).toLocaleDateString()}</p>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-muted-foreground flex-grow pr-4">{item.content.substring(0, 150)}...</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" onClick={() => handleEdit(item)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={() => handleDelete(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminNews;