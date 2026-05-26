PromptTemplate {
    lc_serializable: true,
    lc_kwargs: {
        inputVariables: [ "productDesc" ], -> get input variables
        templateFormat: "f-string", -> python type
        template: "\nGenerate a promotional tweet for a product, from this product description: \n{productDesc}\n",
    },
    lc_runnable: true,
    name: undefined,
    lc_namespace: [ "langchain_core", "prompts", "prompt" ],
    inputVariables: [ "productDesc" ],
        ...
    templateFormat: "f-string",
    template: "\nGenerate a promotional tweet for a product, from this product description: \n{productDesc}\n",
    validateTemplate: true,
        ...
}