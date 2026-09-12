'use client';
import { useState } from 'react';

/* ==========================================================================
   📌 DADOS DA SUA ATLÉTICA
   ========================================================================== */

const SOBRE_ATLETICA = {
  historia: "A Atlética Furiosa foi fundada com a missão de unir a faculdade através do esporte, das festas e do espírito acadêmico.",
  missao: "Promover a integração acadêmica, incentivar a prática de esportes e representar nossa faculdade em torneios regionais.",
  valores: "Garra, respeito, união e espírito de equipe."
};

const PRODUTOS = [
  {
    id: 1,
    nome: "Caneca de 600ml",
    preco: "R$ 30,00",
    descricao: "Caneca de alumínio oficial da Atlética Furiosa.",
    foto: "/produtos/caneca.jpg",
    link: "https://wa.me/5588993262966?text=Ol%C3%A1!%20Quero%20comprar%20a%20Caneca%20de%20600ml",
    isWhatsapp: true
  },
  {
    id: 2,
    nome: "Tirante Oficial",
    preco: "R$ 15,00",
    descricao: "Tirante exclusivo personalizado da Atlética.",
    foto: "/produtos/tirante.jpg",
    link: "https://wa.me/5588993262966?text=Ol%C3%A1!%20Quero%20comprar%20o%20Tirante",
    isWhatsapp: true
  },
  {
    id: 3,
    nome: "Camisa de Jogador",
    preco: "R$ 40,00",
    descricao: "Camisa oficial de jogo para nossos atletas.",
    foto: "/produtos/camisa-jogador.jpg",
    link: "https://forms.gle/tZDKtKTFuKvCBzYe7",
    isWhatsapp: false
  },
  {
    id: 4,
    nome: "Camisa Universitária",
    preco: "R$ 40,00",
    descricao: "Camisa estilo universitário para usar no dia a dia.",
    foto: "/produtos/camisa-universitaria.jpg",
    link: "https://forms.gle/M4nQwjN7A4P1y1736",
    isWhatsapp: false
  },
  {
    id: 5,
    nome: "Camisa de Torcedor",
    preco: "R$ 40,00",
    descricao: "Vista o manto e venha apoiar a Furiosa na torcida!",
    foto: "/produtos/camisa-torcedor.jpg",
    link: "https://forms.gle/M4nQwjN7A4P1y1736",
    isWhatsapp: false
  }
];
const DIRETORIA = [
  // Presidência e Vice
  { cargo: "Presidência", nome: "Isabel Duarte", descricao: "Presidente", foto: "/diretoria/isabel.jpg" },
  { cargo: "Vice-Presidência", nome: "Tarsiany Quirino", descricao: "Vice-Presidente", foto: "/diretoria/tarsiany.jpg" },

  // Esportes
  { cargo: "Esportes", nome: "Sofia", descricao: "Diretoria de Esportes", foto: "/diretoria/sofia.jpg" },
  { cargo: "Esportes", nome: "Thawann", descricao: "Diretoria de Esportes", foto: "/diretoria/thawann.jpg" },
  { cargo: "Esportes", nome: "Luís Antonio", descricao: "Diretoria de Esportes", foto: "/diretoria/luis-antonio.jpg" },
  { cargo: "Esportes", nome: "Maria Clara", descricao: "Diretoria de Esportes", foto: "/diretoria/maria-clara.jpg" },
  { cargo: "Esportes", nome: "Kael", descricao: "Diretoria de Esportes", foto: "/diretoria/kael.jpg" },
  { cargo: "Esportes", nome: "Pricila Lacerda", descricao: "Diretoria de Esportes", foto: "/diretoria/pricila.jpg" },

  // Eventos / Patrocínio
  { cargo: "Eventos / Patrocínio", nome: "Raimundo", descricao: "Diretoria de Eventos e Patrocínio", foto: "/diretoria/raimundo.jpg" },
  { cargo: "Eventos / Patrocínio", nome: "Cauã", descricao: "Diretoria de Eventos e Patrocínio", foto: "/diretoria/caua.jpg" },
  { cargo: "Eventos / Patrocínio", nome: "Viviane", descricao: "Diretoria de Eventos e Patrocínio", foto: "/diretoria/viviane.jpg" },
  { cargo: "Eventos / Patrocínio", nome: "Clarissy Siebra", descricao: "Diretoria de Eventos e Patrocínio", foto: "/diretoria/clarissy.jpg" },
  { cargo: "Eventos / Patrocínio", nome: "Isabella", descricao: "Diretoria de Eventos e Patrocínio", foto: "/diretoria/isabella.jpg" },

  // ADM
  { cargo: "Administrativo", nome: "Renan", descricao: "Diretoria Administrativa", foto: "/diretoria/renan.jpg" },
  { cargo: "Administrativo", nome: "Ruth", descricao: "Diretoria Administrativa", foto: "/diretoria/ruth.jpg" },
  { cargo: "Administrativo", nome: "Kawe", descricao: "Diretoria Administrativa", foto: "/diretoria/kawe.jpg" },
  { cargo: "Administrativo", nome: "Mayara", descricao: "Diretoria Administrativa", foto: "/diretoria/mayara.jpg" },

  // Comunicação
  { cargo: "Comunicação", nome: "Leticia", descricao: "Diretoria de Comunicação", foto: "/diretoria/leticia.jpg" },
  { cargo: "Comunicação", nome: "Lazaro", descricao: "Diretoria de Comunicação", foto: "/diretoria/lazaro.jpg" },
  { cargo: "Comunicação", nome: "Mariana Vieira", descricao: "Diretoria de Comunicação", foto: "/diretoria/mariana.jpg" },
  { cargo: "Comunicação", nome: "Mayra", descricao: "Diretoria de Comunicação", foto: "/diretoria/mayra.jpg" },

  // Produtos
  { cargo: "Produtos", nome: "Eduarda", descricao: "Diretoria de Produtos", foto: "/diretoria/eduarda.jpg" },
  { cargo: "Produtos", nome: "André", descricao: "Diretoria de Produtos", foto: "/diretoria/andre.jpg" },
  { cargo: "Produtos", nome: "Josefa Venuzia", descricao: "Diretoria de Produtos", foto: "/diretoria/josefa.jpg" },
  { cargo: "Produtos", nome: "Maria Alyce", descricao: "Diretoria de Produtos", foto: "/diretoria/maria-alyce.jpg" }
];

