import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Siz "X Pro" deb nomlangan restoran avtomatlashtirish tizimining virtual yordamchisisiz.
Sizning vazifangiz mijozlarga X Pro haqida ma'lumot berish.

X Pro imkoniyatlari:
1. Kassa tizimi (POS) - tezkor buyurtma olish.
2. Ombor nazorati - mahsulotlar qoldig'ini kuzatish.
3. Moliyaviy hisobotlar - kunlik, oylik foyda va xarajatlar.
4. Xodimlar boshqaruvi - ish haqi va grafiklar.
5. Cloud tizim - dunyoning istalgan nuqtasidan boshqarish imkoniyati.
6. Telegram integratsiyasi - hisobotlar telegramga keladi.

Mijoz savollariga qisqa, londa va o'zbek tilida, samimiy javob bering.
Agar narxlar so'ralsa, "Narxlar biznesingiz hajmiga qarab individual belgilanadi, iltimos menejer bilan bog'laning" deb javob bering.
Faqat X Pro haqida gapiring.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Uzr, hozir javob bera olmayman. Iltimos keyinroq urinib ko'ring.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tizimda xatolik yuz berdi. Internet aloqasini tekshiring.";
  }
};