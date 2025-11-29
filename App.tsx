import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProcessSection } from './components/ProcessSection';
import { TelegramSection } from './components/TelegramSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Button } from './components/Button';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand selection:text-white">
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Features />
        <ProcessSection />
        <TelegramSection onOpenModal={openModal} />
        <FAQ />
        
        {/* Redesigned CTA Section - Now at the bottom */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <div className="bg-brand rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
               {/* Decor */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 blur-[80px] rounded-full pointer-events-none -mr-20 -mt-20"></div>
               <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 blur-[80px] rounded-full pointer-events-none -ml-10 -mb-10"></div>
               <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                 <div className="text-left max-w-2xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                      Готовы трансформировать <br/> свой бизнес?
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl font-medium mb-0">
                      Получите персональный план внедрения системы и расчет стоимости за 15 минут.
                    </p>
                 </div>
                 <div className="shrink-0">
                   <Button 
                      onClick={openModal} 
                      className="bg-white !text-brand hover:bg-gray-100 border-none shadow-xl px-8 py-4 text-lg"
                      icon={<ArrowRight size={20}/>}
                   >
                      Обсудить проект
                   </Button>
                 </div>
               </div>
             </div>
          </div>
        </section>

      </main>
      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;