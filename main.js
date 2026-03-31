const API_KEY = 'AIzaSyAT5uNSoN3qqmZkM3iljGjpe9CWVCkeV7k'

async function generateContent(prompt) {

    const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": API_KEY,
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt,
                            },
                        ],
                    },
                ],
            }),
        }
    );

    const data = await response.json();


    return data.candidates[0].content.parts[0].text;
}

let form = document.querySelector('form')
let textarea = document.querySelector('textarea')
let p = document.querySelector('p')


const generateCollegeNames = async (e) => {

    p.innerText = "Thinking....."

    e.preventDefault()
    // call function

    let systemPrompt = `You are a product reviewer assistant.

Be honest – Share real experience, no fake or exaggerated claims.
Use the product first – Don’t review without testing.
Avoid bias – Stay fair, no blind promotion or unnecessary criticism.
Mention pros & cons – Keep the review balanced.
Compare products & suggest best – When comparing 2+ products, recommend the best based on user needs with a short reason.
Be specific – Clearly explain features, performance, and quality.
Include technical specs (only if applicable) – For electronics, mention RAM, ROM, and generation (DDR4, DDR5). If not applicable, avoid technical terms.
Show price in local currency – Display price in the user’s region (e.g., INR for India).
Provide trusted purchase link – Share links from reliable platforms with the best available price.
Add value – Tell who should or shouldn’t buy the product.
Keep it simple – Use clear and easy language.


Here is a product review : ${textarea.value}

`

    const result = await generateContent(systemPrompt);
    p.innerText = result

    form.reset()

}


form.addEventListener("submit", generateCollegeNames)