/* ==========================================================================
   💻 CÓDIGO DA PÁGINA
   ========================================================================== */

export default function Home() {
  return (
    <div>
    <div style={{ minHeight: 'auto', backgroundColor: '#0a0a0a', color: '#f8fafc', paddingBottom: '40px' }}>
      
      {/* CABEÇALHO */}
      <header style={{ borderBottom: '1px solid rgba(127, 29, 29, 0.5)', backgroundColor: 'rgba(10, 10, 10, 0.85)', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', width: '100%' }}>
        <div style={{ maxWidth: '1152px', margin: '0 auto', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
  <img
    src="/logo.png"
    alt="Logo A.A.A FURIOSA"
    style={{ width: '36px', height: '36px', objectFit: 'contain' }}
  />
  <span style={{ fontWeight: 900, fontSize: '14px', letterSpacing: '0.05em', color: '#fbbf24', textTransform: 'uppercase' }}>
    A.A.A Furiosa
  </span>
</div>

          <nav style={{ display: 'flex', gap: '16px', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#eventos" style={{ color: '#d4d4d4', textDecoration: 'none' }}>Eventos</a>
            <a href="#produtos" style={{ color: '#d4d4d4', textDecoration: 'none' }}>Produtos</a>
            <a href="#sobre" style={{ color: '#d4d4d4', textDecoration: 'none' }}>Sobre</a>
            <a href="#diretoria" style={{ color: '#d4d4d4', textDecoration: 'none' }}>Diretoria</a>
            <a href="#treinos" style={{ color: '#d4d4d4', textDecoration: 'none' }}>Treinos</a>
          </nav>

          <div>
            <a
              href="https://forms.gle/Ki6XuTn6O5yAuvn3A"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: '#fbbf24', color: '#0a0a0a', fontWeight: 'bold', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}
            >
              Inscrição
            </a>
          </div>

        </div>
      </header>

      {/* CONTEÚDO */}
      <section style={{ maxWidth: '1152px', margin: '0 auto', padding: '64px 16px', textAlign: 'center' }}>
        <span style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)', border: '1px solid #fbbf24', borderRadius: '9999px', padding: '4px 12px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fbbf24', display: 'inline-block', marginBottom: '16px' }}>
          Portal Oficial • Atlética Furiosa
        </span>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '16px', lineHeight: 1.2 }}>
          Movidos pela fúria, guiados pela vitória.
        </h1>
        <p style={{ color: '#a3a3a3', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
          Venha conferir nossos eventos, adquira nossos produtos oficiais e participe dos nossos times.
        </p>
      </section>

    </div>

      {/* BLOCO DESTAQUE: IV INTERLEGIS */}
      <section id="eventos" className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-r from-red-950/90 via-neutral-900 to-neutral-900 p-8 rounded-2xl border border-amber-400/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <span className="bg-amber-400 text-neutral-950 font-black text-[10px] uppercase px-3 py-1 rounded tracking-wider">
                Inscrições Abertas
              </span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                • Evento Oficial
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-tight">
              VI Interlegis
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Chegou a hora de provar que seu time é o melhor do curso! Clique no botão para preencher o formulário oficial de inscrição do Interlegis.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-semibold text-amber-400 pt-2">
              <span className="bg-red-950/60 px-3 py-1.5 rounded border border-red-900/50">
                📍 Ginásio Poliesportivo - URCA
              </span>
              <span className="bg-red-950/60 px-3 py-1.5 rounded border border-red-900/50">
                🏆 Futsal masculino e Vôlei Misto
              </span>
            </div>
          </div>

       {/* CARD: ESQUENTA INTERLEGIS */}
<div className="max-w-6xl mx-auto px-4 mt-6">
  <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-lg">
    <div className="space-y-2">
      <span className="bg-amber-400 text-neutral-950 font-black text-[10px] px-2.5 py-1 rounded uppercase tracking-wider">
        Esquenta Oficial 🍻
      </span>
      <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">
        Esquenta Interlegis
      </h3>
      <p className="text-slate-300 text-sm md:text-base max-w-xl">
        Um momento de descontração e integração para aquecer para os jogos!
      </p>
      <div className="flex flex-wrap gap-3 pt-2 text-xs font-bold text-amber-400">
        <span className="bg-neutral-950 px-3 py-1.5 rounded border border-neutral-800">📅 Data: 19/09</span>
        <span className="bg-neutral-950 px-3 py-1.5 rounded border border-neutral-800">📍 Local: Buba&apos;s Bar (Praça Siqueira Campos)</span>
      </div>
    </div>
  </div>
</div>

          {/* BOTÃO DIRETO PARA O GOOGLE FORMS */}
          <div className="w-full lg:w-auto flex-shrink-0 text-center">
            <a 
              href="https://forms.gle/Ki6XuTn6CVo1GgmM8" 
              target="_blank" 
              rel="noreferrer"
              className="w-full lg:w-auto bg-amber-400 hover:bg-amber-500 text-neutral-950 font-black text-sm uppercase px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-amber-400/10 transition transform hover:-translate-y-0.5"
            >
              <span>✍️ Inscrever-se no Interlegis</span>
            </a>
            <p className="text-[11px] text-slate-500 mt-2">
              Formulário oficial via Google Forms
            </p>
          </div>

        </div>
      </section>

      {/* PRODUTOS OFICIAIS */}
<section id="produtos" className="max-w-6xl mx-auto px-4 py-16 border-b border-red-900/30">
  <h2 className="text-3xl font-black mb-6 text-slate-100 uppercase">Produtos Oficiais</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {PRODUTOS.map((prod) => (
      <div key={prod.id} className="bg-neutral-900 p-5 rounded-xl border border-red-900/50 flex flex-col justify-between">
        <div>
          {/* FOTO DO PRODUTO */}
          <div className="w-full h-48 bg-neutral-950 rounded-lg overflow-hidden mb-4 border border-red-900/30 flex items-center justify-center text-slate-600 text-xs font-semibold relative">
            <img 
              src={prod.foto} 
              alt={prod.nome} 
              className="w-full h-full object-cover relative z-0"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="font-bold text-slate-100 text-lg">{prod.nome}</h3>
            <span className="bg-amber-400 text-neutral-950 font-black px-2.5 py-1 rounded text-sm shrink-0">
              {prod.preco}
            </span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed mb-4">{prod.descricao}</p>
        </div>

        {/* BOTÃO FUNCIONAL E CLICÁVEL */}
        <a 
          href={prod.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-full font-bold text-xs uppercase py-3 px-4 rounded-lg text-center block transition cursor-pointer relative z-10 ${
            prod.isWhatsapp 
              ? 'bg-emerald-600 hover:bg-emerald-500 text-white' 
              : 'bg-amber-400 hover:bg-amber-500 text-neutral-950'
          }`}
        >
          {prod.isWhatsapp ? '💬 Pedir no WhatsApp' : '✍️ Fazer Pedido'}
        </a>
      </div>
    ))}
  </div>
</section>

      {/* SEÇÃO SOBRE A HISTÓRIA E EVENTOS */}
<section id="sobre" className="py-16 px-4 max-w-6xl mx-auto">
  <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
    <span className="bg-amber-400 text-neutral-950 font-black text-xs px-3 py-1 rounded uppercase tracking-wider">
      Nossa História & Trajetória
    </span>
    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide">
      Sobre a Atlética Furiosa
    </h2>
    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
      Nascida no dia <strong className="text-amber-400">27/05/2022</strong> e idealizada com muito carinho por ex-alunos apaixonados do curso de Direito da URCA, a Atlética Furiosa surgiu para unir o esporte, a amizade e a energia que move a nossa galera. Mais do que competir, nós criamos memórias inesquecíveis!
    </p>
    <p className="text-slate-400 text-sm">
      Ao longo dessa jornada, já realizamos e marcamos presença nos maiores campeonatos e eventos:
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Evento 1: Copa Furiosa */}
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 bg-neutral-950 overflow-hidden relative">
        <img src="/eventos/copa-furiosa.jpg" alt="Copa Furiosa" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-amber-400 uppercase">Copa Furiosa</h3>
        <p className="text-slate-300 text-sm mt-2">O nosso campeonato próprio, reunindo a energia máxima da torcida e dos atletas em casa.</p>
      </div>
    </div>

    {/* Evento 2: JOIA */}
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 bg-neutral-950 overflow-hidden relative">
        <img src="/eventos/joia.jpg" alt="JOIA" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-amber-400 uppercase">JOIA</h3>
        <p className="text-slate-300 text-sm mt-2">Competição esportiva de peso onde a Furiosa mostra toda a garra em quadra.</p>
      </div>
    </div>

    {/* Evento 3: Interlegis */}
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 bg-neutral-950 overflow-hidden relative">
        <img src="/eventos/interlegis.jpg" alt="Interlegis" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-amber-400 uppercase">Interlegis</h3>
        <p className="text-slate-300 text-sm mt-2">Tradição de integração e disputas épicas entre os cursos.</p>
      </div>
    </div>

    {/* Evento 4: Corrida URCA */}
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 bg-neutral-950 overflow-hidden relative">
        <img src="/eventos/urca.jpg" alt="Corrida URCA" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-amber-400 uppercase">Corrida URCA</h3>
        <p className="text-slate-300 text-sm mt-2">Velocidade, resistência e o atletismo da Furiosa marcando presença.</p>
      </div>
    </div>

    {/* Evento 5: Calouradas */}
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 bg-neutral-950 overflow-hidden relative">
        <img src="/eventos/calourada.jpg" alt="Calouradas" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-amber-400 uppercase">Calouradas</h3>
        <p className="text-slate-300 text-sm mt-2">A recepção inesquecível dos novos calouros com muito som e integração.</p>
      </div>
    </div>

    {/* Evento 6: INTERCARIRI */}
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 bg-neutral-950 overflow-hidden relative">
        <img src="/eventos/intercariri.jpg" alt="INTERCARIRI" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-amber-400 uppercase">INTERCARIRI</h3>
        <p className="text-slate-300 text-sm mt-2">O grande encontro esportivo da região do Cariri reunindo as melhores atléticas.</p>
      </div>
    </div>

    {/* Evento 7: JUCS */}
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col">
      <div className="h-48 bg-neutral-950 overflow-hidden relative">
        <img src="/eventos/jucs.jpg" alt="JUCS" className="w-full h-full object-cover" />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-amber-400 uppercase">JUCS</h3>
        <p className="text-slate-300 text-sm mt-2">Jogos Universitários de destaque com alto nível competitivo.</p>
      </div>
    </div>

  </div>
</section>

      {/* DIRETORIA */}
<section id="diretoria" className="max-w-6xl mx-auto px-4 py-16 border-b border-red-900/30">
  <h2 className="text-3xl font-black mb-6 text-slate-100 uppercase">Nossa Diretoria</h2>
  
  {/* CONTAINER COM SCROLL HORIZONTAL (ARRASTAR PRO LADO) */}
  <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-thin scrollbar-thumb-amber-400 scrollbar-track-neutral-900 snap-x snap-mandatory">
    {DIRETORIA.map((membro, index) => (
      <div 
        key={index} 
        className="min-w-[260px] sm:min-w-[280px] max-w-[280px] bg-neutral-900 p-5 rounded-xl border border-red-900/50 flex flex-col justify-between snap-start flex-shrink-0 shadow-lg"
      >
        <div>
          {/* FOTO DO DIRETOR */}
<div className="w-full h-48 bg-neutral-950 rounded-lg overflow-hidden mb-4 border border-red-900/30 flex items-center justify-center">
  <img 
    src={membro.foto} 
    alt={membro.nome} 
    className="w-full h-full object-cover"
    onError={(e) => { e.currentTarget.style.display = 'none'; }}
  />
</div>

          <span className="text-[10px] font-black uppercase tracking-wider bg-red-950/80 text-amber-400 px-2.5 py-1 rounded border border-red-800">
            {membro.cargo}
          </span>
          <h3 className="font-bold text-slate-100 text-lg mt-3 truncate">{membro.nome}</h3>
          <p className="text-xs text-slate-400 mt-1">{membro.descricao}</p>
        </div>
      </div>
    ))}
  </div>
  
  <p className="text-center text-xs text-slate-500 mt-4 sm:hidden">
    👈 Arraste para o lado para ver todos os diretores 👉
  </p>
</section>

      {/* FORMULÁRIO QUERO JOGAR PELA ATLÉTICA */}
<div className="max-w-xl mx-auto px-4 py-8">
  <div className="text-center mb-6">
    <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">Quero Jogar pela Atlética</h2>
    <p className="text-slate-400 text-sm mt-1">Quer treinar e representar a Atlética Furiosa nas modalidades esportivas?</p>
  </div>

  <form 
    onSubmit={(e: any) => {
      e.preventDefault();
      const nome = e.currentTarget.elements.namedItem('nome')?.value || '';
      const modalidade = e.currentTarget.elements.namedItem('modalidade')?.value || '';
      
      const numeroWhatsApp = "5588997222184"; 
      
      const mensagem = `Olá! Meu nome é *${nome}* e tenho interesse em jogar *${modalidade}* pela Atlética Furiosa!`;
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
      
      window.open(url, '_blank');
    }}
    className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-lg space-y-4"
  >
    <input 
      type="text" 
      name="nome"
      placeholder="Seu Nome Completo" 
      required
      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
    />
    
    <input 
      type="text" 
      name="modalidade"
      placeholder="Modalidade (Futsal, Vôlei, Handebol...)" 
      required
      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
    />
    
    <button 
      type="submit"
      className="w-full bg-amber-400 text-neutral-950 font-black py-3 rounded-lg hover:bg-amber-300 transition uppercase tracking-wider"
    >
      Enviar Interesse
    </button>
  </form>
</div>

      {/* RODAPÉ */}
      <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-red-900/50">
        <p className="text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Atlética Furiosa • Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
}