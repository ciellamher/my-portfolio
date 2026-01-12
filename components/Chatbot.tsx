"use client";
import { useState } from "react";
import { Send, Bot, X, MessageSquare, ArrowRight } from "lucide-react";

// !!! MAKE SURE THIS LINE SAYS "export default" !!!
export default function Chatbot() { 
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: "bot", text: "Sorry, I encountered an error." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 text-black">
      {/* Toggle Button: black pill on closed state */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open chat"
          className="bg-black text-white px-5 py-3 rounded-full shadow-lg hover:bg-neutral-900 transition-all flex items-center gap-3"
        >
          <MessageSquare size={18} />
          <span className="font-medium">Chat with Graciella</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 h-[560px] bg-white border border-neutral-200 rounded-2xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-neutral-100">
            <img src="/me.jpeg" alt="Graciella" className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold text-neutral-900">Chat with Graciella</div>
                  <div className="text-sm text-neutral-500 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500" />
                    <span>Online</span>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-neutral-700 ml-4">
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-white">
            {messages.length === 0 && (
              <div className="text-sm text-neutral-500 italic">Hi! Ask me about programming, web dev, or my projects.</div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`max-w-[85%] ${msg.role === 'user' ? 'ml-auto text-white' : 'mr-auto text-neutral-900'}`}>
                {msg.role === 'bot' ? (
                  <div className="inline-block bg-neutral-100 text-neutral-900 p-3 rounded-2xl text-sm">
                    {msg.text}
                  </div>
                ) : (
                  <div className="inline-block bg-black text-white p-3 rounded-2xl text-sm">
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
            {loading && <div className="text-xs text-neutral-500">Thinking...</div>}
          </div>

          {/* Input + footer */}
          <div className="border-t border-neutral-100 bg-white p-4">
            <div className="flex items-center gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 bg-neutral-50 text-neutral-900 text-sm rounded-lg px-4 py-3 outline-none border border-neutral-100"
                maxLength={1000}
              />
              <button onClick={sendMessage} className="w-10 h-10 bg-neutral-300 text-white rounded-md flex items-center justify-center hover:bg-neutral-400">
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="flex items-center justify-between text-xs text-neutral-500 mt-3">
              <div>Ask me about programming, web dev, or tech!</div>
              <div>{input.length}/1000</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}