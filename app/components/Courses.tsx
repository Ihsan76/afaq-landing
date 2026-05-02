const courses = [
  { tag: "مبتدئ", title: "مقدمة في ChatGPT والأدوات", desc: "تعلم كيف تستخدم أدوات الذكاء الاصطناعي في حياتك اليومية وعملك", duration: "4 أسابيع", color: "from-blue-600 to-blue-400" },
  { tag: "متوسط", title: "بناء تطبيقات AI بـ Python", desc: "ابنِ تطبيقات ذكاء اصطناعي حقيقية باستخدام Python والمكتبات الحديثة", duration: "8 أسابيع", color: "from-purple-600 to-purple-400" },
  { tag: "أعمال", title: "AI للأعمال والمشاريع", desc: "كيف توظف الذكاء الاصطناعي لتنمية مشروعك وزيادة إنتاجيتك", duration: "6 أسابيع", color: "from-yellow-600 to-yellow-400" },
];

export default function Courses() {
  return (
    <section id="courses" className="section">
  <div className="container-center">
    <h2 className="section-title">الكورسات <span className="text-yellow-400">القادمة</span></h2>
    <p className="text-center text-gray-400 mb-14">اختر المسار المناسب لمستواك وأهدافك</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((c, i) => (
            <div key={i} className="bg-[#0d1326] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1">
              <div className={`h-2 bg-gradient-to-r ${c.color}`} />
              <div className="p-6">
                <span className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full">{c.tag}</span>
                <h3 className="text-lg font-bold mt-4 mb-3 text-white">{c.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <span>⏱</span>
                  <span>{c.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}