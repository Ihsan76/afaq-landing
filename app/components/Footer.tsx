export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#0d1326] border-t border-white/10">
      <div className="container-center flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-yellow-400 flex items-center justify-center text-xs font-bold">آ</div>
          <span className="text-white font-bold">أكاديمية آفاق</span>
        </div>
        <p className="text-gray-500 text-sm">© 2026 أكاديمية آفاق — جميع الحقوق محفوظة</p>
        <div className="flex gap-4 text-gray-500 text-sm">
          <a href="#" className="hover:text-white transition-colors">تويتر</a>
          <a href="#" className="hover:text-white transition-colors">يوتيوب</a>
          <a href="#" className="hover:text-white transition-colors">إنستغرام</a>
        </div>
      </div>
    </footer>
  );
}