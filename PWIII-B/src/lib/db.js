// Esta STORAGE_KEY é uma string que identifica o local onde os dados serão armazenados. Cada STORAGE_KEY deve representar uma única entidade ou coleção de dados. Ou seja, se você precisa armazenar mais de uma entidade, seria ideal criar mais de um STORAGE_KEY, por exemplo: 'pwiii-users', 'pwiii-products', etc. Isso ajuda a organizar os dados e evita confusões ao acessar ou modificar os itens armazenados.
const STORAGE_KEY = 'pwiii-items';

export function loadItems() {
    try {
        // localStorage é uma variável pré-definida que 
        // aponta para o armazenamento local do navegador
        // tal variavel contém um objeto cujo metódo
        //  "getItems" retorna o conteúdo armazenado
        // no banco de dados local.
        const infoBruta = localStorage.getItem(STORAGE_KEY);
        return infoBruta ? JSON.parse(infoBruta) : [];
    } catch (erro) {
        console.erro('Erro ao carregar os itens do localStorage', erro);
        return [];
    }

}

export function saveItems(items) {
    // Grava os valores dentro do local especificado
    // pela STORAGE_KEY
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (erro) {
        console.error('Fail on saving the items', erro)
    }
}

export function addItem(single_item) {
    // carrega os itens existentes do localStorage usando a função loadItems
    const items = loadItems();

    // cria um id unioc para o novo item usando a data e hora atual
    const identifica = Date.now().toString;

    // cria um novo item com o id e o texto fornecido
    const newItem = { id: identifica, text: single_item };

    // adiciona o novo item à lista de itens existente
    const updatedItems = [...items, newItem];

    // salva a lista atualizada de itens no localStorage usando a função saveItems
    saveItems(updatedItems);
}

// export function removeItem(index) {
//     const item = getItems().filter(
//         i => i !== index
//     )
//     saveItems(item);
// }

