const features = [
  { icon: "🌐", title: "محتوى عربي 100%", desc: "كل الشروحات والمواد باللغة العربية الفصحى" },
  { icon: "👨‍🏫", title: "مدربون متخصصون", desc: "خبراء في مجال الذكاء الاصطناعي بخبرة عملية حقيقية" },
  { icon: "⚡", title: "تعلم بالتطبيق", desc: "مشاريع حقيقية من أول يوم لا نظرية فقط" },
  { icon: "🏆", title: "شهادات معتمدة", desc: "احصل على شهادة إتمام معتمدة لكل كورس" },
];

export default function Features() {
  return (
    <section id="features" className="section section-alt">
  <div className="container-center">
    <h2 className="section-title">لماذا <span className="text-yellow-400">آفاق؟</span></h2>
    
     <p className="text-center text-gray-400 mb-14">نقدم تجربة تعليمية مختلفة تماماً عما اعتدت عليه</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-[#0a0f1e] border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-white">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}