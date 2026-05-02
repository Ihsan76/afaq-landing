"use client";
import { useState } from "react";

export default function RegisterForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) setSent(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section id="register" className="section">
            <div className="container-center">

                <h2 className="text-3xl font-bold text-center mb-4">
                    احجز <span className="text-yellow-400">مقعدك الآن</span>
                </h2>
                <p className="text-center text-gray-400 mb-10">
                    سجّل اهتمامك مجاناً وكن أول من يعلم عند الإطلاق
                </p>

                {/* هذا هو المفتاح — flex يمركز النموذج */}
                <div className="flex justify-center w-full">
                    <div style={{ width: "100%", maxWidth: "420px" }}>

                        {sent ? (
                            <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                                <div className="text-5xl mb-4">🎉</div>
                                <h3 className="text-xl font-bold text-green-400 mb-2">
                                    تم التسجيل بنجاح!
                                </h3>
                                <p className="text-gray-400 mb-6">سنتواصل معك قريباً</p>
                                <button
                                    onClick={() => {
                                        setSent(false);
                                        setForm({ name: "", email: "", phone: "" });
                                    }}
                                    className="text-sm text-gray-500 hover:text-white underline transition-colors"
                                >
                                    تسجيل شخص آخر
                                </button>
                            </div>

                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-[#0d1326] border border-white/10 rounded-2xl p-8 space-y-5"
                            >
                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        الاسم الكامل *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="أدخل اسمك الكامل"
                                        className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        البريد الإلكتروني *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="example@email.com"
                                        className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        رقم الواتساب{" "}
                                        <span className="text-gray-600">(اختياري)</span>
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="00962xxxxxxxxx"
                                        className="w-full bg-[#0a0f1e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                        value={form.phone}
                                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                                >
                                    احجز مقعدك المجاني 🚀
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}