export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 bg-[#0a0f1e] relative overflow-hidden">
            {/* خلفية دوائر ضوئية */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />

            <div className="container-center text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm mb-8">
                    <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    التسجيل المبكر مفتوح الآن
                </div>

                {/* العنوان الرئيسي */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                    تعلّم{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">
                        الذكاء الاصطناعي
                    </span>
                    <br />
                    من الصفر حتى الاحتراف
                </h1>

                {/* العنوان الفرعي */}
                <div className="center-rtl">
                    <p style={{ maxWidth: "800px" }} className="text-center text-gray-400">
                        كورسات عربية متخصصة تأخذك خطوة بخطوة في عالم AI —
                        بمحتوى عربي 100% ومدربين متخصصين
                    </p>
                </div>


                {/* الأزرار */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#register"
                        className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1"
                    >
                        سجّل اهتمامك الآن — مجاناً 🚀
                    </a>
                    <a
                        href="#courses"
                        className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
                    >
                        استعرض الكورسات
                    </a>
                </div>

                {/* إحصائيات */}
                <div className="flex flex-wrap justify-center gap-8 mt-16 text-center">
                    {[
                        { num: "+500", label: "طالب مسجل" },
                        { num: "3", label: "كورسات متخصصة" },
                        { num: "100%", label: "محتوى عربي" },
                    ].map((s, i) => (
                        <div key={i}>
                            <div className="text-3xl font-bold text-white">{s.num}</div>
                            <div className="text-gray-500 text-sm mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}