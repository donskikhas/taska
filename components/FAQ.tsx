import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-brand' : 'text-gray-900 group-hover:text-brand-dark'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className={`flex-shrink-0 ml-4 p-1 rounded-full ${isOpen ? 'bg-brand/10 text-brand' : 'text-gray-400'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-500 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Сколько времени занимает внедрение?",
      answer: "Базовую версию (MVP) мы запускаем за 14 дней. Это позволяет сразу начать работать и получать данные. Полная настройка сложной ERP системы под ключ обычно занимает от 1 до 2 месяцев в зависимости от количества модулей."
    },
    {
      question: "Нужно ли платить ежемесячно?",
      answer: "У нас гибкая система. Мы можем разработать систему, которая будет полностью принадлежать вам (One-time payment), и вы будете платить только за сервер (~$10-20/мес). Либо мы можем работать по модели подписки с нашей технической поддержкой."
    },
    {
      question: "Можно ли интегрировать с моим банком / 1С?",
      answer: "Да, наша архитектура позволяет подключаться к любым внешним сервисам по API. Мы интегрируем платежные системы (Payme, Click), телефонию, 1С, МойСклад и другие инструменты."
    },
    {
      question: "Смогу ли я сам менять настройки?",
      answer: "Конечно. Мы создаем удобную панель администратора, где вы можете управлять сотрудниками, правами доступа, справочниками и контентом без знания кода."
    },
    {
      question: "Как работает поддержка?",
      answer: "После сдачи проекта мы даем 1 месяц бесплатной гарантийной поддержки. Далее вы можете заключить договор на техническое сопровождение (SLA), чтобы мы следили за серверами и обновляли систему."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Частые вопросы
          </h2>
          <p className="text-gray-500 text-lg">
            Все, что вы хотели узнать о разработке, но стеснялись спросить.
          </p>
        </div>

        <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-100">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};