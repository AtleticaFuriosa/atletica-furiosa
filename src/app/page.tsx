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
    preco: "R$ 40,00",
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
  const [formData, setFormData] = useState({ nome: '', modalidade: '' });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: any) => {
  e.preventDefault();
  setEnviado(true);
  setTimeout(() => setEnviado(false), 5000);
};

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100 font-sans">
      
      {/* MENU SUPERIOR / HEADER COM LOGO */}
      <header className="border-b border-red-900/50 bg-neutral-900/90 sticky top-0 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          
          {/* LOGO + NOME */}
          <div className="flex items-center gap-3">
            {/* Coloque a imagem do logo na pasta public com o nome logo.png */}
            <img 
              src="/logo.png" 
              alt="Logo Atlética Furiosa" 
              className="h-30 w-auto object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
            <span className="font-black text-lg tracking-wide text-amber-400 uppercase">
              A.A.A Furiosa
            </span>
          </div>

          <nav className="hidden lg:flex gap-6 text-xs font-semibold uppercase tracking-wider text-slate-300">
            <a href="#eventos" className="text-amber-400 hover:underline">Eventos</a>
            <a href="#produtos" className="hover:text-amber-400 transition">Produtos</a>
            <a href="#sobre" className="hover:text-amber-400 transition">Sobre</a>
            <a href="#diretoria" className="hover:text-amber-400 transition">Diretoria</a>
            <a href="#inscricao" className="hover:text-amber-400 transition">Treinos</a>
          </nav>

          <a 
            href="https://forms.gle/Ki6XuTn6CVo1GgmM8" 
            target="_blank" 
            rel="noreferrer"
            className="bg-amber-400 text-neutral-950 px-4 py-2 rounded-lg font-extrabold text-xs uppercase hover:bg-amber-500 transition"
          >
            Inscrição Interlegis
          </a>
        </div>
      </header>

      {/* CABEÇALHO / HERO */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center border-b border-red-900/30">
        <span className="bg-red-950/80 text-amber-400 border border-red-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          Portal Oficial • Atlética Furiosa
        </span>
        <h1 className="text-4xl md:text-6xl font-black mt-6 mb-4 text-slate-100 uppercase tracking-tight">
          Movidos pela fúria, guiados pela vitória.
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg mb-8">
          Venha conferir nossos eventos, adquira nossos produtos oficiais e participe dos nossos times.
        </p>
      </section>

      {/* BLOCO DESTAQUE: IV INTERLEGIS */}
      <section id="interlegis" className="max-w-6xl mx-auto px-4 py-12">
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
            <span className="absolute">Sem Foto</span>
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

      {/* QUEM SOMOS */}
      <section id="sobre" className="max-w-6xl mx-auto px-4 py-16 border-b border-red-900/30">
        <h2 className="text-3xl font-black mb-4 text-slate-100 uppercase">Sobre A Atlética Furiosa</h2>
        <p className="text-slate-300 leading-relaxed">{SOBRE_ATLETICA.historia}</p>
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

      {/* INTERESSE EM TREINOS */}
      <section id="inscricao" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black mb-2 text-slate-100 uppercase">Quero Jogar pela Atlética</h2>
        <p className="text-slate-400 mb-6">Quer treinar e representar a Atlética Furiosa nas modalidades esportivas?</p>

        <div className="bg-neutral-900 p-6 rounded-xl border border-red-900/50 max-w-xl">
          {enviado ? (
            <div className="bg-emerald-500/10 text-emerald-400 p-4 rounded text-center text-sm font-bold">
              ✅ Dados enviados para a diretoria de esportes!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                required 
                placeholder="Seu Nome Completo" 
                className="w-full bg-neutral-950 border border-red-900/50 rounded p-3 text-sm text-slate-200"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
              <input 
                type="text" 
                required 
                placeholder="Modalidade (Futsal, Vôlei, Handebol...)" 
                className="w-full bg-neutral-950 border border-red-900/50 rounded p-3 text-sm text-slate-200"
                value={formData.modalidade}
                onChange={(e) => setFormData({...formData, modalidade: e.target.value})}
              />
              <button type="submit" className="w-full bg-amber-400 text-neutral-950 font-bold py-3 rounded uppercase text-sm hover:bg-amber-500 transition">
                Enviar Interesse
              </button>
            </form>
          )}
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-red-900/30 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Atlética Furiosa • Todos os direitos reservados.
      </footer>

    </div>
  );
}