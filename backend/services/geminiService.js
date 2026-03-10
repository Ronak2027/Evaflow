const { GoogleGenerativeAI } = require('@google/generative-ai');

let genAI = null;

const getGemini = () => {
  if (!genAI) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('Gemini API key not configured');
    genAI = new GoogleGenerativeAI(apiKey);
  }
  return genAI;
};

const generateChatResponse = async (userMessage, contextData) => {
  try {
<<<<<<< HEAD
    const gen = getGemini();
    const model = gen.getGenerativeModel({ model: 'gemini-pro' });
=======
    console.log('Initializing Gemini...');
    const gen = getGemini();
    const model = gen.getGenerativeModel({ model: 'gemini-pro' });
    console.log('Gemini model initialized successfully');
>>>>>>> 1c4cb5687f3df12d8ccb25a07fb499a72f9f9f2a

    const systemPrompt = `You are EvaFlow AI, a sustainability and carbon emissions expert for a road freight logistics platform. 
You help users understand their carbon footprint, suggest reductions, and analyze emission data.
Always be concise, factual, and actionable. Use the provided data context to answer accurately.
If data is provided, reference specific numbers. Format numbers nicely (e.g., 1,234 kg CO2).
${contextData ? `\nCurrent data context:\n${JSON.stringify(contextData, null, 2)}` : ''}`;

    const prompt = `${systemPrompt}\n\nUser question: ${userMessage}\n\nProvide a helpful, data-driven response:`;

<<<<<<< HEAD
    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text() || 'Unable to generate response.';
  } catch (error) {
    console.error('Gemini error:', error.message);
=======
    console.log('Generating content with Gemini...');
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log('Gemini response length:', text?.length || 0);
    return text || 'Unable to generate response.';
  } catch (error) {
    console.error('Gemini error details:', error.message);
    console.error('Full error:', error);
>>>>>>> 1c4cb5687f3df12d8ccb25a07fb499a72f9f9f2a
    return `Sorry, I encountered an error: ${error.message}. Please try again.`;
  }
};

module.exports = { generateChatResponse };
