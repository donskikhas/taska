import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitMerge, 
  MessageSquare, 
  Mail, 
  UserPlus, 
  CheckCircle2, 
  CreditCard, 
  ArrowRight,
  Settings
} from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="processes" className="py-24 bg-surface-800 overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Рисуйте процессы, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">а система их выполнит</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                В Taska встроен визуальный редактор бизнес-процессов. Вы строите логику стрелочками, как на доске, а система автоматически ставит задачи, отправляет сообщения и контролирует сроки.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Без программистов", desc: "Drag-and-drop интерфейс понятный любому руководителю." },
                  { title: "Автоматические действия", desc: "Система сама отправит счет, напомнит клиенту и создаст задачу." },
                  { title: "Поиск узких мест", desc: "Видно, на каком этапе застревают сделки." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 w-10 h-10 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-600 shrink-0">
                      <Settings size={20} />
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Infographic (Interactive Graph) */}
          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl border border-gray-200 shadow-2xl p-6 md:p-10 min-h-[500px] flex items-center justify-center bg-grid-pattern"
            >
              {/* Toolbar */}
              <div className="absolute top-4 left-4 right-4 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center px-4 gap-4 overflow-hidden">
                <div className="flex gap-1">
                   <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                   <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                </div>
                <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                   <span className="hover:text-blue-600 cursor-pointer flex items-center gap-1"><UserPlus size={14}/> Действие</span>
                   <span className="hover:text-blue-600 cursor-pointer flex items-center gap-1"><GitMerge size={14}/> Условие</span>
                   <span className="hover:text-blue-600 cursor-pointer flex items-center gap-1"><Mail size={14}/> Отправка</span>
                </div>
              </div>

              {/* Graph Container */}
              <div className="relative w-full h-[400px] mt-8">
                 
                 {/* Connection Lines (SVG) */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    {/* Line 1: Start -> Condition */}
                    <motion.path 
                       d="M150,50 C150,100 150,120 150,150" 
                       fill="none" stroke="#e2e8f0" strokeWidth="3"
                       initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
                    />
                    {/* Line 2: Condition -> Left (High Budget) */}
                    <motion.path 
                       d="M150,210 C150,250 80,250 80,300" 
                       fill="none" stroke="#e2e8f0" strokeWidth="3"
                       initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }}
                    />
                     {/* Line 3: Condition -> Right (Low Budget) */}
                     <motion.path 
                       d="M150,210 C150,250 220,250 220,300" 
                       fill="none" stroke="#e2e8f0" strokeWidth="3"
                       initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1 }}
                    />
                 </svg>

                 {/* Node 1: Start */}
                 <motion.div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 w-48 z-10"
                    initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                 >
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                       <UserPlus size={20}/>
                    </div>
                    <div>
                       <div className="text-xs text-gray-400 font-bold uppercase">Триггер</div>
                       <div className="text-sm font-bold text-gray-800">Новая заявка</div>
                    </div>
                 </motion.div>

                 {/* Node 2: Logic */}
                 <motion.div 
                    className="absolute top-[150px] left-1/2 -translate-x-1/2 bg-white p-4 rounded-2xl shadow-lg border border-yellow-200 flex items-center gap-3 w-56 z-10"
                    initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.7 }}
                 >
                    <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600">
                       <GitMerge size={20}/>
                    </div>
                    <div>
                       <div className="text-xs text-gray-400 font-bold uppercase">Проверка</div>
                       <div className="text-sm font-bold text-gray-800">Бюджет &gt; $1000?</div>
                    </div>
                 </motion.div>

                 {/* Branch YES */}
                 <div className="absolute top-[230px] left-[70px] text-xs font-bold text-green-600 bg-white px-2 py-1 rounded border border-gray-100 shadow-sm">Да</div>
                 
                 <motion.div 
                    className="absolute top-[300px] left-[10px] bg-white p-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 w-44 z-10"
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}
                 >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                       <UserPlus size={16}/>
                    </div>
                    <div>
                       <div className="text-[10px] text-gray-400 font-bold uppercase">Задача</div>
                       <div className="text-xs font-bold text-gray-800">Назначить VIP менеджера</div>
                    </div>
                 </motion.div>

                 {/* Branch NO */}
                 <div className="absolute top-[230px] right-[140px] text-xs font-bold text-red-500 bg-white px-2 py-1 rounded border border-gray-100 shadow-sm">Нет</div>

                 <motion.div 
                    className="absolute top-[300px] right-[50px] bg-white p-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 w-44 z-10"
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.4 }}
                 >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                       <Mail size={16}/>
                    </div>
                    <div>
                       <div className="text-[10px] text-gray-400 font-bold uppercase">Email</div>
                       <div className="text-xs font-bold text-gray-800">Авто-презентация</div>
                    </div>
                 </motion.div>

              </div>
              
              {/* Moving Particle Animation to simulate flow */}
              <motion.div
                 className="absolute w-3 h-3 bg-brand rounded-full shadow-lg shadow-brand/50 z-20"
                 animate={{
                    top: ["50px", "150px", "150px", "300px"],
                    left: ["50%", "50%", "50%", "20%"],
                    opacity: [0, 1, 1, 0]
                 }}
                 transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.4, 0.5, 1]
                 }}
                 style={{ translateX: "-50%" }}
              />

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};