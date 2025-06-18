
import { Phone } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511954802686", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white/20"
      aria-label="Contato via WhatsApp"
      title="WhatsApp"
    >
      <div className="flex items-center justify-center">
        <span className="text-xl">💬</span>
      </div>
    </button>
  );
};

export default FloatingWhatsApp;
