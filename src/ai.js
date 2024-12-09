import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
could make with some or all of those ingredients. You don't need to use every ingredient they
mention in your recipe. The recipe can include additional ingredients they didn't mention, but try
not to include too many extra ingredients. Format your response in markdown to make it easier to
render to a web page
`

const apiUrl = import.meta.env.VITE_HF_ACCESS_TOKEN;

const hf = new HfInference(apiUrl)

export async function getRecipeFromMistral(ingridientsArray){
    const ingridientsString = ingridientsArray.join(", ")
    try{
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                {role: "system", content: SYSTEM_PROMPT},
                {role: "user", content: `I have ${ingridientsString}. Please give me a recipe
                you'd recommend I make!`}
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content

    }catch(err){
        console.error(err.message)
    }
}