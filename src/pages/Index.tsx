import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const stats = [
    { label: 'Онлайн игроков', value: '247', icon: 'Users' },
    { label: 'Всего убийств', value: '15,392', icon: 'Skull' },
    { label: 'Дней без вайпа', value: '183', icon: 'Calendar' },
    { label: 'Разрушено блоков', value: '2.4M', icon: 'Blocks' },
  ];

  const rules = [
    { title: 'Правило #1', description: 'Нет правил - это анархия', icon: 'Flame' },
    { title: 'Правило #2', description: 'Читы запрещены (античит активен)', icon: 'Shield' },
    { title: 'Правило #3', description: 'Грифинг разрешён', icon: 'Bomb' },
    { title: 'Правило #4', description: 'PvP везде и всегда', icon: 'Swords' },
    { title: 'Правило #5', description: 'Дюп запрещён', icon: 'AlertTriangle' },
  ];

  const donatePerks = [
    {
      name: 'VIP',
      price: '299₽',
      perks: ['Цветной ник', '+2 homes', 'Kit VIP раз в день', 'Приоритет входа'],
      color: 'from-green-600 to-green-800',
    },
    {
      name: 'PREMIUM',
      price: '599₽',
      perks: ['Все из VIP', '+5 homes', 'Kit Premium', 'Fly в лобби', '/hat команда'],
      color: 'from-blue-600 to-blue-800',
      popular: true,
    },
    {
      name: 'LEGEND',
      price: '999₽',
      perks: ['Все из Premium', '+10 homes', 'Kit Legend', '/ec команда', 'Уникальный префикс'],
      color: 'from-red-600 to-red-800',
    },
  ];

  const topPlayers = [
    { name: 'xXDestroyerXx', kills: 1847, deaths: 523, rank: 1 },
    { name: 'AnarchyKing', kills: 1654, deaths: 612, rank: 2 },
    { name: 'GrieferPro', kills: 1521, deaths: 701, rank: 3 },
    { name: 'TNT_Master', kills: 1389, deaths: 834, rank: 4 },
    { name: 'NoMercyy', kills: 1267, deaths: 891, rank: 5 },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
            <Icon name="Flame" size={28} className="animate-pulse-slow" />
            ANARCHY SERVER
          </h1>
          <div className="flex gap-6">
            {['home', 'rules', 'stats', 'donate', 'discord'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium uppercase transition-colors hover:text-primary ${
                  activeSection === section ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'rules' && 'Правила'}
                {section === 'stats' && 'Статистика'}
                {section === 'donate' && 'Донат'}
                {section === 'discord' && 'Discord'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/6edb9917-1d7a-4375-96b1-5973cc6fae28/files/efb0b967-f2c4-4031-8333-9f8971af2b34.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="text-7xl font-bold mb-6 text-white drop-shadow-lg">
            ДОБРО ПОЖАЛОВАТЬ
            <br />В <span className="text-primary">АНАРХИЮ</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Никаких правил. Никаких ограничений. Только хаос и разрушение. Выживай любой ценой.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              ИГРАТЬ СЕЙЧАС
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-bold text-lg px-8"
              onClick={() => scrollToSection('discord')}
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              DISCORD
            </Button>
          </div>
          <div className="mt-12 inline-block bg-card/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary/50">
            <p className="text-lg font-mono text-secondary">
              IP: <span className="font-bold">play.anarchy.ru</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                  <Icon name={stat.icon as any} size={20} className="text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-bold text-center mb-12 text-foreground">
            ПРАВИЛА <span className="text-primary">СЕРВЕРА</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {rules.map((rule, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon name={rule.icon as any} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-lg">{rule.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base text-muted-foreground">{rule.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-bold text-center mb-12 text-foreground">
            ТОП <span className="text-primary">ИГРОКОВ</span>
          </h3>
          <Card className="max-w-4xl mx-auto bg-card border-border">
            <CardContent className="p-6">
              <div className="space-y-4">
                {topPlayers.map((player) => (
                  <div
                    key={player.rank}
                    className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          player.rank === 1
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : player.rank === 2
                            ? 'bg-gray-400/20 text-gray-400'
                            : player.rank === 3
                            ? 'bg-orange-500/20 text-orange-500'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        #{player.rank}
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{player.name}</p>
                        <p className="text-sm text-muted-foreground">K/D: {(player.kills / player.deaths).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex gap-8 text-sm">
                      <div className="text-center">
                        <p className="text-secondary font-bold">{player.kills}</p>
                        <p className="text-muted-foreground">Убийств</p>
                      </div>
                      <div className="text-center">
                        <p className="text-destructive font-bold">{player.deaths}</p>
                        <p className="text-muted-foreground">Смертей</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="donate" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-bold text-center mb-4 text-foreground">
            ДОНАТ И <span className="text-primary">ПРИВИЛЕГИИ</span>
          </h3>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Поддержи сервер и получи эксклюзивные возможности
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {donatePerks.map((perk, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-2 ${
                  perk.popular ? 'border-primary scale-105' : 'border-border'
                } hover:scale-105 transition-transform`}
              >
                {perk.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary text-white">ПОПУЛЯРНЫЙ</Badge>
                )}
                <CardHeader className={`bg-gradient-to-br ${perk.color} text-white`}>
                  <CardTitle className="text-2xl">{perk.name}</CardTitle>
                  <CardDescription className="text-white/90 text-3xl font-bold mt-2">{perk.price}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {perk.perks.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-secondary" />
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white font-bold">
                    КУПИТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="discord" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-5xl font-bold mb-6 text-foreground">
            ПРИСОЕДИНЯЙСЯ К <span className="text-primary">СООБЩЕСТВУ</span>
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Общайся с игроками, участвуй в ивентах и следи за новостями в нашем Discord сервере
          </p>
          <Button
            size="lg"
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-lg px-12"
          >
            <Icon name="MessageSquare" size={24} className="mr-3" />
            ВСТУПИТЬ В DISCORD
          </Button>
          <div className="mt-12 flex justify-center gap-12 text-muted-foreground">
            <div>
              <p className="text-3xl font-bold text-foreground">1,247</p>
              <p className="text-sm">Участников</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-secondary">342</p>
              <p className="text-sm">Онлайн</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 Anarchy Server. Все права разрушены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
