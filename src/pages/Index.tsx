import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Scissors, Users, Star, MapPin, Phone, Mail, Instagram, Clock, Shield, Award, Check, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

// Import generated images
import heroImage from "@/assets/hero-barbershop.jpg";
import logoImage from "@/assets/logo-barbearia-raiz.png";
import joaoImage from "@/assets/testimonial-joao.jpg";
import rafaelImage from "@/assets/testimonial-rafael.jpg";
import lucasImage from "@/assets/testimonial-lucas.jpg";
import corte01Image from "@/assets/corte01.jpg";
import corte02Image from "@/assets/corte02.jpg";
import corte03Image from "@/assets/corte03.jpg";
import corte04Image from "@/assets/corte04.jpg";
import corte05Image from "@/assets/corte05.jpg";
import corte06Image from "@/assets/corte06.jpg";
const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: ''
  });
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const handleSendMessage = () => {
    const message = `Olá! Meu nome é ${formData.name}.%0A${formData.message}%0A%0AContato: ${formData.whatsapp}`;
    const whatsappUrl = `https://wa.me/+5521998307400?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-sm border-b border-brand-green/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Barbearia Raiz" className="h-10 w-10" />
              <span className="text-white font-bold text-xl">Barbearia Raiz</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-brand-green transition-colors">Home</button>
              <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-brand-green transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('precos')} className="text-white hover:text-brand-green transition-colors">Preços</button>
              <button onClick={() => scrollToSection('galeria')} className="text-white hover:text-brand-green transition-colors">Galeria</button>
              <button onClick={() => scrollToSection('contato')} className="text-white hover:text-brand-green transition-colors">Contato</button>
              <Button variant="brand" size="sm" onClick={() => scrollToSection('contato')}>
                Agendar Agora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && <div className="md:hidden mt-4 pb-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block text-white hover:text-brand-green transition-colors">Home</button>
              <button onClick={() => scrollToSection('servicos')} className="block text-white hover:text-brand-green transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('precos')} className="block text-white hover:text-brand-green transition-colors">Preços</button>
              <button onClick={() => scrollToSection('galeria')} className="block text-white hover:text-brand-green transition-colors">Galeria</button>
              <button onClick={() => scrollToSection('contato')} className="block text-white hover:text-brand-green transition-colors">Contato</button>
              <Button variant="brand" size="sm" onClick={() => scrollToSection('contato')} className="w-full">
                Agendar Agora
              </Button>
            </div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Barbearia Raiz - Professional Barbershop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="hero-text space-y-6">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Barbearia <span className="text-brand-green text-white">Raiz</span>
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Onde o estilo encontra a tradição
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Cortes masculinos premium, barba desenhada, e um atendimento que você respeita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button variant="hero" size="xl" onClick={() => scrollToSection('contato')}>
                Agende Seu Corte
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="hero" size="xl" onClick={() => scrollToSection('galeria')}>
                Ver Galeria
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experiência premium em cada detalhe, tradição em cada movimento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="service-card text-center fade-in-up stagger-1">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Scissors className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">Corte Masculino</h3>
              <p className="text-muted-foreground mb-6">
                Do clássico ao moderno, com perfeição em cada detalhe. Estilo que reflete sua personalidade.
              </p>
              <Badge variant="secondary" className="bg-brand-green/10 text-brand-green">
                A partir de R$ 40
              </Badge>
            </Card>

            <Card className="service-card text-center fade-in-up stagger-2">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">Barba na Navalha</h3>
              <p className="text-muted-foreground mb-6">
                Estilo, cuidado e tradição. A arte da navalha com a precisão de mestres barbeiros.
              </p>
              <Badge variant="secondary" className="bg-brand-green/10 text-brand-green">
                A partir de R$ 30
              </Badge>
            </Card>

            <Card className="service-card text-center fade-in-up stagger-3">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">Pacotes Premium</h3>
              <p className="text-muted-foreground mb-6">
                Corte + Barba + Hidratação. A experiência completa para o homem moderno.
              </p>
              <Badge variant="secondary" className="bg-brand-green/10 text-brand-green">
                A partir de R$ 60
              </Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* VIP Membership Section */}
      <section className="py-20 bg-gradient-card text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Plano VIP Raiz
              </h2>
              <p className="text-xl mb-12 opacity-90">
                Mensalidade que inclui cortes ilimitados, descontos em produtos e acesso prioritário.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up stagger-1">
                <ul className="space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-brand-green bg-white rounded-full p-1" />
                    <span className="text-lg">Cortes ilimitados no mês</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-brand-green bg-white rounded-full p-1" />
                    <span className="text-lg">Agendamento prioritário</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-brand-green bg-white rounded-full p-1" />
                    <span className="text-lg">10% off em todos os produtos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-brand-green bg-white rounded-full p-1" />
                    <span className="text-lg">Sem fidelidade obrigatória</span>
                  </li>
                </ul>
              </div>
              
              <div className="fade-in-up stagger-2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center">
                    <div className="text-5xl font-black mb-2">R$ 120</div>
                    <div className="text-lg opacity-90 mb-6">/mês</div>
                    <Button variant="heroOutline" size="xl" className="w-full">
                      Assine o VIP Raiz
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-xl text-muted-foreground">
              Experiências reais de quem confia na Barbearia Raiz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="testimonial-card fade-in-up stagger-1">
              <div className="flex items-center space-x-4 mb-6">
                <img src={joaoImage} alt="João M." className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-brand-black">João M.</h4>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Melhor barbearia que já fui. Atendimento top e ambiente estiloso. 
                Sempre saio de lá me sentindo renovado!"
              </p>
            </Card>

            <Card className="testimonial-card fade-in-up stagger-2">
              <div className="flex items-center space-x-4 mb-6">
                <img src={rafaelImage} alt="Rafael T." className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-brand-black">Rafael T.</h4>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Meu lugar de confiança. A barba sai sempre no grau. 
                Profissionais que sabem o que fazem!"
              </p>
            </Card>

            <Card className="testimonial-card fade-in-up stagger-3">
              <div className="flex items-center space-x-4 mb-6">
                <img src={lucasImage} alt="Lucas S." className="w-16 h-16 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-brand-black">Lucas S.</h4>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "O plano VIP vale muito a pena. Praticidade e estilo garantidos. 
                Recomendo para todos os amigos!"
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              No Estilo Raiz
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Confira nossos trabalhos e se inspire para o seu próximo visual
            </p>
             <a href="https://www.instagram.com/moreiracvictor/" target="_blank">
              <Button variant="brand" size="lg">
                <Instagram className="mr-2" />
                Siga no Instagram @moreiracvictor
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="aspect-square bg-muted rounded-lg fade-in-up overflow-hidden">
              <img src={corte01Image} alt="Corte masculino 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-muted rounded-lg fade-in-up overflow-hidden" style={{ animationDelay: "0.1s" }}>
              <img src={corte02Image} alt="Corte masculino 2" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-muted rounded-lg fade-in-up overflow-hidden" style={{ animationDelay: "0.2s" }}>
              <img src={corte03Image} alt="Corte masculino 3" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-muted rounded-lg fade-in-up overflow-hidden" style={{ animationDelay: "0.3s" }}>
              <img src={corte04Image} alt="Corte masculino 4" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-muted rounded-lg fade-in-up overflow-hidden" style={{ animationDelay: "0.4s" }}>
              <img src={corte05Image} alt="Corte masculino 5" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square bg-muted rounded-lg fade-in-up overflow-hidden" style={{ animationDelay: "0.5s" }}>
              <img src={corte06Image} alt="Corte masculino 6" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
              Tabela de Preços
            </h2>
            <p className="text-xl text-muted-foreground">
              Investimento justo para um resultado impecável
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="pricing-card fade-in-up stagger-1">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-black mb-4">Corte Masculino</h3>
                <div className="text-4xl font-black text-brand-green mb-6">R$ 40</div>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li>• Corte profissional</li>
                  <li>• Finalização com secador</li>
                  <li>• Produtos premium</li>
                </ul>
                <Button variant="brand" className="w-full">
                  Agendar Agora
                </Button>
              </div>
            </Card>

            <Card className="pricing-card pricing-featured fade-in-up stagger-2">
              <div className="text-center">
                <Badge className="mb-4 bg-white text-brand-green">MAIS POPULAR</Badge>
                <h3 className="text-2xl font-bold mb-4 text-white">Combo Completo</h3>
                <div className="text-4xl font-black mb-6">R$ 60</div>
                <ul className="space-y-3 mb-8 opacity-90">
                  <li>• Corte profissional</li>
                  <li>• Barba na navalha</li>
                  <li>• Hidratação facial</li>
                  <li>• Produtos premium</li>
                </ul>
                <Button variant="heroOutline" className="w-full">
                  Agendar Agora
                </Button>
              </div>
            </Card>

            <Card className="pricing-card fade-in-up stagger-3">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-brand-black mb-4">Barba Completa</h3>
                <div className="text-4xl font-black text-brand-green mb-6">R$ 30</div>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li>• Barba na navalha</li>
                  <li>• Aparar e desenhar</li>
                  <li>• Hidratação</li>
                </ul>
                <Button variant="brand" className="w-full">
                  Agendar Agora
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 fade-in-up">
              Visite-nos
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="fade-in-up">
                <div className="bg-brand-green/10 border border-brand-green/20 rounded-lg p-6">
                  <MapPin className="h-8 w-8 text-brand-green mx-auto mb-4" />
                  <h4 className="font-semibold text-xl mb-3 text-white">Endereço</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Rua da Tradição, 123 – Centro<br />
                    Niterói, RJ
                  </p>
                </div>
              </div>
              
              <div className="fade-in-up stagger-1">
                <div className="bg-brand-green/10 border border-brand-green/20 rounded-lg p-6">
                  <Clock className="h-8 w-8 text-brand-green mx-auto mb-4" />
                  <h4 className="font-semibold text-xl mb-3 text-white">Horário de Funcionamento</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Segunda a Sexta: 8h às 19h<br />
                    Sábado: 8h às 17h<br />
                    Domingo: Fechado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-4">
                Fale Conosco
              </h2>
              <p className="text-xl text-muted-foreground">
                Agende seu horário ou tire suas dúvidas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="fade-in-up">
                <h3 className="text-2xl font-bold text-brand-black mb-6">
                  Entre em Contato
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black">WhatsApp</h4>
                      <p className="text-muted-foreground">(21) 99830-7400</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black">Email</h4>
                      <p className="text-muted-foreground">victorcorrea.moreira@gmail.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black">Instagram</h4>
                      <p className="text-muted-foreground">@moreiracvictor</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="fade-in-up stagger-1">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold text-brand-black mb-6">
                    Envie uma Mensagem
                  </h3>
                   <form className="space-y-6">
                     <div>
                       <Input 
                         placeholder="Seu nome" 
                         className="form-input" 
                         value={formData.name}
                         onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                       />
                     </div>
                     <div>
                       <Input 
                         placeholder="WhatsApp" 
                         className="form-input" 
                         value={formData.whatsapp}
                         onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                       />
                     </div>
                     <div>
                       <Textarea 
                         placeholder="Sua mensagem" 
                         rows={4} 
                         className="form-input"
                         value={formData.message}
                         onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                       />
                     </div>
                     <Button size="lg" className="w-full" onClick={handleSendMessage}>
                       Enviar Mensagem
                     </Button>
                   </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src={logoImage} alt="Barbearia Raiz" className="h-8 w-8" />
                <span className="font-bold text-xl">Barbearia Raiz</span>
              </div>
              <p className="text-gray-400">
                Onde o estilo encontra a tradição. Experiência premium em cada corte.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Menu</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-brand-green transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="text-gray-400 hover:text-brand-green transition-colors">Serviços</button></li>
                <li><button onClick={() => scrollToSection('precos')} className="text-gray-400 hover:text-brand-green transition-colors">Preços</button></li>
                <li><button onClick={() => scrollToSection('galeria')} className="text-gray-400 hover:text-brand-green transition-colors">Galeria</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="text-gray-400 hover:text-brand-green transition-colors">Contato</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-brand-green">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-brand-green">
                  <Phone className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="bg-gray-800 my-8" />
          
          <div className="text-center text-gray-400">
            <p>© 2025 Barbearia Raiz. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;